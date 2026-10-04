
import sharp from "/Users/barry/Dev-Projects/swivel-studio/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";
import { readdir, writeFile } from "node:fs/promises";

const SRC = "pristine";
const OUT = "/Users/barry/Dev-Projects/swivel-studio/public/work/identities";
const FILL_W = 0.84, FILL_H = 0.70, MAX_W = 1600;

for (const f of (await readdir(SRC)).filter(f => f.endsWith(".src"))) {
  const base = f.replace(".src", "");
  const img = sharp(`${SRC}/${f}`).flatten({ background: "#ffffff" });

  // 1. strip the Squarespace export border. It is a 2px grey rule sitting
  //    *inside* a white outer row, so trim() clears the white, meets the grey,
  //    and stops - leaving the line as the artwork edge. Scan past it instead.
  const { data, info } = await img.clone().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const px = (x, y) => { const i = (y * info.width + x) * ch; return [data[i], data[i+1], data[i+2]]; };
  const ruleAt = (vals) => {
    const grey = vals.filter(p => p[0] < 246 && Math.abs(p[0]-p[1]) < 6 && Math.abs(p[1]-p[2]) < 6);
    return grey.length / vals.length > 0.9;          // a continuous flat line
  };
  const sampleRow = y => Array.from({ length: 24 }, (_, k) => px(Math.round((k + 1) * info.width / 25), y));
  const sampleCol = x => Array.from({ length: 24 }, (_, k) => px(x, Math.round((k + 1) * info.height / 25)));
  let n = 0;
  for (let k = 0; k < 8; k++) {
    if (ruleAt(sampleRow(k)) || ruleAt(sampleCol(k)) ||
        ruleAt(sampleRow(info.height - 1 - k)) || ruleAt(sampleCol(info.width - 1 - k))) n = k + 1;
  }

  // Clear a few extra pixels: lifting the rule leaves compression ringing just
  // inside it, which is below the trim threshold and stops the trim dead.
  const cut = n > 0 ? n + 3 : 0;
  const cropped = cut > 0
    ? img.clone().extract({ left: cut, top: cut, width: info.width - cut * 2, height: info.height - cut * 2 })
    : img.clone();

  // 2. find the artwork box ourselves. sharp's trim() keeps any row holding a
  //    single stray pixel, and these exports are full of compression noise, so
  //    a row only counts as content if enough of it is non-white.
  const cr = await cropped.clone().raw().toBuffer({ resolveWithObject: true });
  const cw0 = cr.info.width, chh = cr.info.height, cc = cr.info.channels;
  const solid = (x, y) => { const i = (y * cw0 + x) * cc; return cr.data[i] < 244 || cr.data[i+1] < 244 || cr.data[i+2] < 244; };
  const rowCount = y => { let c = 0; for (let x = 0; x < cw0; x++) if (solid(x, y)) c++; return c; };
  const colCount = x => { let c = 0; for (let y = 0; y < chh; y++) if (solid(x, y)) c++; return c; };
  const minRow = Math.max(2, Math.round(cw0 * 0.004));
  const minCol = Math.max(2, Math.round(chh * 0.004));
  let t = 0, b = chh - 1, l = 0, r = cw0 - 1;
  while (t < b && rowCount(t) < minRow) t++;
  while (b > t && rowCount(b) < minRow) b--;
  while (l < r && colCount(l) < minCol) l++;
  while (r > l && colCount(r) < minCol) r--;

  const ink = await cropped.clone()
    .extract({ left: l, top: t, width: r - l + 1, height: b - t + 1 })
    .toBuffer({ resolveWithObject: true });

  // 3. size the canvas around the ink rather than scaling the ink to the canvas
  let cw = Math.max(Math.ceil(ink.info.width / FILL_W), Math.ceil((ink.info.height / FILL_H) * 4 / 3));
  let ch2 = Math.round(cw * 3 / 4);
  let placed = ink.data, pw = ink.info.width, ph = ink.info.height;
  if (cw > MAX_W) {                       // downscale only, never up
    const k = MAX_W / cw;
    cw = MAX_W; ch2 = Math.round(cw * 3 / 4);
    const r = await sharp(ink.data).resize(Math.round(pw * k), Math.round(ph * k)).toBuffer({ resolveWithObject: true });
    placed = r.data; pw = r.info.width; ph = r.info.height;
  }

  // 4. one encode, lossless — these are flat-colour marks, not photographs
  const out = await sharp({ create: { width: cw, height: ch2, channels: 3, background: "#ffffff" } })
    .composite([{ input: placed, left: Math.round((cw - pw) / 2), top: Math.round((ch2 - ph) / 2) }])
    .webp({ lossless: true, effort: 6 }).toBuffer();

  const lossy = await sharp({ create: { width: cw, height: ch2, channels: 3, background: "#ffffff" } })
    .composite([{ input: placed, left: Math.round((cw - pw) / 2), top: Math.round((ch2 - ph) / 2) }])
    .webp({ quality: 94, effort: 6 }).toBuffer();

  const useLossless = out.length <= Math.max(lossy.length * 1.6, 120_000);
  const chosen = useLossless ? out : lossy;
  await writeFile(`${OUT}/${base}.webp`, chosen);
  console.log(base.padEnd(26), `border ${n}px  ink ${pw}x${ph}  canvas ${cw}x${ch2}  ${Math.round(chosen.length/1024)}KB  ${useLossless ? "lossless" : "q94"}`);
}
