"use client"
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail, MessageCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {SplitText,ScrollTrigger} from "gsap/all";
import { useState } from "react";

// Drop this file into: app/components/HeroDark.tsx (Next.js App Router)
// Usage: <HeroDark />
// If you're not using shadcn yet, replace Button with a standard <button>.
gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

   useGSAP(() => {
    const heroSplit = new SplitText(".titlex", { type: "chars,words" });
    const paragraphSplit = new SplitText(".subtitle, .subtitle1", { type: "lines" });

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
  delay: 1
});

// Disable ScrollTrigger animation for small screens (mobile)
if (window.innerWidth >= 640) { // 640px = Tailwind 'sm' breakpoint
  gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  })
  .to('.right-leaf', { y: -200 }, 0)
  .to('.left-leaf', { y: 200 }, 0);

  ScrollTrigger.refresh(); 
} else {
  // On mobile, ensure leaves stay at y: 0 (no scroll-based animation)
  gsap.set('.right-leaf', { y: 0 });
  gsap.set('.left-leaf', { y: 0 });
}
  });

  return (
    <section 
      className="relative mb-5 isolate overflow-hidden  text-white" id="hero"
    >
      {/* background gradient tint */}
      <div className="pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-7xl px-6  md:py-28">
        <div className=" grid-row-revers md:grid mx-auto justify-center  items-center gap-12 md:grid-cols-2">
          {/* Image side */}
          <div className="relative order-1 right-leaf md:order-none">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl  ">
              {/* Portrait (replace src with your image). In Next.js: use next/image if you prefer */}
              <img
                src="/images/hero-portrait.png"
                alt="Portrait"
                className="h-full w-full object-cover object-center opacity-90"
              />
     
            </div>
          </div>

          {/* Text side */}
          <div className="max-w-xl left-leaf">
            <p className="mb-3 text-xs tracking-[0.22em] text-neutral-400 subtitle ">ABOUT PERSONAL</p>
            <h1  className="text-4xl font-extrabold titlex leading-tight sm:text-5xl">
              Hello, I’m <span className="text-emerald-400">Salmanul Faris</span>
            </h1>
            <p  className="mt-4 subtitle hidden md:block text-neutral-300/90">
              I build modern websites and growth systems: Next.js, Tailwind, shadcn/ui, SEO, and Meta Ads. Clean code, fast delivery, and results you can measure.
            </p>
            <div  className="mt-6 flex flex-wrap items-center gap-4 ">
              <div 
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                 <a 
                        href="https://wa.me/+919645551315" 
                        
                        aria-label="WhatsApp"
                      > 
                <Button className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300">
                  
                 
                       Contact Me
                     
                </Button>
                </a>
                
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
                        href="mailto:socialadforge@gmail.com" 
                        className="p-2 hover:bg-white rounded-md transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="text-emerald-400" size={20} />
                      </a>
                      <a 
                        href="https://instagram.com/YOUR_USERNAME" 
                        className="p-2 hover:bg-white rounded-md transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="text-emerald-400" size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#portfolio" className="text-sm text-neutral-300 underline-offset-4 hover:underline">View Portfolio</a>
            </div>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4 text-neutral-400">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-t hidden md:block border-white/5 bg-gradient-to-r from-neutral-950 to-neutral-900/90">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {[
  "Reliable & Quick Support",
  "Affordable Web Solutions",
  "On-Time Delivery Promise",
  "Client-First Approach",
  "100% Satisfaction Focus"
]
.map((label) => (
              <span
                key={label}
                className="text-sm font-medium tracking-wide text-neutral-400"
              >
                {label}
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
