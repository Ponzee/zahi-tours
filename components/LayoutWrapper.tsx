"use client";

import { usePathname } from "next/navigation";
import FollowSupportBlock from "@/components/FollowSupportBlock";

export default function LayoutWrapper({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const isShopPage = pathname?.startsWith("/shop");
  const showFollowSupport =
    !!pathname &&
    pathname !== "/" &&
    ["/watch", "/support", "/shop", "/about", "/contact"].some((p) =>
      pathname.startsWith(p)
    );

  // Unified gradient background for all sections (shop style)
  const gradientClass = "bg-gradient-to-b from-[#faf8f5] to-[#f0ebe5]";

  if (isShopPage) {
    // Shop pages: natural document scroll; footer appears after content.
    return (
      <div
        className={`relative ${gradientClass} px-4 md:px-6 lg:px-8 py-4 overflow-hidden`}
      >
        <div className="relative z-10 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden max-w-7xl mx-auto w-full">
          {children}
          {showFollowSupport && <FollowSupportBlock />}
          {footer}
        </div>
      </div>
    );
  }

  // Other pages: no-scroll layout; footer stays visible.
  return (
    <div
      className={`relative flex-1 min-h-0 ${gradientClass} px-4 md:px-6 lg:px-8 py-4 overflow-hidden`}
    >
      <div className="relative z-10 flex-1 min-h-0 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden flex flex-col max-w-7xl mx-auto w-full h-full">
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        {showFollowSupport && <FollowSupportBlock />}
        {footer}
      </div>
    </div>
  );
}

