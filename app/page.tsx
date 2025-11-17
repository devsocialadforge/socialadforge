"use client";
import Hero from "@/components/Hero";
import RingSkill from "@/components/RingSkill";
import Header from "@/components/Header";
import type { Metadata } from "next";
import WhatIOffer from "@/components/WhatIOffer";
import Portfolio from "@/components/Portfolio";
import { usePagespeed } from "@/hooks/usePagespeed";




export default function Home() {

  const { seo, accessibility, bestPractices, performance, loading, error } = usePagespeed(
    'https://www.caretohome.care/',
    'mobile' // or 'desktop'
  );
  console.log( "seo", seo,);
  console.log( "accessibility", accessibility,);
  console.log( "bestPractices", bestPractices,);
  console.log( "performance", performance,);
  console.log( "loading", loading,);
  console.log( "error", error,);
  return (
    <div className="text-neutral-200  bg-black">
        
      
      <Header />

      <main>
        <section aria-label="Her">
         <Hero/>
        </section>
        <section aria-label="Features" className="max-w-7xl   mx-auto p-6 space-y-16">
       <div className="grid grid-cols-4 gap-4">
        <RingSkill skill="Web Design" targetPercentage={96} color="text-emerald-400" />
        <RingSkill skill="UI Branding" targetPercentage={98} color="text-blue-400" />
        <RingSkill skill="Meta Ads" targetPercentage={92} color="text-purple-400" />
        <RingSkill skill="Creatives" targetPercentage={88} color="text-pink-400" />
       
       </div>
        </section>
        
      
      
       
        <section aria-label="Map" className="max-w-7xl mx-auto p-2">
         <WhatIOffer/>
        </section>
        <Portfolio/>
      </main>

      <footer className="border-t h-[500px] border-white/10">
   
      </footer>
    </div>
  );
}

