export type Tag = "Branding" | "Event" | "Environmental" | "Print & editorial" | "Digital";

export type ScrollCapture = { strip: string; nav: string; stripW: number; stripH: number; connectOffset: number; controlOffset: number; endOffset: number };

export type Section = {
  heading: string;
  /** Preserve existing deep links when a section heading changes. */
  id?: string;
  /** Optional card title used only in the work archive. */
  archiveTitle?: string;
  /** Overrides the project's tags. A bank's website is Digital, not Print. */
  tags?: Tag[];
  /** Uniform cells instead of aspect-aware layout — for comparing marks. */
  gallery?: boolean;
  /** Omit visible image captions while preserving alt text. */
  hideCaptions?: boolean;
  /** Preserve reading order across rows for a numbered sequence. */
  orderedImages?: boolean;
  /** Keep a fixed image count in the left column instead of balancing columns. */
  leftColumnImages?: number;
  /** Row image counts or column spans, with one column on small screens. */
  imageRows?: (number | number[])[];
  body: string | string[];
  images?: { src: string; alt: string; w: number; h: number; breathingRoom?: boolean; fullWidth?: boolean; transparent?: boolean; square?: boolean; landscape?: boolean; scale?: number; keyline?: boolean | "subtle" | "hairline"; galleryScale?: number; caption?: string; credits?: { role: string; name: string }[] }[];
  imagePlaceholders?: string[];
  subsections?: { heading: string; body: string | string[]; imagePlaceholders?: string[]; images?: { id?: string; src: string; frames?: string[]; scroll?: ScrollCapture; alt: string; w: number; h: number; fullWidth?: boolean; fullPage?: boolean; keyline?: boolean | "subtle" | "hairline"; caption?: string }[] }[];
  /** Optional cover art and crop used only in the work archive. */
  archiveCover?: { src?: string; alt?: string; w?: number; h?: number; position?: string; scale?: number; origin?: string };
};

export type Project = {
  slug: string;
  client: string;
  /** Optional label above the project title on its page and archive card. */
  eyebrow?: string;
  title: string;
  /** One line. The five-second read. */
  summary: string;
  /** Card context — why click in. */
  blurb: string;
  /** Optional homepage card caption in place of the discipline list. */
  cardCaption?: string;
  disciplines: string[];
  tags: Tag[];
  card: { src: string; w: number; h: number; alt?: string; position?: string; scale?: number; origin?: string };
  /** A title here consolidates all sections into one work archive card. */
  archiveTitle?: string;
  /** Show a specific section of a consolidated project under a category. */
  archiveFilterSections?: Partial<Record<Tag, { heading: string; title?: string; archiveCover?: Section["archiveCover"] }>>;
  /** Optional cover art and crop used only in the work archive. */
  archiveCover?: { src?: string; w?: number; h?: number; position?: string; scale?: number; origin?: string };
  hero: { src: string; alt: string; w: number; h: number; position?: string; scale?: number };
  intro: string;
  testimonial?: { quote: string; name: string; role: string; color?: string };
  sections: Section[];
  credits?: { role: string; name: string }[];
  creditNote?: string;
  featured?: boolean;
};

const W = "/work";

