import { MetadataRoute } from "next";

export async function GET() {
  const manifest: MetadataRoute.Manifest = {
    name: "SocialAdForge - Web Development & Digital Marketing",
    short_name: "SocialAdForge",
    description:
      "Independent digital partner delivering high-performance websites, Meta ad systems, and brand identities for ambitious Indian businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon1.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon1.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity"],
    lang: "en",
    dir: "ltr",
  };

  return Response.json(manifest);
}
