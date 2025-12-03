# Google OAuth Brand Approval Plan

Use this checklist to reach Google’s “Publishing status: In production” with a verified brand so the consent screen shows the correct logo, app name, and domain.

## 1. Prepare Brand Assets
- Square logo (120 × 120 recommended) hosted at `https://zahi.tours` or uploaded directly in Google Cloud.
- Marketing copy: app name `Zahi Tours` and a short description that matches the live site.
- Support email monitored at `zahishaked@gmail.com` (update if you move to a branded inbox).

## 2. Verify Domains in Google Search Console
1. Sign in to [Google Search Console](https://search.google.com/search-console).
2. Add both `zahi.tours` and `theholyland.tours` as Domain properties.
3. Verify ownership through DNS TXT records at Namecheap (must match what Vercel serves).
4. In Google Cloud Console → OAuth consent screen → Authorized domains, add both domains once verification succeeds.

## 3. Publish Required Policies on the Site
- `/privacy` and `/terms` are live routes in the Next.js app (`https://zahi.tours/privacy` and `https://zahi.tours/terms`) and are linked in every footer plus the account screen.
- Include: data collected, purpose, 3rd-party processors (Stripe, Supabase, Google), contact email, and last-updated date.
- Host a dedicated support/contact page or mailto link referenced in the consent screen.

## 4. Harden the OAuth Experience
- Confirm Supabase redirect URLs only reference `https://zahi.tours/...`.
- Update Google Cloud OAuth client to use the Vercel primary domain (no localhost entries).
- Test Google sign-in via production to capture screenshots for the verification request.

## 5. Fill Out the OAuth Consent Screen
1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials/consent), choose External user type.
2. Provide:
   - App name: `Zahi Tours`
   - User support email: same contact as above
   - Developer contact email: distribution list you monitor
   - App domain links: homepage (`https://zahi.tours`), privacy policy, terms, support
3. Upload the logo and set the theme color.
4. Limit scopes to the minimum (only `email`/`profile` for Supabase OAuth).
5. Add test users until the app is verified; afterwards, remove them and publish to production.

## 6. Submit for Verification
- Gather evidence: screenshots of the sign-in flow, privacy policy, and how data is used.
- Describe why each requested scope is needed (e.g., “email → associate Supabase profiles with memberships”).
- Submit the consent screen for verification; expect ~3–5 business days turnaround.
- Monitor the Google Cloud inbox for follow-up questions and respond promptly.

## 7. Post-Approval Maintenance
- Keep policy pages updated whenever you add features.
- Re-run `npm run lint` and dependency updates monthly to stay compliant with Google’s security checks.
- Re-verify domains if DNS or hosting changes; otherwise OAuth branding may revert.

Following these steps keeps the brand compliant and ready for Google review without risking the Play/App store presence.
