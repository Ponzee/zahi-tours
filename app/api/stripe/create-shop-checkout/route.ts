import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createServerClient } from '@/lib/supabaseClient';
import { SITE_URL } from '@/lib/config';

export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 500 }
    );
  }

  try {
    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: 'Missing productId' },
        { status: 400 }
      );
    }

    // Get product from database
    const supabase = createServerClient();
    const { data: product, error: productError } = await supabase
      .from('shop_products')
      .select('id, name, price_cents, currency, stripe_price_id')
      .eq('id', productId)
      .eq('status', 'active')
      .single();

    if (productError || !product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Check if product has Stripe price ID (preferred) or use direct price
    if (product.stripe_price_id) {
      // Use Stripe Price ID (recommended - product must exist in Stripe)
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          {
            price: product.stripe_price_id,
            quantity: 1,
          },
        ],
        success_url: `${SITE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${SITE_URL}/shop?canceled=true`,
        metadata: {
          product_id: product.id,
          product_name: product.name,
          order_type: 'shop',
        },
        // Allow guest checkout (no login required)
        allow_promotion_codes: true,
      });

      return NextResponse.json({ url: session.url });
    } else {
      // Fallback: Create one-time payment with direct amount
      // Note: This requires creating a Price in Stripe first, but we'll use payment_intent_data as fallback
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: product.currency || 'usd',
              product_data: {
                name: product.name,
              },
              unit_amount: product.price_cents,
            },
            quantity: 1,
          },
        ],
        success_url: `${SITE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${SITE_URL}/shop?canceled=true`,
        metadata: {
          product_id: product.id,
          product_name: product.name,
          order_type: 'shop',
        },
        allow_promotion_codes: true,
      });

      return NextResponse.json({ url: session.url });
    }
  } catch (error: any) {
    console.error('Error creating shop checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}


