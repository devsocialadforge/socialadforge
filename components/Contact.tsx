"use client";

import { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      // Animate header with velocity-based fade
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.2,
          },
          opacity: 0,
          y: 80,
          scale: 0.95,
          stagger: 0.15,
          ease: "power2.out",
        });
      }

      // Animate left column (contact info) - slide from left
      if (leftColumnRef.current && !isMobile) {
        const contactCards =
          leftColumnRef.current.querySelectorAll(".contact-card");
        gsap.from(contactCards, {
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: 2,
          },
          x: -100,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      // Animate right column (form) - slide from right with rotation
      if (rightColumnRef.current && !isMobile) {
        gsap.from(rightColumnRef.current, {
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: 2,
          },
          x: 100,
          opacity: 0,
          rotationY: 15,
          transformPerspective: 1000,
          ease: "power3.out",
        });
      }

      // Mobile animations - simple fade-in
      if (isMobile) {
        if (leftColumnRef.current) {
          gsap.from(leftColumnRef.current.children, {
            scrollTrigger: {
              trigger: leftColumnRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          });
        }

        if (rightColumnRef.current) {
          gsap.from(rightColumnRef.current, {
            scrollTrigger: {
              trigger: rightColumnRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power2.out",
          });
        }
      }
    },
    { scope: sectionRef }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show the error message from the API
        const errorMsg = data.error || "Failed to send message";
        const errorDetails = data.details ? ` (${data.details})` : "";
        setErrorMessage(errorMsg + errorDetails);
        setSubmitStatus("error");

        // Reset error message after 7 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
          setErrorMessage("");
        }, 7000);
        return;
      }

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again."
      );
      setSubmitStatus("error");

      // Reset error message after 7 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("emailLabel"),
      value: " contact@socialadforge.com",
      href: "mailto:contact@socialadforge.com",
    },
    {
      icon: Phone,
      label: t("phoneLabel"),
      value: "+91 96455 51315",
      href: "tel:+919645551315",
    },
    {
      icon: MapPin,
      label: t("locationLabel"),
      value: t("locationValue"),
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/socialadforge",
      label: "Instagram",
      color: "hover:bg-pink-500/10 hover:text-pink-500 hover:border-pink-500",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/socialadforge",
      label: "Facebook",
      color: "hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919645551315",
      label: "WhatsApp",
      color:
        "hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      dir={direction as "rtl" | "ltr"}
      className="relative bg-black py-20 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-6">
            {t("title")}{" "}
            <span className="text-emerald-400">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Social */}
          <div ref={leftColumnRef} className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                const contactCard = (
                  <div className="contact-card group relative rounded-2xl border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-900/20 p-6 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wide text-neutral-500">
                          {item.label}
                        </p>
                        <p className="text-base text-neutral-200 group-hover:text-emerald-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {contactCard}
                  </a>
                ) : (
                  <div key={index}>{contactCard}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="contact-card rounded-2xl border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-900/20 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
                {t("socialTitle")}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex-1 group relative rounded-xl border border-white/10 bg-neutral-900/30 p-4 text-center transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-xs text-neutral-400 group-hover:text-inherit transition-colors">
                        {social.label}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="contact-card rounded-2xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/5 to-emerald-500/0 p-6">
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                {t("availabilityTitle")}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {t("availabilityText")}
              </p>
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-sm font-medium">{t("availableNow")}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            ref={rightColumnRef}
            className="rounded-3xl border border-white/10 bg-linear-to-br from-neutral-900/70 to-neutral-900/30 p-8 lg:p-10"
          >
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">
              {t("formTitle")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-300">
                  {t("nameLabel")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  className="h-12 rounded-xl border-white/10 bg-neutral-900/50 text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:ring-emerald-400/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-300">
                  {t("emailLabel")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  className="h-12 rounded-xl border-white/10 bg-neutral-900/50 text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:ring-emerald-400/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-neutral-300">
                  {t("phoneLabel")}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("phonePlaceholder")}
                  className="h-12 rounded-xl border-white/10 bg-neutral-900/50 text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:ring-emerald-400/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-300">
                  {t("messageLabel")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  className="rounded-xl border-white/10 bg-neutral-900/50 text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:ring-emerald-400/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl bg-emerald-500 text-neutral-950 font-semibold text-base transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-950 border-t-transparent"></span>
                    {t("sending")}
                  </span>
                ) : submitStatus === "success" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-neutral-950 flex items-center justify-center">
                      ✓
                    </span>
                    {t("sent")}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {t("sendButton")}
                    <Send className="h-5 w-5" />
                  </span>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-center">
                  <p className="text-sm text-emerald-400">
                    {t("successMessage")}
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-center">
                  <p className="text-sm text-red-400">
                    {errorMessage ||
                      t("errorMessage") ||
                      "Failed to send message. Please try again."}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
