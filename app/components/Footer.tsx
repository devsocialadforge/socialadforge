"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Removed Motion - using CSS animations instead
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    { href: "#services", label: "Digital Marketing" },
    { href: "#services", label: "Web Development" },
    { href: "#services", label: "SEO Services" },
    { href: "#services", label: "Social Media Marketing" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        {/* Main Footer Content */}
        <div className="flex flex-row justify-between flex-wrap gap-8 mb-8">
          {/* Brand Section */}
          <div
            className="lg:col-span-1 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Link href="#home" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="SocialAdForge Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-bold text-white">
                SocialAdForge
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed text-wrap mb-4">
              Helping businesses grow their
              <br /> online presence through strategic <br />
              digital marketing and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    aria-label={social.label}
                  >
                    <IconComponent
                      size={16}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={service.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div
                className="flex items-center space-x-3 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">
                  hello@socialadforge.com
                </span>
              </div>
              <div
                className="flex items-center space-x-3 animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">+91 9645551315</span>
              </div>
              <div
                className="flex items-center space-x-3 animate-fade-in-up"
                style={{ animationDelay: "1.0s" }}
              >
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">
                  Calicut, Kerala, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t border-gray-800 pt-8 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <p
              className="text-gray-400 text-sm animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              © {currentYear} SocialAdForge. All rights reserved.
            </p>

            {/* Legal Links */}
            <div
              className="flex space-x-6 animate-fade-in-up"
              style={{ animationDelay: "1.3s" }}
            >
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
