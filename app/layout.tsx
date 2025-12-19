import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Holy Land – By Zahi Shaked",
  description: "Private, story-rich tours of the Holy Land with Zahi Shaked — expert guide, storyteller, and creator.",
  openGraph: {
    title: "The Holy Land – By Zahi Shaked",
    description: "Private, story-rich tours of the Holy Land with Zahi Shaked — expert guide, storyteller, and creator.",
    url: "https://zahi.tours",
    type: "website",
  },
  twitter: {
    title: "The Holy Land – By Zahi Shaked",
    description: "Private, story-rich tours of the Holy Land with Zahi Shaked — expert guide, storyteller, and creator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#c2410c] focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
