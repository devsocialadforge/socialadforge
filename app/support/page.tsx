"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: FAQItem[];
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "General",
      icon: HelpCircle,
      items: [
        {
          question: "What services do you offer?",
          answer:
            "We specialize in digital marketing, web development, and design services. This includes social media marketing, SEO, Google Ads, custom website development, e-commerce solutions, branding, and performance marketing. Our comprehensive approach ensures your business gets the complete digital presence it needs.",
        },
        {
          question: "How long have you been in business?",
          answer:
            "We have over 3 years of experience helping businesses grow their online presence. Our team has worked with 50+ projects and served 25+ happy clients across various industries, delivering measurable results and sustainable growth.",
        },
      ],
    },
    {
      title: "Services",
      icon: HelpCircle,
      items: [
        {
          question: "How long does a typical website development project take?",
          answer:
            "Most website projects take 4-8 weeks depending on complexity and requirements. Simple websites can be completed in 2-4 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our initial consultation.",
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer:
            "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support. Our maintenance plans ensure your website stays secure, fast, and up-to-date with the latest technologies.",
        },
        {
          question: "Can you help improve my current website's performance?",
          answer:
            "Absolutely! We offer website audits and optimization services to improve loading speed, SEO rankings, user experience, and conversion rates. We'll analyze your current site and provide actionable recommendations for improvement.",
        },
        {
          question: "What digital marketing strategies do you use?",
          answer:
            "We use a data-driven approach combining social media marketing, Google Ads, SEO, content marketing, and email campaigns. Our strategies are tailored to your business goals and target audience, with regular reporting and optimization based on performance metrics.",
        },
      ],
    },
    {
      title: "Payments",
      icon: HelpCircle,
      items: [
        {
          question: "What are your pricing options?",
          answer:
            "Our pricing varies based on project scope and requirements. We offer flexible payment options including one-time project fees, monthly retainers, and performance-based pricing for marketing services. Contact us for a personalized quote based on your specific needs.",
        },
        {
          question: "Do you require upfront payments?",
          answer:
            "For larger projects, we typically require a 50% upfront payment with the remaining balance due upon completion. Smaller projects may require full payment upfront. We also offer payment plans for qualified clients to make our services more accessible.",
        },
      ],
    },
    {
      title: "Support",
      icon: HelpCircle,
      items: [
        {
          question: "How quickly do you respond to client inquiries?",
          answer:
            "We respond to all inquiries within 24 hours during business days. For urgent matters, we provide direct contact channels for immediate assistance. Our clients appreciate our quick response times and proactive communication throughout projects.",
        },
        {
          question: "Do you work with businesses outside your local area?",
          answer:
            "Yes! We work with clients worldwide and have experience serving businesses across different time zones. We use modern communication tools and project management systems to ensure smooth collaboration regardless of location.",
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer:
            "Your satisfaction is our priority. We offer revision rounds as part of our standard service and work closely with you to ensure the final deliverable meets your expectations. We have a satisfaction guarantee and will make necessary adjustments to ensure you&apos;re happy with the results.",
        },
      ],
    },
  ];

  return (
    <Section
      background="dark"
      className="md:py-20 py-4 relative overflow-hidden"
    >
      <Link href="/#home">
        <motion.button
          className="flex items-center space-x-2 bg-gray-900/80 hover:bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:border-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Home</span>
        </motion.button>
      </Link>
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-white/80 max-w-2xl mx-auto"
        >
          Find answers to common questions about our services, process, and
          support. Don&apos;t see your question? Feel free to reach out!
        </motion.p>
      </div>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <IconComponent size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-4">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${itemIndex}`];
                  return (
                    <Card
                      key={itemIndex}
                      delay={itemIndex * 0.1}
                      className="cursor-pointer transition-all duration-300 hover:bg-white/10"
                    >
                      <motion.div
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="flex items-center justify-between"
                      >
                        <h4 className="text-lg font-semibold text-white pr-4">
                          {item.question}
                        </h4>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown size={24} className="text-blue-400" />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: isOpen ? 0 : -10 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <p className="text-white/80 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-white/70 mb-6">
          Still have questions? We&apos;re here to help!
        </p>
        <motion.a
          href="/#contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us Today
        </motion.a>
      </motion.div>
    </Section>
  );
}
