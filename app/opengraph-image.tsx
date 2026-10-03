import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Swivel Studio — Brand identity and event design, Seattle";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", background: "#fbfbfa", padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#808b95" }}>
          SWIVEL STUDIO · SEATTLE
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1, color: "#16191c" }}>
          Brand identity and event design.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#2c6e9e" }}>
          Robin Maxwell, Principal
        </div>
      </div>
    ),
    size
  );
}
