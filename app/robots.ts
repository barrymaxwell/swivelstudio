import type { MetadataRoute } from "next";

// Squarespace blocked ClaudeBot, GPTBot and ~25 others by default.
// Deliberately allowing them: assistant-mediated discovery is a referral channel.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.swivelstudio.com/sitemap.xml",
  };
}
