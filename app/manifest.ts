import type { MetadataRoute } from "next";
import { site } from "@/components/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b10",
    theme_color: "#0b0b10",
    icons: [
      { src: "/app-icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
