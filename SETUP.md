# Membership System Setup Guide

This guide will help you set up the Patreon-style membership system with Stripe and Supabase.

## Prerequisites

1. A Supabase account and project
2. A Stripe account (test mode is fine for development)
3. Node.js and npm installed

## Step 1: Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

This will install:
- `@supabase/supabase-js` - Supabase client library
- `stripe` - Stripe SDK

## Step 2: Set Up Supabase

### 2.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from Settings > API

### 2.2 Run Database Schema

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `lib/database-schema.sql`
4. Run the SQL script

This will create:
- `profiles` table for user profiles
- `subscriptions` table for subscription data
- Row Level Security (RLS) policies
- A trigger to automatically create profiles when users sign up

### 2.3 Get Supabase Keys

From your Supabase dashboard:
- **Project URL**: Settings > API > Project URL
- **Anon Key**: Settings > API > Project API keys > `anon` `public`
- **Service Role Key**: Settings > API > Project API keys > `service_role` `secret` (keep this secure!)

## Step 3: Set Up Stripe

### 3.1 Create Products and Prices

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to Products
3. Create 3 products for your membership tiers:
   - **Supporter** (Tier 1) - e.g., $5/month
   - **Insider** (Tier 2) - e.g., $15/month
   - **VIP** (Tier 3) - e.g., $50/month

4. For each product:
   - Set it as a recurring subscription
   - Choose monthly billing
   - Copy the **Price ID** (starts with `price_...`)

### 3.2 Get Stripe Keys

From Stripe Dashboard:
- **Secret Key**: Developers > API keys > Secret key (starts with `sk_test_...` or `sk_live_...`)
- **Webhook Secret**: You'll get this after setting up the webhook (see Step 4)

### 3.3 Set Up Stripe Customer Portal

1. Go to Settings > Billing > Customer portal
2. Enable the customer portal
3. Configure what customers can do (cancel subscriptions, update payment methods, etc.)

## Step 4: Set Up Stripe Webhook

### 4.1 Local Development (using Stripe CLI)

1. Install [Stripe CLI](https://stripe.com/docs/stripe-cli)
2. Run: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
3. Copy the webhook signing secret (starts with `whsec_...`)

### 4.2 Production (Vercel)

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add endpoint"
3. Enter your endpoint URL: `https://zahi.tours/api/stripe/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `invoice.paid`
   - `customer.subscription.deleted`
   - `customer.subscription.updated`
5. Copy the webhook signing secret

## Step 5: Environment Variables

Create a `.env.local` file in the root of your project with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_PRICE_ID_TIER1=price_your_tier1_price_id
STRIPE_PRICE_ID_TIER2=price_your_tier2_price_id
STRIPE_PRICE_ID_TIER3=price_your_tier3_price_id

# Site URL (for redirects)
NEXT_PUBLIC_SITE_URL=https://zahi.tours
```

**Important**: 
- Never commit `.env.local` to git
- For Vercel deployment, add these variables in Vercel Dashboard > Settings > Environment Variables

## Step 6: Test the System

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/support`
3. Try signing up for an account
4. Test the checkout flow (use Stripe test card: `4242 4242 4242 4242`)
5. Verify the webhook is receiving events (check Stripe Dashboard > Webhooks)

## New Routes Created

- `/support` - Membership tiers and signup
- `/member` - Gated supporters-only hub
- `/account` - User account and subscription management
- `/shop` - Public merchandise page

## API Routes Created

- `/api/stripe/webhook` - Handles Stripe webhook events
- `/api/stripe/create-checkout-session` - Creates Stripe checkout sessions
- `/api/stripe/create-portal-session` - Creates Stripe customer portal sessions

## Manual Steps Summary

1. ✅ Run database schema SQL in Supabase
2. ✅ Create 3 products/prices in Stripe Dashboard
3. ✅ Set up Stripe webhook endpoint
4. ✅ Add environment variables to `.env.local` and Vercel
5. ✅ Enable Stripe Customer Portal

## Troubleshooting

- **Webhook not working**: Make sure the webhook secret matches and the endpoint URL is correct
- **Subscription not updating**: Check Supabase logs and Stripe webhook logs
- **Auth not working**: Verify Supabase URL and keys are correct
- **Checkout redirect issues**: Ensure `NEXT_PUBLIC_SITE_URL` is set correctly

## Security Notes

- Never expose `SUPABASE_SERVICE_ROLE_KEY` or `STRIPE_SECRET_KEY` in client-side code
- Always use environment variables for sensitive keys
- The webhook endpoint should verify Stripe signatures
- RLS policies in Supabase ensure users can only see their own data

