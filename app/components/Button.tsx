"use client";

// Removed Motion - using CSS animations instead
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline:
      "border border-white/20 hover:border-white/40 text-white backdrop-blur-sm hover:bg-white/5",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <span className="w-full h-full flex items-center justify-center transform transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
