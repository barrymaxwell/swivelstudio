
// Content-hash the identity marks so replacing a file changes its URL.
// Without this, browsers and the Next image optimizer keep serving the old
// bytes at the same path. Re-run after editing any image in this folder.
import { readdir, rename, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = "/Users/barry/Dev-Projects/swivel-studio";
const rel = "public/work/identities";
const dir = path.join(root, rel);
const model = path.join(root, "lib/work.ts");

let src = await readFile(model, "utf8");
const files = (await readdir(dir)).filter(f => f.endsWith(".webp"));

for (const f of files) {
  const base = f.replace(/\.webp$/, "").replace(/-[0-9a-f]{8}$/, "");
  const buf = await readFile(path.join(dir, f));
  const hash = createHash("sha1").update(buf).digest("hex").slice(0, 8);
  const next = `${base}-${hash}.webp`;
  if (next === f) { console.log(f.padEnd(42), "unchanged"); continue; }
  await rename(path.join(dir, f), path.join(dir, next));
  // rewrite every reference, old-hashed or bare
  src = src.replaceAll(`/identities/${f}`, `/identities/${next}`);
  src = src.replaceAll(`/identities/${base}.webp`, `/identities/${next}`);
  console.log(f.padEnd(42), "->", next);
}
await writeFile(model, src);
