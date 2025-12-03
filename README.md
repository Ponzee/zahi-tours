# Zahi Tours Platform

Production Next.js site that powers the Zahi Tours membership program, booking funnel, and supporters-only experience. The project is deployed on Vercel and integrates Supabase, Stripe, and YouTube Data API.

## Deployment Workflow
- Vercel automatically deploys the `main` branch. Trigger a redeploy from the Vercel dashboard when configuration or environment variables change.
- Preview deployments are generated for pull requests. Use them for QA instead of running a local dev server.
- `npm run build` (optional) runs the same production build locally if you need to troubleshoot before pushing.

## Required Environment Variables (set in Vercel)

| Key | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL used by the client. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key for browser access. |
| `SUPABASE_SECRET_KEY` | Service role key for server actions. |
| `STRIPE_SECRET_KEY` | Stripe secret key for API usage. |
| `STRIPE_WEBHOOK_SECRET` | Signature secret for `/api/stripe/webhook`. |
| `STRIPE_PRICE_ID_TIER1/2/3` | Price IDs for each membership tier. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin (e.g., `https://zahi.tours`). |
| `YOUTUBE_API_KEY` | Optional, enables “Latest from YouTube”. |
| `YOUTUBE_CHANNEL_ID` | Channel to query for the widget. |

## Operational Checklist
- **Stripe Webhook** – Confirm `https://zahi.tours/api/stripe/webhook` is the endpoint and the signing secret matches Vercel envs.
- **Supabase Policies** – Ensure the SQL schema from `lib/database-schema.sql` is applied so RLS protects user data.
- **OAuth Redirects** – Google/Facebook OAuth relies on `NEXT_PUBLIC_SITE_URL`; keep it aligned with Vercel’s primary domain.
- **Post-Deploy QA** – Smoke test `/`, `/support`, `/member`, `/account`, `/shop`, and Stripe checkout via preview or production after every release.

## Maintenance Notes
- Keep dependencies updated to satisfy Google/OAuth security scans (`npm run lint` helps catch risky patterns).
- When rotating secrets (Stripe, Supabase, Google), update them in Vercel first, redeploy, then verify sign-in and checkout flows.
- For content updates, prefer editing CMS/data sources where possible; code changes should be merged through pull requests to preserve audit history.
