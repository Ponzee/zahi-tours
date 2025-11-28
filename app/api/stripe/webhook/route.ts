import { NextRequest, NextResponse } from 'next/server';
import { stripe, STRIPE_WEBHOOK_SECRET } from '@/lib/stripe';
import { createServerClient } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 500 }
    );
  }

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  const supabase = createServerClient();

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const customerId = session.customer;
        const subscriptionId = session.subscription;
        const clientReferenceId = session.client_reference_id; // This should be the user_id

        if (!clientReferenceId) {
          console.error('No client_reference_id in checkout session');
          break;
        }

        // Get subscription details from Stripe
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const priceId = subscription.items.data[0].price.id;
        
        // Determine tier based on price ID
        const { STRIPE_PRICE_IDS, TIER_NAMES } = await import('@/lib/stripe');
        let tier = 'supporter';
        if (priceId === STRIPE_PRICE_IDS.tier2) tier = TIER_NAMES.tier2;
        else if (priceId === STRIPE_PRICE_IDS.tier3) tier = TIER_NAMES.tier3;

        // Upsert subscription
        await supabase.from('subscriptions').upsert({
          user_id: clientReferenceId,
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          tier,
          status: subscription.status,
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'stripe_subscription_id',
        });

        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as any;
        const subscriptionId = invoice.subscription;

        if (!subscriptionId) break;

        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        
        await supabase
          .from('subscriptions')
          .update({
            status: subscription.status,
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscriptionId);

        break;
      }

      case 'customer.subscription.deleted':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as any;

        await supabase
          .from('subscriptions')
          .update({
            status: subscription.status === 'canceled' ? 'canceled' : subscription.status,
            current_period_end: subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000).toISOString()
              : null,
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id);

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

