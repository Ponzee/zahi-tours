
export const metadata = {
  title: "Privacy Policy | The Holy Land - By Zahi Shaked",
  description:
    "How Zahi Tours collects, uses, and protects personal information across tours, memberships, and digital products.",
};

const LAST_UPDATED = "December 2025";

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
    title: "Data Deletion",
    id: "data-deletion",
    content: [
      "Send an email from the address on your account to zahishaked@gmail.com with the subject “Delete my data.”",
      "Include the account email and a short note confirming you want your account and personal data deleted.",
      "We confirm within 7 days and delete Supabase account/profile and active subscription records within 30 days. Stripe customer/billing data is removed where possible; legally required transaction records may be retained.",
      "If you used Meta/Google login, the request still must come from the same email tied to your account so we can verify ownership.",
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
  {
    title: "Children's Privacy",
    content: [
      "This site is accessible to users of all ages. We welcome visitors of any age to explore our content and learn about the Holy Land.",
      "If you are under 13 years of age (in the United States) or under 16 years of age (in the European Union), please have a parent or guardian create an account or make purchases on your behalf.",
      "We do not knowingly collect personal information from children without parental consent. If we become aware that we have collected personal information from a child without parental consent, we will delete that information promptly.",
      "Parents or guardians who believe their child has provided personal information without consent should contact us immediately at zahishaked@gmail.com.",
    ],
  },
  {
    title: "International Data Transfers",
    content: [
      "Your data may be transferred to and processed in countries outside your country of residence, including Israel, the United States, and the European Union, where our service providers (Vercel, Supabase, Stripe) operate.",
      "We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "We use essential cookies for site functionality and authentication. These cookies are necessary for the site to operate and cannot be disabled.",
      "We may use analytics services to understand how visitors use our site. These services may use cookies or similar technologies.",
      "Third-party services (YouTube, Meta, Google) may set their own cookies when you interact with embedded content or use OAuth sign-in.",
      "You can control cookies through your browser settings, though disabling certain cookies may limit site functionality.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main id="main-content" className="flex-1">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <p className="uppercase text-xs font-semibold tracking-wide text-[#c2410c]">
            Last updated: {LAST_UPDATED}
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
              <section
                key={section.title}
                id={section.id}
                className="bg-white rounded-2xl border border-[#e5ddd4] p-6 md:p-8 shadow-sm"
              >
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
            <div className="mt-4 space-y-3 text-sm md:text-base leading-relaxed">
              <p>
                Questions about this policy or your data rights? Email{" "}
                <a
                  href="mailto:zahishaked@gmail.com"
                  className="text-[#c2410c] font-semibold hover:text-[#9a3412]"
                >
                  zahishaked@gmail.com
                </a>{" "}
                or send a WhatsApp message to +972-54-690-5522. We respond to privacy requests within 30 days.
              </p>
              <p>
                For tour updates and announcements you can also follow{" "}
                <a href="https://www.youtube.com/@zahishaked" target="_blank" rel="noopener noreferrer" className="text-[#c2410c] font-semibold hover:text-[#9a3412]">
                  YouTube
                </a>
                ,{" "}
                <a href="https://www.facebook.com/zahishakedisraelitourguide" target="_blank" rel="noopener noreferrer" className="text-[#c2410c] font-semibold hover:text-[#9a3412]">
                  Facebook
                </a>
                ,{" "}
                <a href="https://www.instagram.com/zahi_shaked_israeli_tour_guide" target="_blank" rel="noopener noreferrer" className="text-[#c2410c] font-semibold hover:text-[#9a3412]">
                  Instagram
                </a>{" "}
                or{" "}
                <a href="https://linktr.ee/zahishakedtourguide" target="_blank" rel="noopener noreferrer" className="text-[#c2410c] font-semibold hover:text-[#9a3412]">
                  linktr.ee/zahishakedtourguide
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
