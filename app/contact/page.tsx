import ContactPhotoRotator from "@/components/contact/ContactPhotoRotator";

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
            <div className="grid lg:grid-cols-[2fr_1.2fr] gap-3 lg:gap-3 items-stretch">
              <div className="min-w-0 lg:col-span-2">
                <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612]">
                  Let&apos;s connect
                </h1>
                <p className="mt-4 pb-[34px] md:pb-[38px] text-base md:text-lg text-[#3d3529] max-w-3xl leading-relaxed">
                  Have a question about a video, thinking about supporting my work,
                  <span className="block">
                    or planning a future trip to Israel?{" "}
                    <span className="whitespace-nowrap">Feel free to reach out.</span>
                  </span>
                </p>
              </div>

              <div className="min-w-0 w-full text-sm md:text-base flex flex-col h-full justify-between">
                <div className="block py-2">
                  <div className="inline-grid grid-cols-[32px_110px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
                    <a
                      href="https://wa.me/972546905522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5ddd4] bg-[#f5f2ed] hover:bg-[#efe9e1] transition-colors duration-150"
                      aria-label="Open WhatsApp chat"
                      title="Open WhatsApp"
                    >
                      {/* WhatsApp icon, themed red */}
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#c2410c]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 2-4v-6a8 8 0 1 1 16 0z" />
                        <path d="M9 11.5c.6 1.7 2.2 3.4 4.1 4.2.4.2.9.1 1.2-.2l1-1" />
                      </svg>
                    </a>
                    <span className="text-[#3d3529]">WhatsApp</span>
                    <a
                      href="https://wa.me/972546905522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1a1612] hover:text-[#c2410c] text-left whitespace-nowrap"
                    >
                      +972-54-690-5522
                    </a>
                  </div>
                </div>

                <div className="block py-2">
                  <div className="inline-grid grid-cols-[32px_110px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
                    <a
                      href="https://www.facebook.com/zahishakedisraelitourguide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5ddd4] bg-[#f5f2ed] hover:bg-[#efe9e1] transition-colors duration-150"
                      aria-label="Open Facebook page"
                      title="Open Facebook"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#c2410c]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <span className="text-[#3d3529]">Facebook</span>
                    <a
                      href="https://www.facebook.com/zahishakedisraelitourguide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1a1612] hover:text-[#c2410c] text-left whitespace-nowrap"
                    >
                      zahishakedisraelitourguide
                    </a>
                  </div>
                </div>

                <div className="block py-2">
                  <div className="inline-grid grid-cols-[32px_110px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
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
                    <span className="text-[#3d3529]">Email</span>
                    <a
                      href="mailto:zahishaked@gmail.com"
                      className="font-semibold text-[#1a1612] hover:text-[#c2410c] text-left whitespace-nowrap"
                    >
                      zahishaked@gmail.com
                    </a>
                  </div>
                </div>

                <div className="block py-2">
                  <div className="inline-grid grid-cols-[32px_110px_max-content] items-center gap-3 border-b border-[#e5ddd4] pb-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Jerusalem%2C%20Israel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5ddd4] bg-[#f5f2ed] hover:bg-[#efe9e1] transition-colors duration-150"
                      aria-label="Open Jerusalem in Google Maps"
                      title="Open in Maps"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#c2410c]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
                        <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      </svg>
                    </a>
                    <span className="text-[#3d3529]">Based in</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Jerusalem%2C%20Israel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1a1612] hover:text-[#c2410c] text-left whitespace-nowrap"
                    >
                      Jerusalem & Tel Aviv
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-full lg:translate-x-[-144px]">
                <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-[#e5ddd4] bg-[#f5f2ed]">
                  <div className="relative w-full aspect-video">
                    <ContactPhotoRotator
                      images={[
                        "/contact/contact01.webp",
                        "/contact/contact02.webp",
                        "/contact/contact03.webp",
                        "/contact/contact04.webp",
                        "/contact/contact05.webp",
                        "/contact/contact06.webp",
                        "/contact/contact07.webp",
                        "/contact/contact08.webp",
                      ]}
                      alt="Zahi Shaked"
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

