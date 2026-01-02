"use client";

import Link from "next/link";

export default function FollowSupportBlock() {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center">
            {/* Left: Follow */}
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/icons/follow_journey.webp"
                alt=""
                width={54}
                height={54}
                className="h-[clamp(44px,5vw,64px)] w-[clamp(44px,5vw,64px)] object-contain"
                aria-hidden="true"
              />
              <p className="mt-2 font-cormorant font-bold tracking-tight text-[#1a1612] text-[clamp(16px,1.8vw,22px)]">
                Stories from the road
              </p>
              <div className="mt-3 flex items-center justify-center gap-4">
                <a
                  href="https://www.youtube.com/@zahishaked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-full"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" fill="currentColor">
                      <path d="M23.498 6.186a2.999 2.999 0 0 0-2.113-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.385.566a3 3 0 0 0-2.113 2.12A31.11 31.11 0 0 0 0 12a31.11 31.11 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.113 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.385-.566a3 3 0 0 0 2.113-2.12A31.11 31.11 0 0 0 24 12a31.11 31.11 0 0 0-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/zahishakedisraelitourguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-full"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" fill="currentColor">
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.9H16.8L16.3 15h-2.6v7A10 10 0 0 0 22 12z" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/zahi_shaked_israeli_tour_guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-full"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" fill="currentColor">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.1-.7a1.1 1.1 0 1 0-1.1-1.1 1.1 1.1 0 0 0 1.1 1.1zM12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@zahishaked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-full"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]" aria-hidden="true">
                    {/* TikTok note mark (with subtle cyan/pink offsets) */}
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <path
                        d="M14 3c.7 2.4 2.6 4.3 5 5v3.2c-1.9-.1-3.6-.7-5-1.7V16a6 6 0 1 1-6-6c.5 0 1 .1 1.5.2v3.4c-.5-.3-1-.4-1.5-.4a2.8 2.8 0 1 0 2.8 2.8V3h3.2z"
                        fill="#25F4EE"
                        opacity="0.9"
                        transform="translate(-0.7,0.7)"
                      />
                      <path
                        d="M14 3c.7 2.4 2.6 4.3 5 5v3.2c-1.9-.1-3.6-.7-5-1.7V16a6 6 0 1 1-6-6c.5 0 1 .1 1.5.2v3.4c-.5-.3-1-.4-1.5-.4a2.8 2.8 0 1 0 2.8 2.8V3h3.2z"
                        fill="#FE2C55"
                        opacity="0.9"
                        transform="translate(0.7,-0.7)"
                      />
                      <path
                        d="M14 3c.7 2.4 2.6 4.3 5 5v3.2c-1.9-.1-3.6-.7-5-1.7V16a6 6 0 1 1-6-6c.5 0 1 .1 1.5.2v3.4c-.5-.3-1-.4-1.5-.4a2.8 2.8 0 1 0 2.8 2.8V3h3.2z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Support */}
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/icons/support_journey.webp"
                alt=""
                width={54}
                height={54}
                className="h-[clamp(44px,5vw,64px)] w-[clamp(44px,5vw,64px)] object-contain"
                aria-hidden="true"
              />
              <p className="mt-2 font-cormorant font-bold tracking-tight text-[#1a1612] text-[clamp(16px,1.8vw,22px)]">
                Support the path
              </p>
              <div className="mt-3 flex items-center justify-center gap-4">
                <Link
                  href="/support"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-full"
                  aria-label="Support the path"
                  title="Support"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c2410c] shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5l-3.2-3.2a2.4 2.4 0 0 0-3.4 0l-1.3 1.3a2.4 2.4 0 0 1-3.4 0L8.4 8.3a2.4 2.4 0 0 0-3.4 0L2.8 10.5" />
                      <path d="M8.2 12.2l2.1 2.1a2.4 2.4 0 0 0 3.4 0l2.1-2.1" />
                      <path d="M6.3 10.2l-2.2 2.2a1.6 1.6 0 0 0 0 2.3l1 1" />
                      <path d="M17.7 10.2l2.2 2.2a1.6 1.6 0 0 1 0 2.3l-1 1" />
                      <path d="M9.2 14.2l-1 1a1.6 1.6 0 0 0 0 2.3" />
                      <path d="M14.8 14.2l1 1a1.6 1.6 0 0 1 0 2.3" />
                    </svg>
                  </span>
                </Link>

                <a
                  href="https://buymeacoffee.com/zahishaked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-xl"
                  aria-label="Buy Me a Coffee"
                  title="Buy Me a Coffee"
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFDD00] shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]"
                    aria-hidden="true"
                  >
                    {/* Buy Me a Coffee style: cup + heart accent */}
                    <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
                      <path
                        d="M16 22c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v4h3c4.4 0 8 3.6 8 8s-3.6 8-8 8h-3v2c0 6.6-5.4 12-12 12H28c-6.6 0-12-5.4-12-12V22z"
                        fill="#111827"
                        opacity="0.92"
                      />
                      <path
                        d="M22 26v20c0 3.3 2.7 6 6 6h16c3.3 0 6-2.7 6-6V26H22z"
                        fill="#ffffff"
                        opacity="0.92"
                      />
                      <path
                        d="M49 44h3c2.2 0 4-1.8 4-4s-1.8-4-4-4h-3v8z"
                        fill="#111827"
                        opacity="0.92"
                      />
                      <path
                        d="M32.7 33.2c1.1-1.3 3.2-1.3 4.3 0 1 1.2.8 2.9-.4 3.9l-3.8 3.2-3.8-3.2c-1.2-1-1.4-2.7-.4-3.9 1.1-1.3 3.2-1.3 4.1 0z"
                        fill="#FF3B30"
                        opacity="0.95"
                      />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://www.paypal.com/paypalme/zahishaked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-2xl"
                  aria-label="PayPal"
                  title="PayPal"
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]"
                    aria-hidden="true"
                  >
                    {/* PayPal-style layered P (cleaner + more recognizable) */}
                    <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
                      <path
                        d="M28 12h16c9 0 15 6.2 13.2 15.4C55.7 36.8 47 42 37 42h-7l-2.4 14H18l7.6-44z"
                        fill="#003087"
                      />
                      <path
                        d="M26 16h16c6.8 0 11.4 4.5 10 11.2C50.4 35 44.2 39 37.5 39h-8.5l-1.6 9H20l6-32z"
                        fill="#0070E0"
                        opacity="0.95"
                      />
                      <path
                        d="M26 16h7.8c4.1 0 6.9 2.6 6 6.7-.8 4-4.3 6.3-8.4 6.3H27l-1.2 7.2h-5.8l6-32z"
                        fill="#00A0E6"
                        opacity="0.9"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


