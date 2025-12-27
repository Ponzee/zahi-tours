"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImagePreview from "./ImagePreview";

interface ProductGalleryProps {
  alt: string;
  imageUrl: string | null;
  imageUrls?: string[] | null;
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  open?: boolean;
  setOpen?: (value: boolean) => void;
  hoverLabel?: string;
  sidePanel?: React.ReactNode;
}

export default function ProductGallery({
  alt,
  imageUrl,
  imageUrls,
  selectedIndex,
  onSelect,
  open,
  setOpen,
  hoverLabel,
  sidePanel,
}: ProductGalleryProps) {
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

  const [internalSelectedIndex, setInternalSelectedIndex] = useState(0);
  const [internalOpen, setInternalOpen] = useState(false);

  const activeIndex = selectedIndex !== undefined ? selectedIndex : internalSelectedIndex;
  const setActiveIndex = onSelect !== undefined ? onSelect : setInternalSelectedIndex;

  const modalOpen = open !== undefined ? open : internalOpen;
  const setModalOpen = setOpen !== undefined ? setOpen : setInternalOpen;

  const current = galleryImages[activeIndex] || galleryImages[0];

  if (!current) return null;

  return (
    <div className="w-full">
      <div className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-b-none">
        {/* Render only the active image (avoid downloading/rendering hidden slides) */}
        <Image
          key={current}
          src={current}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          loading="lazy"
        />
        <ImagePreview
          src={current}
          alt={alt}
          images={galleryImages}
          selectedIndex={activeIndex}
          onSelect={setActiveIndex}
          open={modalOpen}
          setOpen={setModalOpen}
          hoverLabel={hoverLabel}
          sidePanel={sidePanel}
        />
        {galleryImages.length > 1 && (
          <div className="pointer-events-auto absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-6 w-6 md:h-7 md:w-7 rounded-full border border-white/70 shadow-sm transition-all duration-200 ${
                  activeIndex === idx ? "bg-white scale-105" : "bg-white/30 hover:bg-white/50"
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
