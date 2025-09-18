"use client";

import { motion } from "motion/react";
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
import {
  Target,
  Smartphone,
  Search,
  ShoppingCart,
  Monitor,
  Megaphone,
  Sparkles,
  Crown,
  Smartphone as AppIcon,
  TrendingUp,
} from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital strategies that amplify your brand across all online channels and drive measurable growth.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engaging social campaigns that build communities, increase brand awareness, and convert followers into customers.",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Advanced SEO techniques that boost your search rankings, increase organic traffic, and improve online visibility.",
      icon: Search,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "E-Commerce Development",
      description:
        "Custom e-commerce solutions that provide seamless shopping experiences and maximize online sales conversions.",
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Website Development",
      description:
        "Modern, responsive websites built with cutting-edge technology for optimal performance and user experience.",
      icon: Monitor,
      gradient: "from-teal-500 to-blue-500",
    },
    {
      title: "Google Ads Marketing",
      description:
        "Strategic Google Ads campaigns that target the right audience, optimize ad spend, and deliver high ROI.",
      icon: Megaphone,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Branding",
      description:
        "Complete brand identity development that creates memorable experiences and builds lasting customer loyalty.",
      icon: Sparkles,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Influencer Marketing",
      description:
        "Authentic influencer partnerships that expand your reach, build trust, and drive engagement with your target audience.",
      icon: Crown,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences and business value.",
      icon: AppIcon,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Performance Marketing",
      description:
        "Data-driven marketing campaigns focused on measurable results, ROI optimization, and sustainable growth.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <Section id="services" background="dark" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          What I Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-white/80 max-w-2xl mx-auto"
        >
          I help businesses grow their online presence through strategic digital
          marketing, creative design, and data-driven insights that deliver real
          results.
        </motion.p>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16"
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
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    className="group h-full"
                  >
                    <Card delay={0} className="h-full relative overflow-hidden">
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
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300" />

                      {/* Border glow on hover */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/30 transition-all duration-300" />
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-white/20 bg-white/10 hover:bg-white/20 text-white" />
          <CarouselNext className="hidden md:flex -right-12 border-white/20 bg-white/10 hover:bg-white/20 text-white" />
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button variant="primary" size="lg" href="#contact">
          Let's Work Together
        </Button>
      </motion.div>
    </Section>
  );
}
