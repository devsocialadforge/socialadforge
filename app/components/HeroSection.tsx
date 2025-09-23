"use client";

import LeftIntro from "./LeftIntro";
import dynamic from "next/dynamic";
import Section from "./Section";

const RippleSceneR3F = dynamic(() => import("./RippileSecenR3f"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <Section
      id="home"
      background="dark"
      className="relative md:mt-0 mx-auto w-full h-screen"
    >
      {/* Three.js 3D Background */}
      <div className="absolute z-0 inset-0 h-screen w-full">
        <RippleSceneR3F position="center" scale={[1.5, 1.5, 1.5]} />
      </div>

      {/* Floating Elements - CSS animations for SSR compatibility */}
      <div className="absolute z-30 bottom-10 right-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float-1" />
      <div className="absolute z-30 top-1/4 right-1/4 w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-40 animate-float-2" />

      {/* Scroll Indicator - CSS animations for SSR compatibility */}
      <div className="absolute z-30 bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delayed">
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse-slow">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
      {/* Content Overlay - Centered LeftIntro */}
      <div className=" relative w-fit z-50 mt-20 px-4 sm:px-6 lg:px-8">
        <LeftIntro imageSrc="/my_profile.jpg" />
      </div>
    </Section>
  );
}
