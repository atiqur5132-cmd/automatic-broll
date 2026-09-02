import React from "react";

interface RivetCardProps {
  title?: string;
  subTitle?: string;
  borderColor?: string;
  bannerText?: string;
  bannerRightText?: string;
  bannerBgColor?: string;
  width?: number | string;
  height?: number | string;
  rotateZ?: number;
  rotateX?: number;
  rotateY?: number;
  anchorPins?: "left" | "right" | "both" | "none";
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const RivetCard: React.FC<RivetCardProps> = ({
  title,
  subTitle,
  borderColor = "#0088FF",
  bannerText,
  bannerRightText,
  bannerBgColor = "#0088FF",
  width = 900,
  height,
  rotateZ = 0,
  rotateX = 0,
  rotateY = 0,
  anchorPins = "none",
  style = {},
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#12141A",
        border: `1.5px solid ${borderColor}`,
        borderRadius: "10px",
        position: "relative",
        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Corner Rivet / Screw Dots (Mechanical Detailing) */}
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#334155",
          border: "1px solid #1E293B",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#334155",
          border: "1px solid #1E293B",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: bannerText ? 42 : 8,
          left: 8,
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#334155",
          border: "1px solid #1E293B",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: bannerText ? 42 : 8,
          right: 8,
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#334155",
          border: "1px solid #1E293B",
        }}
      />

      {/* Connection Anchor Pins on the Border (Edge connection points) */}
      {(anchorPins === "left" || anchorPins === "both") && (
        <div
          style={{
            position: "absolute",
            left: -4,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 10,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FFFFFF", border: `1.5px solid ${borderColor}` }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FFFFFF", border: `1.5px solid ${borderColor}` }} />
        </div>
      )}

      {(anchorPins === "right" || anchorPins === "both") && (
        <div
          style={{
            position: "absolute",
            right: -4,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 10,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FFFFFF", border: `1.5px solid ${borderColor}` }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FFFFFF", border: `1.5px solid ${borderColor}` }} />
        </div>
      )}

      {/* Top Header Bar */}
      {title && (
        <div
          style={{
            padding: "16px 24px 12px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.15em",
              color: "#94A3B8",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {title}
          </div>
          {subTitle && (
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                color: borderColor,
                fontWeight: 600,
              }}
            >
              {subTitle}
            </div>
          )}
        </div>
      )}

      {/* Main Card Content */}
      <div style={{ padding: "24px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </div>

      {/* Bottom Full-Bleed Accent Banner (Kai Explains Signature Style) */}
      {bannerText && (
        <div
          style={{
            backgroundColor: bannerBgColor,
            color: "#08090C",
            padding: "12px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 800,
            fontSize: "15px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <div>{bannerText}</div>
          {bannerRightText && (
            <div style={{ fontSize: "12px", letterSpacing: "0.2em", opacity: 0.85 }}>
              {bannerRightText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
