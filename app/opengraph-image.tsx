import { ImageResponse } from "next/og";
import { siteConfig } from "@/app/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#171717",
          fontFamily: "system-ui, sans-serif",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 24, color: "#a3a3a3", marginTop: 16 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
