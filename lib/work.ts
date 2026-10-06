export type Tag = "Branding" | "Event" | "Print & editorial" | "Digital";

export type Section = {
  heading: string;
  /** Overrides the project's tags. A bank's website is Digital, not Print. */
  tags?: Tag[];
  /** Uniform cells instead of aspect-aware layout — for comparing marks. */
  gallery?: boolean;
  body: string | string[];
  images?: { src: string; alt: string; w: number; h: number }[];
  /** Optional cover art and crop used only in the work archive. */
  archiveCover?: { src?: string; w?: number; h?: number; position?: string; scale?: number; origin?: string };
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  /** One line. The five-second read. */
  summary: string;
  /** Card context — why click in. */
  blurb: string;
  disciplines: string[];
  tags: Tag[];
  card: { src: string; w: number; h: number };
  /** Optional cover art and crop used only in the work archive. */
  archiveCover?: { src?: string; w?: number; h?: number; position?: string; scale?: number; origin?: string };
  hero: { src: string; alt: string; w: number; h: number };
  intro: string;
  sections: Section[];
  featured?: boolean;
};

const W = "/work";

export const projects: Project[] = [
  {
    slug: "pacific-crest-savings-bank",
    client: "Pacific Crest Savings Bank",
    title: "You’ll like what you see from the Crest",
    summary:
      "How investing in a brand overhaul bought a local Northwest bank some modern-day currency.",
    blurb:
      "A community bank’s full overhaul — logo, standards, collateral, website, apps and in-branch signage.",
    disciplines: ["Brand identity", "Collateral", "Website", "App", "Signage"],
    tags: ["Branding", "Digital", "Print & editorial"],
    card: { src: `${W}/pacific-crest-savings-bank/pcsbstationery.webp`, w: 1646, h: 948 },
    hero: { src: `${W}/pacific-crest-savings-bank/paccrest.webp`, alt: "Pacific Crest Savings Bank identity", w: 2000, h: 1000 },
    intro:
      "Pacific Crest Savings Bank is a local, independently owned community bank who wanted to build out their brand but first needed to bring it up to date. They wanted their logo, collateral materials, and web site modernized to reflect current best design practices and trends, and to support the new financial technologies they were embracing and offering to their clients.",
    featured: true,
    sections: [
      {
        heading: "Securing the elements",
        tags: ["Branding", "Print & editorial"],
        body: [
          "A new tagline — You’ll like what you see from the Crest™ — plus an earthy, Northwest color palette, expansive-feeling Northwest photography, a simplified mountain logo mark, and friendly typography.",
          "I created a full set of brand standards to guide them in their personable, helpful brand voice and visual identity system. The stationery suite includes a presentation folder which uses their signature blue with a pattern that echoes their logo shape and is reminiscent of the geometric patterns found on currency.",
        ],
        images: [
          { src: `${W}/pacific-crest-savings-bank/paccrest.webp`, alt: "Pacific Crest logo mark", w: 2000, h: 1000 },
          { src: `${W}/pacific-crest-savings-bank/pcsbstationery.webp`, alt: "Stationery suite", w: 1646, h: 948 },
          { src: `${W}/pacific-crest-savings-bank/pcsb-pres.webp`, alt: "Presentation folder", w: 970, h: 1290 },
          { src: `${W}/pacific-crest-savings-bank/pcsb-form.webp`, alt: "Branded forms", w: 974, h: 1260 },
        ],
      },
      {
        heading: "Why Pacific Crest?",
        tags: ["Digital"],
        body: [
          "The web site was rebuilt in phases, including full-screen images of local scenery to reflect their Northwest roots, a responsive layout, employee highlights, and an easy login to mobile and business banking.",
          "A case study section — with an in-print companion — was developed to help differentiate what makes them special: the bank’s nimble and custom vetting process, funding unique loans for projects that are often overlooked by traditional institutions.",
        ],
        images: [
          { src: `${W}/pacific-crest-savings-bank/hero1.webp`, alt: "Full-screen Northwest scenery on the site", w: 2500, h: 1618 },
          { src: `${W}/pacific-crest-savings-bank/pcsb-webhome.webp`, alt: "Homepage", w: 974, h: 1438 },
          { src: `${W}/pacific-crest-savings-bank/pcsb-webcase.webp`, alt: "Case study section", w: 974, h: 1438 },
          { src: `${W}/pacific-crest-savings-bank/pcsb-webpers.webp`, alt: "Personal banking", w: 2000, h: 2450 },
        ],
      },
      {
        heading: "The Crest at your fingertips",
        archiveCover: { position: "50% 60%" },
        tags: ["Digital"],
        body: "I designed app icons and worked with the client and their secure third-party banking app developer to customize the app framework, ensuring it seamlessly integrated with their suite of branded environments.",
        images: [
          { src: `${W}/pacific-crest-savings-bank/img-9733.webp`, alt: "Banking app", w: 1179, h: 2506 },
          { src: `${W}/pacific-crest-savings-bank/img-9727.webp`, alt: "Business banking app", w: 1179, h: 2453 },
        ],
      },
      {
        heading: "Observing the signs",
        archiveCover: { scale: 1.04, position: "50% 60%" },
        tags: ["Print & editorial"],
        body: "A series of holiday closure signs were produced for the entire year, incorporating a line-art illustration style often used on currency, which also families with the crest-shaped security pattern used as a background element throughout branding.",
        images: [
          { src: `${W}/pacific-crest-savings-bank/pcsb-holiday.webp`, alt: "Holiday closure sign", w: 974, h: 1240 },
          { src: `${W}/pacific-crest-savings-bank/pcsb-holiday2.webp`, alt: "Holiday closure sign", w: 974, h: 1240 },
        ],
      },
    ],
  },
  {
    slug: "identities",
    client: "Identities",
    title: "Identities",
    summary:
      "Twelve marks, across nonprofits, food, healthcare, furniture and real estate.",
    blurb:
      "Twelve logos, from a foster care nonprofit to a Neapolitan pizzeria to an Alaskan creamery.",
    disciplines: ["Assorted clients", "Logo design", "Naming"],
    tags: ["Branding"],
    card: { src: `${W}/identities/contact-sheet-83bce06d.webp`, w: 1600, h: 1200 },
    archiveCover: { src: `${W}/identities/namazu-7268f850.webp` },
    hero: { src: `${W}/identities/marks-hero-2a3cd620.webp`, alt: "Eight of the identity marks", w: 2100, h: 900 },
    intro:
      "Being a brand creative is like prepping someone for a pivotal meeting: you want to create something that feels natural, second-skin. When you see the client try it on, look in the mirror, light up, then go into the world with a smile and OWN IT with confidence — that is the BEST feeling.",
    featured: true,
    sections: [
      {
        heading: "Selected marks",
        gallery: true,
        body: "",
        images: [
          { src: `${W}/identities/mockingbird-48ffe1f4.webp`, alt: "The Mockingbird Society — transforming foster care and ending youth homelessness", w: 1600, h: 1200 },
          { src: `${W}/identities/namazu-7268f850.webp`, alt: "Namazu — fast, casual Japanese cuisine in San Francisco, named for the catfish of Japanese mythology", w: 1600, h: 1200 },
          { src: `${W}/identities/livinglocal-991ab2ea.webp`, alt: "Seasons, Harry Race and White’s — sister stores for medical equipment, pharmacy and gifts in Alaska", w: 1600, h: 1200 },
          { src: `${W}/concord-international-school/nochetropical.webp`, alt: "Noche Tropical — fundraising dinner and auction identity for Concord International School", w: 2000, h: 1000 },
          { src: `${W}/identities/perennial-58a343d1.webp`, alt: "Perennial — leadership training for social justice and nonprofit leaders. When you enrich the soil, things flourish", w: 907, h: 680 },
          { src: `${W}/identities/jjkettman-c5ebbf77.webp`, alt: "J&J Kettman — hand-crafted furniture made with the tools and techniques of the 17th and 18th centuries", w: 920, h: 690 },
          { src: `${W}/identities/queen-margherita-pizzeria-9a357823.webp`, alt: "Queen Margherita Pizzeria — Neapolitan pizza", w: 1014, h: 761 },
          { src: `${W}/identities/alaskan-creamery-1-8a626f00.webp`, alt: "Alaskan Creamery — ice cream shop in Alaska", w: 1181, h: 886 },
          { src: `${W}/identities/philips-7a826c65.webp`, alt: "Philips — 21 years of multi-vendor service excellence", w: 1214, h: 911 },
          { src: `${W}/identities/redwood-dd2db8ea.webp`, alt: "Redwood — California real estate", w: 1157, h: 868 },
          { src: `${W}/identities/ams-e5e21869.webp`, alt: "AMS — medical accounts receivable", w: 903, h: 677 },
          { src: `${W}/identities/nofsinger-group-1-71c4d01b.webp`, alt: "Nofsinger Group — consultants", w: 871, h: 653 },
        ],
      },
    ],
  },
  {
    slug: "concord-international-school",
    client: "Concord International School",
    title: "Supporting community growth",
    summary:
      "Fundraising in, and for, an under-resourced school and its families.",
    blurb:
      "Bilingual fundraising for a South Seattle school where 75% of families are low income.",
    disciplines: ["Event branding", "Campaign", "Print", "Social"],
    tags: ["Event", "Print & editorial", "Branding"],
    card: { src: `${W}/concord-international-school/nochetropical.webp`, w: 2000, h: 1000 },
    hero: { src: `${W}/concord-international-school/nochetropical.webp`, alt: "Noche Tropical event identity", w: 2000, h: 1000 },
    intro:
      "Serving a thriving community in South Seattle, Concord offers Spanish dual-language and all-English international curricula to serve its students, who are 89% children of color, 60% English language learners, 70% immigrants, and 75% low income. Because the community is primarily low income, the school faces barriers to raising funds, which enable them to provide a variety of important services to students. Design themes vary by event, and take into consideration the rich mix of cultures represented in the community.",
    featured: true,
    sections: [
      {
        heading: "Noche Tropical",
        archiveCover: { position: "100% 50%", scale: 1.8, origin: "100% 0%" },
        tags: ["Event", "Branding", "Print & editorial"],
        body: "Annual dinner and fundraising auction. Design deliverables include an event poster, flyers, bid paddles, auction catalog, graphics for social media and online ticketing, sponsorship package, at-event signage, gift certificates, auction item forms, keynote auction presentation, and a school fundraising video. Most pieces are created in both English and Spanish.",
        images: [
          { src: `${W}/concord-international-school/tn-bro-ext.webp`, alt: "Auction brochure, exterior", w: 2000, h: 932 },
          { src: `${W}/concord-international-school/tn-bro-int.webp`, alt: "Auction brochure, interior", w: 2000, h: 934 },
          { src: `${W}/concord-international-school/tn-poster.webp`, alt: "Event poster", w: 970, h: 1500 },
          { src: `${W}/concord-international-school/tn-flyer.webp`, alt: "Event flyer", w: 974, h: 1260 },
          { src: `${W}/concord-international-school/tn-sponsorshippkg.webp`, alt: "Sponsorship package", w: 2000, h: 1296 },
        ],
      },
      {
        heading: "Other fundraisers",
        archiveCover: { scale: 1.5, position: "50% 70%" },
        tags: ["Event", "Print & editorial"],
        body: "Hello Spring 2018 and Spring Fling 2017. Posters, flyers, bid paddles, auction catalogs, graphics for social media and online ticketing, gift certificates, and a keynote auction presentation. Most pieces were created in both English and Spanish.",
        images: [
          { src: `${W}/concord-international-school/hellospring-postermockup.webp`, alt: "Hello Spring poster", w: 1097, h: 1509 },
          { src: `${W}/concord-international-school/springfling.webp`, alt: "Spring Fling poster", w: 974, h: 1504 },
        ],
      },
      {
        heading: "Designing community",
        archiveCover: { scale: 1.08, position: "50% 25%" },
        tags: ["Print & editorial"],
        body: [
          "Each year the Concord PTA puts on four community dinners — events that provide an opportunity to share a meal and celebrate community, connect, share successes and needs, and find volunteer opportunities.",
          "The goal of these posters was to increase attendance and anticipation, and to attract area nonprofits to “table” at the dinners, increasing capacity to connect school families and community to services.",
        ],
        images: [
          { src: `${W}/concord-international-school/cd1.webp`, alt: "Community dinner poster", w: 974, h: 1506 },
          { src: `${W}/concord-international-school/cd2.webp`, alt: "Community dinner poster", w: 974, h: 1504 },
        ],
      },
      {
        heading: "One-off events",
        archiveCover: { scale: 1.06, position: "50% 20%" },
        tags: ["Print & editorial", "Digital"],
        body: [
          "Throughout the year, the PTA sponsors several events — Day of the Dead, Teacher Appreciation Week — for which they need engagement materials, from posters and graphics to advertising on social media.",
          "Because these events are mainly one-off, or just need continuity year over year, it’s been a fun place to explore different design directions.",
        ],
        images: [
          { src: `${W}/concord-international-school/dia.webp`, alt: "Día de los Muertos poster", w: 970, h: 1502 },
          { src: `${W}/concord-international-school/fbparticipation.webp`, alt: "Social media graphic", w: 974, h: 1504 },
          { src: `${W}/concord-international-school/cies-2019-carnival-masthead.webp`, alt: "Carnival masthead", w: 1710, h: 660 },
          { src: `${W}/concord-international-school/cies-socialemo.webp`, alt: "Social-emotional learning graphic", w: 1710, h: 660 },
        ],
      },
    ],
  },
  {
    slug: "plum-creek",
    client: "Plum Creek",
    title: "Cutting trees to grow healthy forests",
    summary:
      "How a sustainability report aligned perceptions of corporate responsibility with stakeholder priorities.",
    blurb:
      "Making the case for responsible forestry across 6.6 million acres, in numbers and photography.",
    disciplines: ["Editorial design", "Infographics", "Annual reports"],
    tags: ["Print & editorial"],
    card: { src: `${W}/plum-creek/plumcreek-sust2.webp`, w: 970, h: 776 },
    hero: { src: `${W}/plum-creek/plumcreek-sust4.webp`, alt: "Plum Creek sustainability report, letter to stakeholders", w: 2004, h: 1308 },
    intro:
      "Plum Creek (since merged with Weyerhaeuser) owned and sustainably managed 6.6 million acres of highly productive forest land in 19 U.S. states. Perceptions of land management and, in particular, forests, can be fraught. Stakeholders were beginning to require that companies prove their leadership in stewardship, responsibility, and ethics — an area where Plum Creek shone.",
    featured: true,
    sections: [
      {
        heading: "Every Tree Counts",
        tags: ["Print & editorial"],
        body: "Under the theme “Every Tree Counts”, this report used bold numbers and infographics alongside expansive imagery from custom photoshoots of Plum Creek’s well-managed lands — underscoring the intense analytic scrutiny the company operates by in service to their three main focal points: growing healthy forests in perpetual cycles including responsible harvesting; building a strong workforce and sustaining rural communities; and creating long-term value for stakeholders.",
        images: [
          { src: `${W}/plum-creek/plumcreek-sust1.webp`, alt: "Sustainability report cover", w: 2000, h: 2150 },
          { src: `${W}/plum-creek/plumcreek-sust3.webp`, alt: "Internal pages", w: 970, h: 776 },
          { src: `${W}/plum-creek/plumcreek-sust2.webp`, alt: "Managed forest land photography", w: 970, h: 776 },
        ],
      },
      {
        heading: "A year in the life",
        tags: ["Print & editorial"],
        body: [
          "Three annual reports, each telling the year’s story through the lens of company value, and values. “We grow value from…” emphasizes that Plum Creek’s land is valuable for its trees as well as for its other resources and uses.",
          "“True to our core” uses the metaphor of a tree’s rings to quite literally spell out Plum Creek’s values at the centre of their organization. The third uses “We see…” statements, finishing them with powerful words like “Value” and “Opportunity,” juxtaposed with inspiring nature imagery.",
        ],
        images: [
          { src: `${W}/plum-creek/plumcreek-ar13.webp`, alt: "Annual report", w: 970, h: 1264 },
          { src: `${W}/plum-creek/plumcreek-ar14.webp`, alt: "Annual report", w: 974, h: 1268 },
          { src: `${W}/plum-creek/plumcreek2014ar-1.webp`, alt: "2014 annual report", w: 1151, h: 1500 },
        ],
      },
    ],
  },
  {
    slug: "trueblue-stronger-together",
    client: "TrueBlue",
    title: "Stronger Together",
    summary:
      "Conference branding, an annual report and a benefits guide, across several years with one client.",
    blurb:
      "Uniting the sales forces of multiple umbrella companies under one event identity.",
    disciplines: ["Event branding", "Environmental", "Print"],
    tags: ["Event", "Print & editorial"],
    card: { src: `${W}/trueblue/tb-slc2013.webp`, w: 2000, h: 1334 },
    hero: { src: `${W}/trueblue/tb-slc2013.webp`, alt: "Sales Leadership Conference branding", w: 2000, h: 1334 },
    intro:
      "TrueBlue is a workforce solutions company, connecting people and work. The work spans several years and several kinds of project — the branding for their national sales conference, the annual report that explained a changing business to investors, and the guide that rolled out a new wellness programme to their workforce.",
    featured: true,
    sections: [
      {
        heading: "In the room",
        archiveCover: { position: "50% 43%" },
        tags: ["Event"],
        body: [
          "Each year TrueBlue holds a Sales Leadership Conference for their national sales teams. The theme — Stronger Together — had to get the sales forces of multiple umbrella companies working as one and cross-selling across the group.",
          "Deliverables ran from event branding, print and email invitations to signage, display graphics, visual aids, keynote speaker graphics, way-finding, notebooks, brochures and giveaways, lanyards and name badges. Banners, breakout room signage and display graphics carried the identity through the venue.",
        ],
        images: [
          { src: `${W}/trueblue/trueblue-we-are-trueblue-banner.webp`, alt: "We Are TrueBlue banner", w: 800, h: 1760 },
          { src: `${W}/trueblue/trueblue-brand-banner.webp`, alt: "Brand banner", w: 800, h: 1760 },
          { src: `${W}/trueblue/trueblue-attribute-banner.webp`, alt: "Attribute banner", w: 800, h: 1760 },
          { src: `${W}/trueblue/trueblue-breakout-room-sign.webp`, alt: "Breakout room sign", w: 800, h: 1067 },
        ],
      },
      {
        heading: "Staying true",
        tags: ["Print & editorial"],
        body: "As TrueBlue evolved and acquired new business lines, the way they described their services changed. This annual report served to reestablish their core values and clarify their business model to investors.",
        images: [
          { src: `${W}/trueblue/tbi-2015ar-1.webp`, alt: "2015 annual report", w: 970, h: 1290 },
          { src: `${W}/trueblue/tbi-2015ar-2.webp`, alt: "2015 annual report spread", w: 970, h: 1458 },
        ],
      },
      {
        heading: "Workforce wellness",
        archiveCover: { scale: 1.18, position: "50% 110%" },
        tags: ["Branding", "Print & editorial"],
        body: "Clear, clean and concise, with the front cover juxtaposing the iconic worker with an icon of health. This benefits guide also rolled out TrueBlue’s new wellness program, Stronger You, Stronger Blue, which we both named and created a corresponding wordmark for.",
        images: [
          { src: `${W}/trueblue/tb-ben1.webp`, alt: "Benefits enrollment guide", w: 970, h: 1256 },
          { src: `${W}/trueblue/tb-ben2.webp`, alt: "Benefits enrollment guide spread", w: 970, h: 1256 },
        ],
      },
    ],
  },
  {
    slug: "trueblue-journey-to-unification",
    client: "TrueBlue",
    title: "Are we there yet?",
    summary: "How a road trip helped quell acquisition anxiety.",
    blurb:
      "A retro road-trip campaign — launched with a care package in a cheery suitcase — to calm a newly acquired workforce.",
    disciplines: ["Campaign", "Illustration", "Internal comms"],
    tags: ["Branding", "Print & editorial"],
    card: { src: `${W}/trueblue/trueblue-journey-postcard-1.webp`, w: 1236, h: 800 },
    hero: { src: `${W}/trueblue/trueblue-journey-postcard-1.webp`, alt: "Journey to Unification postcard", w: 1236, h: 800 },
    intro:
      "To get a newly acquired business ready for the milestones to unification and assuage employee anxiety, we ideated and branded the transition as a retro-style “Journey to Unification”, complete with custom illustrations.",
    featured: true,
    sections: [
      {
        heading: "A care package from the road",
        tags: ["Branding", "Print & editorial"],
        body: [
          "Print and digital communications were dropped at strategic times to let branch employees know they were valued, set expectations, remind them of upcoming action items, cheer them on, and congratulate them throughout the process.",
          "The initial installment was introduced to branch offices by way of a care package in a cheery suitcase, complete with travel stickers, a road map containing milestones, mission and vision statements, feedback postcards for employees to “mail in” from the road, jujubes, stress dolls, tchotchkes and other items to make the journey more bearable.",
        ],
        images: [
          { src: `${W}/trueblue/trueblue-journey-atlas-cover.webp`, alt: "Journey atlas cover", w: 800, h: 1035 },
          { src: `${W}/trueblue/trueblue-journey-brochure-cover.webp`, alt: "Journey brochure cover", w: 600, h: 1284 },
          { src: `${W}/trueblue/trueblue-journey-postcard-2.webp`, alt: "Feedback postcard", w: 1236, h: 800 },
          { src: `${W}/trueblue/tb-unifimap1.webp`, alt: "Unification road map", w: 974, h: 1526 },
          { src: `${W}/trueblue/tb-unifimap2.webp`, alt: "Unification road map detail", w: 970, h: 620 },
        ],
      },
    ],
  },
];

