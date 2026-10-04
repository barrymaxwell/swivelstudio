import type { MetadataRoute } from "next";
import { projects } from "@/lib/work";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work", "/about", "/contact", ...projects.map((p) => `/work/${p.slug}`)];
  // No lastModified. A build date on every page is noise Google learns to ignore.
  return paths.map((path) => ({ url: `${SITE}${path}` }));
}
