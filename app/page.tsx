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
            <a href="#tours" className="hover:text-neutral-600">Tours</a>
            <a href="#virtual" className="hover:text-neutral-600">Virtual</a>
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

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 via-white to-white">
          <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Private, story-rich tours of the Holy Land – By Zahi Shaked
              </h1>
              <p className="mt-4 text-lg text-neutral-700 max-w-prose">
                With over two decades of guiding and a 190k+ YouTube community,
                Zahi brings Jerusalem, Galilee, Jaffa and the desert to life —
                at your pace, with your story.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
                >
                  Request a Private Tour
                </a>
                <a
                  href="#tours"
                  className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50"
                >
                  Explore popular routes
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

            {/* Placeholder for hero image / video */}
            <div className="aspect-video rounded-2xl bg-neutral-200 shadow-xl ring-1 ring-black/10 flex items-center justify-center text-center p-6">
              <div>
                <p className="font-medium">Hero video / image placeholder</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Here we’ll embed one of Zahi’s best Jerusalem / Holy Land tours
                  from YouTube, or a strong hero image.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tours */}
        <section id="tours" className="py-14 border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Popular private tours
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Jerusalem Old City Essentials",
                  bullets: ["Western Wall", "Holy Sepulchre", "Rooftops"],
                },
                {
                  title: "Jaffa & Tel Aviv Walks",
                  bullets: ["Old Port", "Flea Market", "Boulevards"],
                },
                {
                  title: "Dead Sea & Masada Day Trip",
                  bullets: ["Cable car", "Float", "Desert views"],
                },
                {
                  title: "Galilee & Nazareth",
                  bullets: ["Sea of Galilee", "Capernaum", "Nazareth"],
                },
                {
                  title: "Bar-Mitzvah & Family Routes",
                  bullets: ["Custom pace", "Photo spots", "Meaningful moments"],
                },
                {
                  title: "Fully Custom Itineraries",
                  bullets: ["Your priorities", "Flexible start", "All levels"],
                },
              ].map((tour) => (
                <article
                  key={tour.title}
                  className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-neutral-200" />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg tracking-tight">
                      {tour.title}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-700">
                      {tour.bullets.map((b) => (
                        <li key={b} className="px-2 py-1 rounded-full bg-neutral-100">{b}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-between items-center text-sm">
                      <a
                        href="#contact"
                        className="font-medium text-neutral-900 hover:underline"
                      >
                        Request this tour
                      </a>
                      <span className="text-neutral-500 text-xs">
                        1 full day • private
                      </span>
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
                Meet Zahi
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Zahi Shaked is a licensed Israeli tour guide, sharing the
                history, faith and everyday life of the Holy Land since 2000.
                Through thousands of tours on the ground and hundreds of videos
                online, he helps visitors connect real places with the stories
                behind them.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Whether you're planning a once-in-a-lifetime pilgrimage, a
                family trip, or a focused day in Jerusalem, your route is
                tailored around your pace, questions, and background.
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-video rounded-2xl bg-neutral-200 flex items-center justify-center text-center p-4">
                <div>
                  <p className="font-medium">YouTube playlist placeholder</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Here we’ll embed a curated playlist for guests.
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-500">
                Placeholder — we'll add real media soon.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-14 border-t border-neutral-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to plan your day in the Holy Land?
            </h2>
            <p className="mt-4 text-neutral-700">
              Share your dates, starting point (Jerusalem / Tel Aviv) and what matters most.
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