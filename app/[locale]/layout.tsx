import type { Metadata } from "next";
import type { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return generateSEOMetadata({
    title: isArabic
      ? "SocialAdForge - تطوير المواقع والتسويق الرقمي في كيرالا والإمارات"
      : "SocialAdForge - Web Development & Digital Marketing in Kerala & UAE",
    description: isArabic
      ? "شريك رقمي مستقل يقدم مواقع عالية الأداء، أنظمة إعلانات Meta، وهويات تجارية للشركات في كيرالا والإمارات. متخصص في تطوير الويب وإعلانات Facebook/Instagram في دبي وأبو ظبي والشارقة"
      : "Independent digital partner delivering high-performance websites, Meta ad systems, and brand identities for businesses in Kerala and UAE. Expert web development and Facebook/Instagram advertising in Dubai, Abu Dhabi, Sharjah, and Thrissur.",
    keywords: isArabic
      ? [
          "تطوير مواقع دبي",
          "تسويق رقمي الإمارات",
          "إعلانات فيسبوك دبي",
          "إعلانات انستقرام الإمارات",
          "تصميم مواقع كيرالا",
          "إعلانات ميتا دبي",
          "مطور ويب الإمارات",
          "تسويق رقمي كيرالا",
        ]
      : [
          "web developer Dubai UAE",
          "digital marketing Kerala",
          "Meta ads specialist Dubai",
          "website development UAE",
          "Facebook ads Dubai",
          "Instagram ads UAE",
          "freelance web developer Kerala UAE",
          "Thrissur web developer",
        ],
    path: `/${locale}`,
    locale,
    type: "website",
  });
}

export const generateStaticParams = () => [{ locale: "en" }, { locale: "ar" }];

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const structuredData = generateStructuredData(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}