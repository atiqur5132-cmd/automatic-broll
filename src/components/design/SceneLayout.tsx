import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";

interface SceneLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  accentColor?: string;
}

/**
 * Clean, cinematic documentary frame layout.
 * No top/corner HUD badges, no dashboard clutter.
 * Focuses 100% on high-impact visual storytelling matching the voiceover.
 */
export const SceneLayout: React.FC<SceneLayoutProps> = ({
  title,
  subtitle,
  children,
  accentColor = "#00F0FF",
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const translateY = interpolate(frame, [0, 12], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 140px",
        boxSizing: "border-box",
        opacity: fadeIn,
        transform: `translateY(${translateY}px)`,
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
      }}
    >
      {title && (
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: accentColor,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          {title}
        </div>
      )}

      {children && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "12px 0",
          }}
        >
          {children}
        </div>
      )}

      {subtitle && (
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: 1300,
            marginTop: 28,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
