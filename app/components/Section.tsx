"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "transparent" | "dark" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
}

export default function Section({
  children,
  className = "",
  id,
  background = "transparent",
  padding = "lg",
}: SectionProps) {
  const backgroundClasses = {
    transparent: "",
    dark: "bg-black/50",
    gradient: "bg-gradient-to-b from-black/20 to-black/60",
  };

  const paddingClasses = {
    sm: "py-8 px-4",
    md: "py-12 px-4 sm:px-6",
    lg: "py-16 px-4 sm:px-6 lg:px-8",
    xl: "py-24 px-4 sm:px-6 lg:px-8",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      id={id}
      className={`relative w-full ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
