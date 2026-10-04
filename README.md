# Swivel Studio

swivelstudio.com — Robin Maxwell's design practice. Next.js 16 / Tailwind 4 / Vercel.

Planning docs live in the iCloud vault at `Work/Swivel Studio/` —
`Phase-1-Plan.md` is the active plan, `Content-Inventory.md` is the migration source.

## Dev

    pnpm install
    pnpm dev        # port 3000 is often taken; use -p 3100

## Status

Placeholder. The homepage is the real Phase 1 structure minus the work grid
(no assets migrated yet). Route stubs exist for /work, /work/[slug], /about,
/contact so the Squarespace redirects land somewhere real.

Carried over from the audit: redirects for all 7 old URLs, real meta
descriptions, generated OG image, ProfessionalService schema with the address
Squarespace left blank, and robots.txt that allows AI crawlers.


New to this setup? Start with `GETTING-STARTED.md`.

## Replacing images

Image URLs are what browsers and the Next image optimizer cache against, so
overwriting a file in place leaves stale bytes being served at the same path —
a hard refresh does not reliably clear it.

The identity marks carry a content hash in their filename for that reason.
After editing any of them:

    node scripts/hash-assets.mjs

It renames each file to `name-<sha1>.webp` and rewrites the references in
`lib/work.ts`. Re-running when nothing changed is a no-op.

## Identity marks

`scripts/rebuild-identity-marks.mjs` rebuilds the logo gallery from the
pristine Squarespace exports in one pass — strip the 2px grey export rule and
the compression ringing behind it, find the artwork box with a noise floor
(sharp's `trim()` keeps any row holding one stray pixel), size a 4:3 canvas
around the artwork **at native resolution**, and encode once, lossless where
that is not wasteful.

Never scale a mark up. Squarespace's maximum for most of these is 974×860 and
already lossy WebP, so there is no headroom; each extra encode or upscale is
visible at gallery size. Run `scripts/hash-assets.mjs` afterwards.
