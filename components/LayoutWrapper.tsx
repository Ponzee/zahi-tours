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

  const backgroundImage = useMemo(() => {
    // Swap these as you add more images under /public/backgrounds/*
    if (!pathname || pathname === "/") return "/backgrounds/home.webp";
    if (pathname.startsWith("/watch")) return "/backgrounds/watch.webp";
    if (pathname.startsWith("/support")) return "/backgrounds/support.webp";
    if (pathname.startsWith("/about")) return "/backgrounds/about.webp";
    if (pathname.startsWith("/contact")) return "/backgrounds/contact.webp";
    if (pathname.startsWith("/shop")) return "/backgrounds/shop.webp";
    return null;
  }, [pathname]);

  const outerStyle = backgroundImage
    ? ({
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } as const)
    : undefined;

  if (isShopPage) {
    // Shop pages: natural document scroll; footer appears after content.
    // Option B: white "page surface" with off-white outside.
    return (
      <div
        className="relative bg-[#faf8f5] px-4 md:px-6 lg:px-8 py-4"
        style={outerStyle}
      >
        {backgroundImage && (
          <div
            className="pointer-events-none absolute inset-0 bg-[#faf8f5]/75"
            aria-hidden="true"
          />
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
      style={outerStyle}
    >
      {backgroundImage && (
        <div
          className="pointer-events-none absolute inset-0 bg-[#faf8f5]/75"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 flex-1 min-h-0 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden flex flex-col max-w-6xl mx-auto w-full h-full">
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        {footer}
      </div>
    </div>
  );
}

