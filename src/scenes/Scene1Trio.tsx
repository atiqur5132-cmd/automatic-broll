import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { Sparkles, Bot, Cloud, Cpu, Layers, Box } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene1Trio: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous Ken Burns slow zoom
  const globalScale = interpolate(frame, [0, 510], [1, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Staggered entrance for the 3 pillars
  const bigCardY = interpolate(frame, [15, 45], [80, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bigCardOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const medCardY = interpolate(frame, [30, 60], [80, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const medCardOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cheapCardY = interpolate(frame, [45, 75], [80, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cheapCardOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating continuous motion for each pillar
  const floatY1 = Math.sin(frame / 20) * 8;
  const floatY2 = Math.sin((frame + 15) / 22) * 8;
  const floatY3 = Math.sin((frame + 30) / 24) * 8;

  // Brand badges appearing after frame 150 (approx 5s when OpenAI / Anthropic / Google are named)
  const brandsOpacity = interpolate(frame, [150, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#0a0f1d"
        secondaryColor="#1e1b4b"
        accentColor="#38bdf8"
      />

      <AbsoluteFill
        style={{
          scale: globalScale,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 100px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Typography */}
        <div style={{ marginTop: 20 }}>
          <AnimatedTypography
            subtitle="EVERY AI COMPANY SUDDENLY HAS"
            keyword="THREE MODEL TIERS"
            accentColor="#38bdf8"
            delayFrames={10}
          />
        </div>

        {/* Center Trio Visual Pillars (Full Edge-to-Edge Spread) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            width: "100%",
            flex: 1,
          }}
        >
          {/* BIG MODEL PILLAR */}
          <PillarCard
            title="BIG MODEL"
            tag="OPUS / SOTA"
            icon={<Cpu size={56} color="#38bdf8" />}
            accentColor="#38bdf8"
            translateY={bigCardY + floatY1}
            opacity={bigCardOpacity}
            glowStrength="rgba(56, 189, 248, 0.25)"
          />

          {/* MEDIUM MODEL PILLAR */}
          <PillarCard
            title="MEDIUM MODEL"
            tag="SONNET / MID"
            icon={<Layers size={56} color="#818cf8" />}
            accentColor="#818cf8"
            translateY={medCardY + floatY2}
            opacity={medCardOpacity}
            glowStrength="rgba(129, 140, 248, 0.35)"
            isHighlighted
          />

          {/* CHEAP MODEL PILLAR */}
          <PillarCard
            title="CHEAP MODEL"
            tag="HAIKU / MINI"
            icon={<Box size={56} color="#34d399" />}
            accentColor="#34d399"
            translateY={cheapCardY + floatY3}
            opacity={cheapCardOpacity}
            glowStrength="rgba(52, 211, 153, 0.2)"
          />
        </div>

        {/* Bottom Orbiting Brand Badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            opacity: brandsOpacity,
            marginBottom: 20,
          }}
        >
          <BrandBadge icon={<Sparkles size={24} color="#38bdf8" />} label="OpenAI" />
          <BrandBadge icon={<Bot size={24} color="#818cf8" />} label="Anthropic" />
          <BrandBadge icon={<Cloud size={24} color="#34d399" />} label="Google" />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

interface PillarCardProps {
  title: string;
  tag: string;
  icon: React.ReactNode;
  accentColor: string;
  translateY: number;
  opacity: number;
  glowStrength: string;
  isHighlighted?: boolean;
}

const PillarCard: React.FC<PillarCardProps> = ({
  title,
  tag,
  icon,
  accentColor,
  translateY,
  opacity,
  glowStrength,
  isHighlighted,
}) => {
  return (
    <div
      style={{
        width: 380,
        height: 430,
        borderRadius: 28,
        backgroundColor: "rgba(15, 23, 42, 0.75)",
        border: `2px solid ${isHighlighted ? accentColor : "rgba(255, 255, 255, 0.12)"}`,
        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.5), 0 0 60px ${glowStrength}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 36,
        opacity,
        translate: `0px ${translateY}px`,
      }}
    >
      <div
        style={{
          width: 108,
          height: 108,
          borderRadius: 24,
          backgroundColor: `${accentColor}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          boxShadow: `inset 0 0 20px ${accentColor}30`,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: bodyFontFamily,
          fontSize: 16,
          fontWeight: 700,
          color: accentColor,
          letterSpacing: "0.18em",
          marginBottom: 12,
        }}
      >
        {tag}
      </div>
      <div
        style={{
          fontFamily: bodyFontFamily,
          fontSize: 32,
          fontWeight: 800,
          color: "#ffffff",
        }}
      >
        {title}
      </div>
    </div>
  );
};

const BrandBadge: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 24px",
        borderRadius: 999,
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      {icon}
      <span
        style={{
          fontFamily: bodyFontFamily,
          fontSize: 18,
          fontWeight: 600,
          color: "#e2e8f0",
        }}
      >
        {label}
      </span>
    </div>
  );
};
