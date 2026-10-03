import type { Metadata } from "next";
import "./globals.css";
import { SITE, IS_CANONICAL_HOST } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Swivel Studio — Brand identity and event design, Seattle",
    template: "%s — Swivel Studio",
  },
  description:
    "Robin Maxwell designs brand identities, event campaigns and print for Seattle organizations — from Gates Ag One and Weyerhaeuser to neighborhood nonprofits.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Swivel Studio",
    url: SITE,
    title: "Swivel Studio — Brand identity and event design, Seattle",
    description:
      "Two decades of brand identity, event design and print for Seattle organizations.",
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
  description: "Brand identity, event design and print for Seattle organizations.",
  url: SITE,
  email: "robin@swivelstudio.com",
  telephone: "+1-206-356-3063",
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
      </body>
    </html>
  );
}
