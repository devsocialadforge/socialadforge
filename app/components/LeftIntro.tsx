// components/LeftIntro.tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Button from "./Button";

type LeftIntroProps = {
  name?: string;
  title?: string;
  description?: string;
  imageSrc: string;
  className?: string;
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
});

const slideInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
});

const floatAnimation = {
  y: [-10, 10, -10],
};

export default function LeftIntro({
  name = "I’m Salmanul Faris",
  title = "A Digital Marketing Freelancer",
  description = "Helping brands grow with smart ads, creative design, and data-driven strategies.",
  imageSrc,
  className = "",
}: LeftIntroProps) {
  return (
    <section
      className={`relative mx-auto w-full max-w-2xl px-4 py-10 sm:py-16 md:max-w-4xl lg:max-w-5xl ${className}`}
      aria-label="Intro section"
    >
      {/* Enhanced background accents */}
      <motion.div
        className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"
        animate={floatAnimation}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-20 top-20 h-32 w-32 rounded-full bg-gradient-to-l from-pink-500/10 to-orange-500/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
        {/* Avatar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft(0)}
          transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
          className="shrink-0 relative"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-gradient-to-r from-blue-400 to-purple-500 ring-offset-2 ring-offset-black/50 md:h-24 md:w-24 lg:h-28 lg:w-28">
            <Image
              src={imageSrc}
              alt="Photo of Salmanul Faris"
              fill
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
              className="object-cover"
              priority
            />
          </div>
          {/* Floating particles around avatar */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Text */}
        <div className="flex-1 space-y-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.2)}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            {name}
          </motion.h1>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.4)}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg font-medium text-blue-200 md:text-xl lg:text-2xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.6)}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base text-white/80 leading-relaxed md:text-lg lg:text-xl max-w-2xl"
          >
            {description}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.8)}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <Button variant="primary" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          {/* Social proof or stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(1.0)}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="flex items-center gap-8 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-white/60">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
