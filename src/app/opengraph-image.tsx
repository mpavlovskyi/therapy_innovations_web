import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Therapy Innovations — ABA Therapy Technology Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F9F6F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#E8813A",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          Chicago-based holding company
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Therapy Innovations
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#1A2E1A",
            marginBottom: 24,
          }}
        >
          Innovating the Future of ABA Therapy
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#6B6B6B",
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Building technology for ABA therapy professionals across 7 platforms,
          serving 80,000+ users.
        </div>
      </div>
    ),
    { ...size }
  );
}
