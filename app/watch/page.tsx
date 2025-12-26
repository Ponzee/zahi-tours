import Header from "@/components/Header";
import VideoCarousel from "@/components/video/VideoCarousel";
import { fetchLatestVideos, fetchMostViewedVideos } from "@/lib/youtube";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Watch | The Holy Land - By Zahi Shaked",
  description: "Explore Zahi's latest videos and most-watched classics from the Holy Land.",
};

export default async function WatchPage() {
  // Fetch both latest and most viewed videos server-side (cached for 1 hour)
  const [latestVideos, mostViewedVideos] = await Promise.all([
    fetchLatestVideos(6),
    fetchMostViewedVideos(6),
  ]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
                Watch
              </h1>
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
      </main>
      <SiteFooter />
    </div>
  );
}

