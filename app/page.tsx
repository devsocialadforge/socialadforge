import Hero from "@/components/Hero";
import RingSkill from "@/components/RingSkill";
import Header from "@/components/Header";
import WhatIOffer from "@/components/WhatIOffer";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

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
        <section aria-label="Her">
          <Hero />
        </section>
        <section
          aria-label="Features"
          className="max-w-7xl   mx-auto p-6 space-y-16"
        >
          <div className="grid grid-cols-4 gap-4">
            <RingSkill
              skill="Web Design"
              targetPercentage={96}
              color="text-emerald-400"
            />
            <RingSkill
              skill="UI Branding"
              targetPercentage={98}
              color="text-blue-400"
            />
            <RingSkill
              skill="Meta Ads"
              targetPercentage={92}
              color="text-purple-400"
            />
            <RingSkill
              skill="Creatives"
              targetPercentage={88}
              color="text-pink-400"
            />
          </div>
        </section>

        <section aria-label="Map" className="max-w-7xl mx-auto p-2">
          <WhatIOffer />
        </section>
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}
