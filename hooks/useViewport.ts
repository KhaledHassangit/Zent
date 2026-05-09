// hooks/useViewport.ts
import { useState, useEffect } from "react";

interface UseViewportProps {
  onResizeMobile?: () => void; // Callback to close mobile menu when resizing to desktop
  scrollThreshold?: number;
}

export const useViewport = ({ onResizeMobile, scrollThreshold = 20 }: UseViewportProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      setIsScrolled(scrolled);
    };

    const onResize = () => {
      // Logic: If screen is large (desktop), execute the callback (close menu)
      if (window.innerWidth >= 768 && onResizeMobile) {
        onResizeMobile();
      }
    };

    // Initial check
    onScroll();
    
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [scrollThreshold, onResizeMobile]);

  return isScrolled;
};