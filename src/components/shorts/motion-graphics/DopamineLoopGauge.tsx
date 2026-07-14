import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

export interface DopamineLoopGaugeProps {
  level?: number; // 0 to 100
  label?: string;
  chemicalFormula?: string;
}

export const DopamineLoopGauge: React.FC<DopamineLoopGaugeProps> = ({
  level = 88,
  label = "DOPAMINE SPIKE",
  chemicalFormula = "C8H11NO2",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth entrance scale
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110, mass: 0.8 },
  });

  // Animated gauge rising up smoothly
  const currentLevel = interpolate(
    frame,
    [5, 45],
    [10, level],
    {
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Gentle 3D floating & rotation
  const tiltX = interpolate(frame, [0, 150], [14, 20]);
  const tiltY = interpolate(frame, [0, 150], [-18, -10]);
  const floatY = Math.sin(frame * 0.08) * 10;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1400,
        position: "relative",
      }}
    >
      {/* Background radial chemical haze */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,180,0.22) 0%, rgba(130,0,255,0.12) 55%, transparent 75%)",
          filter: "blur(40px)",
          transform: `translateY(${floatY}px)`,
        }}
      />

      {/* 3D Glass Gauge Pillar */}
      <div
        style={{
          width: 360,
          height: 540,
          borderRadius: 36,
          background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(20,25,45,0.85) 100%)",
          border: "2px solid rgba(0,255,190,0.45)",
          boxShadow: "0 35px 80px rgba(0,0,0,0.7), inset 0 0 40px rgba(0,255,180,0.18)",
          transformStyle: "preserve-3d",
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${enterSpring}) translateY(${floatY}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 36,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Header */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "SpaceGrotesk, sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: "#00FFC2",
              letterSpacing: 2,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              background: "rgba(0,0,0,0.4)",
              padding: "4px 12px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {chemicalFormula}
          </div>
        </div>

        {/* Liquid Cylinder Container */}
        <div
          style={{
            width: 140,
            height: 320,
            borderRadius: 70,
            background: "rgba(10,15,30,0.8)",
            border: "3px solid rgba(255,255,255,0.2)",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.9)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* Glowing Liquid Fill */}
          <div
            style={{
              width: "100%",
              height: `${currentLevel}%`,
              background: "linear-gradient(180deg, #00FFC2 0%, #0088FF 50%, #7A00FF 100%)",
              boxShadow: "0 0 35px #00FFC2",
              borderRadius: "0 0 70px 70px",
              position: "relative",
            }}
          >
            {/* Liquid surface highlight line */}
            <div
              style={{
                width: "100%",
                height: 6,
                background: "#FFFFFF",
                boxShadow: "0 0 15px #FFFFFF",
              }}
            />
          </div>
        </div>

        {/* Numerical Indicator */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "SpaceGrotesk, sans-serif",
              fontSize: 54,
              fontWeight: 900,
              color: "#FFFFFF",
              textShadow: "0 0 25px rgba(0,255,194,0.8)",
            }}
          >
            {Math.round(currentLevel)}%
          </div>
          <div
            style={{
              fontFamily: "PlusJakartaSans, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            NEURAL SATURATION
          </div>
        </div>
      </div>
    </div>
  );
};
