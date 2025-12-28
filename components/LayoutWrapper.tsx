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
    const fallback = {
      desktopSrc: "/backgrounds/home.webp",
      mobileSrc: "/backgrounds/home.webp",
      desktopPos: "center",
      mobilePos: "center",
    };

    // Option 1 (chosen): use a WIDE desktop background per section so "cover" doesn't feel zoomed/cropped.
    // Also allow a different mobile image (portrait/taller crop).
    //
    // For now, only home.webp exists, so we use it for both. When you add files like:
    // - /public/backgrounds/home-desktop.webp (wide)
    // - /public/backgrounds/home-mobile.webp (taller)
    // swap the srcs below and it will look great on every monitor.
    // For now: ONLY the homepage uses the background image.
    // Other pages should use the simple solid background until you decide.
    if (!pathname || pathname === "/") return fallback;
    return null;
  }, [pathname]);

  const desktopBgStyle = bg
    ? ({
        backgroundImage: `url(${bg.desktopSrc})`,
        backgroundSize: "cover",
        backgroundPosition: bg.desktopPos,
        backgroundRepeat: "no-repeat",
      } as const)
    : undefined;

  const mobileBgStyle = bg
    ? ({
        backgroundImage: `url(${bg.mobileSrc})`,
        backgroundSize: "cover",
        backgroundPosition: bg.mobilePos,
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
        {bg && (
          <>
            {/* One visible background per breakpoint (no overlays / no extra layers). */}
            <div className="pointer-events-none absolute inset-0 md:hidden" style={mobileBgStyle} aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 hidden md:block" style={desktopBgStyle} aria-hidden="true" />
          </>
        )}
        <div className="relative z-10 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden max-w-7xl mx-auto w-full">
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
      {bg && (
        <>
          {/* One visible background per breakpoint (no overlays / no extra layers). */}
          <div className="pointer-events-none absolute inset-0 md:hidden" style={mobileBgStyle} aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 hidden md:block" style={desktopBgStyle} aria-hidden="true" />
        </>
      )}
      <div className="relative z-10 flex-1 min-h-0 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden flex flex-col max-w-7xl mx-auto w-full h-full">
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        {footer}
      </div>
    </div>
  );
}

