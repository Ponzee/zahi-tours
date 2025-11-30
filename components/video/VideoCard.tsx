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
      className="group rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-md transition-all overflow-hidden block flex-shrink-0"
      style={{ 
        width: isCompact ? '280px' : '100%', 
        minWidth: isCompact ? '280px' : 'auto',
        scrollSnapAlign: 'start'
      }}
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-200">
        <Image
          src={video.thumbnailUrl || '/favicon.png'}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes={isCompact ? "280px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className={`${isCompact ? 'p-3' : 'p-4 md:p-5'}`}>
        <h3 className={`font-bold ${isCompact ? 'text-sm' : 'text-base md:text-lg'} tracking-tight text-[#1a1612] line-clamp-2 mb-2 group-hover:text-[#c2410c] transition-colors`}>
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

