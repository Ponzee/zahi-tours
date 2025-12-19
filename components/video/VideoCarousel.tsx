"use client";

import { useRef, useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoCarouselProps {
  title: string;
  videos: YouTubeVideo[];
}

export default function VideoCarousel({ title, videos }: VideoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);

    return () => {
      container.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [videos]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = 320; // Approximate card width including gap
    const scrollAmount = cardWidth;
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Skeleton card component for loading/empty state
  const SkeletonCard = () => (
    <div
      className="flex-shrink-0 rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] overflow-hidden"
      style={{ width: '280px', minWidth: '280px', scrollSnapAlign: 'start' }}
    >
      <div className="relative aspect-video bg-gradient-to-br from-[#e5ddd4] to-[#d4c9bc] animate-pulse" />
      <div className="p-3">
        <div className="h-4 bg-[#e5ddd4] rounded mb-2 animate-pulse" />
        <div className="h-4 bg-[#e5ddd4] rounded w-3/4 animate-pulse" />
      </div>
    </div>
  );

  // Show skeleton cards when no videos (better UX than just text)
  const displayVideos = videos.length > 0 ? videos : Array(6).fill(null);

  return (
    <div className="w-full">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612] mb-6">
        {title}
      </h3>
      
      <div className="relative">
        {/* Left scroll button - desktop only */}
        {showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/95 backdrop-blur border border-[#e5ddd4] shadow-lg hover:bg-white hover:shadow-xl transition-all text-[#1a1612] hover:text-[#c2410c] focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-1"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {displayVideos.map((video, index) => 
            video ? (
              <VideoCard key={video.id} video={video} variant="compact" />
            ) : (
              <SkeletonCard key={`skeleton-${index}`} />
            )
          )}
        </div>
        
        {/* Show message below carousel when no videos */}
        {videos.length === 0 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-[#3d3529]">
              Configure YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID in Vercel to see videos.
            </p>
          </div>
        )}

        {/* Right scroll button - desktop only */}
        {showRightButton && (
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/95 backdrop-blur border border-[#e5ddd4] shadow-lg hover:bg-white hover:shadow-xl transition-all text-[#1a1612] hover:text-[#c2410c] focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

