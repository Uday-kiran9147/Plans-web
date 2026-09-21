import { ImageResponse } from "next/og";
import { site } from "@/components/site";

/**
 * Link preview card. Next serves this at /opengraph-image and reuses it for
 * Twitter, since there is no separate twitter-image.
 */
export const alt = `${site.name} - ${site.tagline}`;
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
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #14121f 0%, #0b0b10 55%, #101a1d 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent wash, echoing the hero glow. */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 220,
            width: 760,
            height: 520,
            borderRadius: 9999,
            background: "#7c5cff",
            opacity: 0.35,
            filter: "blur(140px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #9b83ff 0%, #5b3ee8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            P
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#f2f2f5" }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#f2f2f5",
              lineHeight: 1.05,
            }}
          >
            Make plans,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#9b83ff",
              lineHeight: 1.05,
            }}
          >
            things you want to do.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#9a9aab",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Say what you want to do, find the people who want the same thing, and meet
            up tonight.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#6a6a7c" }}>
          <span>Free to use</span>
          <span>·</span>
          <span>No ads</span>
          <span>·</span>
          <span>No endless scroll</span>
        </div>
      </div>
    ),
    size,
  );
}
