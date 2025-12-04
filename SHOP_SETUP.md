# Shop Stripe Integration Setup Guide

This guide explains how to set up the shop checkout integration with Stripe, which is **completely separate** from the existing subscription system.

## ✅ What's Already Done

The code is integrated and ready. The shop uses:
- **One-time payments** (`mode: 'payment'`) - separate from subscriptions
- **Same Stripe account** - uses existing `STRIPE_SECRET_KEY`
- **Separate webhook handling** - shop orders and subscriptions don't interfere
- **Guest checkout** - customers don't need to sign in

## 🔧 Stripe Dashboard Setup

### Step 1: Create Products in Stripe (Recommended)

For each product in your shop:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → **Products**
2. Click **"Add product"**
3. Fill in:
   - **Name**: Match your product name (e.g., "Armenian Blessed Cross – Hand-Painted in Blue")
   - **Description**: Optional
   - **Pricing**: 
     - **Price**: Enter the amount (e.g., $280.00)
     - **Billing**: Select **"One time"**
     - **Currency**: USD (or your preferred currency)
4. Click **"Save product"**
5. **Copy the Price ID** (starts with `price_...`)

### Step 2: Link Stripe Price IDs to Your Products

In your Supabase database, update each product's `stripe_price_id`:

```sql
UPDATE shop_products 
SET stripe_price_id = 'price_xxxxxxxxxxxxx' 
WHERE slug = 'armenian-blessed-cross-blue';
```

**Note:** If a product doesn't have a `stripe_price_id`, the system will create a dynamic price (works but less ideal for inventory management).

### Step 3: Configure Webhook Endpoint

The webhook is already set up at `/api/stripe/webhook`, but you need to add the shop-specific events:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → **Developers** → **Webhooks**
2. Find your existing webhook endpoint (or create one if needed)
3. Add these events (if not already added):
   - ✅ `checkout.session.completed` (already handled)
   - ✅ `payment_intent.succeeded` (for shop orders)
   - ✅ `invoice.paid` (for subscriptions - already exists)
   - ✅ `customer.subscription.deleted` (for subscriptions - already exists)
   - ✅ `customer.subscription.updated` (for subscriptions - already exists)

**Important:** The webhook automatically distinguishes between:
- **Shop orders**: `session.mode === 'payment'` or `metadata.order_type === 'shop'`
- **Subscriptions**: `session.mode === 'subscription'`

No changes needed - it's already smart enough to route correctly!

## 🧪 Testing

### Test Shop Checkout

1. Go to `/shop` on your site
2. Click **"Buy Now"** on any product
3. Use Stripe test card: `4242 4242 4242 4242`
4. Complete checkout
5. Verify:
   - Redirects to `/shop/success`
   - Order appears in `shop_orders` table in Supabase
   - Order status is `paid`

### Test Subscriptions (Verify No Interference)

1. Go to `/support`
2. Subscribe to a tier
3. Verify:
   - Subscription works as before
   - No shop orders are created
   - Subscription appears in `subscriptions` table

## 📊 How It Works

### Shop Checkout Flow

1. User clicks **"Buy Now"** → Calls `/api/stripe/create-shop-checkout`
2. API creates Stripe Checkout session with `mode: 'payment'`
3. User completes payment on Stripe
4. Stripe sends webhook → `checkout.session.completed`
5. Webhook checks `session.mode === 'payment'` → Creates `shop_orders` record
6. User redirected to `/shop/success`

### Subscription Flow (Unchanged)

1. User clicks **"Become a supporter"** → Calls `/api/stripe/create-checkout-session`
2. API creates Stripe Checkout session with `mode: 'subscription'`
3. User completes payment on Stripe
4. Stripe sends webhook → `checkout.session.completed`
5. Webhook checks `session.mode === 'subscription'` → Creates/updates `subscriptions` record
6. User redirected to `/member`

## 🔒 Security & Isolation

- ✅ **Same Stripe account** - uses existing `STRIPE_SECRET_KEY`
- ✅ **Separate logic** - shop and subscriptions use different code paths
- ✅ **Metadata-based routing** - webhook uses `session.mode` and `metadata.order_type` to route correctly
- ✅ **No conflicts** - shop orders go to `shop_orders`, subscriptions go to `subscriptions`
- ✅ **Guest checkout** - shop doesn't require login (subscriptions do)

## 📝 Environment Variables

No new environment variables needed! Uses existing:
- `STRIPE_SECRET_KEY` (same as subscriptions)
- `STRIPE_WEBHOOK_SECRET` (same webhook endpoint)
- `NEXT_PUBLIC_SITE_URL` (for success/cancel URLs)

## 🐛 Troubleshooting

### Orders not appearing in database

1. Check webhook logs in Stripe Dashboard → **Developers** → **Webhooks** → **Events**
2. Verify `checkout.session.completed` events are being sent
3. Check server logs for webhook errors
4. Verify `shop_orders` table has correct RLS policies (should be service role only)

### Checkout button not working

1. Check browser console for errors
2. Verify `STRIPE_SECRET_KEY` is set in Vercel
3. Check API route logs in Vercel dashboard

### Payment succeeds but order status is "pending"

- This is normal - the webhook may process slightly after checkout
- Check `payment_intent.succeeded` webhook events
- Order status should update to `paid` automatically

## 📚 Files Created/Modified

**New Files:**
- `app/api/stripe/create-shop-checkout/route.ts` - Shop checkout API
- `components/shop/CheckoutButton.tsx` - Checkout button component
- `app/shop/success/page.tsx` - Success page after purchase

**Modified Files:**
- `app/api/stripe/webhook/route.ts` - Added shop order handling
- `app/shop/page.tsx` - Added checkout button

**Unchanged (Subscriptions):**
- `app/api/stripe/create-checkout-session/route.ts` - Still for subscriptions only
- `app/api/stripe/create-portal-session/route.ts` - Still for subscriptions only
- All subscription logic remains untouched

## ✅ Next Steps

1. Create products in Stripe Dashboard
2. Link `stripe_price_id` to products in Supabase
3. Test checkout flow
4. Monitor webhook events in Stripe Dashboard
5. Set up shipping/fulfillment workflow (outside this integration)

---

**Questions?** The integration is designed to be completely isolated from subscriptions. If something breaks, subscriptions won't be affected!


