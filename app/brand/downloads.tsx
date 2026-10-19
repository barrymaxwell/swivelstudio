"use client";

// Builds SVG and PNG downloads from the master files in public/brand, recolored
// in the browser. One master per asset, so a fix to the vector fixes every download.

// One PNG size. 2400px wide covers a LinkedIn banner and most slides.
const PNG_WIDTH = 2400;

const colors = [
  { label: "Blue", token: "crest" },
  { label: "Ink", token: "ink" },
  { label: "White", token: "surface" },
];

function tokenHex(token: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--color-${token}`).trim();
}

async function recolored(src: string, fill: string) {
  const text = await (await fetch(src)).text();
  const doc = new DOMParser().parseFromString(text, "image/svg+xml");
  doc.querySelectorAll("path").forEach((p) => p.setAttribute("fill", fill));
  return new XMLSerializer().serializeToString(doc);
}

function save(blob: Blob, filename: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

async function png(svg: string, width: number, ratio: number) {
  const height = Math.round(width * ratio);
  // Rasterise at full size. A browser draws an SVG with no size at 300×150 and upscales.
  const doc = new DOMParser().parseFromString(svg, "image/svg+xml");
  doc.documentElement.setAttribute("width", String(width));
  doc.documentElement.setAttribute("height", String(height));
  const img = new Image();
  img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(doc))}`;
  await img.decode();
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
  return new Promise<Blob>((r) => canvas.toBlob((b) => r(b!), "image/png"));
}

export function Downloads({
  src,
  slug,
  ratio,
}: {
  /** Master SVG in public/brand. */
  src: string;
  slug: string;
  /** Height ÷ width of the artwork. */
  ratio: number;
}) {
  const get = async (token: string, label: string, format: "svg" | "png") => {
    const svg = await recolored(src, tokenHex(token));
    const name = `${slug}-${label.toLowerCase()}`;
    if (format === "svg") return save(new Blob([svg], { type: "image/svg+xml" }), `${name}.svg`);
    save(await png(svg, PNG_WIDTH, ratio), `${name}-${PNG_WIDTH}w.png`);
  };

  return (
    <table className="mt-4 w-full text-sm">
      <tbody>
        {colors.map((c) => (
          <tr key={c.token} className="border-t border-rule">
            <th scope="row" className="py-2 pr-4 text-left font-medium">
              {c.label}
            </th>
            {(["svg", "png"] as const).map((f) => (
              <td key={f} className="py-2 pr-4">
                <button
                  type="button"
                  onClick={() => get(c.token, c.label, f)}
                  className="text-crest-700 underline decoration-crest-200 underline-offset-4 hover:decoration-crest-700"
                >
                  {f === "svg" ? "SVG" : `PNG ${PNG_WIDTH}`}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
