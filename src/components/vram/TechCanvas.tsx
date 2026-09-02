import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface TechCanvasProps {
  chapter: string;
  subTitle?: string;
  watermark?: string;
  zoomScale?: number;
  children: React.ReactNode;
}

export const TechCanvas: React.FC<TechCanvasProps> = ({
  chapter,
  subTitle,
  watermark = "<vrambreakdown>",
  zoomScale = 1.06,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle continuous cinematic camera movement (spring damped)
  const cameraSpring = spring({
    frame,
    fps,
    config: { damping: 200, mass: 2, stiffness: 20 },
  });

  const scale = interpolate(cameraSpring, [0, 1], [1.0, zoomScale]);
  const subtlePanY = interpolate(frame, [0, 1800], [0, -15]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0B0E",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', monospace",
        color: "#FFFFFF",
      }}
    >
      {/* 1. Subtle Technical Grid Canvas */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* 2. Top Chapter Header (Kai Style) */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 80,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div
          style={{
            fontSize: "19px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#A0AEC0",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <span style={{ color: "#0088FF" }}>{chapter.split("·")[0]}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{chapter.split("·")[1] || chapter}</span>
        </div>
        {/* Underline separator */}
        <div
          style={{
            width: "120px",
            height: "1.5px",
            backgroundColor: "#0088FF",
            opacity: 0.8,
          }}
        />
        {subTitle && (
          <div
            style={{
              fontSize: "13px",
              color: "#64748B",
              letterSpacing: "0.15em",
              marginTop: "4px",
            }}
          >
            {subTitle}
          </div>
        )}
      </div>

      {/* 3. Bottom Right Discreet Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 35,
          right: 70,
          fontSize: "14px",
          color: "rgba(255, 255, 255, 0.22)",
          letterSpacing: "0.15em",
          zIndex: 50,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {watermark}
      </div>

      {/* 4. Camera Zoom Wrapper with Micro-Movement */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale}) translateY(${subtlePanY}px)`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
