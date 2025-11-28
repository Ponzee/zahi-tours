import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('Missing STRIPE_SECRET_KEY. Stripe features will not work.');
}

export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia',
    })
  : null;

export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

// Price IDs from environment variables
export const STRIPE_PRICE_IDS = {
  tier1: process.env.STRIPE_PRICE_ID_TIER1 || '',
  tier2: process.env.STRIPE_PRICE_ID_TIER2 || '',
  tier3: process.env.STRIPE_PRICE_ID_TIER3 || '',
};

// Tier names mapping
export const TIER_NAMES = {
  tier1: 'supporter',
  tier2: 'insider',
  tier3: 'vip',
} as const;

export type TierName = typeof TIER_NAMES[keyof typeof TIER_NAMES];

