"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Removed Motion - using CSS animations instead

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-in slide-in-from-top-full fade-in duration-600 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
            : "bg-black/90 backdrop-blur-sm border-b border-gray-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 transform transition-all duration-200 hover:scale-105">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-8 h-8 flex-shrink-0 transform transition-transform duration-600 hover:rotate-360">
                  <Image
                    src="/logo.png"
                    alt="SocialAdForge Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-in fade-in slide-in-from-left-5 duration-500 delay-200">
                  SocialAdForge
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8 animate-in fade-in slide-in-from-top-2 duration-500 delay-300">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/support", label: "FAQ" },
                { href: "/#contact", label: "Contact" },
              ].map((item, index) => (
                <div
                  key={item.href}
                  className="animate-in fade-in slide-in-from-top-2 duration-300 transform transition-transform hover:-translate-y-0.5"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium group"
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden overflow-hidden animate-in slide-in-from-top-0 fade-in duration-300">
            <div className="bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4 mb-6">
                  {[
                    { href: "/#home", label: "Home" },
                    { href: "/#services", label: "Services" },
                    { href: "/#about", label: "About" },
                    { href: "/support", label: "FAQ" },
                    { href: "/#contact", label: "Contact" },
                  ].map((item, index) => (
                    <div
                      key={item.href}
                      className="animate-in fade-in slide-in-from-left-5 duration-300 transform transition-transform active:scale-95"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2 border-b border-gray-800/50 last:border-b-0 block"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </nav>

                {/* Mobile Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800/50">
                  <button
                    onClick={closeMobileMenu}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all text-center shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-300 delay-700 transform active:scale-95"
                  >
                    Start Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
