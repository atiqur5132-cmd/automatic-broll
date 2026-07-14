import React from "react";
import { useCurrentFrame, useVideoConfig, spring, Img } from "remotion";

export type BuiltIn3DIconType =
  | "brain"
  | "shattered-heart"
  | "puppet-strings"
  | "mask"
  | "lock"
  | "custom";

export interface Real3DIconStageProps {
  /** Optional image URL for real 3D rendered transparent PNG/WebP icon */
  src?: string;
  /** Or use one of the built-in procedural 3D isometric icons */
  iconType?: BuiltIn3DIconType;
  /** Size of the stage container in pixels */
  size?: number;
  /** Primary volumetric glow color */
  glowColor?: string;
  /** Secondary glow or accent color */
  accentColor?: string;
  /** Optional label under the icon */
  label?: string;
}

/**
 * Procedural 3D Isometric Brain Icon with volumetric glow and pulsing synapses
 */
const Procedural3DBrain: React.FC<{ size: number; color: string; accent: string }> = ({
  size,
  color,
  accent,
}) => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame * 0.12) * 0.08;

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainSurface" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A385E" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>
      </defs>

      {/* Volumetric Aura */}
      <circle cx="100" cy="100" r={80 * pulse} fill="url(#brainGlow)" opacity="0.45" />

      {/* Left & Right Hemisphere 3D Isometric Lobes */}
      <path
        d="M96 45 C65 45 42 68 42 96 C42 124 62 145 92 148 L96 148 Z"
        fill="url(#brainSurface)"
        stroke={accent}
        strokeWidth="3.5"
        filter="drop-shadow(0px 8px 14px rgba(0,0,0,0.7))"
      />
      <path
        d="M104 45 C135 45 158 68 158 96 C158 124 138 145 108 148 L104 148 Z"
        fill="url(#brainSurface)"
        stroke={color}
        strokeWidth="3.5"
        filter="drop-shadow(0px 8px 14px rgba(0,0,0,0.7))"
      />

      {/* Glowing Neural Folds / Synapses */}
      <path
        d="M60 85 Q75 70 90 85 T70 115"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity={0.9}
      />
      <path
        d="M140 85 Q125 70 110 85 T130 115"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity={0.9}
      />
      <circle cx="90" cy="85" r="4.5" fill="#FFFFFF" />
      <circle cx="110" cy="85" r="4.5" fill="#FFFFFF" />
    </svg>
  );
};

/**
 * Procedural 3D Isometric Shattered Heart with depth layers
 */
const Procedural3DShatteredHeart: React.FC<{ size: number; color: string; accent: string }> = ({
  size,
  color,
  accent,
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1E56" />
          <stop offset="100%" stopColor="#5E0B20" />
        </linearGradient>
      </defs>
      {/* Left Shattered Half */}
      <path
        d="M92 160 L45 110 C20 85 30 45 65 45 C85 45 95 60 95 60 L85 95 L100 115 L92 160 Z"
        fill="url(#heartGrad)"
        stroke={accent}
        strokeWidth="3"
        filter="drop-shadow(-6px 10px 18px rgba(0,0,0,0.85))"
      />
      {/* Right Shattered Half (Displaced in 3D space) */}
      <path
        d="M112 162 L160 112 C185 87 175 47 140 47 C120 47 110 62 110 62 L118 97 L105 117 L112 162 Z"
        fill="url(#heartGrad)"
        stroke={color}
        strokeWidth="3"
        filter="drop-shadow(8px 12px 18px rgba(0,0,0,0.85))"
      />
      {/* Glowing Crack Energy */}
      <path
        d="M98 58 L88 92 L105 114 L95 160"
        stroke="#00F0FF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Real3DIconStage: React.FC<Real3DIconStageProps> = ({
  src,
  iconType = "brain",
  size = 540,
  glowColor = "#00F0FF",
  accentColor = "#FF2E63",
  label,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animation
  const scale = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 95, mass: 0.85 },
  });

  // Continuous 3D Floating Parallax & Orbit
  const floatY = Math.sin(frame * 0.05) * 15;
  const tiltX = Math.sin(frame * 0.04) * 8;
  const tiltY = Math.cos(frame * 0.033) * 10;

  // Floor shadow dynamic compression
  const shadowScale = 1 - (floatY / 15) * 0.16;
  const shadowOpacity = 0.5 - (floatY / 15) * 0.15;

  return (
    <div
      style={{
        position: "relative",
        width: size * 1.3,
        height: size * 1.4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1200,
      }}
    >
      {/* Volumetric Backlight Glow */}
      <div
        style={{
          position: "absolute",
          width: size * 1.15,
          height: size * 1.15,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}50 0%, ${glowColor}14 45%, transparent 75%)`,
          filter: "blur(40px)",
          transform: `scale(${1 + Math.sin(frame * 0.06) * 0.12})`,
          pointerEvents: "none",
        }}
      />

      {/* Floating 3D Icon Container */}
      <div
        style={{
          width: size,
          height: size,
          transform: `scale(${scale}) translate3d(0px, ${floatY}px, 0px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformStyle: "preserve-3d",
          filter: `drop-shadow(0px 24px 35px rgba(0,0,0,0.9)) drop-shadow(0px 0px 22px ${glowColor}40)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {src ? (
          <Img
            src={src}
            alt="3D Psychology Icon"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : iconType === "shattered-heart" ? (
          <Procedural3DShatteredHeart size={size} color={glowColor} accent={accentColor} />
        ) : (
          <Procedural3DBrain size={size} color={glowColor} accent={accentColor} />
        )}
      </div>

      {/* Floor Perspective Shadow */}
      <div
        style={{
          width: size * 0.68,
          height: size * 0.16,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.92) 0%, transparent 78%)",
          transform: `scale(${shadowScale}) rotateX(75deg)`,
          opacity: shadowOpacity,
          filter: "blur(10px)",
          marginTop: -24,
        }}
      />

      {/* Optional Label */}
      {label && (
        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: 2,
            textTransform: "uppercase",
            textShadow: `0 0 20px ${glowColor}`,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};
