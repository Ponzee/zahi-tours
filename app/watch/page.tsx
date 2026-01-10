import VideoCarousel from "@/components/video/VideoCarousel";
import { fetchLatestVideos, fetchMostViewedVideosLastYear } from "@/lib/youtube";
import type React from "react";

export const metadata = {
  title: "Watch | The Holy Land - By Zahi Shaked",
  description: "Explore Zahi's latest videos and most-watched classics from the Holy Land.",
};

export default async function WatchPage() {
  // Latest: refreshes every 6 hours. "Last year most watched": refreshes once per day.
  const [latestVideos, lastYearMostViewedVideos] = await Promise.all([
    fetchLatestVideos(12),
    fetchMostViewedVideosLastYear(12),
  ]);

  const PlaceholderRow = ({ title }: { title: string }) => (
    <div className="w-full">
      <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#1a1612] mb-3">
        {title}
      </h3>
      <div className="rounded-2xl border border-dashed border-[#e5ddd4] bg-white/50 p-6 text-sm text-[#8a7c6a] text-center">
        Coming soon.
      </div>
    </div>
  );

  const PlatformBlock = ({
    platform,
    children,
  }: {
    platform: string;
    children: React.ReactNode;
  }) => (
    <section className="rounded-2xl border border-[#e5ddd4] bg-[#faf8f5] p-4 md:p-6 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-headline text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1a1612]">
          {platform}
        </h2>
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <main className="flex-1 overflow-hidden flex flex-col">
        <section className="py-4 md:py-6 lg:py-8 flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612]">
                Watch
              </h1>
              <p className="mt-2 text-sm md:text-base text-[#3d3529] max-w-3xl leading-relaxed">
                Explore Zahi's latest videos and most-watched classics from the Holy Land.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <PlatformBlock platform="YouTube">
                <VideoCarousel title="Latest from YouTube" videos={latestVideos} />
                <VideoCarousel
                  title="Last Year Most Watched Classics"
                  videos={lastYearMostViewedVideos}
                />
              </PlatformBlock>

              <PlatformBlock platform="Facebook">
                <PlaceholderRow title="Latest from Facebook" />
                <PlaceholderRow title="Last Year Most Watched" />
              </PlatformBlock>

              <PlatformBlock platform="Instagram">
                <PlaceholderRow title="Latest from Instagram" />
                <PlaceholderRow title="Last Year Most Watched" />
              </PlatformBlock>

              <PlatformBlock platform="TikTok">
                <PlaceholderRow title="Latest from TikTok" />
                <PlaceholderRow title="Last Year Most Watched" />
              </PlatformBlock>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

