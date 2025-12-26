import Image from "next/image";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
  variant?: "default" | "compact";
}

export default function VideoCard({ video, variant = "default" }: VideoCardProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch {
      return '';
    }
  };

  const isCompact = variant === "compact";

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden block flex-shrink-0"
      style={{ 
        width: isCompact ? '240px' : '100%', 
        minWidth: isCompact ? '240px' : 'auto',
        scrollSnapAlign: 'start',
        willChange: 'transform, box-shadow'
      }}
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-200" style={{ willChange: 'transform' }}>
        <Image
          src={video.thumbnailUrl || '/icon.png'}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
          sizes={isCompact ? "240px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          style={{ willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ willChange: 'opacity' }}>
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className={`${isCompact ? 'p-2' : 'p-3 md:p-4'}`}>
        <h3 className={`font-bold ${isCompact ? 'text-xs' : 'text-sm md:text-base'} tracking-tight text-[#1a1612] line-clamp-2 mb-1 group-hover:text-[#c2410c] transition-colors duration-150`}>
          {video.title}
        </h3>
        {video.publishedAt && !isCompact && (
          <p className="text-xs md:text-sm text-[#3d3529] mb-2">
            {formatDate(video.publishedAt)}
          </p>
        )}
        {video.description && !isCompact && (
          <p className="text-sm text-[#3d3529] line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        )}
      </div>
    </a>
  );
}

