import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE, IS_CANONICAL_HOST } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Swivel Studio — Branding and graphic design, Seattle",
    template: "%s — Swivel Studio",
  },
  description:
    "Robin Maxwell is a Seattle graphic designer working in brand identity, events, campaigns, print, and digital — for Gates Ag One, Weyerhaeuser, Philips Healthcare, and neighborhood nonprofits.",
  openGraph: {
    type: "website",
    siteName: "Swivel Studio",
    title: "Swivel Studio — Branding and graphic design, Seattle",
    description:
      "Two decades of branding, print, and digital design for Seattle organizations.",
  },
  twitter: { card: "summary_large_image" },
  // Belt and braces alongside robots.ts while the vercel.app copy is live.
  robots: IS_CANONICAL_HOST ? undefined : { index: false, follow: false },
};

// LocalBusiness, with the address the Squarespace site left empty.
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Swivel Studio",
  description: "Branding and graphic design for Seattle organizations.",
  url: SITE,
  email: "robin@swivelstudio.com",
  founder: { "@type": "Person", name: "Robin Maxwell", jobTitle: "Principal and Art Director" },
  address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
  areaServed: { "@type": "City", name: "Seattle" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
