import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Terms of Service | The Holy Land - By Zahi Shaked",
  description:
    "Terms that govern the use of zahi.tours, the membership program, and private tour services.",
};

const LAST_UPDATED = "December 2025";

const termsSections = [
  {
    title: "1. Overview",
    body: [
      "These Terms of Service (“Terms”) govern your access to zahi.tours, the supporter membership, and tour inquiries operated by Zahi Shaked.",
      "This site is accessible to users of all ages. However, creating an account, purchasing memberships, or booking tours requires you to be of legal age to form a binding contract in your jurisdiction (typically 18 years or older), or have parental consent if you are a minor.",
      "By using the site you confirm that you can form a legally binding contract and agree to comply with these Terms.",
    ],
  },
  {
    title: "2. Accounts & Eligibility",
    body: [
      "You must provide accurate information and keep your credentials secure.",
      "Account sharing is not permitted. You are responsible for activity that occurs under your login.",
      "We may suspend or terminate accounts that violate these Terms or applicable law.",
    ],
  },
  {
    title: "3. Membership Billing",
    body: [
      "Memberships auto-renew every month via Stripe until cancelled.",
      "Taxes are calculated based on your billing location when required.",
      "You may cancel anytime from /account or the Stripe customer portal; access remains through the paid period.",
      "Due to the immediate delivery of digital perks, membership fees are non-refundable unless required by law.",
    ],
  },
  {
    title: "4. Tours & Experiences",
    body: [
      "Tour availability, pricing, and itineraries are confirmed individually via email or WhatsApp (+972-54-690-5522).",
      "Deposits or payments made for private tours are subject to the separate booking terms shared during confirmation.",
      "Travel insurance, visas, and border compliance remain your responsibility.",
    ],
  },
  {
    title: "5. Content & Acceptable Use",
    body: [
      "All videos, copy, photography, and course materials are owned by Zahi Shaked. You may not redistribute or commercialize them without permission.",
      "You agree not to upload malicious code, scrape content, or interfere with the site’s performance.",
      "Community participation (comments, messages) must remain respectful; moderation decisions are final.",
    ],
  },
  {
    title: "6. Disclaimers & Liability",
    body: [
      "Services are provided “as is” without warranty. While we strive for accuracy, itineraries and historical details may change.",
      "We strive to make this site accessible to all users in accordance with WCAG 2.1 Level AA standards, but we cannot guarantee perfect accessibility at all times.",
      "To the extent permitted by law, Zahi Shaked is not liable for indirect or consequential damages arising from site use, memberships, or travel decisions.",
      "You agree to indemnify and hold harmless Zahi Shaked from any claims, damages, or expenses arising from your use of the site, violation of these Terms, or infringement of any rights of another party.",
    ],
  },
  {
    title: "8. Force Majeure",
    body: [
      "We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, government actions, or failures of third-party service providers.",
    ],
  },
  {
    title: "9. Governing Law & Dispute Resolution",
    body: [
      "These Terms are governed by the laws of the State of Israel, without regard to conflict-of-law principles.",
      "Any disputes will first be addressed in writing. If unresolved, parties agree to the exclusive jurisdiction of Israeli courts.",
      "You agree that any claim or cause of action arising out of or related to these Terms or the site must be filed within one year after such claim or cause of action arose, or be forever barred.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">

      <main id="main-content" className="flex-1">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <p className="uppercase text-xs font-semibold tracking-wide text-[#c2410c]">
            Last updated: {LAST_UPDATED}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1612]">
            Terms of Service
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Please read these Terms carefully. By accessing or using zahi.tours, purchasing a membership,
            or booking a tour with Zahi Shaked, you acknowledge that you have read, understood, and agreed to be bound by them.
          </p>

          <div className="mt-10 space-y-8">
            {termsSections.map((section) => (
              <section key={section.title} className="bg-white rounded-2xl border border-[#e5ddd4] p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-[#1a1612]">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed">
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 bg-white rounded-2xl border border-[#e5ddd4] p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1a1612]">
              Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm md:text-base leading-relaxed">
              <p>
                For questions about these Terms, tour agreements, or billing, email{" "}
                <a
                  href="mailto:zahishaked@gmail.com"
                  className="text-[#c2410c] font-semibold hover:text-[#9a3412]"
                >
                  zahishaked@gmail.com
                </a>{" "}
                or message +972-54-690-5522 on WhatsApp and include relevant booking or membership details.
              </p>
              <p>
                You can also reach Zahi through{" "}
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

      <SiteFooter />
    </div>
  );
}
