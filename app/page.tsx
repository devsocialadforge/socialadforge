import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import LeftIntro from "./components/LeftIntro";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

// import AboutSection from "./components/AboutSection"; // Uncomment to add About section

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative  md:mt-0 mx-auto w-full h-screen">
        {/* Spline 3D Background */}
        <div className="absolute z-20 inset-0 h-screen w-full">
          <iframe
            src="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs"
            title="Reactive Orb"
            loading="lazy"
            className="h-screen w-full rounded-2xl border-0"
            allow="autoplay; fullscreen"
          />
          <div className="w-full max-w-7xl mx-auto z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        <div className="absolute hidden bottom-5 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center animate-fade-in-delayed">
          <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
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
  );
}
