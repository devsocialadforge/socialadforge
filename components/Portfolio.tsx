"use client";

import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations, useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import portfolioData from "@/data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const t = useTranslations("Portfolio");
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      // Animate header with scale and fade
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          scale: 0.9,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      // Animate carousel with slide and fade
      if (carouselRef.current && !isMobile) {
        gsap.from(carouselRef.current, {
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          },
          opacity: 0,
          y: 100,
          rotationX: 15,
          transformPerspective: 1000,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="portfolio" className="py-6 sm:py-12">
      <div ref={headerRef} dir={direction as "rtl" | "ltr"} className="text-center space-y-2">
        <p className="text-xs tracking-[0.22em] text-neutral-400 uppercase">
          {t("sectionLabel")}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-200">
          {t("title")}{" "}
          <span className="text-emerald-400">{t("titleHighlight")}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-neutral-400 text-xs md:text-sm">
          {t("subtitle")}
        </p>
      </div>

      <div ref={carouselRef} className="mx-auto mt-12 max-w-4xl px-12">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {portfolioData.map((project) => (
              <CarouselItem
                key={project.slug}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <div className="relative flex flex-col items-center gap-3 text-center p-4 group">
                  <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-neutral-800 bg-neutral-900/40 sm:h-24 sm:w-24 transition-all duration-300 group-hover:border-emerald-400">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      fill
                      sizes="96px"
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-full bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                      <p className="text-[0.65rem] font-semibold text-emerald-400 px-2 leading-tight">
                        {project.name}
                      </p>
                      <div className="flex gap-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.6rem] px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit
                          </a>
                        )}
                      </div>
                    </div>
                  </span>
                  <span className="text-[0.7rem] font-medium uppercase tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-emerald-400">
                    {project.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
