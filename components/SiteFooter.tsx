"use client";

import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e5ddd4] bg-white py-6 px-4 text-sm text-[#3d3529]">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {year} The Holy Land – By Zahi Shaked.</p>
        <div className="flex flex-wrap items-center gap-4 text-[#1a1612]">
          <Link href="/privacy" className="hover:text-[#c2410c] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#c2410c] transition-colors">
            Terms of Service
          </Link>
          <a
            href="mailto:zahishaked@gmail.com"
            className="hover:text-[#c2410c] transition-colors"
          >
            zahishaked@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
