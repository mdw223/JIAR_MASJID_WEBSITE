import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/lib/site-config";
import { slugToContentKey } from "@/data/pages";
import { newsPosts } from "@/data/news";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1 },
    { url: `${base}/donate`, priority: 0.9 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/about/news`, priority: 0.8 },
  ];

  const contentPages = Object.keys(slugToContentKey).map((path) => ({
    url: `${base}${path}`,
    priority: 0.7,
  }));

  const masjidPages = locations.map((loc) => ({
    url: `${base}/masjids/${loc.slug}`,
    priority: 0.9,
  }));

  const newsPages = newsPosts.map((post) => ({
    url: `${base}/about/news/${post.slug}`,
    priority: 0.6,
  }));

  return [...staticPages, ...contentPages, ...masjidPages, ...newsPages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
