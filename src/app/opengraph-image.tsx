import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Therapy Innovations — ABA Therapy Venture Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF8",
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
            fontSize: 14,
            fontWeight: 600,
            color: "#6B6B6B",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 16,
          }}
        >
          Chicago-based venture studio
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#0F0F0F",
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          Therapy Innovations
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#0F0F0F",
            marginBottom: 24,
          }}
        >
          Building the infrastructure of ABA therapy.
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#6B6B6B",
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          7 companies serving 100,000+ ABA therapy professionals.
        </div>
      </div>
    ),
    { ...size }
  );
}
