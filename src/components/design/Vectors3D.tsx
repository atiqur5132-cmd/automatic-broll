import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

/**
 * 3D Isometric Extruded Bar Chart
 * Features real CSS 3D perspective geometry with top, front, and side faces.
 */
export const IsometricBarChart3D: React.FC<{
  westernShare: number;
  chineseShare: number;
}> = ({ westernShare, chineseShare }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  const floatAngle = interpolate(frame, [0, 150], [0, 8]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 120,
        padding: "60px 40px",
        perspective: 1200,
      }}
    >
      {/* Western Bar 3D Pedestal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `rotateX(20deg) rotateY(${floatAngle}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 900, color: "#00F0FF", marginBottom: 20 }}>
          {westernShare.toFixed(1)}%
        </div>
        <div
          style={{
            width: 180,
            height: Math.max(40, westernShare * 3.5 * entrance),
            background: "linear-gradient(180deg, #00F0FF 0%, #004080 100%)",
            borderRadius: "12px 12px 0 0",
            boxShadow: "0 20px 50px rgba(0, 240, 255, 0.4), inset 0 2px 10px rgba(255,255,255,0.6)",
            position: "relative",
            borderTop: "3px solid #FFFFFF",
          }}
        />
        <div style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginTop: 24 }}>
          WESTERN LABS
        </div>
      </div>

      {/* Chinese Bar 3D Pedestal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `rotateX(20deg) rotateY(${-floatAngle}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 900, color: "#FF5A5F", marginBottom: 20 }}>
          {chineseShare.toFixed(1)}%
        </div>
        <div
          style={{
            width: 180,
            height: Math.max(40, chineseShare * 3.5 * entrance),
            background: "linear-gradient(180deg, #FF5A5F 0%, #801020 100%)",
            borderRadius: "12px 12px 0 0",
            boxShadow: "0 20px 50px rgba(255, 90, 95, 0.4), inset 0 2px 10px rgba(255,255,255,0.6)",
            position: "relative",
            borderTop: "3px solid #FFFFFF",
          }}
        />
        <div style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginTop: 24 }}>
          CHINESE OPEN MODELS
        </div>
      </div>
    </div>
  );
};

/**
 * 3D Isometric Server Blade Infrastructure Vector
 * Illustrates hardware compute power & token processing volume.
 */
export const ServerBlade3D: React.FC<{
  title: string;
  subtitle: string;
  accentColor?: string;
}> = ({ title, subtitle, accentColor = "#FFB800" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 90 },
  });

  const floatY = Math.sin(frame / 12) * 8;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
        transform: `scale(${scale}) translateY(${floatY}px)`,
      }}
    >
      {/* 3D Isometric Server Chassis SVG Vector */}
      <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
        {/* Glowing Base Shadow */}
        <ellipse cx="130" cy="230" rx="90" ry="20" fill={accentColor} fillOpacity="0.25" />
        {/* Isometric Cube Rack */}
        <path
          d="M130 30 L220 75 L220 175 L130 220 L40 175 L40 75 Z"
          fill="rgba(255,255,255,0.05)"
          stroke={accentColor}
          strokeWidth="3"
        />
        <path d="M130 30 L130 220" stroke={accentColor} strokeWidth="2" strokeOpacity="0.5" />
        <path d="M40 75 L130 120 L220 75" stroke={accentColor} strokeWidth="2" strokeOpacity="0.5" />
        <path d="M40 125 L130 170 L220 125" stroke={accentColor} strokeWidth="2" strokeOpacity="0.5" />
        {/* Glowing Server Status LEDs */}
        <circle cx="85" cy="100" r="6" fill="#00F0FF" />
        <circle cx="105" cy="110" r="6" fill={accentColor} />
        <circle cx="175" cy="100" r="6" fill="#10B981" />
        <circle cx="85" cy="150" r="6" fill={accentColor} />
        <circle cx="175" cy="150" r="6" fill="#00F0FF" />
      </svg>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 650 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 900,
            color: accentColor,
            lineHeight: 1.05,
            textShadow: `0 0 40px ${accentColor}66`,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", marginTop: 18, lineHeight: 1.4 }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

/**
 * 3D Floating Network Router Vector
 * Visualizes Coinbase automated complexity & cost routing.
 */
export const RouterNetwork3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 85 },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        transform: `scale(${scale})`,
        perspective: 1400,
      }}
    >
      {/* 3D Source Node */}
      <div
        style={{
          padding: "36px 40px",
          borderRadius: 24,
          background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          transform: "rotateY(12deg)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
          INCOMING WORKLOAD
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: "#FFFFFF" }}>100% Tasks</div>
      </div>

      {/* 3D Connector Arrow */}
      <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
        <path d="M5 20 H60 M45 8 L60 20 L45 32" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* 3D Router Hub */}
      <div
        style={{
          padding: "44px 54px",
          borderRadius: 28,
          background: "linear-gradient(135deg, rgba(0,240,255,0.25), rgba(0,240,255,0.05))",
          border: "2px solid #00F0FF",
          boxShadow: "0 0 60px rgba(0,240,255,0.4), inset 0 2px 15px rgba(255,255,255,0.4)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.14em", marginBottom: 10 }}>
          COINBASE AUTOMATED ROUTER
        </div>
        <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF" }}>
          Complexity & Cost Assessment
        </div>
      </div>

      {/* 3D Connector Arrow */}
      <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
        <path d="M5 20 H60 M45 8 L60 20 L45 32" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* 3D Destination Nodes */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            padding: "24px 34px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(16,185,129,0.05))",
            border: "2px solid #10B981",
            boxShadow: "0 10px 30px rgba(16,185,129,0.3)",
            transform: "rotateY(-10deg)",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#10B981" }}>90% EVERYDAY ROUTINE</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>Efficient Open Models</div>
        </div>

        <div
          style={{
            padding: "24px 34px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(255,184,0,0.25), rgba(255,184,0,0.05))",
            border: "2px solid #FFB800",
            boxShadow: "0 10px 30px rgba(255,184,0,0.3)",
            transform: "rotateY(-10deg)",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#FFB800" }}>10% EXTREME EDGE CASES</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>Frontier Premium APIs</div>
        </div>
      </div>
    </div>
  );
};
