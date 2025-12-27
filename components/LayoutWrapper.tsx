"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const isShopPage = pathname?.startsWith("/shop");

  if (isShopPage) {
    // Shop pages: natural document scroll; footer appears after content.
    // Option B: white "page surface" with off-white outside.
    return (
      <div className="bg-[#faf8f5] px-4 md:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden max-w-6xl mx-auto w-full">
          {children}
          {footer}
        </div>
      </div>
    );
  }

  // Other pages: no-scroll layout; footer stays visible.
  // Option B: white "page surface" with off-white outside.
  return (
    <div className="flex-1 min-h-0 bg-[#faf8f5] px-4 md:px-6 lg:px-8 py-4 overflow-hidden">
      <div className="flex-1 min-h-0 bg-white rounded-2xl border border-[#e5ddd4] shadow-sm overflow-hidden flex flex-col max-w-6xl mx-auto w-full h-full">
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        {footer}
      </div>
    </div>
  );
}

