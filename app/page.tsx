import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-rose-300 shadow-inner" />
            <span className="font-semibold tracking-tight">
              The Holy Land – By Zahi Shaked
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#tours" className="hover:text-neutral-600">Watch</a>
            <a href="#support" className="hover:text-neutral-600">Support</a>
            <a href="#shop" className="hover:text-neutral-600">Shop</a>
            <a href="#courses" className="hover:text-neutral-600">Courses</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-neutral-900 text-white text-sm px-4 py-2 hidden sm:inline-flex hover:bg-neutral-800"
          >
            Request a Private Tour
          </a>
        </div>
      </header>

      {/* Channel Banner */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <Image
          src="/channel-banner.jpg"
          alt="Zahi Shaked guiding at an ancient theater in Israel"
          fill
          className="absolute inset-0 h-full w-full object-cover object-[left_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/80" />
        <div className="relative mx-auto flex max-w-5xl items-center justify-end px-6 py-10 text-white">
          <div className="max-w-xl text-right">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">The Holy Land – By Zahi Shaked</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Walk the Holy Land with the guide you already know</h1>
            <p className="max-w-2xl text-sm sm:text-base text-slate-100/90">
              Licensed Israeli tour guide and 190k+-subscriber YouTuber, turning stones, streets, and Bible stories into one unforgettable journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 via-white to-white">
          <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Private Holy Land tours, crafted personally by Zahi Shaked
              </h1>
              <p className="mt-4 text-lg text-neutral-700 max-w-prose">
                From Jerusalem's Old City to the Galilee and desert, Zahi builds private tours around your pace and interests – Bible, history, archaeology or just great stories from his YouTube channel, brought to life in front of you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#support"
                  className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
                >
                  Support Zahi's Work
                </a>
                <a
                  href="https://www.youtube.com/@zahishaked"
                  className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50"
                >
                  Watch on YouTube
                </a>
              </div>
              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-neutral-700">
                <div className="rounded-xl bg-white border border-neutral-200 p-3 text-center">
                  <dt className="text-xs text-neutral-500">YouTube community</dt>
                  <dd className="text-lg font-semibold">190k+</dd>
                </div>
                <div className="rounded-xl bg-white border border-neutral-200 p-3 text-center">
                  <dt className="text-xs text-neutral-500">Years guiding</dt>
                  <dd className="text-lg font-semibold">24+</dd>
                </div>
                <div className="rounded-xl bg-white border border-neutral-200 p-3 text-center">
                  <dt className="text-xs text-neutral-500">Cities & regions</dt>
                  <dd className="text-lg font-semibold">Jerusalem, TLV, Galilee</dd>
                </div>
                <div className="rounded-xl bg-white border border-neutral-200 p-3 text-center">
                  <dt className="text-xs text-neutral-500">Style</dt>
                  <dd className="text-lg font-semibold">Personal & immersive</dd>
                </div>
              </dl>
            </div>

            {/* Hero video */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/ECjDgNEY8tQ"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Tours */}
        <section id="tours" className="py-14 border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Explore Zahi's work
              </h2>
              <p className="mt-2 text-neutral-600">
                Whether you're watching from home or planning a visit, there are many ways to walk the Holy Land with Zahi.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  ctaHref: "#support",
                },
                {
                  title: "Shop Holy Land Gifts (Coming soon)",
                  body: "Journals, maps, digital photo packs and more inspired by Zahi's tours.",
                  ctaText: "Get notified",
                  ctaHref: "#shop",
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
                  className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-neutral-200" />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-700">
                      {item.body}
                    </p>
                    <div className="mt-4 flex justify-between items-center text-sm">
                      <a
                        href={item.ctaHref}
                        className="font-medium text-neutral-900 hover:underline"
                      >
                        {item.ctaText}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-14 border-t border-neutral-200 bg-gradient-to-b from-white to-amber-50/60">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Meet Zahi Shaked
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                For over 20 years, Zahi has guided visitors through the Holy Land, blending history, Scripture, archaeology and everyday life. His YouTube channel has become one of the largest Holy Land travel archives online, with thousands of videos filmed on location.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                What started as a way to help his guests remember their tours has grown into a global community of viewers who walk the streets of Jerusalem, the Galilee and the desert with him every week.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Today, Zahi splits his time between guiding private groups on the ground and creating free educational content for anyone who loves the Holy Land.
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-video rounded-2xl bg-neutral-200 flex items-center justify-center text-center p-4">
                <div>
                  <p className="font-medium">YouTube playlist</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    A curated playlist for viewers to watch before or between visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-14 border-t border-neutral-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Get in touch with Zahi
            </h2>
            <p className="mt-4 text-neutral-700">
              Have a question about a video, thinking about supporting his work, or planning a future trip to Israel? Feel free to reach out.
            </p>

            <div className="mt-6 max-w-md mx-auto text-left space-y-3 text-sm text-neutral-800">
              <div className="flex items-center justify-between">
                <span>WhatsApp</span>
                <span className="font-medium text-neutral-900">+972-5X-XXX-XXXX</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Email</span>
                <span className="font-medium text-neutral-900">guide@example.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Based in</span>
                <span className="font-medium text-neutral-900">Jerusalem & Tel Aviv</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} The Holy Land – By Zahi Shaked.
      </footer>
    </div>
  );
}