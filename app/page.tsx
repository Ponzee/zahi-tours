import Image from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export default async function HomePage() {
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
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