/** Stable anchor for a section heading, used by /work entries and prev/next. */
export const sectionId = (heading: string) =>
  heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export type ArchiveEntry = {
  key: string;
  title: string;
  client: string;
  href: string;
  tags: Project["tags"];
  image: { src: string; w: number; h: number };
  imagePosition?: string;
  imageScale?: number;
  imageOrigin?: string;
};

/**
 * Every discrete piece of work, not just the six on the homepage. A project
 * with several sections contributes one entry per section, deep-linked to it —
 * which is how five old Squarespace pages become fifteen entries without
 * writing anything new.
 */
export const archive: ArchiveEntry[] = projects.flatMap((p) =>
  p.sections.length > 1
    ? p.sections.map((s) => ({
        key: `${p.slug}#${sectionId(s.heading)}`,
        title: s.heading,
        client: p.client,
        href: `/work/${p.slug}#${sectionId(s.heading)}`,
        tags: s.tags ?? p.tags,
        image: {
          src: s.archiveCover?.src ?? s.images?.[0]?.src ?? p.card.src,
          w: s.archiveCover?.w ?? s.images?.[0]?.w ?? p.card.w,
          h: s.archiveCover?.h ?? s.images?.[0]?.h ?? p.card.h,
        },
        imagePosition: s.archiveCover?.position,
        imageScale: s.archiveCover?.scale,
        imageOrigin: s.archiveCover?.origin,
      }))
    : [{
        key: p.slug,
        title: p.title,
        client: p.client,
        href: `/work/${p.slug}`,
        tags: p.tags,
        image: {
          src: p.archiveCover?.src ?? p.card.src,
          w: p.archiveCover?.w ?? p.card.w,
          h: p.archiveCover?.h ?? p.card.h,
        },
        imagePosition: p.archiveCover?.position,
        imageScale: p.archiveCover?.scale,
        imageOrigin: p.archiveCover?.origin,
      }]
);

export const allTags = ["Branding", "Event", "Print & editorial", "Digital"] as const;

export const featured = projects.filter((p) => p.featured);
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const capabilities = [
  { title: "Brand Identity & Systems", copy: "Naming, marks, visual systems, standards, voice." },
  { title: "Digital", copy: "Websites, campaigns, social, product, decks." },
  { title: "Print & Environmental", copy: "Reports, publications, packaging, signage." },
];

export const clients = [
  "Gates Ag One", "Weyerhaeuser", "Philips Healthcare", "Seattle Genetics",
  "Realtor.com", "TrueBlue", "F5 Networks", "Seattle Cancer Care Alliance",
  "Gates Notes", "Dendreon", "SightLife", "Vera Whole Health",
  "Accelerator Corporation", "Life Science Washington", "First Sound Bank",
  "Pacific Crest Savings Bank", "Visit Bellevue", "Microclimates",
  "Concord International School", "YWCA",
];
