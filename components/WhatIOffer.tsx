"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Sparkles, 
  Layout, 
  BarChart3, 
  Palette, 
  Megaphone 
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations , useLocale } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIOffer() {
  const t = useTranslations('Services');
  const cardsRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  useGSAP(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.service-card');
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    cards.forEach((card, index) => {
      // Left column cards (index 0, 2) slide from left
      // Right column cards (index 1, 3) slide from right
      const xStart = index % 2 === 0 ? -100 : 100;
      
      if (isMobile) {
        // On mobile: simple fade-in without ScrollTrigger
        gsap.fromTo(
          card,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.1,
          }
        );
      } else {
        // On desktop: use ScrollTrigger with slide animations
        gsap.fromTo(
          card,
          {
            x: xStart,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              end: "top 40%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, { scope: cardsRef });

  return (
    <section dir={direction as "rtl" | "ltr"} className="md:py-16">
      <div className="space-y-6">
        {/* Header */}
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

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-2 gap-3 md:gap-10">
          {/* Digital Marketing Card */}
          <Card className="service-card bg-neutral-900/50 relative border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <Megaphone className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">{t('digitalMarketing.title')}</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                {t('digitalMarketing.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul  className="space-y-1 text-xs md:text-sm  text-neutral-400">
                <li className="flex items-start">
                  <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span >{t('digitalMarketing.point1')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('digitalMarketing.point2')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('digitalMarketing.point3')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('digitalMarketing.point4')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('digitalMarketing.point5')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('digitalMarketing.point6')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('digitalMarketing.point7')}</span>
                </li>
              </ul>
            </CardContent>
            <Image src="/images/jerry-2.png" className={`absolute hidden ${direction === "ltr" ?"":"md:block"} bottom-[-15] md:right-[-85] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />
            <Image src="/images/tom-2.png" className={`absolute hidden ${direction === "ltr" ?"md:block":""} bottom-[-15] md:right-[185] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />
          </Card>

          {/* Website Development Card */}
          <Card className=" service-card  bg-neutral-900/50 relative border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <Code className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">{t('websiteDevelopment.title')}</CardTitle>
              <CardDescription className="text-xs md:text-sm  text-neutral-300 font-medium mt-1">
                {t('websiteDevelopment.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden ms-4 md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span >{t('websiteDevelopment.point1')}h</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('websiteDevelopment.point2')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('websiteDevelopment.point3')}</span>
                </li>
                <li className="flex items-start">
                            <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('websiteDevelopment.point4')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('websiteDevelopment.point5')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('websiteDevelopment.point6')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('websiteDevelopment.point7')}</span>
                </li>
              </ul>
            </CardContent>
            <Image src="/images/jerry-2.png" className={`absolute hidden ${direction === "ltr" ?"md:block":""} bottom-[-15] md:right-[-85] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />

              <Image src="/images/tom-2.png" className={`absolute hidden ${direction === "ltr" ?"":"md:block"} bottom-[-15] md:right-[185] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />
          </Card>

          {/* Meta Ads Card */}
          <Card className=" service-card relative bg-neutral-900/50 border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">{t('metaAds.title')}</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                {t('metaAds.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point1')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point2')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point3')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point4')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point5')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point6')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('metaAds.point7')}</span>
                </li>
              </ul>
            </CardContent>
            <Image src="/images/jerry-2.png" className={`absolute hidden ${direction === "ltr" ?"":"md:block"} bottom-[-15] md:right-[-85] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />
            <Image src="/images/tom-2.png" className={`absolute hidden ${direction === "ltr" ?"md:block":""} bottom-[-15] md:right-[185] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />
          </Card>

          {/* Branding & Creatives Card */}
          <Card className="service-card relative bg-neutral-900/50 border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <Palette className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">{t('branding.title')}</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                {t('branding.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point1')}</span>
                </li>
                <li className="flex items-start">
                          <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point2')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point3')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point4')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point5')}</span>
                </li>
                <li className="flex items-start">
                <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point6')}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-emerald-400 ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`}>•</span>
                  <span>{t('branding.point7')}</span>
                </li>
              </ul>
            </CardContent>
          
              <Image src="/images/jerry-2.png" className={`absolute hidden ${direction === "ltr" ?"md:block":""} bottom-[-15] md:right-[-85] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />

              <Image src="/images/tom-2.png" className={`absolute hidden ${direction === "ltr" ?"":"md:block"} bottom-[-15] md:right-[185] right-[-55]  z-10`} alt="Digital Marketing" width={500} height={500} />
            
           
          </Card>
        </div>
       
      </div>
    </section>
  );
}