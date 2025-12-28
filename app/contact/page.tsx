export const metadata = {
  title: "Contact | The Holy Land - By Zahi Shaked",
  description: "Get in touch with Zahi Shaked. Have a question about a video, thinking about supporting his work, or planning a future trip to Israel?",
};

export default function ContactPage() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <main className="flex-1 overflow-hidden flex flex-col">
        <section className="py-4 md:py-6 lg:py-8 flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612]">
              Get in touch with Zahi
            </h1>
            <p className="mt-2 text-sm md:text-base text-[#3d3529] max-w-3xl leading-relaxed">
              Have a question about a video, thinking about supporting his work, or planning a future trip to Israel? Feel free to reach out.
            </p>

            <div className="mt-6 max-w-3xl w-full space-y-2 text-sm md:text-base">
              <div className="block py-2">
                <div className="inline-grid grid-cols-[22px_110px_32px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
                  <span className="text-[#c2410c]" aria-hidden="true">
                    {/* WhatsApp (simple chat bubble) */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 2-4v-6a8 8 0 1 1 16 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11.5c.6 1.7 2.2 3.4 4.1 4.2.4.2.9.1 1.2-.2l1-1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#3d3529]">WhatsApp</span>
                  <a
                    href="https://wa.me/972546905522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5ddd4] bg-[#f5f2ed] hover:bg-[#efe9e1] transition-colors duration-150"
                    aria-label="Open WhatsApp chat"
                    title="Open WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 2-4v-6a8 8 0 1 1 16 0z" />
                    </svg>
                  </a>
                  <span className="font-semibold text-[#1a1612] text-left whitespace-nowrap">+972-54-690-5522</span>
                </div>
              </div>

              <div className="block py-2">
                <div className="inline-grid grid-cols-[22px_110px_32px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
                  <span className="text-[#c2410c]" aria-hidden="true">
                    {/* Email */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#3d3529]">Email</span>
                  <a
                    href="mailto:zahishaked@gmail.com"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5ddd4] bg-[#f5f2ed] hover:bg-[#efe9e1] transition-colors duration-150"
                    aria-label="Send an email"
                    title="Send email"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#c2410c]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </a>
                  <a
                    href="mailto:zahishaked@gmail.com"
                    className="font-semibold text-[#1a1612] hover:text-[#c2410c] text-left whitespace-nowrap"
                  >
                    zahishaked@gmail.com
                  </a>
                </div>
              </div>

              <div className="block py-2">
                <div className="inline-grid grid-cols-[22px_110px_32px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
                  <span className="text-[#c2410c]" aria-hidden="true">
                    {/* Location pin */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#3d3529]">Based in</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jerusalem%2C%20Israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5ddd4] bg-[#f5f2ed] hover:bg-[#efe9e1] transition-colors duration-150"
                    aria-label="Open Jerusalem in Google Maps"
                    title="Open in Maps"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
                      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                  </a>
                  <span className="font-semibold text-[#1a1612] text-left whitespace-nowrap">Jerusalem & Tel Aviv</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

