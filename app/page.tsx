import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="h-full flex flex-col overflow-hidden">

      <main id="main-content" className="flex-1 overflow-hidden flex flex-col">
        {/* Channel Banner - Mobile: Text first, then image */}
        <section className="md:hidden py-6 px-4 flex-shrink-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c2410c]">The Holy Land - By Zahi Shaked</p>
            <h1 className="text-xl sm:text-2xl font-bold mt-1 text-[#1a1612] leading-tight">Walk the Holy Land with the guide you already know</h1>
            <p className="max-w-full text-xs sm:text-sm text-[#3d3529] mt-2 leading-relaxed">
              Licensed Israeli tour guide and 190k+-subscriber YouTuber, turning stones, streets, and Bible stories into one unforgettable journey.
            </p>
          </div>
        </section>

        {/* Mobile: Image below text - showing Zahi's face and hand */}
        <div className="md:hidden w-full relative flex-shrink-0" style={{ height: '120px' }}>
          <Image
            src="/channel-banner.jpg"
            alt="Zahi Shaked guiding at an ancient theater in Israel"
            fill
            className="object-cover object-[20%_50%]"
            priority
          />
        </div>

        {/* Desktop: Channel Banner - Thin banner strip matching content width */}
        <section className="hidden md:block flex-shrink-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative overflow-hidden" style={{ height: '140px' }}>
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
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-200/90">The Holy Land - By Zahi Shaked</p>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 leading-tight">Walk the Holy Land with the guide you already know</h1>
                <p className="max-w-2xl text-xs sm:text-sm text-slate-100/90 mt-1 leading-relaxed">
                  Licensed Israeli tour guide and 190k+-subscriber YouTuber, turning stones, streets, and Bible stories into one unforgettable journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tours & Video Section */}
        <section className="py-4 md:py-6 lg:py-8 flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
              {/* Tours Text Card */}
              <div className="rounded-2xl bg-[#f5f2ed] p-4 md:p-6 lg:p-8 shadow-sm border border-[#e5ddd4]">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612] leading-tight">
                  Private Holy Land tours, crafted personally by Zahi Shaked
                </h2>
                <p className="mt-2 text-sm md:text-base text-[#3d3529] leading-relaxed">
                  From Jerusalem's Old City to the Galilee and desert, Zahi builds private tours around your pace and interests - Bible, history, archaeology or just great stories from his YouTube channel, brought to life in front of you.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <a
                    href="/support"
                    className="w-full sm:w-auto rounded-full bg-[#c2410c] text-white px-4 py-2 text-xs font-medium hover:bg-[#9a3412] text-center transition-colors"
                  >
                    Support Zahi's Work
                  </a>
                  <a
                    href="https://www.youtube.com/@zahishaked"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto rounded-full border-2 border-[#c2410c] px-4 py-2 text-xs font-medium text-[#c2410c] bg-transparent hover:bg-[#c2410c] hover:text-white text-center transition-colors"
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
            <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: "YouTube community", value: "190k+" },
                { label: "Years guiding", value: "24+" },
                { label: "Cities & regions", value: "Jerusalem, TLV, Galilee" },
                { label: "Style", value: "Personal & immersive" },
              ].map((stat, index) => (
                <div key={index} className="rounded-2xl bg-[#f5f2ed] border border-[#e5ddd4] p-3 md:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <dt className="text-xs text-[#3d3529] mb-1">{stat.label}</dt>
                  <dd className="text-lg md:text-xl font-bold text-[#1a1612] leading-tight">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
