"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type Locale = "en" | "ar";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Initialize locale from cookie
  const [currentLocale, setCurrentLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const cookies = document.cookie.split("; ");
      const localeCookie = cookies.find((c) => c.startsWith("locale="));
      if (localeCookie) {
        return localeCookie.split("=")[1] as Locale;
      }
    }
    return "en"; // Default fallback
  });

  const switchLanguage = (locale: Locale) => {
    startTransition(() => {
      // Set cookie for locale
      document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 year
      setCurrentLocale(locale);
      // Refresh the page to apply new locale
      router.refresh();
    });
  };

  return (
    <div className="fixed top-5 right-[80px] z-5100 flex items-center gap-2">
      <button
        onClick={() => switchLanguage("en")}
        disabled={isPending}
        className={`px-1.5 md:px-3 md:py-1.5 py-1 md:text-sm text-xs rounded-md transition-colors ${
          currentLocale === "en"
            ? "bg-emerald-400 text-black md:font-medium font-normal"
            : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        disabled={isPending}
        className={`px-1.5 md:px-3 md:py-1.5 py-1 md:text-sm text-xs rounded-md transition-colors ${
          currentLocale === "ar"
            ? "bg-emerald-400 text-black md:font-medium font-normal"
            : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
        }`}
      >
        عربي
      </button>
    </div>
  );
}
