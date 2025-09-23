import {
  Search,
  Target,
  TrendingUp,
  Smartphone,
  AppleIcon,
} from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Monitor } from "lucide-react";
import { Megaphone } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Crown } from "lucide-react";

// Tailwind classes used in gradients (keep these comments for Tailwind to detect):
// from-blue-500 to-cyan-500 from-purple-500 to-pink-500 from-green-500 to-emerald-500
// from-orange-500 to-red-500 from-teal-500 to-blue-500 from-indigo-500 to-purple-500
// from-violet-500 bg-gradient-to-br

export const services = [
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
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences and business value.",
    icon: AppleIcon,
    gradient: "from-violet-500 to-purple-500",
  },
];
