import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy Policy | The Holy Land – By Zahi Shaked",
  description:
    "How Zahi Tours collects, uses, and protects personal information across tours, memberships, and digital products.",
};

const privacySections = [
  {
    title: "Information We Collect",
    content: [
      "Account information you provide when creating an account or becoming a supporter (name, email, password).",
      "Billing information handled securely by Stripe when you purchase a membership or product.",
      "Usage data such as pages visited, membership actions, and video engagement captured through analytics to improve the experience.",
      "Communications you send via email, forms, or WhatsApp (+972-54-690-5522) when requesting tours or support.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Authenticate you into supporter-only areas powered by Supabase.",
      "Process payments, manage renewals, and send invoices through Stripe.",
      "Send membership, booking, or service-related updates that you request.",
      "Improve the site experience by understanding feature usage and preventing abuse.",
    ],
  },
  {
    title: "Sharing & Third-Party Services",
    content: [
      "Supabase stores account data and enforces row-level security so only you can access your profile.",
      "Stripe processes payments and never shares full card numbers with us.",
      "Google and YouTube services provide OAuth sign-in and embedded media.",
      "We never sell personal data. Access is restricted to the small team operating zahi.tours.",
    ],
  },
  {
    title: "Your Choices",
    content: [
      "You may update account details anytime from /account or by emailing zahishaked@gmail.com.",
      "You can cancel memberships through the Stripe customer portal link provided in /account.",
      "Unsubscribe links are included in marketing emails; transactional messages may still be sent when necessary.",
      "Request data export or deletion by contacting zahishaked@gmail.com and we will respond within 30 days.",
    ],
  },
  {
    title: "Data Retention & Security",
    content: [
      "Production data only lives on managed services (Vercel, Supabase, Stripe) protected by encryption in transit and at rest.",
      "Access to dashboards is limited with MFA and logged activity.",
      "We retain financial records for legal and tax obligations, even if you close your account.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <p className="uppercase text-xs font-semibold tracking-wide text-[#c2410c]">
            Last updated: March 2025
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1612]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            This Privacy Policy explains how Zahi Shaked (“Zahi Tours”, “we”, “us”) collects,
            uses, and safeguards personal information when you visit zahi.tours,
            join the membership program, or request private tours. By using the site you agree
            to the practices outlined here.
          </p>

          <div className="mt-10 space-y-8">
            {privacySections.map((section) => (
              <section key={section.title} className="bg-white rounded-2xl border border-[#e5ddd4] p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-[#1a1612]">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed">
                  {section.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 bg-white rounded-2xl border border-[#e5ddd4] p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1a1612]">
              Contact Us
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Questions about this policy or your data rights? Email{" "}
              <a
                href="mailto:zahishaked@gmail.com"
                className="text-[#c2410c] font-semibold hover:text-[#9a3412]"
              >
                zahishaked@gmail.com
              </a>{" "}
              or use the contact section on the homepage. We respond to privacy requests within 30 days.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
