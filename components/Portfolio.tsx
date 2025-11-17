"use client"

import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations, useLocale } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const portfolioTools = [
  { name: "PixelLab", logo: "/images/pixellab.svg" },
  { name: "Canva", logo: "/images/canva.svg" },
  { name: "Lightroom", logo: "/images/lightroom.svg" },
  { name: "InspirePro", logo: "/images/inspirepro.svg" },
];

export default function Portfolio() {
  const t = useTranslations('Portfolio');
  const locale = useLocale();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section dir={direction as "rtl" | "ltr"} className="py-16 sm:py-20">
      <div className="text-center space-y-2">
        <p className="text-xs tracking-[0.22em] text-neutral-400 uppercase">
          {t('sectionLabel')}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-200">
          {t('title')} <span className="text-emerald-400">{t('titleHighlight')}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-neutral-400 text-xs md:text-sm">
          {t('subtitle')}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl px-12">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {portfolioTools.map((tool) => (
              <CarouselItem key={tool.name} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col items-center gap-3 text-center p-4">
                  <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-neutral-800 bg-neutral-900/40 sm:h-24 sm:w-24">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      sizes="96px"
                      className="p-3 object-contain"
                    />
                  </span>
                  <span className="text-[0.7rem] font-medium uppercase tracking-wide text-neutral-500">
                    {tool.name}
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