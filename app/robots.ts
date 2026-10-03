import type { MetadataRoute } from "next";
import { SITE, IS_CANONICAL_HOST } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Before DNS cutover this app is live at swivelstudio.vercel.app. Letting
  // that get indexed would put a full duplicate of the site in the index.
  if (!IS_CANONICAL_HOST) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  // Squarespace blocked ClaudeBot, GPTBot and ~25 others by default.
  // Deliberately allowing them: assistant-mediated discovery is a referral channel.
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
