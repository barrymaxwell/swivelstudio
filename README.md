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

## Contact form

`/contact` posts to `app/api/contact/route.ts`, which relays through Resend.
Without a key it returns 503 and the form tells the visitor to email instead —
so the page is safe to ship before it's wired.

To turn it on, set in Vercel (Production):

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | from resend.com |
| `CONTACT_TO` | optional, defaults to robin@swivelstudio.com |
| `CONTACT_FROM` | optional, defaults to Resend's shared sender until swivelstudio.com is verified |

Validation runs server-side; the client only renders what the route returns.
A hidden `company` field is a honeypot — filled means bot, and the route
answers 200 so it learns nothing.
