"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#e5ddd4] bg-white/90 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Go to homepage"
        >
          <Image
            src="/favicon.png"
            alt="Zahi Shaked Logo"
            width={40}
            height={40}
            className="rounded-xl pointer-events-none"
          />
          <span className="font-semibold tracking-tight text-sm sm:text-base text-[#1a1612] pointer-events-none">
            The Holy Land – By Zahi Shaked
          </span>
        </Link>
        <nav className="hidden md:flex gap-4 lg:gap-6 text-sm items-center flex-1 justify-center">
          <a href="/#tours" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Watch</a>
          <a href="/support" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Support</a>
          <a href="/shop" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Shop</a>
          <a href="/#about" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">About</a>
          <a href="/#contact" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <AuthButton />
          <a
            href="/#contact"
            className="rounded-full bg-[#c2410c] text-white text-sm px-4 py-2 hover:bg-[#9a3412] whitespace-nowrap transition-colors"
          >
            Request a Private Tour
          </a>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg px-3 py-2 text-sm font-medium text-[#1a1612] hover:bg-[#f5f2ed] transition-colors"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5ddd4] bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="/#tours" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Watch</a>
            <a href="/support" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</a>
            <a href="/shop" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Shop</a>
            <a href="/#about" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/#contact" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <div className="pt-2 border-t border-[#e5ddd4]">
              <AuthButton />
            </div>
            <a href="/#contact" className="mt-2 py-2 text-sm font-medium text-center rounded-full bg-[#c2410c] text-white hover:bg-[#9a3412] transition-colors" onClick={() => setMobileMenuOpen(false)}>Request a Private Tour</a>
          </nav>
        </div>
      )}
    </header>
  );
}

