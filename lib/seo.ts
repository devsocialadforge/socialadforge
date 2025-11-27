import { Metadata } from "next";

export const BASE_URL = "https://socialadforge.com";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  locale?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
  locale = "en",
  image = "/opengraph-image.png",
  type = "website",
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = `${BASE_URL}${image}`;

  const defaultKeywords = [
    "digital marketing Kerala UAE",
    "website development Kerala",
    "web developer UAE",
    "Meta ads specialist Kerala",
    "Facebook ads UAE",
    "Instagram ads Dubai",
    "branding services Kerala UAE",
    "web design Thrissur",
    "freelance digital marketer UAE",
    "performance marketing Dubai",
    "social media advertising Kerala",
    "website builder UAE",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: `%s | SocialAdForge`,
    },
    description,
    keywords: allKeywords,
    authors: [{ name: "Salmanul Faris", url: BASE_URL }],
    creator: "Salmanul Faris",
    publisher: "SocialAdForge",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en${path}`,
        ar: `${BASE_URL}/ar${path}`,
      },
    },
    openGraph: {
      type,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url,
      title,
      description,
      siteName: "SocialAdForge",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@socialadforge",
    },
    verification: {
      google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
    category: "Digital Marketing",
  };
}

export function generateStructuredData(locale: string = "en") {
  const isArabic = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Salmanul Faris",
        url: BASE_URL,
        image: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/hero-portrait.png`,
        },
        sameAs: [
          "https://instagram.com/socialadforge",
          "https://facebook.com/socialadforge",
        ],
        jobTitle: isArabic
          ? "مطور ويب ومستشار تسويق رقمي"
          : "Web Developer & Digital Marketing Consultant",
        description: isArabic
          ? "متخصص في تطوير المواقع، إعلانات Meta، والتسويق الرقمي للشركات في كيرالا والإمارات"
          : "Specializing in web development, Meta ads, and digital marketing for businesses in Kerala and UAE",
        knowsAbout: [
          "Web Development",
          "Digital Marketing",
          "Meta Advertising",
          "Facebook Ads",
          "Instagram Ads",
          "Brand Identity",
          "UI/UX Design",
          "Performance Marketing",
          "SEO",
        ],
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Thrissur",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${BASE_URL}/#business`,
        name: "SocialAdForge",
        url: BASE_URL,
        logo: `${BASE_URL}/images/logo.png`,
        image: `${BASE_URL}/images/hero-portrait.png`,
        description: isArabic
          ? "شريك رقمي مستقل يقدم مواقع عالية الأداء، أنظمة إعلانات Meta، وهويات تجارية للشركات الطموحة في كيرالا والإمارات"
          : "Independent digital partner delivering high-performance websites, Meta ad systems, and brand identities for ambitious businesses in Kerala and UAE",
        priceRange: "$$",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Thrissur",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE",
          },
        ],
        geo: [
          {
            "@type": "GeoCoordinates",
            latitude: 10.5276,
            longitude: 76.2144,
            name: "Thrissur, Kerala",
          },
          {
            "@type": "GeoCoordinates",
            latitude: 25.2048,
            longitude: 55.2708,
            name: "Dubai, UAE",
          },
        ],
        telephone: "+91-96455-51315",
        email: "socialadforge@gmail.com",
        openingHours: "Mo-Sa 09:00-19:00",
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "State",
            name: "Kerala",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "City",
            name: "Dubai",
          },
          {
            "@type": "City",
            name: "Abu Dhabi",
          },
          {
            "@type": "City",
            name: "Sharjah",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isArabic ? "الخدمات" : "Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isArabic ? "تطوير المواقع" : "Website Development",
                description: isArabic
                  ? "بناء موقع ويب حديث وسريع ومتوافق مع الأجهزة المحمولة"
                  : "Build modern, fast, and mobile-friendly websites",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isArabic ? "التسويق الرقمي" : "Digital Marketing",
                description: isArabic
                  ? "استراتيجيات التسويق الرقمي القائمة على البيانات"
                  : "Data-driven digital marketing strategies",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isArabic ? "إعلانات Meta" : "Meta Ads Management",
                description: isArabic
                  ? "إعلانات احترافية على Facebook و Instagram"
                  : "Professional Facebook & Instagram advertising",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isArabic
                  ? "العلامة التجارية والإبداعات"
                  : "Branding & Creatives",
                description: isArabic
                  ? "بناء هوية علامة تجارية قوية"
                  : "Build strong brand identities",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "SocialAdForge",
        description: isArabic
          ? "شريك رقمي مستقل للشركات الهندية"
          : "Independent digital partner for Indian businesses",
        publisher: {
          "@id": `${BASE_URL}/#person`,
        },
        inLanguage: [locale === "ar" ? "ar" : "en"],
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: isArabic
          ? "SocialAdForge - تطوير المواقع والتسويق الرقمي في الهند"
          : "SocialAdForge - Web Development & Digital Marketing in India",
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${BASE_URL}/#business`,
        },
        description: isArabic
          ? "متخصص في تطوير المواقع عالية الأداء، إعلانات Meta، والهويات التجارية للشركات في كيرالا والإمارات"
          : "Specializing in high-performance website development, Meta advertising, and brand identities for businesses in Kerala and UAE",
        inLanguage: locale === "ar" ? "ar" : "en",
      },
    ],
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
