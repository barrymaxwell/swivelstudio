import type { MetadataRoute } from "next";
import { projects } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.swivelstudio.com";
  const paths = ["", "/work", "/about", "/contact", ...projects.map((p) => `/work/${p.slug}`)];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
