"use client";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
// Drop this file into: app/components/HeroDark.tsx (Next.js App Router)
// Usage: <HeroDark />
// If you're not using shadcn yet, replace Button with a standard <button>.
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      let heroSplit: SplitText | null = null;
      let paragraphSplit: SplitText | null = null;
      const scrollTriggers: ScrollTrigger[] = [];

      // Skip SplitText for RTL languages to avoid character order issues
      if (isRTL) {
        // Simple fade-in animation for Arabic
        gsap.from([".titlex", ".subtitle", ".subtitle1"], {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.15,
        });
      } else {
        // Full SplitText animation for LTR languages
        heroSplit = new SplitText(".titlex", { type: "chars,words" });
        paragraphSplit = new SplitText(".subtitle, .subtitle1", {
          type: "lines",
        });

        // Animate title characters
        gsap.from(heroSplit.chars, {
          opacity: 0,
          y: 30,
          stagger: 0.05,
          duration: 0.6,
          ease: "expo.out",
        });

        // Animate paragraph lines
        gsap.from(paragraphSplit.lines, {
          opacity: 0,
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
          delay: 1,
        });
      }

      // Disable ScrollTrigger animation for small screens (mobile)
      if (window.innerWidth >= 640) {
        // 640px = Tailwind 'sm' breakpoint
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
          .to(".right-leaf", { y: -200 }, 0)
          .to(".left-leaf", { y: 200 }, 0);

        if (tl.scrollTrigger) {
          scrollTriggers.push(tl.scrollTrigger);
        }

        ScrollTrigger.refresh();
      } else {
        // On mobile, ensure leaves stay at y: 0 (no scroll-based animation)
        gsap.set(".right-leaf", { y: 0 });
        gsap.set(".left-leaf", { y: 0 });
      }

      // Cleanup function
      return () => {
        // Kill ScrollTriggers first
        scrollTriggers.forEach((st) => st.kill());

        // Then revert SplitText
        if (heroSplit) heroSplit.revert();
        if (paragraphSplit) paragraphSplit.revert();
      };
    },
    { dependencies: [locale], scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative mb-5 isolate overflow-hidden  text-white"
      id="hero"
    >
      {/* background gradient tint */}
      <div className="pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-7xl px-6  md:py-28">
        <div className=" grid-row-revers md:grid mx-auto justify-center  items-center gap-12 md:grid-cols-2">
          {/* Image side */}
          <div className="relative order-1 right-leaf md:order-none">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl  ">
              {/* Portrait (replace src with your image). In Next.js: use next/image if you prefer */}
              <Image
                src="/images/hero-portrait.webp"
                alt="Portrait"
                className="h-full w-full object-cover object-center opacity-90"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Text side */}
          <div
            key={locale}
            className={`max-w-xl left-leaf ${
              isRTL ? "text-right" : "text-left"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <p className="mb-3 text-xs tracking-[0.22em] text-neutral-400 subtitle ">
              {t("label")}
            </p>
            <h1 className="text-4xl font-extrabold titlex leading-tight sm:text-5xl">
              {isRTL ? (
                <>
                  <span className="text-emerald-400">{t("name")}</span>{" "}
                  {t("greeting")}
                </>
              ) : (
                <>
                  {t("greeting")}{" "}
                  <span className="text-emerald-400">{t("name")}</span>
                </>
              )}
            </h1>
            <p className="mt-4 subtitle hidden md:block text-neutral-300/90">
              {t("description")}
            </p>
            <div
              className={`mt-6 flex flex-wrap items-center gap-4 ${
                isRTL ? "justify-end" : ""
              }`}
            >
              <div
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300">
                  {t("contactButton")}
                </Button>

                {/* Social icons overlay */}
                {isHovered && (
                  <div className="absolute top-full left-0 pt-2 pb-0">
                    <div className="flex gap-2 bg-neutral-900 border border-white/10 rounded-lg p-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      <a
                        href="https://wa.me/+919645551315"
                        className="p-2 hover:hover:bg-white rounded-md transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="text-emerald-400" size={20} />
                      </a>
                      <a
                        href="mailto:contact@socialadforge.com"
                        className="p-2 hover:bg-white rounded-md transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="text-emerald-400" size={20} />
                      </a>
                      <a
                        href="https://instagram.com/socialadforge"
                        className="p-2 hover:bg-white rounded-md transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="text-emerald-400" size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#portfolio"
                className="text-sm text-neutral-300 underline-offset-4 hover:underline"
              >
                {t("viewPortfolio")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-t hidden md:block border-white/5 bg-gradient-to-r from-neutral-950 to-neutral-900/90">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {["badge1", "badge2", "badge3", "badge4", "badge5"].map((badge) => (
              <span
                key={badge}
                className="text-sm font-medium tracking-wide text-neutral-400"
              >
                {t(`badges.${badge}`)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Rounded page corners like the reference */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
    </section>
  );
}

// Quick Tailwind tips for a perfect match:
// - Put this section inside a container with className="min-h-screen bg-black" to fill the viewport.
// - Replace /hero-portrait.jpg with your image (e.g., /mike.jpg). 4:5 ratio looks best.
// - Fine-tune the emerald tint by adjusting the radial-gradient and mask widths.
