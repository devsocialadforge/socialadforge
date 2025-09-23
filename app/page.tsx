"use client";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Salmanul Faris",
    jobTitle: "Digital Marketing Expert",
    description:
      "Professional digital marketing services including social media management, content creation, web development, and advertising campaigns. 50+ projects completed, 25+ happy clients.",
    url: "https://socialadforge.com",
    image: "https://socialadforge.com/my_profile.jpg",
    sameAs: [
      "https://linkedin.com/in/salmanul-faris",
      "https://twitter.com/socialadforge",
      "https://instagram.com/socialadforge",
    ],
    knowsAbout: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Creation",
      "Web Development",
      "Advertising Campaigns",
      "Brand Growth",
      "SEO Optimization",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Marketing Expert",
      description:
        "Helping businesses grow their online presence through strategic digital marketing, creative design, and data-driven insights",
    },
    worksFor: {
      "@type": "Organization",
      name: "SocialAdForge",
      url: "https://socialadforge.com",
    },
    offers: {
      "@type": "Service",
      name: "Digital Marketing Services",
      description:
        "Professional digital marketing services including social media management, content creation, and advertising campaigns",
      provider: {
        "@type": "Person",
        name: "Salmanul Faris",
      },
    },
  };

  return (
    <>
      <Head>
        <title>SocialAdForge - Digital Marketing Expert | Salmanul Faris</title>
        <meta
          name="description"
          content="Professional digital marketing services by Salmanul Faris. Expert in social media management, content creation, web development, and advertising campaigns. 50+ projects completed, 25+ happy clients. Transform your online presence today."
        />
        <meta
          name="keywords"
          content="digital marketing, social media marketing, content creation, web development, advertising campaigns, brand growth, online presence, marketing strategy, Salmanul Faris, SocialAdForge"
        />
        <meta name="author" content="Salmanul Faris" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://socialadforge.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialadforge.com" />
        <meta
          property="og:title"
          content="SocialAdForge - Digital Marketing Expert | Salmanul Faris"
        />
        <meta
          property="og:description"
          content="Professional digital marketing services by Salmanul Faris. Expert in social media management, content creation, web development, and advertising campaigns. 50+ projects completed, 25+ happy clients."
        />
        <meta
          property="og:image"
          content="https://socialadforge.com/my_profile.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SocialAdForge" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialadforge.com" />
        <meta
          property="twitter:title"
          content="SocialAdForge - Digital Marketing Expert | Salmanul Faris"
        />
        <meta
          property="twitter:description"
          content="Professional digital marketing services by Salmanul Faris. Expert in social media management, content creation, web development, and advertising campaigns."
        />
        <meta
          property="twitter:image"
          content="https://socialadforge.com/my_profile.jpg"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        <div className="w-full min-h-screen bg-black overflow-x-hidden">
          <Header />
          <HeroSection />
          <AboutSection />
          <section className="bg-transparent relative">
            <ServiceSection />
          </section>
          <section className="bg-transparent relative">
            <ContactSection />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
