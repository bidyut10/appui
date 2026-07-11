import type { MetadataRoute } from "next";

import { getAllShowcaseSlugs, getShowcaseByCategory } from "@/lib/showcase";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const slugs = getAllShowcaseSlugs();
  const categories = getShowcaseByCategory();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/components`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categories.map(({ category }) => ({
      url: `${siteConfig.url}/components?category=${encodeURIComponent(category)}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...slugs.map((slug) => ({
      url: `${siteConfig.url}/components/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
