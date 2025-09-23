// components/LeftIntro.tsx
"use client";

// Removed Motion - using CSS animations instead

import Button from "./Button";

type LeftIntroProps = {
  name?: string;
  title?: string;
  description?: string;
  imageSrc: string;
  className?: string;
};

export default function LeftIntro({
  name = "I'm Salmanul Faris",
  title = "Digital Marketing Expert",
  description = "I help businesses grow their online presence through strategic digital marketing, creative design, and data-driven insights that deliver measurable results.",
  className = "",
}: LeftIntroProps) {
  return (
    <div
      className={`flex flex-col w-fit lg:flex-row items-center gap-12 ${className}`}
    >
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-in-left">
        {/* Greeting */}
        <div
          className="space-y-2 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-blue-400 text-lg font-medium tracking-wide">
            Hello, World! 👋
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {name}
          </h1>
        </div>

        {/* Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-lg text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {description}
        </p>

        {/* Stats */}
        <div
          className="flex flex-row gap-6 justify-center lg:justify-start animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-white/60 text-sm">Projects Completed</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-purple-400">25+</div>
            <div className="text-white/60 text-sm">Happy Clients</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-green-400">2+</div>
            <div className="text-white/60 text-sm">Years Experience</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
          style={{ animationDelay: "1.0s" }}
        >
          <Button variant="primary" size="lg" href="#contact">
            Get Started
          </Button>
          {/* <Button variant="secondary" size="lg" href="#services">
            View My Work
          </Button> */}
        </div>
      </div>

      {/* Right Image */}
      <div
        className="flex-shrink-0 relative animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="relative animate-float-gentle">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110 animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
}
