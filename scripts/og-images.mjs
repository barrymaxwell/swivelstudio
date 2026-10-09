// Builds a 1200×630 JPG share card for each project into public/og/.
// The heroes are WebP, which LinkedIn and some chat apps won't show.
// Runs before every build, so new projects get a card automatically.
import path from "node:path";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";
import { projects } from "../lib/work.ts";

const W = 1200, H = 630;
const out = path.join(process.cwd(), "public/og");
await mkdir(out, { recursive: true });

for (const p of projects) {
  const { w, h, src, position = "50% 50%" } = p.hero;
  // Cover-crop, honouring the hero's object-position.
  const scale = Math.max(W / w, H / h);
  const rw = Math.round(w * scale), rh = Math.round(h * scale);
  const [px, py] = position.split(" ").map((v) => Math.min(1, Math.max(0, parseFloat(v) / 100)));

  await sharp(path.join(process.cwd(), "public", src))
    .resize(rw, rh)
    .extract({ left: Math.round((rw - W) * px), top: Math.round((rh - H) * py), width: W, height: H })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(out, `${p.slug}.jpg`));
}
console.log(`og: ${projects.length} share cards`);
