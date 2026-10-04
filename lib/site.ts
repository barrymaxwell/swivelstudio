/**
 * Canonical origin. Until DNS cuts over, the Vercel URL is the live host —
 * metadata, OG images and the sitemap all have to agree with wherever we
 * actually are, or link previews break and the sitemap points at Squarespace.
 *
 * At cutover: set NEXT_PUBLIC_SITE_URL=https://swivelstudio.com in Vercel.
 */
export const PRODUCTION_HOST = "swivelstudio.com";

export const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** True only on the real domain. The vercel.app copy must not be indexed. */
export const IS_CANONICAL_HOST = new URL(SITE).host === PRODUCTION_HOST;
