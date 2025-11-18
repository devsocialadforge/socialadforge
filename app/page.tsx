import Hero from "@/components/Hero";
import RingSkill from "@/components/RingSkill";
import Header from "@/components/Header";
import WhatIOffer from "@/components/WhatIOffer";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import Skils from "@/components/Skils";

export const metadata: Metadata = generateSEOMetadata({
  title:
    "SocialAdForge - Professional Web Development & Meta Ads Specialist in Kerala & UAE",
  description:
    "Expert freelance web developer and Meta ads specialist serving Kerala and UAE. Building high-performance websites, running profitable Facebook & Instagram ad campaigns in Dubai, Abu Dhabi, Sharjah & Thrissur. Creating stunning brand identities for businesses across Kerala and UAE. Get results-driven digital solutions today.",
  keywords: [
    "web developer Dubai",
    "Meta ads specialist UAE",
    "freelance digital marketer Dubai",
    "Facebook ads Dubai UAE",
    "Instagram advertising Dubai",
    "website development UAE Kerala",
    "branding services Dubai",
    "performance marketing UAE",
    "web developer Thrissur",
    "digital marketing Kerala UAE",
    "website builder Dubai",
  ],
  path: "/",
});

export default function Home() {
  return (
    <div className="text-neutral-200  bg-black">
      <Header />
      <main>
        <Hero />
        <Skils />
        <WhatIOffer />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
