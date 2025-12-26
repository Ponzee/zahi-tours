"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SectionNavigator() {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Handle hash navigation on mount
    if (typeof window !== "undefined") {
      // Handle initial hash
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        setTimeout(() => scrollToSection(hash), 100);
      }

      // Make scrollToSection available globally for header links
      (window as any).scrollToSection = scrollToSection;

      // Handle hash changes
      const handleHashChange = () => {
        if (window.location.hash) {
          const hash = window.location.hash.substring(1);
          scrollToSection(hash);
        }
      };

      window.addEventListener("hashchange", handleHashChange);

      // Prevent default scroll behavior
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY;
        const sections = ["tours", "watch", "about", "contact"];
        const currentSection = getCurrentSection(sections);
        
        if (delta > 0) {
          // Scroll down - next section
          scrollToNextSection(currentSection, sections);
        } else {
          // Scroll up - previous section
          scrollToPreviousSection(currentSection, sections);
        }
      };

      window.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [pathname]);

  const getCurrentSection = (sections: string[]): string | null => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          return sectionId;
        }
      }
    }
    
    // If no section found, return first visible
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          return sectionId;
        }
      }
    }
    
    return sections[0] || null;
  };

  const scrollToNextSection = (currentSection: string | null, sections: string[]) => {
    if (!currentSection) {
      scrollToSection(sections[0]);
      return;
    }
    
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1]);
    }
  };

  const scrollToPreviousSection = (currentSection: string | null, sections: string[]) => {
    if (!currentSection) {
      scrollToSection(sections[0]);
      return;
    }
    
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1]);
    }
  };

  return null;
}