export const projects: Project[] = [
  {
    "slug": "microclimates",
    "client": "Microclimates",
    "title": "Design that grows with the business",
    "summary": "An ongoing design partnership, connecting an evolving brand, website, and product experience.",
    "blurb": "Brand identity, websites, exhibits, and interface concepts for a growing environmental technology startup.",
    "featured": true,
    "cardCaption": "Branding · Websites · Exhibits",
    "archiveTitle": "A growing startup’s brand and product family",
    "archiveFilterSections": {
      "Branding": {
        "heading": "A brand with room to grow",
        "title": "Brand identity and product branding"
      },
      "Digital": {
        "heading": "A startup’s evolving story online",
        "title": "Website design and copywriting"
      },
      "Environmental": {
        "heading": "Exhibiting listening skills",
        "title": "Exhibit graphics"
      },
      "Event": {
        "heading": "Exhibiting listening skills",
        "title": "Exhibit graphics",
        "archiveCover": {
          "src": "/work/microclimates/booth-20-connect-exact-photo-v15.webp",
          "alt": "Close-up of the original Microclimates 10-by-20-foot booth artwork, with Connect your environment in focus and the wider Control panel receding behind it",
          "w": 2000,
          "h": 1500
        }
      }
    },
    "disciplines": [
      "Creative direction",
      "Brand identity and guidelines",
      "Product branding and app iconography",
      "Website design and copywriting",
      "Exhibit graphics",
      "UX audit and interface concepts"
    ],
    "tags": [
      "Branding",
      "Digital",
      "Environmental"
    ],
    "card": {
      "src": "/work/microclimates/software-start-v2.webp",
      "alt": "EnvOS product identity surrounded by network illustrations",
      "w": 2000,
      "h": 1250,
      "scale": 1.05,
      "origin": "center top"
    },
    "hero": {
      "src": "/work/microclimates/software-hero-v2.webp",
      "alt": "EnvOS opening-screen graphic with connected sensors, apps, and network protocols",
      "w": 2000,
      "h": 860
    },
    "intro": "Microclimates is a startup developing technology to monitor, automate, and control agricultural environments and beyond. For roughly four years, I’ve worked with its team as designer and creative director at Swivel Studio. The team brings deep industry knowledge and clear priorities; I help translate those into language, visual systems, and experiences across the brand, websites, exhibits, and product interfaces.",
    "testimonial": {
      "quote": "Robin has an exceptional ability to take something technically complex and make it simple, intuitive, and visually compelling without losing the substance behind it.",
      "name": "Neda Vaseghi",
      "role": "CEO & Founder | Microclimates Inc.",
      "color": "#407e9d"
    },
    "credits": [
      {
        "role": "Design and creative direction",
        "name": "Robin Maxwell, Swivel Studio"
      },
      {
        "role": "Website development",
        "name": "Microclimates technology team"
      }
    ],
    "sections": [
      {
        "heading": "A brand with room to grow",
        "archiveCover": {
          "src": "/work/microclimates/brand-guideline-spreads-v4.webp",
          "w": 2000,
          "h": 1333
        },
        "tags": [
          "Branding"
        ],
        "body": "As Microclimates’ technology expanded, its identity needed to communicate a broader offering. I modernized the logo, incorporated the updated tagline, expanded the color palette with gradient pairings, and updated the typography. Brand guidelines gave the team a consistent foundation for company materials and product assets.",
        "images": [
          {
            "src": "/work/microclimates/logo-tagline-v3.webp",
            "alt": "Modernized Microclimates logo and Environmental Integration tagline",
            "w": 2000,
            "h": 459,
            "fullWidth": true,
            "caption": ""
          },
          {
            "src": "/work/microclimates/brand-guideline-spreads-v4.webp",
            "alt": "Two open Microclimates brand-guide spreads on light gray: the reversed logo on dark blue beside the primary palette, then logo gradients beside Sofia Pro typography",
            "w": 2000,
            "h": 1333,
            "fullWidth": true,
            "caption": ""
          }
        ],
        "imageRows": [
          1,
          1
        ]
      },
      {
        "heading": "A connected product family",
        "tags": [
          "Branding",
          "Digital"
        ],
        "body": "Microclimates needed a product identity to support its shift from a software company to an operating system and app company. I researched competitors and other app-based companies, then developed the EnvOS logo, color palette, and ecosystem illustration. Illustrations from the [Web 1.0 website](#2023-lighting-page) became the starting point for 10 app icons, giving the growing suite a cohesive visual language.",
        "images": [
          {
            "src": "/work/microclimates/envos-logo-transparent-v1.webp",
            "alt": "EnvOS logo with the Environmental O/S tagline",
            "w": 2000,
            "h": 459,
            "fullWidth": true,
            "transparent": true,
            "caption": ""
          },
          {
            "src": "/work/microclimates/app-icons-transparent-grid-v1.webp",
            "alt": "Ten EnvOS app icons in two rows: Substrate, Climate, Energy, Lighting, Fertigation, Weather, Storage, Irrigation, Camera, and Your App",
            "w": 2000,
            "h": 640,
            "fullWidth": true,
            "transparent": true,
            "caption": ""
          },
          {
            "src": "/work/microclimates/envos-app-guideline-spreads-v8.webp",
            "alt": "Two open product-guide spreads on light gray: the EnvOS logo centered in a pale green network illustration beside its gradient palette, then ten app icons beside the app color palette",
            "w": 2000,
            "h": 1333,
            "fullWidth": true,
            "caption": ""
          }
        ],
        "imageRows": [
          1,
          1,
          1
        ]
      },
      {
        "heading": "Exhibiting listening skills",
        "id": "the-brand-in-person-and-on-screen",
        "archiveCover": {
          "src": "/work/microclimates/booth-10x10-art-photo-v1.webp",
          "alt": "Angled close-up of Microclimates’ matte booth graphics, featuring the Everything connects here headline and EnvOS app icons",
          "w": 1448,
          "h": 1086
        },
        "tags": [
          "Environmental",
          "Digital",
          "Event"
        ],
        "body": [
          "The client and I discussed the conversations the team was having on the show floor. I translated those insights into exhibit graphics that gave the team visual talking points about simplifying operations on one platform, connecting existing technology, using app-driven data, and getting started easily. The 10′ × 20′ layout follows Connect – Control – Grow, echoing the [Web 2.0 website](#v2-website) developed alongside it.",
          "By the later 10′ × 10′ exhibit, growers were more familiar with environmental control. Our conversations helped focus the message on Microclimates’ differentiator: Environmental Integration, which brings disparate data streams, hardware, and AI analytics together in a unified system. Large operations could upgrade without vendor lock-in or costly replacements, while beginners could start with a single sensor and expand. We developed concise copy for a quick read on the show floor, letting the headline, arrow, and graphic do the talking."
        ],
        "images": [
          {
            "src": "/work/microclimates/booth-20-connect-exact-photo-v15.webp",
            "alt": "Close-up of the EnvOS booth artwork with rounded wing corners, silver join brackets, and a low aluminum foot at the Control and Grow joint",
            "w": 2000,
            "h": 1500,
            "fullWidth": true,
            "caption": ""
          },
          {
            "src": "/work/microclimates/booth-20-render-v2.webp",
            "alt": "3D rendering of the Microclimates 10-by-20-foot exhibit, with hinged Connect and Grow wings, a central app panel, two demo shelves, and a mounted Microclimates header sign",
            "w": 1774,
            "h": 887,
            "fullWidth": true,
            "caption": "The 10′ × 20′ exhibit can be configured with or without the wings to accommodate different exhibit floor plans."
          },
          {
            "src": "/work/microclimates/booth-10x10-art-photo-v1.webp",
            "alt": "Photographic close-up of the 10-by-10-foot booth graphics, with the Everything connects here headline and EnvOS phone artwork on a matte printed surface",
            "w": 1448,
            "h": 1086,
            "fullWidth": true,
            "caption": ""
          },
          {
            "src": "/work/microclimates/booth-10x10-with-podium-v1.webp",
            "alt": "3D rendering of the Microclimates 10-by-10-foot exhibit, with a branded podium at the far left, an EnvOS backdrop, and a shelving kiosk carrying a monitor and two shelves",
            "w": 1448,
            "h": 1086,
            "fullWidth": true,
            "caption": "10′ × 10′ exhibit with a shelving kiosk and podium. Graphics for both booths, the podium, logo header, and shelving kiosk were designed to mix and match with elements from earlier exhibits."
          }
        ]
      },
      {
        "heading": "A startup’s evolving story online",
        "id": "making-the-offering-easier-to-explain",
        "archiveCover": {
          "src": "/work/microclimates/web2-connect-card-v1.webp",
          "w": 1536,
          "h": 1024
        },
        "tags": [
          "Digital"
        ],
        "body": "The website evolved in phases as the software developed and growers became more familiar with intelligent agriculture. I shaped each iteration’s structure, design, and copy around a different communication task.",
        "subsections": [
          {
            "heading": "Web 1.0: A complete website redesign",
            "body": [
              "Microclimates’ first site served mainly as a business-card site, product portal, and help desk for existing clients. The team wanted to highlight its growing range of software products and emphasize complete environmental monitoring, automation, and control from anywhere.",
              "Drawing on existing product flyers and conversations with the team, I shaped a homepage flow that opened with a hero carousel showing their product in use across a range of settings, then guided visitors into clear product pages. I wrote key headlines and used AI for initial drafts of the product copy, then edited extensively and refined the details with the client. I worked from a site map through wireframes to finished layouts, supplying design specifications and collaborating closely with the Microclimates technology team through development."
            ],
            "images": [
              {
                "src": "/work/microclimates/v1-home-carousel-frame-4-v7.webp",
                "frames": [
                  "/work/microclimates/v1-home-carousel-frame-4-v7.webp",
                  "/work/microclimates/v1-home-carousel-frame-2-v7.webp",
                  "/work/microclimates/v1-home-carousel-frame-1-v7.webp",
                  "/work/microclimates/v1-home-carousel-frame-3-v7.webp"
                ],
                "alt": "Microclimates Web 1.0 homepage carousel on a silver laptop, cycling through Operation at-a-glance, Automated Vigilance, Everything Under Control, and Grow Anywhere, each with a chartreuse Go Wireless LoRaWAN banner",
                "w": 1536,
                "h": 1024,
                "fullWidth": true,
                "caption": ""
              },
              {
                "id": "2023-lighting-page",
                "src": "/work/microclimates/web1-pages-triptych-v1.webp",
                "alt": "Web 1.0 homepage, Lighting Control, and Edge Computing layouts, with a play symbol over the homepage greenhouse image and a fade through its portrait tablet",
                "w": 2000,
                "h": 1944,
                "fullWidth": true,
                "caption": ""
              }
            ]
          },
          {
            "heading": "Web 2.0: Branching out",
            "body": [
              "As Microclimates evolved into an operating system and app company, it needed a website and business platform that could support future online sales and growth. The website needed to debut at its next industry show, alongside the booth I was designing.",
              "To use my time efficiently, their team migrated and added content while I oversaw branding and advised on messaging and key page flows. I applied the EnvOS identity and app suite graphics, established color and text styles, and refined imported layouts and imagery to keep the site clear, inviting, cohesive, and on brand. Reusable app page, module, and footer templates helped their team expand the site, while graphics they could repurpose in sales literature, social media, and presentations gave them assets to build the brand across media."
            ],
            "images": [
              {
                "id": "v2-website",
                "src": "/work/microclimates/odoo-home-scroll-poster-v3.webp",
                "scroll": {
                  "strip": "/work/microclimates/odoo-home-scroll-strip-v2.webp",
                  "nav": "/work/microclimates/odoo-home-scroll-nav-v2.webp",
                  "stripW": 1198,
                  "stripH": 2000,
                  "connectOffset": 10.732113144758735,
                  "controlOffset": 40.765391014975044,
                  "endOffset": 66.69085768143262
                },
                "alt": "Microclimates homepage scrolling through Connect, Control, and Grow on a silver laptop, with brief pauses at each section and the site navigation held in place",
                "w": 1536,
                "h": 1024,
                "fullWidth": true,
                "caption": ""
              },
              {
                "src": "/work/microclimates/climate-laptop-low-angle-v5.webp",
                "alt": "Climate application page on a realistic silver laptop",
                "w": 1536,
                "h": 1024,
                "fullWidth": true,
                "caption": ""
              },
              {
                "src": "/work/microclimates/application-pages-triptych-v6.webp",
                "alt": "Full-page captures of the Fertigation, Substrate, and Irrigation application pages, arranged side by side",
                "w": 2000,
                "h": 1558,
                "fullWidth": true,
                "caption": ""
              }
            ]
          }
        ]
      },
      {
        "heading": "Interfacing with the brand",
        "id": "bringing-the-brand-into-the-interface",
        "tags": [
          "Digital"
        ],
        "body": [
          "I created the EnvOS software startup screen using the product identity and network illustrations, carrying the brand into the software.",
          "I also audited the product UX and made short- and long-term usability recommendations. The interface mockup explored the first phase of those recommendations, bringing refined layouts and icons, color-coded app cards, and a proposed AI agent sidebar into a previously monochromatic interface."
        ],
        "images": [
          {
            "src": "/work/microclimates/software-startup-facility-v5.webp",
            "alt": "EnvOS startup screen on the original gray control cabinet at a greenhouse facility",
            "w": 2000,
            "h": 1500,
            "fullWidth": true,
            "caption": "EnvOS software startup screen in use at a facility."
          },
          {
            "src": "/work/microclimates/interface-app-screen-2-crop-v3.webp",
            "alt": "A white tablet held in both hands in a greenhouse, showing color-coded app cards and a proposed EnvOS AI agent sidebar",
            "w": 990,
            "h": 600,
            "fullWidth": true,
            "caption": "Interface concept exploring the first phase of UX recommendations, with color-coded app cards and a proposed AI agent sidebar"
          }
        ],
        "imageRows": [
          1,
          1
        ]
      },
      {
        "heading": "A visual vocabulary",
        "id": "an-ongoing-conversation",
        "body": "The collaboration has given Microclimates a visual vocabulary and a suite of product assets to use and expand upon. Brand guidelines, reusable website templates, and adaptable exhibit graphics give the team a foundation for carrying that language into new applications as the business evolves."
      }
    ]
  },

  {
    slug: "breakwater-special-edition",
    archiveTitle: "Book, e-book, & launch graphics",
    archiveFilterSections: { Digital: { heading: "The e-book", title: "Breakwater e-book" } },
    client: "Songborne & Seabound Press",
    title: "Bringing a story into the world",
    summary:
      "Print, digital, and a three-volume special edition for Vivian Wilderbridge’s Breakwater, with a physical form that echoes the story.",
    blurb:
      "Print, digital, and a three-volume special edition for Vivian Wilderbridge’s *Breakwater*, with a physical form that echoes the story.",
    cardCaption: "Book, e-book, and launch package design",
    disciplines: [
      "Book cover and interior design",
      "Special edition design",
      "E-book design",
      "Promotional graphics",
      "Launch packaging",
    ],
    tags: ["Print & editorial"],
    card: {
      src: `${W}/breakwater-special-edition/heron-book-shell-card-v1.webp`,
      alt: "Close-up of the tilted aqua Breakwater Book III with heron and mangrove artwork, beside a small seashell",
      w: 1448,
      h: 1086,
    },
    archiveCover: {
      src: `${W}/breakwater-special-edition/heron-book-shell-card-v1.webp`,
      w: 1448,
      h: 1086,
    },
    hero: {
      src: `${W}/breakwater-special-edition/breakwater-special-edition-hero-table-v9.webp`,
      alt: "Breakwater paperback Books I, II, and III lying side by side on a light gray table, with alligator, botanical, and heron covers",
      w: 2000,
      h: 860,
    },
    intro:
      "In a near-future dystopia where rising seawater is overtaking South Florida, Breakwater follows a pregnant woman weighing her ties to home against her need for safety, medical care, and survival. As she resists pressure to leave, relatives, close friends, and unexpected ties redefine her family. Nature is a character in its own right, informing the colors, imagery, and materials across all editions.",
    credits: [
      { role: "Illustrations", name: "Molly Pearce" },
      { role: "Editing", name: "Kyra Freestar" },
    ],
    featured: true,
    sections: [
      {
        heading: "The standard edition",
        orderedImages: true,
        body:
          "A mangrove watercolor wraps around the cover, evoking life, resilience, and complexity. Sepia contrasts with vibrant greens, blues, and aquamarine, reflecting water’s power to both threaten and sustain. Inside, classic typography pairs with story illustrations and a subtle wave motif links chapter headings, section breaks, and page numbers.",
        images: [
          {
            src: `${W}/breakwater-special-edition/standard-edition-warm-v4.webp`,
            alt: "Breakwater standard edition with watercolor mangrove artwork on the front, spine, and back cover, standing above stacked copies",
            w: 2000,
            h: 1776,
            landscape: true,
            fullWidth: true,
          },
          {
            src: `${W}/breakwater-special-edition/standard-interior-acknowledgments-gray-v1.webp`,
            alt: "Breakwater interior design: a botanical illustration beside the acknowledgments",
            w: 1086,
            h: 1448,
          },
          {
            src: `${W}/breakwater-special-edition/standard-interior-alligator-gray-v1.webp`,
            alt: "Breakwater interior design: the alligator illustration and acknowledgments typography",
            w: 1086,
            h: 1448,
          },
        ],
      },
      {
        heading: "The limited edition",
        archiveCover: {
          src: `${W}/breakwater-special-edition/heron-book-shell-card-v1.webp`,
          w: 1448,
          h: 1086,
        },
        orderedImages: true,
        body: [
          "Echoing the three trimesters of pregnancy, the story was divided into three volumes, each following a stage. Alligator, mangrove, and heron illustrations distinguish the covers and connect to the content of each volume.",
          "Fifty limited edition sets were wrapped by hand in a bandana printed with the cover’s mangrove watercolor, finished with twine, seashells, and a natural-fiber net bag. Offered in exchange for creative responses to the book, the sets invited readers to contribute something of their own.",
        ],
        images: [
          {
            src: `${W}/breakwater-special-edition/launch-materials-soft-print-v4.webp`,
            alt: "Breakwater Limited Edition set: alligator, mangrove, and heron books with a teal mangrove-print bandana on buff fabric, a natural net bag, hemp twine, and two seashells",
            w: 1448,
            h: 1086,
            fullWidth: true,
          },
          {
            src: `${W}/breakwater-special-edition/volume-1-original-pdf-grounded-v6.webp`,
            alt: "Breakwater Book I with an alligator cover standing on the stacked Books II and III",
            w: 1254,
            h: 1254,
          },
          {
            src: `${W}/breakwater-special-edition/volume-2-original-pdf-grounded-v6.webp`,
            alt: "Breakwater Book II with a mangrove-leaf cover standing on the stacked Books III and I",
            w: 1254,
            h: 1254,
          },
          {
            src: `${W}/breakwater-special-edition/volume-3-original-pdf-grounded-v6.webp`,
            alt: "Breakwater Book III with a great blue heron cover standing on Books I and II, with its matching back cover alongside",
            w: 1254,
            h: 1254,
          },
          {
            src: `${W}/breakwater-special-edition/launch-bandana-worn-matched-color-v7.webp`,
            alt: "Teal mangrove artwork printed on a buff fabric bandana with a plain unprinted border, draped over shoulders and viewed from behind",
            w: 1448,
            h: 1086,
            square: true,
          },
        ],
      },
      {
        heading: "The e-book",
        tags: ["Digital", "Print & editorial"],
        body:
          "The e-book preserves the print edition’s visual character while allowing the text to adapt across phones, tablets, desktop computers, and e-readers in full-color or grayscale models.",
        images: [
          {
            src: `${W}/breakwater-special-edition/ebook-cover-phone-and-mono-reader-v7.webp`,
            alt: "Breakwater mangrove cover displayed in color on a mint-cased mobile phone beside its original grayscale e-ink cover on a chartreuse-cased reader, on a light gray table",
            w: 1448,
            h: 1086,
            fullWidth: true,
          },
          {
            src: `${W}/breakwater-special-edition/ebook-b-refined-cases-centered-phone-v12.webp`,
            alt: "Breakwater across three devices on a light gray table: Chapter 8 as a two-page landscape tablet spread, the First Edition copyright page on a smaller turquoise-cased mobile phone beside the sage tablet’s center gutter, and acknowledgments with an alligator illustration on a chartreuse e-reader",
            w: 1448,
            h: 1086,
            fullWidth: true,
          },
        ],
      },
    ],
  },
  {
    slug: "pacific-crest-savings-bank",
    client: "Pacific Crest Savings Bank",
    title: "You’ll like what you see from the Crest",
    summary:
      "How investing in a brand overhaul bought a local Northwest bank some modern-day currency.",
    blurb:
      "A community bank’s full overhaul — logo, standards, collateral, website, apps, and in-branch signage.",
    disciplines: ["Brand identity", "Voice and Style Guidelines", "Campaigns and Collateral", "Website", "App", "Signage"],
    cardCaption: "Brand identity · Website · Signage",
    tags: ["Branding", "Digital", "Print & editorial"],
    card: { src: `${W}/pacific-crest-savings-bank/pcsbstationery.webp`, w: 1646, h: 948 },
    hero: { src: `${W}/pacific-crest-savings-bank/paccrest.webp`, alt: "Pacific Crest Savings Bank identity", w: 2000, h: 1000 },
    intro:
      "Pacific Crest Savings Bank is a local, independently owned community bank who wanted to build out their brand but first needed to bring it up to date. They wanted their logo, collateral materials, and website modernized to reflect current best design practices and trends, and to support the new financial technologies they were embracing and offering to their clients.",
    creditNote: "Work completed at Graphica, Inc.",
    featured: true,
    sections: [
      {
        heading: "Securing the elements",
        orderedImages: true,
        archiveCover: { src: `${W}/pacific-crest-savings-bank/paccrest.webp`, w: 2000, h: 1000 },
        tags: ["Branding", "Print & editorial"],
        body: [
          "A new tagline — You’ll like what you see from the Crest™ — plus an earthy, Northwest color palette, expansive-feeling Northwest photography, a simplified overhaul of their mountain logo mark, and friendlier typography.",
          "I created a full suite of templates and brand standards to guide them in their personable, helpful brand voice and visual identity system. The stationery suite includes a presentation folder which uses their signature blue with a pattern that echoes their logo shape and is reminiscent of the geometric security patterns found on currency.",
        ],
        images: [
          { src: `${W}/pacific-crest-savings-bank/pcsbstationery.webp`, alt: "Stationery suite", w: 1646, h: 948, fullWidth: true },
          { src: `${W}/pacific-crest-savings-bank/arsene-case-study-page-one-rust-v2.webp`, alt: "First page of the Pacific Crest Savings Bank printed case study featuring Arsene Construction", w: 1546, h: 2000, keyline: "subtle" },
          { src: `${W}/pacific-crest-savings-bank/pcsb-form.webp`, alt: "Branded forms", w: 974, h: 1260 },
        ],
      },
      {
        heading: "Why Pacific Crest?",
        archiveTitle: "You’ll like what you see from the Crest",
        leftColumnImages: 3,
        tags: ["Digital"],
        body: [
          "The website was rebuilt in phases, including full-screen images of local scenery to reflect their Northwest roots, a responsive layout, employee highlights, and an easy login to mobile and business banking.",
          "A case study section — with an in-print companion — was developed to help differentiate what makes them special: the bank’s nimble and custom vetting process, funding unique loans for projects that are often overlooked by traditional institutions.",
        ],
        images: [
          { src: `${W}/pacific-crest-savings-bank/hero1.webp`, alt: "Full-screen Northwest scenery on the site", w: 2500, h: 1618, keyline: "subtle" },
          { src: `${W}/pacific-crest-savings-bank/homepage-single-keyline-v2.webp`, alt: "Homepage", w: 970, h: 1434, keyline: "subtle" },
          { src: `${W}/pacific-crest-savings-bank/contact-webpage-map-crop-v1.webp`, alt: "Pacific Crest Savings Bank Contact Us webpage, cropped after its location and map with the top of the next panel visible", w: 1721, h: 1204, keyline: "subtle" },
          { src: `${W}/pacific-crest-savings-bank/about-webpage-financial-highlights-v1.webp`, alt: "Pacific Crest Savings Bank About webpage showing Northwest scenery, client meetings, the mission statement, and financial highlights", w: 1610, h: 2000, keyline: "subtle" },
          { src: `${W}/pacific-crest-savings-bank/pcsb-webpers.webp`, alt: "Personal banking", w: 2000, h: 2450, keyline: "subtle" },
        ],
      },
      {
        heading: "The Crest at your fingertips",
        orderedImages: true,
        archiveCover: { position: "50% 60%" },
        tags: ["Digital"],
        body: "I designed app icons and worked with the client and their secure third-party banking app developer to customize the app framework, ensuring it seamlessly integrated with their suite of branded environments.",
        images: [
          { src: `${W}/pacific-crest-savings-bank/banking-app-two-phones-v1.webp`, alt: "Pacific Crest mobile and business banking apps on two angled phones", w: 1448, h: 1086, fullWidth: true },
          { src: `${W}/pacific-crest-savings-bank/app-icons-rose-gold-iphone-v1.webp`, alt: "Consumer and business app icons", w: 1536, h: 1024 },
        ],
      },
      {
        heading: "Observing the signs",
        archiveCover: { scale: 1.04, position: "50% 60%" },
        tags: ["Environmental", "Print & editorial"],
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
    eyebrow: "Assorted Clients",
    title: "Identities",
    summary:
      "Brand marks spanning nonprofits, food, healthcare, furniture, real estate, creative agencies, and more.",
    blurb:
      "Branding work across nonprofits, food, healthcare, furniture, real estate, and more.",
    disciplines: ["Logo design", "Naming", "Brand guidelines"],
    tags: ["Branding"],
    card: { src: `${W}/identities/ams-fabric-hero-v1.webp`, alt: "AMS identity printed on navy fabric with a multicolored chevron symbol", w: 2000, h: 1295, position: "0% 50%" },
    archiveCover: { src: `${W}/identities/ams-fabric-hero-v1.webp`, w: 2000, h: 1295, position: "0% 50%" },
    hero: { src: `${W}/identities/ams-fabric-hero-v1.webp`, alt: "White AMS wordmark and multicolored chevron symbol printed on navy fabric", w: 2000, h: 1295, position: "50% 50%" },
    intro:
      "An identity should feel familiar to the people behind it and distinctive to the people they want to reach. These marks grew from each organization’s character, purpose, and audience.",
    featured: true,
    sections: [
      {
        heading: "Selected marks",
        gallery: true,
        body: "",
        images: [
          { src: `${W}/identities/mockingbird-wide-v2.webp`, alt: "The Mockingbird Society — transforming foster care and ending youth homelessness", w: 1600, h: 600, fullWidth: true },
          { src: `${W}/identities/nofsinger-group-1-71c4d01b.webp`, alt: "Nofsinger Group — leadership consultants", w: 871, h: 653, galleryScale: 0.8075 },
          { src: `${W}/identities/redwood-symbol-v1.webp`, alt: "Redwood Real Estate Partners, LLC — California real estate", w: 1600, h: 1200, galleryScale: 1.05 },
          { src: `${W}/identities/eques-logo-v1.webp`, alt: "Eques — Hyatt Regency Bellevue’s award-winning breakfast restaurant", w: 1600, h: 1200, galleryScale: 0.85 },
          { src: `${W}/identities/jjkettman-c5ebbf77.webp`, alt: "J&J Kettman — hand-crafted furniture made with centuries-old tools and techniques", w: 920, h: 690 },
          { src: `${W}/identities/namazu-wide-v2.webp`, alt: "Namazu — fast, casual Japanese cuisine in San Francisco, named for the catfish of Japanese mythology", w: 1600, h: 600, fullWidth: true, galleryScale: 0.85 },
          { src: `${W}/identities/old-growth-industries-logo-v2.webp`, alt: "Old Growth Industries — luxury furniture made from Northwest old growth fir", w: 1600, h: 1200 },
          { src: `${W}/identities/ams-e5e21869.webp`, alt: "AMS — medical accounts receivable", w: 903, h: 677 },
          { src: `${W}/identities/graphica-g-v1.webp`, alt: "Graphica — award-winning design firm", w: 1600, h: 1200, credits: [{ role: "Creative director", name: "Craig Terrones" }], galleryScale: 0.8075 },
          { src: `${W}/identities/woodland-park-zoo-jungle-party-v1.webp`, alt: "Woodland Park Zoo Jungle Party — annual fundraiser and auction", w: 1600, h: 1200, galleryScale: 0.973165 },
          { src: `${W}/identities/seasons-harry-race-whites-wide-v2.webp`, alt: "Seasons, Harry Race and White’s — sister stores for medical equipment, pharmacy, and gifts emphasizing “living local” in Alaska", w: 1600, h: 600, fullWidth: true },
          { src: `${W}/identities/alaskan-creamery-1-8a626f00.webp`, alt: "Alaskan Creamery — ice cream shop in Alaska", w: 1181, h: 886 },
          { src: `${W}/identities/noche-tropical-mark-v1.webp`, alt: "Noche Tropical — fundraising dinner and auction for Concord International School", w: 1418, h: 950, galleryScale: 0.95 },
          { src: `${W}/identities/hotaru-logo-v2.webp`, alt: "Hotaru — creative agency", w: 1600, h: 1200, credits: [{ role: "Creative direction", name: "Erica\u00a0Goldsmith and Peter\u00a0Gaučys" }], galleryScale: 0.85 },
          { src: `${W}/identities/queen-margherita-pizzeria-9a357823.webp`, alt: "Queen Margherita Pizzeria — Neapolitan-style pizza", w: 1014, h: 761 },
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
        archiveTitle: "Noche Tropical fundraiser",
        archiveCover: { position: "100% 50%", scale: 1.8, origin: "100% 0%" },
        tags: ["Event", "Branding", "Environmental", "Print & editorial"],
        body: "Annual dinner and fundraising auction. Design deliverables include an event poster, flyers, bid paddles, auction catalog, graphics for social media and online ticketing, sponsorship package, at-event signage, gift certificates, auction item forms, keynote auction presentation, and a school fundraising video. Most pieces are created in both English and Spanish.",
        images: [
          { src: `${W}/concord-international-school/tn-bro-ext.webp`, alt: "Auction brochure, exterior", caption: "", w: 2000, h: 932, keyline: "subtle" },
          { src: `${W}/concord-international-school/tn-bro-int.webp`, alt: "Auction brochure, interior", caption: "Three-panel auction brochure", w: 2000, h: 934, keyline: "subtle" },
          { src: `${W}/concord-international-school/tn-poster.webp`, alt: "Event poster", w: 970, h: 1500 },
          { src: `${W}/concord-international-school/tn-flyer.webp`, alt: "Event flyer", w: 974, h: 1260 },
          { src: `${W}/concord-international-school/tn-sponsorshippkg.webp`, alt: "Sponsorship package", w: 2000, h: 1296, keyline: "subtle" },
        ],
      },
      {
        heading: "Other fundraisers",
        archiveTitle: "Fundraising auctions",
        hideCaptions: true,
        archiveCover: { scale: 1.5, position: "50% 70%" },
        tags: ["Event", "Environmental", "Print & editorial"],
        body: "Hello Spring 2018 and Spring Fling 2017. Posters, flyers, bid paddles, auction catalogs, graphics for social media and online ticketing, gift certificates, and a keynote auction presentation. Most pieces were created in both English and Spanish.",
        images: [
          { src: `${W}/concord-international-school/hellospring-postermockup.webp`, alt: "Hello Spring poster", w: 1097, h: 1509 },
          { src: `${W}/concord-international-school/springfling.webp`, alt: "Spring Fling poster", w: 974, h: 1504 },
        ],
      },
      {
        heading: "Designing community",
        hideCaptions: true,
        archiveCover: { scale: 1.08, position: "50% 25%" },
        tags: ["Event", "Environmental", "Print & editorial"],
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
        archiveTitle: "Events and initiatives",
        hideCaptions: true,
        archiveCover: { scale: 1.06, position: "50% 20%" },
        tags: ["Event", "Environmental", "Print & editorial"],
        body: [
          "Throughout the year, the PTA sponsors several events — Day of the Dead, Teacher Appreciation Week — for which they need engagement materials, from posters and graphics to advertising on social media.",
          "Because these events are mainly one-off, or just need continuity year over year, it’s been a fun place to explore different design directions.",
        ],
        images: [
          { src: `${W}/concord-international-school/dia.webp`, alt: "Día de los Muertos poster", w: 970, h: 1502 },
          { src: `${W}/concord-international-school/fbparticipation.webp`, alt: "Social media graphic", w: 974, h: 1504 },
          { src: `${W}/concord-international-school/cies-2019-carnival-masthead.webp`, alt: "Carnival masthead", w: 1710, h: 660 },
          { src: `${W}/concord-international-school/cies-socialemo.webp`, alt: "Social-emotional learning graphic", w: 1710, h: 660, keyline: "subtle" },
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
    cardCaption: "Editorial design · Infographics · Reports",
    tags: ["Print & editorial"],
    card: { src: `${W}/plum-creek/plumcreek-sust2.webp`, w: 970, h: 776 },
    hero: { src: `${W}/plum-creek/sustainability-original-numbers-neutral-paper-v8.webp`, alt: "Forest-filled numbers from Plum Creek’s sustainability report cover against pale warm gray paper", w: 996, h: 429 },
    intro:
      "Plum Creek (since merged with Weyerhaeuser) owned and sustainably managed 6.6 million acres of highly productive forest land in 19 U.S. states. Perceptions of land management and, in particular, forests, can be fraught. Stakeholders were beginning to require that companies prove their leadership in stewardship, responsibility, and ethics — an area where Plum Creek shone.",
    creditNote: "Work completed at Graphica, Inc.",
    featured: true,
    sections: [
      {
        heading: "Every Tree Counts",
        archiveTitle: "Every tree counts",
        hideCaptions: true,
        tags: ["Print & editorial"],
        body: "Under the theme “Every Tree Counts”, this report used bold numbers and infographics alongside expansive imagery from custom photoshoots of Plum Creek’s well-managed lands — underscoring the intense analytic scrutiny the company operates by in service to their three main focal points: growing healthy forests in perpetual cycles including responsible harvesting; building a strong workforce and sustaining rural communities; and creating long-term value for stakeholders.",
        images: [
          { src: `${W}/plum-creek/sustainability-cover-photo-v1.webp`, alt: "Sustainability report cover", w: 1860, h: 2000 },
          { src: `${W}/plum-creek/sustainability-interior-photo-v1.webp`, alt: "Internal pages", w: 970, h: 776 },
          { src: `${W}/plum-creek/sustainability-forestry-photo-v1.webp`, alt: "Open sustainability report showing forest management photography and seedling, GMO, and survival rate infographics", w: 1000, h: 800 },
          { src: `${W}/plum-creek/sustainability-opening-spread-v1.webp`, alt: "Plum Creek sustainability report opening spread, with forest photography, tree planting statistics, and a letter to stakeholders", w: 1000, h: 652 },
        ],
      },
      {
        heading: "A year in the life",
        hideCaptions: true,
        tags: ["Print & editorial"],
        body: [
          "Three annual reports, each telling the year’s story through the lens of company value, and values. “We grow value from…” emphasizes that Plum Creek’s land is valuable for its trees as well as for its other resources and uses.",
          "“True to our core” uses the metaphor of a tree’s rings to quite literally spell out Plum Creek’s values at the center of their organization. The third uses “We see…” statements, finishing them with powerful words like “Value” and “Opportunity,” juxtaposed with inspiring nature imagery.",
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
      "Helping TrueBlue bring its people together through years of design collaboration.",
    blurb:
      "Uniting the sales forces of multiple umbrella companies under one event identity.",
    disciplines: ["Event branding", "Environmental graphics", "Presentations", "Event coordination", "Annual reports", "Campaign branding"],
    cardCaption: "Event Branding · Annual Reports · Campaigns",
    tags: ["Event", "Print & editorial"],
    card: { src: `${W}/trueblue/tb-slc2013.webp`, w: 2000, h: 1334 },
    hero: { src: `${W}/trueblue/tb-slc2013.webp`, alt: "Sales Leadership Conference branding", w: 2000, h: 1334 },
    intro:
      "Over many years, our team worked as an extension of TrueBlue’s in-house design team, supporting the company and its family of brands. The projects shown here are a small selection from that relationship, spanning recurring conferences, annual reports, and employee communications.",
    testimonial: {
      quote:
        "I would also describe Robin as a professional collaborator — she delivers work on time, is very open to feedback, and always has our best visual design interest at heart. … Projects just seemed to go smoother when Robin was involved.",
      name: "Stacy Burke",
      role: "Vice President, Corporate Communications | TrueBlue Inc.",
    },
    creditNote: "Work completed at Graphica, Inc.",
    featured: true,
    sections: [
      {
        heading: "In the room",
        archiveTitle: "Stronger together",
        hideCaptions: true,
        imageRows: [3, 2],
        archiveCover: { position: "50% 43%" },
        tags: ["Branding", "Event", "Environmental"],
        body: [
          "“We are TrueBlue” gave sales teams from TrueBlue’s family of companies a shared focus: working together and cross-selling across the group. One of several conferences developed over successive years, it involved developing the theme and visual identity, then carrying them through banners, wayfinding, brochures, email invitations, keynote speaker graphics, lanyards, name badges, breakout-room materials, table arrangements, and everything in between.",
          "Work continued behind the scenes, coordinating presentations, deliveries, and setup, then supporting the client on site as last-minute needs arose.",
        ],
        images: [
          { src: `${W}/trueblue/trueblue-we-are-trueblue-banner.webp`, alt: "We Are TrueBlue banner", w: 800, h: 1760, keyline: "subtle" },
          { src: `${W}/trueblue/trueblue-brand-banner.webp`, alt: "Brand banner", w: 800, h: 1760, keyline: "subtle" },
          { src: `${W}/trueblue/trueblue-attribute-banner.webp`, alt: "Attribute banner", w: 800, h: 1760, keyline: "subtle" },
          { src: `${W}/trueblue/trueblue-breakout-room-sign.webp`, alt: "Breakout room sign", w: 800, h: 1067, keyline: "subtle" },
          { src: `${W}/trueblue/sales-conference-badge-lanyard-v1.webp`, alt: "TrueBlue Sales Leadership Conference name badge and blue branded lanyard", w: 1500, h: 2000 },
        ],
      },
      {
        heading: "Staying true",
        hideCaptions: true,
        tags: ["Branding", "Print & editorial"],
        body: "Annual reports were another recurring part of the relationship. As TrueBlue evolved and acquired new business lines, the way they described their services changed. This annual report served to reestablish their core values and clarify their business model to investors.",
        images: [
          { src: `${W}/trueblue/tbi-2015ar-1.webp`, alt: "2015 annual report", w: 970, h: 1290 },
          { src: `${W}/trueblue/tbi-2015ar-2.webp`, alt: "2015 annual report spread", w: 970, h: 1458 },
        ],
      },
      {
        heading: "Workforce wellness",
        hideCaptions: true,
        archiveCover: { scale: 1.18, position: "50% 110%" },
        tags: ["Branding", "Print & editorial"],
        body: "Employee communications ranged from everyday updates to new programs. This benefits guide helped roll out TrueBlue’s new company-wide wellness campaign, Stronger You, Stronger Blue. We named the program and developed its visual identity. The guide’s cover pairs the iconic worker with an icon of health.",
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
      "A retro road-trip campaign — launched with a care package in a travel suitcase — to help guide a newly acquired workforce.",
    disciplines: ["Name & Concept", "Campaign Identity", "Collage", "Email Communications", "Rollout Collateral", "Packaging"],
    cardCaption: "Campaign Concept · Collage · Collateral",
    tags: ["Branding", "Print & editorial"],
    card: { src: `${W}/trueblue/trueblue-journey-postcard-1.webp`, w: 1236, h: 800 },
    hero: { src: `${W}/trueblue/trueblue-journey-postcard-1.webp`, alt: "Journey to Unification postcard combining desert photography, a training-complete illustration, and a roadrunner", w: 1236, h: 800, position: "50% 80%", scale: 1.052 },
    intro:
      "To get a newly acquired business ready for the milestones to unification and assuage employee anxiety, we ideated and branded the transition as a retro-style “Journey to Unification”, complete with custom illustrations.",
    featured: true,
    credits: [{ role: "Illustrations", name: "Peter Hoey" }],
    creditNote: "Work completed at Graphica, Inc.",
    sections: [
      {
        heading: "A care package from the road",
        orderedImages: true,
        hideCaptions: true,
        imageRows: [2, 1, [1, 2]],
        tags: ["Branding", "Print & editorial"],
        body: [
          "Print and digital communications were dropped at strategic times to let branch employees know they were valued, set expectations, remind them of upcoming action items, cheer them on, and congratulate them throughout the process.",
          "The initial installment was introduced to branch offices by way of a care package in a cheery suitcase, complete with travel stickers, a road map containing milestones, mission and vision statements, feedback postcards for employees to “mail in” from the road, jujubes, stress dolls, tchotchkes, and other items to make the journey more bearable.",
          "As the journey progressed, visually corresponding print and digital communications were sent at each mile marker along the map.",
        ],
        images: [
          { src: `${W}/trueblue/tb-unifimap1.webp`, alt: "Unification road map", w: 974, h: 1526 },
          { src: `${W}/trueblue/trueblue-journey-atlas-cover.webp`, alt: "Journey atlas cover", w: 800, h: 1035 },
          { src: `${W}/trueblue/tb-unifimap2.webp`, alt: "Unification road map detail", w: 970, h: 620, fullWidth: true },
          { src: `${W}/trueblue/trueblue-journey-brochure-cover.webp`, alt: "Journey brochure cover", w: 600, h: 1284, keyline: "subtle" },
          { src: `${W}/trueblue/trueblue-journey-postcard-2.webp`, alt: "Feedback postcard", w: 1236, h: 800, keyline: "subtle" },
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
  eyebrow?: string;
  href: string;
  tags: Project["tags"];
  image: { src: string; alt?: string; w: number; h: number };
  imagePosition?: string;
  imageScale?: number;
  imageOrigin?: string;
  filterViews?: Partial<Record<Tag, ArchiveEntry>>;
};

function archiveSection(p: Project, s: Section): ArchiveEntry {
  return {
    key: `${p.slug}#${s.id ?? sectionId(s.heading)}`,
    title: s.archiveTitle ?? s.heading,
    client: p.client,
    eyebrow: p.eyebrow,
    href: `/work/${p.slug}#${s.id ?? sectionId(s.heading)}`,
    tags: s.tags ?? p.tags,
    image: {
      src: s.archiveCover?.src ?? s.images?.[0]?.src ?? p.card.src,
      alt: s.archiveCover?.alt,
      w: s.archiveCover?.w ?? s.images?.[0]?.w ?? p.card.w,
      h: s.archiveCover?.h ?? s.images?.[0]?.h ?? p.card.h,
    },
    imagePosition: s.archiveCover?.position,
    imageScale: s.archiveCover?.scale,
    imageOrigin: s.archiveCover?.origin,
  };
}

/**
 * Every discrete piece of work, not just the six on the homepage. A project
 * with several sections contributes one entry per section, deep-linked to it —
 * which is how five old Squarespace pages become fifteen entries without
 * writing anything new.
 */
export const archive: ArchiveEntry[] = projects.flatMap((p) =>
  p.sections.length > 1 && !p.archiveTitle
    ? p.sections.map((s) => archiveSection(p, s))
    : [{
        key: p.slug,
        title: p.archiveTitle ?? p.title,
        client: p.client,
        eyebrow: p.eyebrow,
        href: `/work/${p.slug}`,
        tags: p.archiveTitle
          ? [...new Set([...p.tags, ...p.sections.flatMap((s) => s.tags ?? [])])]
          : p.tags,
        image: {
          src: p.archiveCover?.src ?? p.card.src,
          w: p.archiveCover?.w ?? p.card.w,
          h: p.archiveCover?.h ?? p.card.h,
        },
        imagePosition: p.archiveCover?.position,
        imageScale: p.archiveCover?.scale ?? p.card.scale,
        imageOrigin: p.archiveCover?.origin ?? p.card.origin,
        filterViews: Object.fromEntries(
          Object.entries(p.archiveFilterSections ?? {}).map(([tag, view]) => {
            const section = p.sections.find((s) => s.heading === view.heading);
            if (!section) throw new Error(`Missing archive section: ${p.slug}/${view.heading}`);
            return [tag, {
              ...archiveSection(p, {
                ...section,
                archiveCover: { ...section.archiveCover, ...view.archiveCover },
              }),
              title: view.title ?? section.heading,
            }];
          })
        ),
      }]
);

export const allTags = ["Branding", "Event", "Environmental", "Print & editorial", "Digital"] as const;

export const featured = projects.filter((p) => p.featured);
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const capabilities = [
  { title: "Brand & Event Identity Systems", copy: "Naming, logos and marks, visual systems, standards." },
  { title: "Digital", copy: "Websites, campaigns, social, decks." },
  { title: "Print & Environmental", copy: "Collateral, reports, exhibits, signage, packaging." },
];

export const clients = [
  "Gates Ag One", "Weyerhaeuser", "Philips Healthcare", "Seattle Genetics",
  "Realtor.com", "TrueBlue", "F5 Networks", "Seattle Cancer Care Alliance",
  "Gates Notes", "Dendreon", "SightLife", "Vera Whole Health",
  "Accelerator Corporation", "Life Science Washington", "First Sound Bank",
  "Pacific Crest Savings Bank", "Visit Bellevue", "Microclimates",
  "Breakthrough Energy", "Old Growth Industries",
  "Concord International School", "YWCA",
];
