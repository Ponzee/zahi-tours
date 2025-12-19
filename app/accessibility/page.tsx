import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Accessibility Statement | The Holy Land – By Zahi Shaked",
  description:
    "Our commitment to making zahi.tours accessible to all users, including those with disabilities.",
};

const LAST_UPDATED = "December 2025";

const accessibilitySections = [
  {
    title: "Our Commitment",
    content: [
      "The Holy Land – By Zahi Shaked is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve WCAG 2.1 Level AA conformance.",
      "We believe that everyone should be able to explore and learn about the Holy Land, regardless of their abilities or the technology they use.",
    ],
  },
  {
    title: "Accessibility Features",
    content: [
      "Keyboard Navigation: All interactive elements can be accessed using only a keyboard. Use Tab to navigate forward, Shift+Tab to navigate backward, and Enter or Space to activate buttons and links.",
      "Screen Reader Support: We use semantic HTML and ARIA labels to ensure screen readers can properly announce content and navigation.",
      "Skip Links: A 'Skip to main content' link is available at the top of each page to allow keyboard users to bypass repetitive navigation.",
      "Focus Indicators: All interactive elements have visible focus indicators (orange outline) when navigated via keyboard.",
      "Color Contrast: Text and interactive elements meet WCAG 2.1 Level AA contrast requirements (4.5:1 for normal text, 3:1 for large text).",
      "Alt Text: All images include descriptive alternative text for screen readers.",
      "Responsive Design: The site is designed to work on all screen sizes and devices.",
    ],
  },
  {
    title: "Known Limitations",
    content: [
      "While we strive to maintain accessibility, some third-party content (such as embedded YouTube videos) may have limitations. We encourage users to report any accessibility barriers they encounter.",
      "Some older browsers may not fully support all accessibility features. We recommend using modern, up-to-date browsers for the best experience.",
    ],
  },
  {
    title: "Feedback & Reporting Issues",
    content: [
      "We welcome feedback on the accessibility of zahi.tours. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:",
      "Email: zahishaked@gmail.com",
      "WhatsApp: +972-54-690-5522",
      "We aim to respond to accessibility feedback within 7 business days.",
    ],
  },
  {
    title: "Standards & Guidelines",
    content: [
      "We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which are the internationally recognized guidelines for web accessibility.",
      "Our development process includes accessibility testing and review to ensure ongoing compliance.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <p className="uppercase text-xs font-semibold tracking-wide text-[#c2410c]">
            Last updated: {LAST_UPDATED}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1612]">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            The Holy Land – By Zahi Shaked is committed to making our website accessible to all users,
            including those with disabilities. This page outlines our accessibility features, standards,
            and how to report issues.
          </p>

          <div className="mt-10 space-y-8">
            {accessibilitySections.map((section) => (
              <section
                key={section.title}
                className="bg-white rounded-2xl border border-[#e5ddd4] p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[#1a1612]">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
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
                For accessibility questions or to report barriers, email{" "}
                <a
                  href="mailto:zahishaked@gmail.com"
                  className="text-[#c2410c] font-semibold hover:text-[#9a3412] focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 focus-visible:rounded"
                >
                  zahishaked@gmail.com
                </a>{" "}
                or send a WhatsApp message to +972-54-690-5522.
              </p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

