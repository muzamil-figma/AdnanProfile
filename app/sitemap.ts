import type { MetadataRoute } from "next";
const base = "https://example.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base + "/", lastModified: new Date() },
    { url: base + "/pricing", lastModified: new Date() },
    { url: base + "/blog", lastModified: new Date() },
    { url: base + "/industries", lastModified: new Date() },
  ];
}
