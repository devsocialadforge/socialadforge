"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let rafId: number;

    // Dynamically import Lenis to avoid SSR issues
    import("lenis").then((module) => {
      const Lenis = module.default;

      lenisRef.current = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.5,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return null;
}
