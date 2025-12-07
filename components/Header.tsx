"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();

  return (
    <header className="border-b border-[#e5ddd4] bg-white/90 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Go to homepage"
        >
          <Image
            src="/icon.png"
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
          <Link href="/#tours" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Watch</Link>
          <Link href="/support" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Support</Link>
          <Link href="/shop" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Shop</Link>
          <Link href="/#about" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-[#c2410c] whitespace-nowrap transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/shop/cart"
            className="relative p-2 hover:bg-[#f5f2ed] rounded-lg transition-colors"
            aria-label="Shopping cart"
          >
            <svg
              className="w-6 h-6 text-[#1a1612]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c2410c] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount > 9 ? "9+" : cartItemCount}
              </span>
            )}
          </Link>
          <AuthButton />
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
            <Link href="/#tours" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Watch</Link>
            <Link href="/support" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</Link>
            <Link href="/shop" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/#about" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/#contact" className="py-2 text-sm font-medium text-[#1a1612] hover:text-[#c2410c] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <div className="pt-2 border-t border-[#e5ddd4] flex items-center gap-3">
              <Link
                href="/shop/cart"
                className="relative p-2 hover:bg-[#f5f2ed] rounded-lg transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 text-[#1a1612]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-[#1a1612]">Cart</span>
                {cartItemCount > 0 && (
                  <span className="bg-[#c2410c] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </Link>
              <AuthButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
