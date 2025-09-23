"use client";

// Removed Motion - using CSS animations instead
import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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

        {/* Carousel Section */}
        <div
          className={`mb-16 scroll-scale-in scroll-delay-300 ${
            isVisible ? "in-view" : ""
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem
                    key={service.title}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="group h-full hover:-translate-y-2 hover:scale-102 hover:rotate-y-1 transition-all duration-300">
                      <Card
                        delay={index * 0.1}
                        className="h-full relative overflow-hidden"
                      >
                        {/* Gradient background overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />

                        {/* Icon with enhanced styling */}
                        <div className="relative z-10 mb-6">
                          <div
                            className={`
                          inline-flex items-center justify-center w-16 h-16 
                          bg-gradient-to-br ${service.gradient} 
                          rounded-2xl text-white shadow-lg 
                          group-hover:shadow-xl group-hover:scale-110 
                          transition-all duration-300
                        `}
                          >
                            <IconComponent size={28} />
                          </div>
                          {/* Floating glow effect */}
                          <div
                            className={`
                          absolute inset-0 w-16 h-16 
                          bg-gradient-to-br ${service.gradient} 
                          rounded-2xl opacity-0 group-hover:opacity-30 
                          blur-xl transition-all duration-500
                        `}
                          />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            {service.description}
                          </p>
                        </div>

                        {/* Hover effects */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                        <div
                          className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"
                          style={{ animationDelay: "0.3s" }}
                        />

                        {/* Border glow on hover */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/30 transition-all duration-300" />
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-white/20 bg-white/10 hover:bg-white/20 text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-white/20 bg-white/10 hover:bg-white/20 text-white" />
          </Carousel>
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
