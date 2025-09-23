import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}", // Add this line to scan lib directory
  ],
  prefix: "",
  safelist: [
    // Safelist all the gradient classes used in your services
    "from-blue-500",
    "to-cyan-500",
    "from-purple-500",
    "to-pink-500",
    "from-green-500",
    "to-emerald-500",
    "from-orange-500",
    "to-red-500",
    "from-teal-500",
    "to-blue-500",
    "from-indigo-500",
    "to-purple-500",
    "from-violet-500",
    "bg-gradient-to-br",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-1": {
          "0%, 100%": {
            transform: "translate(-10px, -20px) scale(1)",
          },
          "25%": {
            transform: "translate(5px, 10px) scale(1.1)",
          },
          "50%": {
            transform: "translate(10px, 20px) scale(1.2)",
          },
          "75%": {
            transform: "translate(-5px, 5px) scale(1.1)",
          },
        },
        "float-2": {
          "0%, 100%": {
            transform: "translate(10px, 20px) scale(1)",
          },
          "33%": {
            transform: "translate(-5px, -10px) scale(1.3)",
          },
          "66%": {
            transform: "translate(-10px, -20px) scale(1.5)",
          },
        },
        "fade-in-delayed": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-50%) translateY(0)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
        },
        "scroll-indicator": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(12px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-1": "float-1 8s ease-in-out infinite",
        "float-2": "float-2 6s ease-in-out infinite 2s",
        "fade-in-delayed": "fade-in-delayed 1s ease-out 2s both",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
