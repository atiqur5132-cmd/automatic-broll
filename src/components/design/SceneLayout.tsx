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
 * Clean, distraction-free 1920x1080 Full-Screen Documentary Layout.
 * Zero tiny top/bottom clutter text.
 * Allows the main visual component to occupy the entire screen edge-to-edge.
 */
export const SceneLayout: React.FC<SceneLayoutProps> = ({
  title,
  subtitle,
  children,
  accentColor = "#00F0FF",
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "70px 90px",
        boxSizing: "border-box",
        opacity: fadeIn,
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
      }}
    >
      {/* Optional Clean Topic Header (Only if title provided, no tiny metadata) */}
      {title && (
        <div
          style={{
            marginBottom: "36px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "0.2em",
              color: accentColor,
              textTransform: "uppercase",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: "#FFFFFF",
                marginTop: 8,
                letterSpacing: "-0.01em",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      )}

      {/* Full-Screen Edge-to-Edge Content Container */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
