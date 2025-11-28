import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Private, story-rich tours of Jerusalem, Tel Aviv, the Galilee and the Dead Sea with licensed Israeli tour guide Zahi Shaked.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "The Holy Land – By Zahi Shaked",
    description: "Private, story-rich tours of Jerusalem, Tel Aviv, the Galilee and the Dead Sea with licensed Israeli tour guide Zahi Shaked.",
    url: "https://zahi.tours",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
