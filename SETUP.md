# Membership System Setup Guide

This guide will help you set up the Patreon-style membership system with Stripe and Supabase.

## Prerequisites

1. A Supabase account and project
2. A Stripe account with live mode enabled (switch to test mode only when validating changes)
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

### 2.3 Get Supabase API Keys

From your Supabase dashboard:
1. Go to **Settings** > **API**
2. You'll see two tabs:
   - **"Publishable and secret API keys"** (new system - recommended)
   - **"Legacy anon, service_role API keys"** (still supported)

**Using the New API Key System (Recommended):**
- **Project URL**: Copy from Settings > API > Project URL
- **Publishable Key**: Copy from the "Publishable key" field (safe for browser/client-side)
- **Secret Key**: Copy from the "Secret key" field (server-side only - keep this secure!)

**Note:** The code supports both new and legacy key names for compatibility.

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

## Step 4: Set Up YouTube Data API (Optional)

### 4.1 Get YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Navigate to **APIs & Services** > **Library**
4. Search for "YouTube Data API v3"
5. Click on it and click **Enable**
6. Go to **APIs & Services** > **Credentials**
7. Click **Create Credentials** > **API Key**
8. Copy the API key (starts with `AIza...`)
9. Optionally restrict the API key to YouTube Data API v3 only

### 4.2 Get YouTube Channel ID

1. Go to [YouTube](https://www.youtube.com/@zahishaked)
2. The channel ID can be found in the channel's URL or:
   - Go to YouTube Studio > Settings > Channel > Advanced settings
   - Look for "Channel ID" (format: `UC...` or similar)
   - Or use a tool like [Comment Picker](https://commentpicker.com/youtube-channel-id.php) to find it

### 4.3 Add to Vercel Environment Variables

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Add:
   - **Key:** `YOUTUBE_API_KEY`
   - **Value:** Your API key from Step 4.1
   - **Environment:** Production, Preview, Development
3. Add:
   - **Key:** `YOUTUBE_CHANNEL_ID`
   - **Value:** Your channel ID from Step 4.2
   - **Environment:** Production, Preview, Development
4. Save and redeploy

**Note:** If these variables are not set, the "Latest from YouTube" section will show a fallback message instead of breaking the site.

## Step 5: Set Up Stripe Webhook

### 5.1 Production (Vercel)

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add endpoint"
3. Enter your endpoint URL: `https://zahi.tours/api/stripe/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `invoice.paid`
   - `customer.subscription.deleted`
   - `customer.subscription.updated`
5. Copy the webhook signing secret

## Step 6: Environment Variables

**For Vercel Production Deployment:**

Add all environment variables in **Vercel Dashboard → Project → Settings → Environment Variables**. Use the same values for Production, Preview, and Development scopes so every deployment behaves like production.

**Required Variables:**

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_SECRET_KEY=your_supabase_secret_key

# Legacy key names (still supported for backward compatibility)
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_PRICE_ID_TIER1=price_your_tier1_price_id
STRIPE_PRICE_ID_TIER2=price_your_tier2_price_id
STRIPE_PRICE_ID_TIER3=price_your_tier3_price_id

# Site URL (for redirects)
NEXT_PUBLIC_SITE_URL=https://zahi.tours

# YouTube Data API (Optional - for Latest Videos section)
YOUTUBE_API_KEY=your_youtube_api_key
YOUTUBE_CHANNEL_ID=your_youtube_channel_id
```

**Important**: 
- All variables must be configured in **Vercel Dashboard → Settings → Environment Variables**
- Never commit secrets to git
- `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID` are server-only (no `NEXT_PUBLIC_` prefix)
- If YouTube variables are not set, the Latest Videos section will show a fallback message

## Step 7: Test the System

1. Visit `https://zahi.tours/support` on your live site
2. Try signing up for an account
3. Test the checkout flow (use Stripe test card: `4242 4242 4242 4242`)
4. Verify the webhook is receiving events (check Stripe Dashboard > Webhooks)
5. Check that the "Latest from YouTube" section displays videos (if YouTube API is configured)

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
4. ✅ Add environment variables to Vercel
5. ✅ Enable Stripe Customer Portal

## Troubleshooting

- **Webhook not working**: Make sure the webhook secret matches and the endpoint URL is correct
- **Subscription not updating**: Check Supabase logs and Stripe webhook logs
- **Auth not working**: Verify Supabase URL and keys are correct
- **Checkout redirect issues**: Ensure `NEXT_PUBLIC_SITE_URL` is set correctly

## Security Notes

- Never expose `SUPABASE_SECRET_KEY` (or `SUPABASE_SERVICE_ROLE_KEY`) or `STRIPE_SECRET_KEY` in client-side code
- The publishable key is safe to use in the browser when RLS is enabled
- Always use environment variables for sensitive keys
- The webhook endpoint should verify Stripe signatures
- RLS policies in Supabase ensure users can only see their own data
