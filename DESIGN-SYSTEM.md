# Swivel Studio — Design System

Extracted from the existing brand, not invented. Source of truth is `app/globals.css`.

## Mark and lockup

| Asset | What it is |
|---|---|
| `public/brand/swivel-mark.svg` | The mark alone. Robin's vector, from `Dropbox/.../swivelstudio.com/favicon.svg`. |
| `public/brand/swivel-logo.svg` | Horizontal lockup — mark + "swivel" wordmark. Converted from the original Illustrator file. |
| `brand-source/swivel-logo.ai` | The Illustrator original (2017). Only known copy — see `brand-source/README.md`. |

The lockup reads **"swivel"**, not "Swivel Studio", so the site header still
pairs the mark with typeset "Swivel Studio". Single path, 3 KB, no clipping or
transforms left in it; recolour by swapping the `fill`, or set it to
`currentColor` to reverse it white.

The Squarespace site only ever served a 300px JPG of the mark.

The mark is inlined as `<Mark />` from `components/logo.tsx`; fill is
`currentColor` so it reverses to white on a crest ground. Also `app/icon.svg`
for the favicon.

The LinkedIn banner shows the mark **tiled as a background pattern** at small
scale — an existing brand element worth rebuilding as an SVG tile later.

## Colour

Brand blue is **#24AAE3**, taken from the logo vector.

> It measures **2.65:1 on white** — below the 4.5:1 AA threshold for body text.
> So it is a **mark and large-fill colour only**. Links and small text use
> `crest-700`.

| Token | Hex | On white | Use |
|---|---|---|---|
| `crest-100` | `#DEECF2` | — | Tints, selection |
| `crest-200` | `#BED9E5` | — | Rules, selection |
| `crest` | `#24AAE3` | 2.65:1 | **The mark**, fills, rules, large display only |
| `crest-600` | `#188CBE` | 3.79:1 | Large text (18pt+), UI chrome |
| `crest-700` | `#136E95` | 5.69:1 | **Links and small text on white** |
| `crest-900` | `#12394A` | 12.28:1 | Dark ground |

Neutrals carry a slight crest bias so they read as chosen rather than inherited:

| Token | Hex | On ground | Use |
|---|---|---|---|
| `ground` | `#FCFCFB` | — | Page |
| `surface` | `#FFFFFF` | — | Raised bands |
| `ink` | `#14181B` | 15.9:1 | Headings, body |
| `ink-2` | `#4A555D` | 7.7:1 | Secondary body |
| `ink-3` | `#78848D` | 4.1:1 | Meta and eyebrows only — never body |
| `rule` | `#E2E6E9` | — | Borders |

## Type

| Role | Stack |
|---|---|
| Display | Iowan Old Style → Charter → Palatino → Georgia |
| Body / UI | Avenir Next → Avenir → Segoe UI → system-ui |

System stacks for now — no webfont request, no layout shift, and both render
well on macOS and iOS where most of Robin's traffic will land. **Open decision:**
licensing a display face would give the site more voice. Candidates in
`Swivel Studio/Architecture-and-Design-Directions.md`.

Eyebrows and meta are 11px, uppercase, `0.14em` tracking. Body measure caps at
62 characters.

## Imagery

All 72 images from the Squarespace site are in `public/work/<project>/`, converted
to WebP at q88 — **37.6 MB → 11.2 MB**. `next/image` generates AVIF/WebP
derivatives on top of that.

Work cards are locked to **4:3**; case study heroes to **21:9**. The old site ran
five different aspect ratios across five cards, which is why its grid never
resolved.

### Assets that still need re-export from source

| File | Current | Problem |
|---|---|---|
| `img-9732` | 475×434 | Unusable at any size |
| `cies-2018-do-prole` | 698×901 | Low |
| `screen-shot-2019-04-24…` | 791×1224 | A screenshot, not an export |
| `screen-shot-2022-02-11…` | 1196×1848 | A screenshot, not an export |

~25 more sit at 970–974px — fine for cards, borderline for anything full-bleed.

## Decisions for Robin

1. **Card art direction.** The six card crops are my picks, not hers. Pacific
   Crest and Plum Creek were swapped once already.
2. **Slot 6.** Currently TrueBlue appears twice (conference and the Journey to
   Unification campaign). They are genuinely separate engagements, but current
   work — Gates Ag One or the startup — should take one of those slots.
3. **Display typeface.** System serif, or license something with more voice.
4. **Header lockup.** The header currently sets "Swivel Studio" in the display
   face next to the mark. The real lockup says "swivel" only — worth deciding
   whether the site leads with the lockup plus typeset "studio", or keeps what
   it has.
