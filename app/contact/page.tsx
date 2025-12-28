export const metadata = {
  title: "Contact | The Holy Land - By Zahi Shaked",
  description: "Get in touch with Zahi Shaked. Have a question about a video, thinking about supporting his work, or planning a future trip to Israel?",
};

import Link from "next/link";

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

            <div className="mt-6 max-w-3xl w-full space-y-3 text-sm md:text-base">
              <div className="flex items-center justify-between py-3 border-b border-[#e5ddd4]">
                <span className="text-[#3d3529]">WhatsApp</span>
                <span className="font-semibold text-[#1a1612]">+972-54-690-5522</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#e5ddd4]">
                <span className="text-[#3d3529]">Email</span>
                <a
                  href="mailto:zahishaked@gmail.com"
                  className="font-semibold text-[#1a1612] hover:text-[#c2410c]"
                >
                  zahishaked@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[#3d3529]">Based in</span>
                <span className="font-semibold text-[#1a1612]">Jerusalem & Tel Aviv</span>
              </div>
              <div className="pt-4 border-t border-[#e5ddd4] space-y-2 text-sm md:text-base">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  {/* Follow */}
                  <div className="min-w-0">
                    <p className="font-semibold text-[#1a1612]">Follow my journey on</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <a
                        href="https://www.youtube.com/@zahishaked"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FF0000] shadow-sm hover:shadow-md transition-shadow"
                        aria-label="YouTube"
                        title="YouTube"
                      >
                        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
                          <path d="M23.498 6.186a2.999 2.999 0 0 0-2.113-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.385.566a3 3 0 0 0-2.113 2.12A31.11 31.11 0 0 0 0 12a31.11 31.11 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.113 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.385-.566a3 3 0 0 0 2.113-2.12A31.11 31.11 0 0 0 24 12a31.11 31.11 0 0 0-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                        </svg>
                        <span className="sr-only">YouTube</span>
                      </a>

                      <a
                        href="https://www.facebook.com/zahishakedisraelitourguide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#1877F2] shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Facebook"
                        title="Facebook"
                      >
                        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
                          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.9H16.8L16.3 15h-2.6v7A10 10 0 0 0 22 12z" />
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </a>

                      <a
                        href="https://www.instagram.com/zahi_shaked_israeli_tour_guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full shadow-sm hover:shadow-md transition-shadow"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                        }}
                        aria-label="Instagram"
                        title="Instagram"
                      >
                        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
                          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.1-.7a1.1 1.1 0 1 0-1.1-1.1 1.1 1.1 0 0 0 1.1 1.1zM12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </a>

                      <a
                        href="https://linktr.ee/zahishakedtourguide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#39E09B] shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Linktree"
                        title="Linktree"
                      >
                        <svg viewBox="0 0 24 24" className="h-7 w-7 text-black" fill="currentColor" aria-hidden="true">
                          <path d="M12 2l4.6 4.6-1.4 1.4L13 5.8V10h-2V5.8L8.8 8 7.4 6.6 12 2zm-1 10h2v10h-2V12z" />
                        </svg>
                        <span className="sr-only">Linktree</span>
                      </a>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="min-w-0 sm:text-right">
                    <p className="font-semibold text-[#1a1612]">Support my journey</p>
                    <div className="mt-3 flex justify-start sm:justify-end">
                      <Link
                        href="/support"
                        className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#c2410c] shadow-sm hover:bg-[#9a3412] transition-colors"
                        aria-label="Support my journey"
                        title="Support my journey"
                      >
                        {/* Handshake icon (clear) */}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 11.5l-3.2-3.2a2.4 2.4 0 0 0-3.4 0l-1.3 1.3a2.4 2.4 0 0 1-3.4 0L8.4 8.3a2.4 2.4 0 0 0-3.4 0L2.8 10.5" />
                          <path d="M8.2 12.2l2.1 2.1a2.4 2.4 0 0 0 3.4 0l2.1-2.1" />
                          <path d="M6.3 10.2l-2.2 2.2a1.6 1.6 0 0 0 0 2.3l1 1" />
                          <path d="M17.7 10.2l2.2 2.2a1.6 1.6 0 0 1 0 2.3l-1 1" />
                          <path d="M9.2 14.2l-1 1a1.6 1.6 0 0 0 0 2.3" />
                          <path d="M14.8 14.2l1 1a1.6 1.6 0 0 1 0 2.3" />
                        </svg>
                        <span className="sr-only">Support my journey</span>
                      </Link>
                    </div>
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

