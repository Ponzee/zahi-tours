"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function LiteYouTube({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [activated, setActivated] = useState(false);

  const thumbnailUrl = useMemo(() => {
    // i.ytimg.com is already allowed in next.config.ts remotePatterns
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }, [videoId]);

  const iframeSrc = useMemo(() => {
    // Fast + clean default behavior
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {activated ? (
          <iframe
            src={iframeSrc}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={title}
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="absolute inset-0 w-full h-full text-left"
            aria-label={`Play ${title}`}
          >
            <span className="absolute inset-0">
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority={false}
              />
              <span className="absolute inset-0 bg-black/20" />
            </span>

            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white ml-0.5"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Play
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}


