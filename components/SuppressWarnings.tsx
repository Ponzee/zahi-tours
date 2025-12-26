"use client";

import { useEffect } from "react";

export default function SuppressWarnings() {
  useEffect(() => {
    // Only suppress in development
    if (process.env.NODE_ENV !== "development") return;

    const originalWarn = console.warn;
    console.warn = function (...args: any[]) {
      const message = args.join(" ");
      // Filter out zustand deprecation warnings from Next.js internals
      if (
        message.includes("[DEPRECATED] Default export is deprecated") &&
        message.includes("zustand")
      ) {
        return; // Suppress this warning
      }
      originalWarn.apply(console, args);
    };

    // Cleanup on unmount
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return null; // This component doesn't render anything
}

