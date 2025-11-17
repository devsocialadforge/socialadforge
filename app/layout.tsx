import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata({
  title: "SocialAdForge - Web Development & Digital Marketing in Kerala & UAE",
  description: "Independent digital partner delivering high-performance websites, Meta ad systems, and brand identities for ambitious businesses in Kerala and UAE. Specializing in web development and Facebook/Instagram advertising in Dubai, Abu Dhabi, Sharjah, and Thrissur.",
  keywords: [
    "web developer Dubai UAE",
    "digital marketing Kerala",
    "freelance web developer UAE",
    "Meta ads specialist Dubai",
    "website builder UAE Kerala",
    "Thrissur web developer",
  ],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
        <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
