"use client";

import * as React from "react";
import clsx from "clsx";

type RoboBgProps = {
  /** Spline embed URL (my.spline.design/...) */
  src?: string;
  /** Extra classes for positioning tweaks (z-index, opacity etc.) */
  className?: string;
  /** Background opacity (0–100). Default 100 */
  opacity?: number;
  /** Tailwind blur amount like 'sm','md','lg','xl','2xl'. Default none */
  blur?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Allow users to interact with the scene (mouse drag). Default false */
  interactive?: boolean;
  /** Hide on mobile to save data/CPU. Default false */
  hideOnMobile?: boolean;
  /** Optional static fallback (e.g., /bg/robot-fallback.jpg) for reduced-motion */
  fallbackImageSrc?: string;
};

export default function RoboBg({
  src = "https://my.spline.design/nexbotrobotcharacterconcept-kLwr8f6hgKgaa5gmU6oB00Si",
  className,
  opacity = 100,
  blur,
  interactive = false,
  hideOnMobile = false,
  fallbackImageSrc,
}: RoboBgProps) {
  const [prefersReducedMotion, setPRM] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPRM(mq.matches);
    const handler = () => setPRM(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const base = clsx(
    "absolute inset-0 w-full h-full",
    "fixed inset-0 w-full h-svh",
    "z-[-1]",
    "z-0",
    interactive ? "pointer-events-auto" : "pointer-events-none",
    // Smooth edges
    "will-change-transform"
  );

  const fx = clsx(
    // Optional blur/opacity overlay layer on top of the iframe
    "absolute inset-0",
    blur ? `backdrop-blur-${blur}` : null,
    opacity < 100 ? `opacity-${Math.max(0, Math.min(100, opacity))}` : null,
    opacity < 100 ? `opacity-${Math.max(0, Math.min(100, opacity))}` : null

  const hiddenOnMobile = hideOnMobile ? "hidden sm:block" : "";

  // Static fallback for reduced-motion users
  if (prefersReducedMotion) {
    return (
      <div className={clsx(base, hiddenOnMobile, className)}>
        {fallbackImageSrc ? (
          // Using plain img to keep it framework-agnostic; swap to next/image if you prefer
          <img
            src={fallbackImageSrc}
            alt="Robotic abstract background"
            className="absolute inset-0 h-full w-full object-cover z-0"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // Minimal GPU-friendly gradient grid fallback
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,#1f2937_0%,#0b1020_60%,#05070f_100%)] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,#1f2937_0%,#0b1020_60%,#05070f_100%)]" />
        <div className={fx} />
      </div>
    );
  }

  return (
    <div className={clsx(base, hiddenOnMobile, className)}>
      {/* Spline scene */}
      <iframe
        src={src}
        title="Robotic 3D Background"
        className="absolute inset-0 h-full w-full border-0 z-0"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        // keep scroll from stealing focus
        tabIndex={-1}
        // sandbox keeps it safe but lets it render WebGL
        sandbox="allow-scripts allow-same-origin"
      />
      <div className={fx} />
    </div>
  );
}
