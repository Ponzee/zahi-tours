"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isShopPage = pathname?.startsWith("/shop");

  if (isShopPage) {
    // Shop pages: allow natural flow, footer appears after content
    return <>{children}</>;
  }

  // Other pages: use flex constraints for no-scroll layout
  return (
    <div className="flex-1 flex flex-col min-h-0">
      {children}
    </div>
  );
}

