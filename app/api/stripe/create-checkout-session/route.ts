import { NextRequest, NextResponse } from 'next/server';
import { stripe, STRIPE_PRICE_IDS } from '@/lib/stripe';
import { supabase } from '@/lib/supabaseClient';
import { SITE_URL } from '@/lib/config';

export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 500 }
    );
  }

  try {
    const { tier, userId } = await request.json();

    if (!tier || !userId) {
      return NextResponse.json(
        { error: 'Missing tier or userId' },
        { status: 400 }
      );
    }

    // Get price ID based on tier
    let priceId = '';
    if (tier === 'tier1') priceId = STRIPE_PRICE_IDS.tier1;
    else if (tier === 'tier2') priceId = STRIPE_PRICE_IDS.tier2;
    else if (tier === 'tier3') priceId = STRIPE_PRICE_IDS.tier3;
    else {
      return NextResponse.json(
        { error: 'Invalid tier' },
        { status: 400 }
      );
    }

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID not configured for this tier' },
        { status: 500 }
      );
    }

    // Get user email from Supabase
    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase not configured' },
        { status: 500 }
      );
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      console.error('Error fetching profile:', profileError);
      // Continue without email - Stripe will prompt for it
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: profile?.email,
      client_reference_id: userId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${SITE_URL}/member?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/support?canceled=true`,
      metadata: {
        tier,
        user_id: userId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
