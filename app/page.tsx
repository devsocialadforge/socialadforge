"use client";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import LeftIntro from "./components/LeftIntro";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";

const RippleSceneR3F = dynamic(() => import("./components/RippileSecenR3f"), {
  ssr: false,
});

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

          {/* Hero Section */}
          <section
            id="home"
            className="relative  md:mt-0 mx-auto w-full h-screen"
          >
            {/* Three.js 3D Background */}
            <div className="absolute  z-20 inset-0 h-screen w-full">
              <div className="w-full h-full absolute inset-0 ">
                <RippleSceneR3F position="center" scale={[1.5, 1.5, 1.5]} />
              </div>
              <div className="mx-auto max-sm:w-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <LeftIntro imageSrc="/my_profile.jpg" />
              </div>
            </div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute z-5 inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute z-5 inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content Overlay */}
            <div className="absolute z-10 inset-0 h-full w-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-7xl mx-auto">
                <LeftIntro imageSrc="/my_profile.jpg" />
              </div>
            </div>

            {/* Floating Elements - CSS animations for SSR compatibility */}
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float-1" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-40 animate-float-2" />

            {/* Scroll Indicator - CSS animations for SSR compatibility */}
            <div className="absolute z-30 bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delayed">
              <span className="text-white/60 text-sm mb-2">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse-slow">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator" />
              </div>
            </div>
          </section>

          <AboutSection />
          <section className="bg-transparent relative">
            <ServiceSection />
          </section>

          {/* Contact Section */}
          <section className="bg-transparent relative">
            <ContactSection />
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
