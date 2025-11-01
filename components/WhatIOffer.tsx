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

gsap.registerPlugin(ScrollTrigger);

export default function WhatIOffer() {
  const cardsRef = useRef<HTMLDivElement>(null);
  
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
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, { scope: cardsRef });

  return (
    <section className="md:py-16">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-xs tracking-[0.22em] text-neutral-400 uppercase">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-200">
            What I <span className="text-emerald-400">Offer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-xs md:text-sm">
            Comprehensive digital solutions to elevate your brand and drive measurable results
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-2 gap-3 md:gap-5">
          {/* Digital Marketing Card */}
          <Card className="service-card bg-neutral-900/50 border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <Megaphone className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">Digital Marketing</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                Grow your business with data-driven digital marketing strategies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Attract real enquiries — not just followers or random traffic.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>We solve low-visibility and low-lead problems for Indian brands.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Performance-focused approach with transparent tracking.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Strong audience targeting for local + national growth.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Trusted by startups, SMEs and service-based businesses.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Consistent results, clear reporting, ROI-focused execution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Let's grow your business — start your marketing journey today.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Website Development Card */}
          <Card className="service-card bg-neutral-900/50 border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <Code className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">Website Development</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                Build a modern, fast, and mobile-friendly website that converts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Make your brand look premium and professional online.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>We fix slow, outdated, low-conversion websites.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Clean design + strong UX + SEO-friendly structure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Custom solutions for Indian businesses & entrepreneurs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Performance tested, secure, and high-quality builds.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Clear messaging that increases trust and enquiries.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Start your website today — let's build your online identity.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Meta Ads Card */}
          <Card className="service-card bg-neutral-900/50 border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">Meta Ads (Facebook & Instagram)</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                Get high-quality leads and consistent sales through Meta Ads.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Reach the right audience with smart targeting & funnel ads.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Stop wasting budget on boost button or random clicks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>We fix low-lead, low-reach, low-conversion campaigns.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Industry-tested strategies for India-based businesses.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Regular monitoring, optimization, and performance reports.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Real results — leads, bookings, calls, conversions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Ready to scale? Launch ROI-focused ads with us today.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Branding & Creatives Card */}
          <Card className="service-card bg-neutral-900/50 border-neutral-800 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-4">
              <div className="mb-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                <Palette className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-sm md:text-lg text-neutral-200">Branding & Creatives</CardTitle>
              <CardDescription className="text-xs md:text-sm text-neutral-300 font-medium mt-1">
                Build a brand identity that looks premium and trusted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 hidden md:block pt-0">
              <ul className="space-y-1 text-xs md:text-sm text-neutral-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Clear messaging + strong visuals = more customers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>We fix weak brand look, low recall, and poor engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>High-quality creatives designed for modern Indian brands.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Unique style, professional tone, consistent identity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Logos, brand kits, templates, social media creatives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Brands that feel premium and emotionally connect.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Let's create a brand people trust — start your branding now.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
       
      </div>
    </section>
  );
}