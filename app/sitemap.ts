import type { MetadataRoute } from "next";
import { site } from "@/components/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(site.lastUpdatedIso);

  return [
    { url: site.url, lastModified: updated, changeFrequency: "monthly", priority: 1 },
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
