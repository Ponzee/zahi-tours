"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import ImagePreview from "./ImagePreview";

interface ProductGalleryProps {
  alt: string;
  imageUrl: string | null;
  imageUrls?: string[] | null;
}

export default function ProductGallery({ alt, imageUrl, imageUrls }: ProductGalleryProps) {
  const galleryImages = useMemo(() => {
    const images: string[] = [];
    
    // If image_urls array is provided, use it directly
    if (imageUrls && imageUrls.length > 0) {
      imageUrls.forEach((img) => images.push(img.replace(/\.avif$/, ".webp")));
      return images;
    }
    
    // Otherwise, try to auto-detect images from base imageUrl
    const base = imageUrl ? imageUrl.replace(/\.avif$/, ".webp") : null;
    if (base) {
      images.push(base);
      
      // Try to detect numbered images (01, 02, 03 pattern)
      // Supports both old format: /shop/product01.webp
      // and new format: /shop/product/product-01.webp
      const match = base.match(/^(.*?)(?:-)?(0?1)(\.\w+)$/);
      if (match) {
        const prefix = match[1];
        const ext = match[3];
        const separator = base.includes('/' + prefix.split('/').pop() + '-') ? '-' : '';
        const second = `${prefix}${separator}02${ext}`;
        const third = `${prefix}${separator}03${ext}`;
        images.push(second, third);
      }
    }
    
    return Array.from(new Set(images));
  }, [imageUrl, imageUrls]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  // Preload all images when component mounts
  useEffect(() => {
    galleryImages.forEach((imgSrc) => {
      const img = new window.Image();
      img.src = imgSrc;
      img.onload = () => {
        setImagesLoaded((prev) => new Set(prev).add(imgSrc));
      };
    });
  }, [galleryImages]);

  const current = galleryImages[selectedIndex] || galleryImages[0];

  if (!current) return null;

  return (
    <div className="w-full">
      <div className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-b-none">
        {/* Render all images with opacity transition for smooth switching */}
        {galleryImages.map((imgSrc, idx) => (
          <Image
            key={imgSrc}
            src={imgSrc}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-300 ${
              idx === selectedIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading={idx === 0 ? "eager" : "lazy"}
            priority={idx === 0}
          />
        ))}
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
                className={`h-12 w-12 rounded-full border-2 border-white/70 shadow-sm transition-all duration-200 ${
                  selectedIndex === idx ? "bg-white scale-110" : "bg-white/30 hover:bg-white/50"
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
