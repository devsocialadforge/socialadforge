import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppChat from "./components/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://socialadforge.com"), // Replace with your actual domain
  title: {
    default: "SocialAdForge - Digital Marketing Expert | Salmanul Faris",
    template: "%s | SocialAdForge",
  },
  description:
    "Professional digital marketing services by Salmanul Faris. Expert in social media management, content creation, web development, and advertising campaigns. 50+ projects completed, 25+ happy clients. Transform your online presence today.",
  keywords: [
    "digital marketing",
    "social media marketing",
    "content creation",
    "web development",
    "advertising campaigns",
    "brand growth",
    "online presence",
    "marketing strategy",
    "Salmanul Faris",
    "SocialAdForge",
    "digital marketing expert",
    "social media management",
    "SEO optimization",
    "lead generation",
  ],
  authors: [{ name: "Salmanul Faris", url: "https://socialadforge.com" }],
  creator: "Salmanul Faris",
  publisher: "SocialAdForge",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socialadforge.com",
    siteName: "SocialAdForge",
    title: "SocialAdForge - Digital Marketing Expert | Salmanul Faris",
    description:
      "Professional digital marketing services by Salmanul Faris. Expert in social media management, content creation, web development, and advertising campaigns. 50+ projects completed, 25+ happy clients.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SocialAdForge - Digital Marketing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialAdForge - Digital Marketing Expert | Salmanul Faris",
    description:
      "Professional digital marketing services by Salmanul Faris. Expert in social media management, content creation, web development, and advertising campaigns.",
    images: ["/logo.png"],
    creator: "@socialadforge", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://socialadforge.com",
  },
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsAppChat
          name="SocialAdForge"
          profilePicture="/logo.png"
          message="Hi! Need help growing your brand? Reply here — we'll get back in minutes."
          position="bottom-right"
          phone="+919645551315"
        />
        {children}
      </body>
    </html>
  );
}
