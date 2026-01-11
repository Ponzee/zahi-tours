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

  // Different gradient backgrounds for each section
  const getGradient = () => {
    if (!pathname) return "bg-[#faf8f5]";
    
    // Home page - Option A: Subtle warm diagonal
    if (pathname === "/") {
      return "bg-gradient-to-br from-[#faf8f5] via-[#f5f2ed] to-[#efe9e1]";
    }
    
    // About page - Option B: Soft vertical gradient
    if (pathname === "/about") {
      return "bg-gradient-to-b from-[#faf8f5] to-[#f0ebe5]";
    }
    
    // Contact page - Option C: Warm horizontal gradient
    if (pathname === "/contact") {
      return "bg-gradient-to-r from-[#f5f2ed] via-[#faf8f5] to-[#f5f2ed]";
    }
    
    // Watch/Stories page - Option D: Subtle diagonal gradient
    if (pathname === "/watch") {
      return "bg-gradient-to-br from-[#f5f2ed] via-[#faf8f5] to-[#f0ebe5]";
    }
    
    // Support page - Option E: Warm diagonal reverse
    if (pathname === "/support") {
      return "bg-gradient-to-tl from-[#faf8f5] via-[#f5f2ed] to-[#efe9e1]";
    }
    
    // Shop page - Option F: Minimal vertical
    if (pathname.startsWith("/shop")) {
      return "bg-gradient-to-b from-[#faf8f5] to-[#f0ebe5]";
    }
    
    // Default fallback
    return "bg-[#faf8f5]";
  };

  const gradientClass = getGradient();

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

