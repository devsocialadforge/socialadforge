"use client";

// Removed Motion - using CSS animations instead
import Section from "./Section";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  X,
  Camera,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { sendLead } from "../../lib/action/send_lead";

// Custom hook for scroll-based animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("email", formData.email);
      formDataObj.append("service", formData.service);

      const result = await sendLead(formDataObj);

      if (result.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
          });
        }, 3000);
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@socialadforge.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9645551315",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Calicut, Kerala, India",
      description: "Available worldwide",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We'll get back to you quickly",
    },
  ];

  const services = [
    "Digital Marketing",
    "Social Media Marketing",
    "SEO Services",
    "E-Commerce Development",
    "Website Development",
    "Google Ads",
    "Branding",
    "Influencer Marketing",
    "App Development",
    "Performance Marketing",
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "X (Twitter)" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  return (
    <div ref={ref}>
      <Section
        id="contact"
        background="dark"
        className="py-20 relative overflow-hidden"
      >
        {/* Background animated elements */}
        <div
          className={`absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float-1 scroll-scale-in scroll-delay-100 ${
            isVisible ? "in-view" : ""
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl animate-float-2 scroll-scale-in scroll-delay-200 ${
            isVisible ? "in-view" : ""
          }`}
        />

        <div
          className={`text-center mb-16 scroll-fade-in-up scroll-delay-100 ${
            isVisible ? "in-view" : ""
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative">
            <span className="relative z-10">Let&apos;s Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse-slow" />
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch and
            let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-8 hidden md:block scroll-fade-in-left scroll-delay-200 ${
              isVisible ? "in-view" : ""
            }`}
          >
            <div
              className={`scroll-slide-up scroll-delay-300 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                We&apos;re here to help you succeed. Reach out to us through any
                of these channels and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start space-x-4 group cursor-pointer hover:transform hover:translate-x-2 transition-all duration-300 scroll-fade-in-up scroll-delay-${
                      400 + index * 100
                    } ${isVisible ? "in-view" : ""}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
                        <IconComponent
                          size={20}
                          className="text-white relative z-10"
                        />
                        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-blue-300 font-medium mb-1 group-hover:text-blue-200 transition-colors duration-300">
                        {item.value}
                      </p>
                      <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div
              className={`pt-8 scroll-fade-in-up scroll-delay-800 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden group hover:scale-125 hover:-translate-y-1 hover:rotate-12 scroll-slide-up scroll-delay-${
                        900 + index * 100
                      } ${isVisible ? "in-view" : ""}`}
                      aria-label={social.label}
                    >
                      <IconComponent
                        size={18}
                        className="text-white relative z-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 scale-0 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`relative scroll-fade-in-right scroll-delay-300 ${
              isVisible ? "in-view" : ""
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden hover:border-white/20 transition-all duration-300">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 animate-gradient-shift" />

              <h3
                className={`text-2xl font-semibold text-white mb-6 relative z-10 scroll-slide-up scroll-delay-400 ${
                  isVisible ? "in-view" : ""
                }`}
              >
                Send us a Message
              </h3>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3 relative z-10 animate-fade-in-up">
                  <AlertCircle
                    size={20}
                    className="text-red-400 flex-shrink-0"
                  />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {isSubmitted ? (
                <div
                  className={`text-center py-12 relative z-10 scroll-scale-in scroll-delay-500 ${
                    isVisible ? "in-view" : ""
                  }`}
                >
                  <div className="animate-bounce-slow">
                    <CheckCircle
                      size={64}
                      className="text-green-400 mx-auto mb-4"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/70">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={`space-y-6 relative z-10 scroll-fade-in-up scroll-delay-500 ${
                    isVisible ? "in-view" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className={`scroll-slide-up scroll-delay-600 ${
                        isVisible ? "in-view" : ""
                      }`}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-102 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div
                      className={`scroll-slide-up scroll-delay-700 ${
                        isVisible ? "in-view" : ""
                      }`}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-102 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div
                    className={`scroll-slide-up scroll-delay-800 ${
                      isVisible ? "in-view" : ""
                    }`}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-102 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div
                    className={`scroll-slide-up scroll-delay-900 ${
                      isVisible ? "in-view" : ""
                    }`}
                  >
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-102 transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-gray-800"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden hover:scale-102 hover:shadow-lg hover:shadow-blue-500/30 scroll-scale-in scroll-delay-1000 ${
                      isVisible ? "in-view" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-white/10 -translate-x-full hover:translate-x-full transition-transform duration-600" />
                  </button>
                </form>
              )}
            </div>

            {/* Enhanced Decorative elements */}
            <div
              className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float-1 scroll-scale-in scroll-delay-1100 ${
                isVisible ? "in-view" : ""
              }`}
            />
            <div
              className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-40 animate-float-2 scroll-scale-in scroll-delay-1200 ${
                isVisible ? "in-view" : ""
              }`}
            />
            <div
              className={`absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 animate-float-1 scroll-scale-in scroll-delay-1300 ${
                isVisible ? "in-view" : ""
              }`}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
