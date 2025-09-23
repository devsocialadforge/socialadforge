"use client";

// Removed Motion - using CSS animations instead
import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import { services } from "@/lib/data";
import { useState, useEffect, useRef } from "react";

// Custom hook for scroll-based animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Capture the current value of ref.current
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the captured value in cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function ServiceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <Section id="services" background="dark" className="py-4 md:py-20">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 scroll-fade-in-up scroll-delay-100 ${
              isVisible ? "in-view" : ""
            }`}
          >
            What I Do
          </h2>
          <p
            className={`text-lg text-white/80 max-w-2xl mx-auto scroll-fade-in-up scroll-delay-200 ${
              isVisible ? "in-view" : ""
            }`}
          >
            I help businesses grow their online presence through strategic
            digital marketing, creative design, and data-driven insights that
            deliver real results.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 scroll-scale-in scroll-delay-300 ${
            isVisible ? "in-view" : ""
          }`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group h-full transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 scroll-fade-in-up scroll-delay-${
                  400 + index * 100
                } ${isVisible ? "in-view" : ""}`}
              >
                <Card
                  delay={index * 0.1}
                  className="h-full relative overflow-hidden cursor-pointer"
                >
                  {/* Gradient background overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 ease-in-out`}
                  />

                  {/* Default state - Icon and Title */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 transition-all duration-700 ease-in-out group-hover:transform group-hover:-translate-y-2 group-hover:opacity-0">
                    {/* Icon with enhanced styling */}
                    <div className="mb-6">
                      <div
                        className={`
                        inline-flex items-center justify-center w-20 h-20 
                        bg-gradient-to-br ${service.gradient} 
                        rounded-3xl text-white shadow-lg 
                        transform transition-all duration-500 ease-in-out
                        group-hover:scale-110 group-hover:rotate-3
                      `}
                      >
                        <IconComponent size={32} />
                      </div>
                      {/* Floating glow effect */}
                      <div
                        className={`
                        absolute inset-0 w-20 h-20 mx-auto
                        bg-gradient-to-br ${service.gradient} 
                        rounded-3xl opacity-0 group-hover:opacity-40 
                        blur-xl transition-all duration-700 ease-in-out
                        transform group-hover:scale-125
                      `}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 transition-all duration-500 group-hover:text-blue-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover state - Description */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                    {/* Small icon in hover state */}
                    <div className="mb-4">
                      <div
                        className={`
                        inline-flex items-center justify-center w-12 h-12 
                        bg-gradient-to-br ${service.gradient} 
                        rounded-xl text-white shadow-lg 
                        transform transition-all duration-300
                      `}
                      >
                        <IconComponent size={20} />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-4 transform transition-all duration-500">
                      {service.title}
                    </h3>

                    <p className="text-white/80 leading-relaxed text-sm transform transition-all duration-700 delay-100">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500" />
                  <div
                    className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500"
                    style={{ animationDelay: "0.3s" }}
                  />

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/30 transition-all duration-500" />

                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
                </Card>
              </div>
            );
          })}
        </div>

        <div
          className={`text-center scroll-fade-in-up scroll-delay-400 ${
            isVisible ? "in-view" : ""
          }`}
        >
          <Button variant="primary" size="lg" href="#contact">
            Let&apos;s Work Together
          </Button>
        </div>
      </Section>
    </div>
  );
}
