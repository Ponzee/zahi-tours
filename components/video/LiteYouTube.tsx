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
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const thumbnailUrl = useMemo(() => {
    // i.ytimg.com is already allowed in next.config.ts remotePatterns
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }, [videoId]);

  const iframeSrc = useMemo(() => {
    // Fast + clean default behavior
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  return (
    <div className={`lite-yt relative w-full ${className}`} data-loaded={iframeLoaded ? "true" : "false"}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {/* Background-load the iframe immediately, but keep the thumbnail visible until the player is ready. */}
        <iframe
          src={iframeSrc}
          className="lite-yt-iframe absolute top-0 left-0 w-full h-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
          loading="eager"
          onLoad={() => setIframeLoaded(true)}
        />

        <div className="lite-yt-thumb absolute inset-0" aria-hidden={iframeLoaded}>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  );
}


