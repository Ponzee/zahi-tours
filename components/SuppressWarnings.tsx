"use client";

import { useEffect } from "react";

export default function SuppressWarnings() {
  useEffect(() => {
    // Only suppress in development
    if (process.env.NODE_ENV !== "development") return;

    // Intercept console.warn immediately
    const originalWarn = console.warn;
    
    console.warn = function (...args: any[]) {
      // Convert all arguments to string for checking
      const message = args.map(arg => 
        typeof arg === 'string' ? arg : String(arg)
      ).join(" ");
      
      // Filter out zustand deprecation warnings from Next.js internals
      // Check for various forms of the message
      if (
        (message.includes("[DEPRECATED]") || message.includes("DEPRECATED")) &&
        (message.includes("zustand") || message.includes("Default export is deprecated"))
      ) {
        return; // Suppress this warning
      }
      
      // Also check if any argument contains the zustand deprecation message
      const hasZustandDeprecation = args.some(arg => {
        const str = String(arg);
        return (str.includes("[DEPRECATED]") || str.includes("DEPRECATED")) &&
               (str.includes("zustand") || str.includes("Default export is deprecated"));
      });
      
      if (hasZustandDeprecation) {
        return; // Suppress this warning
      }
      
      originalWarn.apply(console, args);
    };

    // Also intercept console.error in case warnings come through there
    const originalError = console.error;
    console.error = function (...args: any[]) {
      const message = args.map(arg => 
        typeof arg === 'string' ? arg : String(arg)
      ).join(" ");
      
      if (
        (message.includes("[DEPRECATED]") || message.includes("DEPRECATED")) &&
        (message.includes("zustand") || message.includes("Default export is deprecated"))
      ) {
        return;
      }
      
      originalError.apply(console, args);
    };

    // Cleanup on unmount
    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  return null; // This component doesn't render anything
}

