"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    key: "instagram",
    href: "https://instagram.com/socialadforge",
    Icon: Instagram,
  },
  {
    key: "facebook",
    href: "https://facebook.com/socialadforge",
    Icon: Facebook,
  },
  {
    key: "whatsapp",
    href: "https://wa.me/919645551315",
    Icon: MessageCircle,
  },
];

const QUICK_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/#portfolio" },
  { key: "contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { key: "websites", href: "/services#web" },
  { key: "marketing", href: "/services#marketing" },
  { key: "ads", href: "/services#meta" },
  { key: "branding", href: "/services#branding" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div
        dir={direction as "rtl" | "ltr"}
        className="mx-auto max-w-7xl px-6 py-12 space-y-12"
      >
        <div className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-gradient-to-br from-neutral-900/70 via-neutral-900/10 to-emerald-500/10 p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="space-y-3 text-neutral-100 md:max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
              {t("ctaLabel")}
            </p>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              {t("ctaTitle")}
            </h2>
            <p className="text-sm text-neutral-400 md:text-base">
              {t("ctaDescription")}
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="h-auto rounded-2xl bg-emerald-500 px-6 py-4 text-base font-semibold text-neutral-950 transition hover:bg-emerald-400"
          >
            <Link
              href="/contact"
              className={`flex items-center gap-2 ${
                direction === "rtl" ? "flex-row-reverse" : ""
              }`}
            >
              <span>{t("ctaButton")}</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid allh md:grid-cols-3   w-full gap-3">
          <div className="space-y-4 text-neutral-300">
            <p className="text-xl font-semibold text-neutral-50">
              SocialAdForge
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              {t("brandDescription")}
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-neutral-500">
              <span className="rounded-full border border-white/10 px-3 py-1">
                {t("badge.strategy")}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                {t("badge.speed")}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                {t("badge.scaling")}
              </span>
            </div>
          </div>
           <div className="grid grid-cols-2 gap-3">
          <div className="space-y-4 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              {t("quickLinksTitle")}
            </p>
            <ul className="space-y-3 text-neutral-300">
              {QUICK_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="transition hover:text-emerald-400"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              {t("serviceLinksTitle")}
            </p>
            <ul className="space-y-3 text-neutral-300">
              {SERVICE_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="transition hover:text-emerald-400"
                  >
                    {t(`serviceLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           </div>

          <div className="space-y-4 text-sm text-neutral-300">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              {t("contactTitle")}
            </p>
            <div className="space-y-3">
              <a
                href="mailto:socialadforge@gmail.com"
                className="flex items-start gap-3 text-neutral-300 transition hover:text-emerald-400"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span className="text-sm">
                  <span className="block text-neutral-500">
                    {t("contactEmailLabel")}
                  </span>
                  socialadforge@gmail.com
                </span>
              </a>
              <a
                href="tel:+919645551315"
                className="flex items-start gap-3 text-neutral-300 transition hover:text-emerald-400"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span className="text-sm">
                  <span className="block text-neutral-500">
                    {t("contactPhoneLabel")}
                  </span>
                  +91 96455 51315
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span className="text-sm">
                  <span className="block text-neutral-500">
                    {t("contactAddressLabel")}
                  </span>
                  {t("contactAddressValue")}
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-500">{t("contactHours")}</p>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {t("followTitle")}
              </p>
              <div
                className={`mt-3 flex gap-3 ${
                  direction === "rtl" ? "flex-row-reverse" : ""
                }`}
              >
                {SOCIAL_LINKS.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t(`social.${key}`)}
                    className="rounded-full border border-white/10 p-2 text-neutral-300 transition hover:border-emerald-400 hover:text-emerald-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t text-center md:text-start border-white/5 pt-6 text-xs  text-neutral-500">
          <div
            className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${
              direction === "rtl" ? "md:flex-row-reverse" : ""
            }`}
          >
            <p>{t("rights")}</p>
            <p>{t("madeIn")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

