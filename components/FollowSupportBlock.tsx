"use client";

import Link from "next/link";

export default function FollowSupportBlock() {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-start gap-x-[clamp(24px,4vw,48px)] gap-y-3 overflow-x-hidden">
          {/* Follow */}
          <div className="flex items-center justify-start gap-[clamp(12px,2vw,20px)]">
            <p className="font-display font-semibold text-[#1a1612] inline-flex items-center gap-[clamp(8px,1.2vw,12px)] whitespace-nowrap text-[clamp(14px,1.6vw,20px)]">
              <img
                src="/icons/follow_journey.webp"
                alt=""
                width={54}
                height={54}
                className="h-[clamp(34px,4vw,54px)] w-[clamp(34px,4vw,54px)] object-contain"
                aria-hidden="true"
              />
              Stories from the road
            </p>

            <div className="flex items-center justify-start gap-[clamp(12px,2vw,16px)]">
              <a
                href="https://www.youtube.com/@zahishaked"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-colors duration-150 whitespace-nowrap hover:opacity-80"
                aria-label="YouTube"
                title="YouTube"
              >
                <span
                  className="inline-flex h-[clamp(28px,3vw,40px)] w-[clamp(28px,3vw,40px)] items-center justify-center rounded-full bg-[#FF0000]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[clamp(18px,2.1vw,28px)] w-[clamp(18px,2.1vw,28px)] text-white"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a2.999 2.999 0 0 0-2.113-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.385.566a3 3 0 0 0-2.113 2.12A31.11 31.11 0 0 0 0 12a31.11 31.11 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.113 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.385-.566a3 3 0 0 0 2.113-2.12A31.11 31.11 0 0 0 24 12a31.11 31.11 0 0 0-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                  </svg>
                </span>
              </a>

              <a
                href="https://www.facebook.com/zahishakedisraelitourguide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-colors duration-150 whitespace-nowrap hover:opacity-80"
                aria-label="Facebook"
                title="Facebook"
              >
                <span
                  className="inline-flex h-[clamp(28px,3vw,40px)] w-[clamp(28px,3vw,40px)] items-center justify-center rounded-full bg-[#1877F2]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[clamp(18px,2.1vw,28px)] w-[clamp(18px,2.1vw,28px)] text-white"
                    fill="currentColor"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.9H16.8L16.3 15h-2.6v7A10 10 0 0 0 22 12z" />
                  </svg>
                </span>
              </a>

              <a
                href="https://www.instagram.com/zahi_shaked_israeli_tour_guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-colors duration-150 whitespace-nowrap hover:opacity-80"
                aria-label="Instagram"
                title="Instagram"
              >
                <span
                  className="inline-flex h-[clamp(28px,3vw,40px)] w-[clamp(28px,3vw,40px)] items-center justify-center rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[clamp(18px,2.1vw,28px)] w-[clamp(18px,2.1vw,28px)] text-white"
                    fill="currentColor"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.1-.7a1.1 1.1 0 1 0-1.1-1.1 1.1 1.1 0 0 0 1.1 1.1zM12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center justify-start gap-[clamp(12px,2vw,20px)]">
            <p className="font-display font-semibold text-[#1a1612] inline-flex items-center gap-[clamp(8px,1.2vw,12px)] whitespace-nowrap text-[clamp(14px,1.6vw,20px)]">
              <img
                src="/icons/support_journey.webp"
                alt=""
                width={54}
                height={54}
                className="h-[clamp(34px,4vw,54px)] w-[clamp(34px,4vw,54px)] object-contain"
                aria-hidden="true"
              />
              Support the path
            </p>

            <div className="flex items-center justify-start gap-[clamp(12px,2vw,16px)]">
              <Link
                href="/support"
                className="inline-flex items-center transition-colors duration-150 whitespace-nowrap hover:opacity-80"
                aria-label="Support my journey"
                title="Support my journey"
              >
                <span
                  className="inline-flex h-[clamp(28px,3vw,40px)] w-[clamp(28px,3vw,40px)] items-center justify-center rounded-full bg-[#c2410c]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[clamp(18px,2.1vw,28px)] w-[clamp(18px,2.1vw,28px)] text-white"
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
                href="https://linktr.ee/zahishakedtourguide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-colors duration-150 whitespace-nowrap hover:opacity-80"
                aria-label="Linktree"
                title="Linktree"
              >
                <span
                  className="inline-flex h-[clamp(28px,3vw,40px)] w-[clamp(28px,3vw,40px)] items-center justify-center rounded-full bg-[#39E09B]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[clamp(18px,2.1vw,28px)] w-[clamp(18px,2.1vw,28px)] text-black"
                    fill="currentColor"
                  >
                    <path d="M12 2l4.6 4.6-1.4 1.4L13 5.8V10h-2V5.8L8.8 8 7.4 6.6 12 2zm-1 10h2v10h-2V12z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


