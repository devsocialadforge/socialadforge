"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const t = useTranslations("Header");
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    if (!headerRef.current) return;

    // Check if mobile - skip ScrollTrigger on mobile
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      // On mobile, set normal opacity (no scroll trigger)
      gsap.set(headerRef.current, { opacity: 1 });
    } else {
      // On desktop, start with opacity 1 and fade out on scroll
      gsap.set(headerRef.current, { opacity: 1 });

      const scrollTrigger = ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        end: "400px top",
        scrub: true,
        onUpdate: (self) => {
          // Smoothly decrease opacity based on scroll progress
          const opacity = Math.max(1 - self.progress, 0);
          gsap.set(headerRef.current, { opacity });
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/icon1.png"
              alt="SocialAdForge Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-semibold text-neutral-200">
              SocialAdForge
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t("home")}
            </a>
            <a
              href="#services"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t("portfolio")}
            </a>
            <a
              href="#about"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t("about")}
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t("contact")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("services")}
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("portfolio")}
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("about")}
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
