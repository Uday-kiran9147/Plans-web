import type { MetadataRoute } from "next";
import { site } from "@/components/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(site.lastUpdatedIso);

  return [
    { url: site.url, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/download`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/wall`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/feedback`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/privacy`, lastModified: updated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${site.url}/terms`, lastModified: updated, changeFrequency: "yearly", priority: 0.4 },
    {
      url: `${site.url}/child-safety`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
