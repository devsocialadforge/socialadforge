"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen text-white">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
        </motion.div>
      </div>

      {/* Main Content */}
      <main className=" relative pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl">
              Your privacy matters to us. Here&apos;s how we protect and use
              your information.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Welcome to SocialAdForge. We are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using our website, you consent to the data practices
                  described in this policy. If you do not agree with our
                  policies and practices, please do not use our services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-200">
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>
                        Name and contact information (email address, phone
                        number)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Business information and project details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Communication preferences and feedback</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-200">
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>IP address and device information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Browser type and version</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Pages visited and time spent on our website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Referring website information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Service Delivery
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Provide and improve our digital marketing services
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Communication
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Respond to inquiries and provide customer support
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Analytics
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Analyze website usage and improve user experience
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Marketing
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Send relevant updates and promotional content (with
                      consent)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience and analyze website traffic.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-200">
                        Essential Cookies
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Required for website functionality and security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">⚠</span>
                    <div>
                      <h3 className="font-semibold text-gray-200">
                        Analytics Cookies
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Help us understand how visitors interact with our
                        website
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">ℹ</span>
                    <div>
                      <h3 className="font-semibold text-gray-200">
                        Marketing Cookies
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Used to deliver relevant advertisements and track
                        campaign performance
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  You can control cookie settings through your browser
                  preferences. Note that disabling certain cookies may affect
                  website functionality.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Third-Party Services
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We may use third-party services to enhance our website and
                  services. These services have their own privacy policies:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Google Analytics for website analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Email service providers for communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Social media platforms for content sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Cloud hosting services for data storage</span>
                  </li>
                </ul>
                <p className="text-gray-300 text-sm mt-4">
                  We recommend reviewing the privacy policies of these
                  third-party services to understand how they handle your
                  information.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Data Security
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Encryption
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Data is encrypted in transit and at rest
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Access Controls
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Limited access to personal information on a need-to-know
                      basis
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Regular Updates
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Security systems are regularly updated and monitored
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Staff Training
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Team members are trained on data protection best practices
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Your Rights
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  You have certain rights regarding your personal information.
                  You may:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">
                      Access and review your personal information
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">
                      Request correction of inaccurate information
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">
                      Request deletion of your personal information
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">
                      Object to processing of your information
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">
                      Withdraw consent for marketing communications
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  To exercise these rights, please contact us using the
                  information provided in the Contact Us section below.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Data Retention
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    Retention Periods
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • Client information: Duration of service relationship + 3
                      years
                    </li>
                    <li>
                      • Marketing communications: Until consent is withdrawn
                    </li>
                    <li>• Website analytics: Up to 26 months</li>
                    <li>• Legal compliance: As required by applicable laws</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Changes to This Privacy Policy
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons.
                </p>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-300 mb-2">
                    Notification of Changes
                  </h3>
                  <p className="text-gray-300 text-sm">
                    We will notify you of any material changes by posting the
                    updated Privacy Policy on our website and updating the
                    &quot;Last updated&quot; date. We encourage you to review
                    this policy periodically.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 sm:p-8 border border-blue-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Contact Us
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">Email</h3>
                    <p className="text-blue-400">privacy@socialadforge.com</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-200 mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-300">We respond within 48 hours</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    Data Protection Officer
                  </h3>
                  <p className="text-gray-300 text-sm">
                    For privacy-related concerns, you can also contact our Data
                    Protection Officer at dpo@socialadforge.com
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              This Privacy Policy is effective as of the date listed above and
              applies to all information collected by SocialAdForge.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
