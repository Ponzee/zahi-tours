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
    <div className="h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden flex flex-col">
        <section className="py-4 md:py-6 lg:py-8 bg-white flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612]">
                Watch
              </h1>
              <p className="mt-2 text-sm md:text-base text-[#3d3529] max-w-2xl">
                Explore Zahi's latest videos and most-watched classics from the Holy Land.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <VideoCarousel title="Latest from YouTube" videos={latestVideos} />
              <VideoCarousel title="Most Watched Classics" videos={mostViewedVideos} />
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}

