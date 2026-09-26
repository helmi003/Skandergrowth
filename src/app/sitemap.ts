import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Single-page site; the language is negotiated per visitor, not per URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, lastModified: new Date() }];
}
