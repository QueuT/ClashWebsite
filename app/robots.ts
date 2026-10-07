import type { MetadataRoute } from "next";

// Basic robots config is enough for now. It keeps the site crawlable without overengineering any SEO tooling.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
