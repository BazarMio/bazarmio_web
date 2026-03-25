import type { MetadataRoute } from "next";

const baseUrl = "https://bazarmio.com";
const locales = ["en", "es"];
const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/features", changeFrequency: "monthly" as const, priority: 0.8 },
  // { path: "/education", changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
  );
}
