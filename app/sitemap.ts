import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  // Generate locale-specific URLs
  const localePages = locales.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          ar: `${BASE_URL}/ar`,
        },
      },
    },
    {
      url: `${BASE_URL}/${locale}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/${locale}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [...staticPages, ...localePages];
}

