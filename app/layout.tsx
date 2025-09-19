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
  title: "SocialAdForge - Digital Marketing Solutions",
  description:
    "Professional digital marketing services including social media management, content creation, and advertising campaigns. Transform your online presence with SocialAdForge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsAppChat
          name="SocialAdForge"
          profilePicture="/logo.png"
          message="Hi! Need help growing your brand? Reply here — we’ll get back in minutes."
          position="bottom-right"
          phone="+919645551315"
        />
        {children}
      </body>
    </html>
  );
}
