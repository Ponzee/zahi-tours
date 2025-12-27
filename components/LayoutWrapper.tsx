"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function LayoutWrapper({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const isShopPage = pathname?.startsWith("/shop");

  const bg = useMemo(() => {
    // IMPORTANT: "cover" will ALWAYS fill 100% of the area, but it will crop.
    // To prevent the "zoomed" feeling, we tune the focal point (backgroundPosition) per section image.
    if (!pathname || pathname === "/")
      return { src: "/backgrounds/home.webp", position: "center 25%" };
    if (pathname.startsWith("/watch"))
      return { src: "/backgrounds/watch.webp", position: "center" };
    if (pathname.startsWith("/support"))
      return { src: "/backgrounds/support.webp", position: "center" };
    if (pathname.startsWith("/about"))
      return { src: "/backgrounds/about.webp", position: "center" };
    if (pathname.startsWith("/contact"))
      return { src: "/backgrounds/contact.webp", position: "center" };
    if (pathname.startsWith("/shop"))
      return { src: "/backgrounds/shop.webp", position: "center" };
    return null;
  }, [pathname]);

  const containStyle = bg
    ? ({
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } as const)
    : undefined;

  if (isShopPage) {
    // Shop pages: natural document scroll; footer appears after content.
    // Option B: white "page surface" with off-white outside.
    return (
      <div
        className="relative bg-[#faf8f5] px-4 md:px-6 lg:px-8 py-4 overflow-hidden"
      >
        {bg?.src && (
          <>
            {/* Show the full image (no crop) */}
            <div
              className="pointer-events-none absolute inset-0"
              style={containStyle}
              aria-hidden="true"
            />
          </>
        )}
        <div className="relative z-10 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden max-w-6xl mx-auto w-full">
          {children}
          {footer}
        </div>
      </div>
    );
  }

  // Other pages: no-scroll layout; footer stays visible.
  // Option B: white "page surface" with off-white outside.
  return (
    <div
      className="relative flex-1 min-h-0 bg-[#faf8f5] px-4 md:px-6 lg:px-8 py-4 overflow-hidden"
    >
      {bg?.src && (
        <>
          {/* Show the full image (no crop) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={containStyle}
            aria-hidden="true"
          />
        </>
      )}
      <div className="relative z-10 flex-1 min-h-0 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden flex flex-col max-w-6xl mx-auto w-full h-full">
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        {footer}
      </div>
    </div>
  );
}

