"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImagePreview from "./ImagePreview";

interface ProductGalleryProps {
  alt: string;
  imageUrl: string | null;
  imageUrls?: string[] | null;
}

export default function ProductGallery({ alt, imageUrl, imageUrls }: ProductGalleryProps) {
  const galleryImages = useMemo(() => {
    const base = imageUrl ? imageUrl.replace(/\.avif$/, ".webp") : null;
    const images: string[] = [];
    if (imageUrls && imageUrls.length > 0) {
      imageUrls.forEach((img) => images.push(img.replace(/\.avif$/, ".webp")));
    } else if (base) {
      images.push(base);
      const match = base.match(/^(.*?)(0?1)(\.\w+)$/);
      if (match) {
        const prefix = match[1];
        const ext = match[3];
        const second = `${prefix}02${ext}`;
        const third = `${prefix}03${ext}`;
        images.push(second, third);
      }
    }
    return Array.from(new Set(images));
  }, [imageUrl, imageUrls]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const current = galleryImages[selectedIndex] || galleryImages[0];

  if (!current) return null;

  return (
    <div className="w-full">
      <div className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-b-none">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <ImagePreview
          src={current}
          alt={alt}
          images={galleryImages}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          open={open}
          setOpen={setOpen}
        />
        {galleryImages.length > 1 && (
          <div className="pointer-events-auto absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`h-3 w-3 rounded-full border border-white/70 shadow-sm transition ${
                  selectedIndex === idx ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Show image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
