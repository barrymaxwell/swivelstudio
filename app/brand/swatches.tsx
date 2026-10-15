"use client";

import { useEffect, useState } from "react";

// Values come from the CSS variables in globals.css, so this page can't drift
// from the site. Only the names and usage notes live here.
const groups: { title: string; tokens: { name: string; use?: string }[] }[] = [
  {
    title: "Crest",
    tokens: [
      { name: "crest-50" },
      { name: "crest-100", use: "Tints" },
      { name: "crest-200", use: "Rules, selection" },
      { name: "crest-300" },
      { name: "crest-400" },
      { name: "crest", use: "The brand blue. Mark, fills, and large display only. Never small text." },
      { name: "crest-600", use: "Large text and UI" },
      { name: "crest-700", use: "Links and small text" },
      { name: "crest-800" },
      { name: "crest-900", use: "Dark ground" },
      { name: "crest-950" },
    ],
  },
  {
    title: "Neutrals",
    tokens: [
      { name: "ground", use: "Page" },
      { name: "surface", use: "Raised bands" },
      { name: "ink", use: "Headings and body" },
      { name: "ink-2", use: "Secondary body" },
      { name: "ink-3", use: "Meta and eyebrows" },
      { name: "rule", use: "Borders" },
      { name: "rule-2", use: "Image placeholders" },
    ],
  },
];

function rgb(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance(hex: string) {
  const [r, g, b] = rgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function Swatch({ name, use }: { name: string; use?: string }) {
  const [hex, setHex] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(`--color-${name}`);
    setHex(v.trim().toUpperCase());
  }, [name]);

  const ratio = hex ? contrast(hex, "#FFFFFF") : 0;

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(hex);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
        className="group block w-full text-left"
        aria-label={`Copy ${name}, ${hex}`}
      >
        <span
          className="block aspect-[3/2] rounded-xs border border-rule"
          style={{ background: `var(--color-${name})` }}
        />
        <span className="mt-2 flex items-baseline justify-between gap-2 text-sm">
          <span className="font-medium">{name}</span>
          <span className="font-mono text-xs text-ink-3 group-hover:text-crest-700">
            {copied ? "Copied" : hex}
          </span>
        </span>
      </button>
      <p className="text-xs text-ink-3">
        {hex && `RGB ${rgb(hex).join(" ")} · ${ratio.toFixed(2)}:1 on white`}
      </p>
      {use && <p className="mt-1 text-xs text-ink-2">{use}</p>}
    </li>
  );
}

export function Swatches() {
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">{g.title}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
            {g.tokens.map((t) => (
              <Swatch key={t.name} {...t} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
