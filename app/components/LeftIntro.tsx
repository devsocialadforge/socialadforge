// components/LeftIntro.tsx
"use client";

import { motion } from "motion/react";

import Button from "./Button";

type LeftIntroProps = {
  name?: string;
  title?: string;
  description?: string;
  imageSrc: string;
  className?: string;
};

const fadeUp = () => ({
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
});

const slideInLeft = () => ({
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
  name = "I'm Salmanul Faris",
  title = "Digital Marketing Expert",
  description = "I help businesses grow their online presence through strategic digital marketing, creative design, and data-driven insights that deliver measurable results.",
  className = "",
}: LeftIntroProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-12 ${className}`}
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center lg:text-left space-y-6"
        variants={slideInLeft()}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <p className="text-blue-400 text-lg font-medium tracking-wide">
            Hello, World! 👋
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {name}
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0"
          variants={fadeUp()}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {description}
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-row gap-6 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
            <div className="text-3xl font-bold text-green-400">3+</div>
            <div className="text-white/60 text-sm">Years Experience</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Button variant="primary" size="lg" href="#contact">
            Get Started
          </Button>
          <Button variant="secondary" size="lg" href="#services">
            View My Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          animate={floatAnimation}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110" />
        </motion.div>
      </motion.div>
    </div>
  );
}
