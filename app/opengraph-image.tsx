import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Meraki Business Consultants — One system. One team. One standard.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          background:
            "linear-gradient(135deg, #FBF8F3 0%, #F5E9D9 60%, #FBF8F3 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(217,122,44,0.5) 0%, rgba(217,122,44,0) 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              height: "56px",
              width: "56px",
              borderRadius: "16px",
              background: "#0E1623",
              color: "#D97A2C",
              fontSize: "32px",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#0E1623",
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Meraki
            </span>
            <span
              style={{
                color: "#4A5260",
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Business Consultants
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            zIndex: 1,
          }}
        >
          <p
            style={{
              color: "#0E1623",
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              maxWidth: "920px",
              margin: 0,
            }}
          >
            Enterprise-Level Business Support, Made Accessible to UAE Companies.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                background: "#0E1623",
                color: "#D97A2C",
                padding: "10px 20px",
                borderRadius: "9999px",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              One system. One team. One standard.
            </div>
            <span
              style={{
                color: "#4A5260",
                fontSize: "20px",
              }}
            >
              meraki-consultants.com
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
