-- Migration: Remove Stripe shop payment references
-- Run this in your Supabase SQL Editor

-- 1. Remove stripe_price_id column from shop_products (if it exists)
-- This is safe - the column will be ignored if it doesn't exist
ALTER TABLE shop_products DROP COLUMN IF EXISTS stripe_price_id;

-- 2. Update shop_orders table to use generic payment fields
-- First, add new columns if they don't exist
ALTER TABLE shop_orders 
  ADD COLUMN IF NOT EXISTS payment_provider TEXT,
  ADD COLUMN IF NOT EXISTS payment_session_id TEXT;

-- 3. Migrate existing data (if any) from Stripe fields to generic fields
UPDATE shop_orders 
SET 
  payment_provider = 'stripe',
  payment_session_id = COALESCE(stripe_session_id, stripe_payment_intent)
WHERE (stripe_session_id IS NOT NULL OR stripe_payment_intent IS NOT NULL)
  AND payment_provider IS NULL;

-- 4. Remove old Stripe-specific columns (optional - you can keep them for historical data)
-- Uncomment these lines if you want to completely remove the Stripe columns:
-- ALTER TABLE shop_orders DROP COLUMN IF EXISTS stripe_session_id;
-- ALTER TABLE shop_orders DROP COLUMN IF EXISTS stripe_payment_intent;

-- Note: If you want to keep historical data, leave the old columns.
-- They won't interfere with the new AllPay integration.

