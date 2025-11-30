"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      {/* Header */}
      <header className="border-b border-[#e5ddd4] bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/favicon.png"
              alt="Zahi Shaked Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="font-semibold tracking-tight text-sm sm:text-base text-[#1a1612]">
              The Holy Land – By Zahi Shaked
            </span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm items-center flex-1 justify-center">
            <a href="#tours" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Watch</a>
            <a href="/support" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Support</a>
            <a href="/shop" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Shop</a>
            <a href="#about" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">About</a>
            <a href="#contact" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <AuthButton />
            <a
              href="#contact"
              className="rounded-full bg-[#c2410c] text-white text-sm px-4 py-2 hover:bg-[#9a3412] whitespace-nowrap transition-colors"
            >
              Request a Private Tour
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg px-3 py-2 text-sm font-medium text-[#1a1612] hover:bg-[#f5f2ed] transition-colors"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5ddd4] bg-white">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="#tours" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Watch</a>
              <a href="/support" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</a>
              <a href="/shop" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Shop</a>
              <a href="#about" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <div className="pt-2 border-t border-[#e5ddd4]">
                <AuthButton />
              </div>
              <a href="#contact" className="mt-2 py-2 text-sm font-medium text-center rounded-full bg-[#c2410c] text-white hover:bg-[#9a3412] transition-colors" onClick={() => setMobileMenuOpen(false)}>Request a Private Tour</a>
            </nav>
          </div>
        )}
      </header>

      {/* Channel Banner - Mobile: Text first, then image */}
      <section className="md:hidden bg-gradient-to-b from-amber-50/50 via-white to-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c2410c]">The Holy Land – By Zahi Shaked</p>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2 text-[#1a1612] leading-tight">Walk the Holy Land with the guide you already know</h1>
          <p className="max-w-full text-sm sm:text-base text-[#3d3529] mt-3 leading-relaxed">
            Licensed Israeli tour guide and 190k+-subscriber YouTuber, turning stones, streets, and Bible stories into one unforgettable journey.
          </p>
        </div>
      </section>

      {/* Mobile: Image below text - showing Zahi's face and hand */}
      <div className="md:hidden w-full relative aspect-[16/9]">
        <Image
          src="/channel-banner.jpg"
          alt="Zahi Shaked guiding at an ancient theater in Israel"
          fill
          className="object-cover object-[20%_50%]"
          priority
        />
      </div>

      {/* Desktop: Channel Banner - Thin banner strip matching content width */}
      <section className="hidden md:block py-0">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-b-2xl" style={{ height: '200px' }}>
          <Image
            src="/channel-banner.jpg"
            alt="Zahi Shaked guiding at an ancient theater in Israel"
            fill
            className="absolute inset-0 h-full w-full object-cover object-[left_center]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/80" />
          <div className="relative flex items-center justify-end px-6 lg:pl-[40%] h-full text-white">
            <div className="max-w-xl text-right lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-200/90">The Holy Land – By Zahi Shaked</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Walk the Holy Land with the guide you already know</h1>
              <p className="max-w-2xl text-sm sm:text-base text-slate-100/90 mt-2 leading-relaxed">
                Licensed Israeli tour guide and 190k+-subscriber YouTuber, turning stones, streets, and Bible stories into one unforgettable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Tours & Video Section */}
        <section className="bg-gradient-to-b from-white via-[#faf8f5] to-white py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Tours Text Card */}
              <div className="rounded-2xl bg-[#f5f2ed] p-6 md:p-8 lg:p-10 shadow-sm border border-[#e5ddd4]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612] leading-tight">
                  Private Holy Land tours, crafted personally by Zahi Shaked
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#3d3529] leading-relaxed">
                  From Jerusalem's Old City to the Galilee and desert, Zahi builds private tours around your pace and interests – Bible, history, archaeology or just great stories from his YouTube channel, brought to life in front of you.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/support"
                    className="w-full sm:w-auto rounded-full bg-[#c2410c] text-white px-6 py-3 text-sm font-medium hover:bg-[#9a3412] text-center transition-colors"
                  >
                    Support Zahi's Work
                  </a>
                  <a
                    href="https://www.youtube.com/@zahishaked"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto rounded-full border-2 border-[#c2410c] px-6 py-3 text-sm font-medium text-[#c2410c] bg-transparent hover:bg-[#c2410c] hover:text-white text-center transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>

              {/* YouTube Video Container */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-[#e5ddd4] bg-[#f5f2ed]">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/ECjDgNEY8tQ"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Zahi Shaked - The Holy Land"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "YouTube community", value: "190k+" },
                { label: "Years guiding", value: "24+" },
                { label: "Cities & regions", value: "Jerusalem, TLV, Galilee" },
                { label: "Style", value: "Personal & immersive" },
              ].map((stat, index) => (
                <div key={index} className="rounded-2xl bg-[#f5f2ed] border border-[#e5ddd4] p-4 md:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                  <dt className="text-xs md:text-sm text-[#3d3529] mb-1">{stat.label}</dt>
                  <dd className="text-xl md:text-2xl font-bold text-[#1a1612] leading-tight">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Zahi's Work Section */}
        <section id="tours" className="py-12 md:py-16 lg:py-20 border-t border-[#e5ddd4] bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
                Explore Zahi's work
              </h2>
              <p className="mt-3 text-base md:text-lg text-[#3d3529] max-w-2xl">
                Whether you're watching from home or planning a visit, there are many ways to walk the Holy Land with Zahi.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Watch Zahi on YouTube",
                  body: "Thousands of free on-location videos from Jerusalem, the Galilee, the desert and more.",
                  ctaText: "Open YouTube channel",
                  ctaHref: "https://www.youtube.com/@zahishaked",
                },
                {
                  title: "Support Zahi's Work",
                  body: "Help Zahi keep documenting the Holy Land with independent, ad-light, educational videos.",
                  ctaText: "Become a supporter",
                  ctaHref: "/support",
                },
                {
                  title: "Shop Holy Land Gifts (Coming soon)",
                  body: "Journals, maps, digital photo packs and more inspired by Zahi's tours.",
                  ctaText: "Get notified",
                  ctaHref: "/shop",
                },
                {
                  title: "Online Courses (Coming soon)",
                  body: "Learn about Jerusalem, the Galilee and Bible archaeology through structured video courses.",
                  ctaText: "Join the waitlist",
                  ctaHref: "#courses",
                },
                {
                  title: "Book a Private Tour",
                  body: "If you're visiting Israel, you can still request a custom one-day or multi-day route with Zahi.",
                  ctaText: "Request a tour",
                  ctaHref: "#contact",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-md transition-all overflow-hidden group"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50" />
                  <div className="p-5 md:p-6">
                    <h3 className="font-bold text-lg md:text-xl tracking-tight text-[#1a1612]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#3d3529] leading-relaxed">
                      {item.body}
                    </p>
                    <div className="mt-5">
                      <a
                        href={item.ctaHref}
                        className="inline-flex items-center font-medium text-[#c2410c] hover:text-[#9a3412] transition-colors group-hover:underline"
                      >
                        {item.ctaText}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16 lg:py-20 border-t border-[#e5ddd4] bg-gradient-to-b from-white via-[#faf8f5] to-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
                Meet Zahi Shaked
              </h2>
              <div className="mt-6 space-y-4 text-base md:text-lg text-[#3d3529] leading-relaxed">
                <p>
                  For over 20 years, Zahi has guided visitors through the Holy Land, blending history, Scripture, archaeology and everyday life. His YouTube channel has become one of the largest Holy Land travel archives online, with thousands of videos filmed on location.
                </p>
                <p>
                  What started as a way to help his guests remember their tours has grown into a global community of viewers who walk the streets of Jerusalem, the Galilee and the desert with him every week.
                </p>
                <p>
                  Today, Zahi splits his time between guiding private groups on the ground and creating free educational content for anyone who loves the Holy Land.
                </p>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border border-[#e5ddd4] flex items-center justify-center text-center p-6 md:p-8 shadow-sm">
                <div>
                  <p className="font-semibold text-lg text-[#1a1612]">YouTube playlist</p>
                  <p className="mt-2 text-sm md:text-base text-[#3d3529]">
                    A curated playlist for viewers to watch before or between visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-20 border-t border-[#e5ddd4] bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
              Get in touch with Zahi
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#3d3529] max-w-2xl mx-auto">
              Have a question about a video, thinking about supporting his work, or planning a future trip to Israel? Feel free to reach out.
            </p>

            <div className="mt-8 max-w-md mx-auto text-left space-y-4 text-base md:text-lg">
              <div className="flex items-center justify-between py-3 border-b border-[#e5ddd4]">
                <span className="text-[#3d3529]">WhatsApp</span>
                <span className="font-semibold text-[#1a1612]">+972-5X-XXX-XXXX</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#e5ddd4]">
                <span className="text-[#3d3529]">Email</span>
                <span className="font-semibold text-[#1a1612]">guide@example.com</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[#3d3529]">Based in</span>
                <span className="font-semibold text-[#1a1612]">Jerusalem & Tel Aviv</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5ddd4] bg-white py-6 px-4 text-center text-sm text-[#3d3529]">
        © {new Date().getFullYear()} The Holy Land – By Zahi Shaked.
      </footer>
    </div>
  );
}
