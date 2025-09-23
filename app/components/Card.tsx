"use client";

// Removed Motion - using CSS animations instead
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      style={delayStyle}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in-up ${
        hover
          ? "hover:transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
