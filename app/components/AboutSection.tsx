"use client";

// Removed Motion - using CSS animations instead
import Image from "next/image";
import Section from "./Section";
import { useState } from "react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraph = `I'm passionate about Digital Marketing / Web Development / Design and love helping businesses grow with smart, creative solutions. Over the past three years, I've worked on a variety of projects that improved brand visibility, generated more leads, and delivered measurable results. My approach combines creativity with strategy—making sure that every design, campaign, or solution not only looks great but also drives real business outcomes.

I enjoy working closely with businesses to understand their goals and turn them into actionable strategies. From building strong brand identities to creating campaigns that connect with the right audience, I focus on delivering value at every step. I believe that growth happens when innovation meets consistency, and I'm committed to providing both.

What excites me most is seeing how small changes—whether in design, messaging, or execution—can create a big impact on business performance. I stay updated with industry trends, tools, and technologies to make sure my work is always modern, effective, and ahead of the curve.

At the core, I value clear communication, long-term relationships, and results that speak for themselves. My goal is simple: to help businesses thrive by combining creativity, strategy, and a genuine passion for growth.`;

  return (
    <Section
      id="about"
      background="dark"
      className="py-4 relative overflow-hidden"
    >
      {/* Soft gradient decorations */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse-slow" />
      <div
        className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
        {/* Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 animate-in fade-in slide-in-from-left-10 duration-800">
          <Image
            src="/hero_about.jpg"
            alt="About hero image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent animate-in fade-in duration-800" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-white backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-500 delay-200">
            About Me
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-800">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-in fade-in slide-in-from-bottom-5 duration-800">
            Get to Know Me
          </h2>
          <div>
            <p
              className={`text-white/80 leading-relaxed whitespace-pre-line transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 duration-800 delay-100 ${
                isExpanded ? "" : "line-clamp-4 sm:line-clamp-none"
              }`}
            >
              {paragraph}
            </p>
            {/* Show read more/less button only on mobile */}
            <div className="block sm:hidden mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
