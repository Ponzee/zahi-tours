import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import SuppressWarnings from "@/components/SuppressWarnings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Holy Land - By Zahi Shaked",
  description: "Private, story-rich tours of the Holy Land with Zahi Shaked - expert guide, storyteller, and creator.",
  openGraph: {
    title: "The Holy Land - By Zahi Shaked",
    description: "Private, story-rich tours of the Holy Land with Zahi Shaked - expert guide, storyteller, and creator.",
    url: "https://zahi.tours",
    type: "website",
  },
  twitter: {
    title: "The Holy Land - By Zahi Shaked",
    description: "Private, story-rich tours of the Holy Land with Zahi Shaked - expert guide, storyteller, and creator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Suppress zustand warnings immediately before React loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && window.console) {
                  const originalWarn = console.warn;
                  console.warn = function(...args) {
                    const message = args.map(a => String(a)).join(' ');
                    if ((message.includes('[DEPRECATED]') || message.includes('DEPRECATED')) &&
                        (message.includes('zustand') || message.includes('Default export is deprecated'))) {
                      return;
                    }
                    originalWarn.apply(console, args);
                  };
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Suppress zustand deprecation warnings from Next.js internals (backup) */}
        <SuppressWarnings />
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
