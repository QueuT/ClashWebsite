import type { MetadataRoute } from "next";

// Sitemap config keeps the site easier to index while the club is still polishing its real content and URL structure.

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/programs",
    "/teams",
    "/tryouts",
    "/about",
    "/coaches",
    "/fees",
    "/faq",
    "/contact",
    "/camps",
    "/open-gym",
    "/clashup",
  ];

  return routes.map((route) => ({
    url: `https://example.com${route}`,
    lastModified: new Date(),
  }));
}
