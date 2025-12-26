import Image from "next/image";
import Header from "@/components/Header";
import VideoCarousel from "@/components/video/VideoCarousel";
import { fetchLatestVideos, fetchMostViewedVideos } from "@/lib/youtube";
import SiteFooter from "@/components/SiteFooter";

export default async function HomePage() {
  // Fetch both latest and most viewed videos server-side (cached for 1 hour)
  const [latestVideos, mostViewedVideos] = await Promise.all([
    fetchLatestVideos(6),
    fetchMostViewedVideos(6),
  ]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />

      {/* Channel Banner - Mobile: Text first, then image */}
      <section className="md:hidden bg-gradient-to-b from-amber-50/50 via-white to-white py-12 px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c2410c]">The Holy Land - By Zahi Shaked</p>
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative overflow-hidden" style={{ height: '200px' }}>
          <Image
            src="/channel-banner.jpg"
            alt="Zahi Shaked guiding at an ancient theater in Israel"
            fill
            className="absolute inset-0 h-full w-full object-cover object-[left_center]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/80" />
          <div className="relative flex items-center justify-end px-6 lg:pl-[40%] h-full text-white">
            <div className="max-w-2xl ml-auto text-right lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-200/90">The Holy Land - By Zahi Shaked</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Walk the Holy Land with the guide you already know</h1>
              <p className="max-w-2xl text-sm sm:text-base text-slate-100/90 mt-2 leading-relaxed">
                Licensed Israeli tour guide and 190k+-subscriber YouTuber, turning stones, streets, and Bible stories into one unforgettable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Tours & Video Section */}
        <section className="bg-gradient-to-b from-white via-[#faf8f5] to-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Tours Text Card */}
              <div className="rounded-2xl bg-[#f5f2ed] p-6 md:p-8 lg:p-10 shadow-sm border border-[#e5ddd4]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612] leading-tight">
                  Private Holy Land tours, crafted personally by Zahi Shaked
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#3d3529] leading-relaxed">
                  From Jerusalem's Old City to the Galilee and desert, Zahi builds private tours around your pace and interests - Bible, history, archaeology or just great stories from his YouTube channel, brought to life in front of you.
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

        {/* Watch Section - Latest and Most Watched Carousels */}
        <section className="py-12 md:py-16 lg:py-20 border-t border-[#e5ddd4] bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
                Watch
              </h2>
              <p className="mt-3 text-base md:text-lg text-[#3d3529] max-w-2xl">
                Explore Zahi's latest videos and most-watched classics from the Holy Land.
              </p>
            </div>

            <div className="space-y-12 md:space-y-16">
              <VideoCarousel title="Latest from YouTube" videos={latestVideos} />
              <VideoCarousel title="Most Watched Classics" videos={mostViewedVideos} />
            </div>
          </div>
        </section>

        {/* Explore Zahi's Work Section */}
        <section id="tours" className="py-12 md:py-16 lg:py-20 border-t border-[#e5ddd4] bg-gradient-to-b from-white via-[#faf8f5] to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="ml-[calc((95rem-80rem)/2)] mr-[calc((95rem-80rem)/2)] max-w-[95rem]">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                <div className="min-w-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
                  Hi, I'm Zahi
                </h2>
                <div className="mt-6 space-y-4 text-base md:text-lg text-[#3d3529] leading-relaxed">
                  <p>
                    For more than 25 years, I've been guiding visitors through the Holy Land, weaving together history, Scripture, archaeology, and the rhythms of everyday life. Along the way, I earned two university degrees in the religious history of Israel, a foundation that continues to shape how I teach, guide, and tell these stories. Learning, for me, never really stopped.
                  </p>
                  <p>
                    What began as a simple way to help my guests remember their tours gradually found its way online. My YouTube channel has since grown into one of the largest Holy Land travel archives, with thousands of videos filmed on location.
                  </p>
                  <p>
                    Over time, something unexpected happened. A global community formed. Today, people from all over the world walk the streets of Jerusalem, the Galilee, and the desert with me every week, right from their homes.
                  </p>
                  <p>
                    Now, I split my time between guiding private groups on the ground and creating free educational content for anyone who loves the Holy Land as deeply as I do.
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:pt-[4.5rem]">
                <div className="relative w-[75%] rounded-2xl overflow-hidden shadow-lg border border-[#e5ddd4] bg-[#f5f2ed]">
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/Z4DChZ7rpjk"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title="Zahi Shaked - About The Holy Land"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-20 border-t border-[#e5ddd4] bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
              Get in touch with Zahi
            </h2>
              <p className="mt-4 text-base md:text-lg text-[#3d3529] max-w-3xl mx-auto">
              Have a question about a video, thinking about supporting his work, or planning a future trip to Israel? Feel free to reach out.
            </p>

            <div className="mt-8 max-w-2xl mx-auto text-left space-y-4 text-base md:text-lg">
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
                <p className="font-semibold text-[#1a1612]">Follow Zahi</p>
                <div className="flex flex-wrap gap-3 text-[#c2410c]">
                  <a href="https://www.youtube.com/@zahishaked" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    YouTube
                  </a>
                  <a href="https://www.facebook.com/zahishakedisraelitourguide" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/zahi_shaked_israeli_tour_guide" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram
                  </a>
                  <a href="https://linktr.ee/zahishakedtourguide" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Linktree
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
