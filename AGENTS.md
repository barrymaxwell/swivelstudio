# Working on this site

swivelstudio.com is Robin Maxwell's design practice site. Next.js 16, Tailwind 4, pnpm, deployed by Vercel.
Two people push here. Barry is a designer who codes. Robin is a designer who has never used git, Terminal or a code editor.

## If you're working with Robin

- Talk in plain words. Say what changed on the page, not which file you touched. Never paste a diff or a command at her unless she asks.
- Say "publish", not "commit and push". "Your change is live" is the finished state.
- Ask before installing anything. One sentence on what it is.

## Every change

1. `git pull` first. Barry may have pushed since last time.
2. Make the change.
3. Preview it: `pnpm dev -p 3100` and open http://localhost:3100. Show the page that changed, on a phone-width view too if layout moved.
4. Run `pnpm build`. Don't publish if it fails.
5. **Wait for a clear yes** before publishing. Pushing to `main` deploys to the live site in about a minute.
6. Commit with a plain one-line message ("Update About page intro"), then `git push`.
7. If the push is rejected, `git pull --rebase` and retry. If that conflicts, explain it in plain words and stop. Don't force-push, ever.

## Where things live

| To change | File |
|---|---|
| Projects, their text and images | `lib/work.ts` |
| Page text and layout | `app/<page>/page.tsx` — home is `app/page.tsx` |
| Header and footer | `components/chrome.tsx` |
| Images | `public/work/<project-slug>/`, as `.webp` |
| Colours, type, spacing rules | `DESIGN-SYSTEM.md`, then `app/globals.css` |

## Rules

- **Images:** convert to WebP, max 2000px on the long side. Write real alt text. When replacing an image, give it a new filename, or browsers keep showing the old one.
- **Brand blue `#24AAE3` fails contrast for text.** Use it for the mark and large fills only. See `DESIGN-SYSTEM.md`.
- **Leave alone unless Barry asks:** `lib/site.ts` (domain and indexing), the redirects in `next.config.mjs` (old Squarespace URLs), Vercel settings, DNS.
- `scripts/` holds one-off image scripts with Barry's file paths in them. Don't run them on another Mac without fixing the paths.
