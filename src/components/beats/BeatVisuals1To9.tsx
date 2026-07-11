import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../../fonts";

export const SilhouetteIcon: React.FC<{ color?: string; size?: number }> = ({
  color = "#60a5fa",
  size = 140,
}) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 100 130" fill="none">
    <circle cx="50" cy="30" r="22" fill={color} opacity={0.88} />
    <path
      d="M20 120 C20 85 80 85 80 120 Z"
      fill={color}
      opacity={0.82}
    />
  </svg>
);

export const BeatKeynoteStage: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 185], [0.95, 1.05]);
  const beamOpacity = interpolate(frame, [0, 40], [0, 0.75]);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          position: "absolute",
          top: -100,
          width: 700,
          height: 900,
          background: "linear-gradient(180deg, rgba(99, 102, 241, 0.4) 0%, transparent 85%)",
          clipPath: "polygon(40% 0%, 60% 0%, 95% 100%, 5% 100%)",
          opacity: beamOpacity,
        }}
      />
      <div
        style={{
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "radial-gradient(circle, #6366f1 0%, #312e81 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 60px rgba(99, 102, 241, 0.6)",
          }}
        >
          <SilhouetteIcon color="#ffffff" size={90} />
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 68,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            textShadow: "0 10px 30px rgba(0,0,0,0.8)",
          }}
        >
          MAY 19, 2026
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 28,
            color: "#93c5fd",
            fontWeight: 600,
            letterSpacing: "0.15em",
          }}
        >
          ANNUAL KEYNOTE STAGE
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatGeminiPromise: React.FC = () => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 40], [40, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `translateY(${y}px)`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 80,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 26,
              color: "#60a5fa",
              fontWeight: 600,
              letterSpacing: "0.12em",
            }}
          >
            NEXT FLAGSHIP MODEL
          </div>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 94,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            GEMINI 3.5 PRO
          </div>
        </div>

        <div
          style={{
            width: 240,
            height: 270,
            background: "linear-gradient(145deg, #1e293b, #0f172a)",
            borderRadius: 24,
            border: "2px solid rgba(96, 165, 250, 0.4)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#3b82f6",
              padding: "16px 0",
              textAlign: "center",
              fontFamily: displayFontFamily,
              fontSize: 26,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "0.15em",
            }}
          >
            LAUNCH
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: displayFontFamily,
              fontSize: 68,
              fontWeight: 900,
              color: "#60a5fa",
            }}
          >
            JUNE
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatApplauseToGroan: React.FC = () => {
  const frame = useCurrentFrame();
  const transition = interpolate(frame, [0, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          &ldquo;GIVE US UNTIL NEXT MONTH&rdquo;
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center", height: 140 }}>
          {[...Array(19)].map((_, i) => {
            const h = 30 + Math.sin(frame / 6 + i) * (transition > 0.5 ? 45 : 30) + 30;
            const barColor = transition > 0.5 ? "#f43f5e" : "#38bdf8";
            return (
              <div
                key={i}
                style={{
                  width: 14,
                  height: h,
                  backgroundColor: barColor,
                  borderRadius: 8,
                  boxShadow: `0 0 16px ${barColor}`,
                }}
              />
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatTargetAccuracy: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 8) * 0.05;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `scale(${pulse})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "4px solid #38bdf8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 50px rgba(56, 189, 248, 0.4)",
          }}
        >
          <div style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: "#38bdf8" }} />
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 54,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "0.02em",
          }}
        >
          ACCURATE REACTION
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatEmptyCalendar: React.FC = () => {
  const frame = useCurrentFrame();
  const handAngle = frame * 4;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 70, alignItems: "center" }}>
        <div
          style={{
            width: 170,
            height: 170,
            borderRadius: "50%",
            border: "6px solid #64748b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 6,
              height: 55,
              backgroundColor: "#f87171",
              bottom: "50%",
              transformOrigin: "bottom center",
              transform: `rotate(${handAngle}deg)`,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 78,
              fontWeight: 900,
              color: "#f87171",
            }}
          >
            NO LAUNCH
          </div>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 30,
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            JUNE PASSED BY
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatPadlockLimited: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = 25 + Math.sin(frame / 10) * 15;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
        <div
          style={{
            width: 160,
            height: 190,
            borderRadius: 24,
            border: "4px solid #0ea5e9",
            background: "rgba(14, 165, 233, 0.15)",
            boxShadow: `0 0 ${glow}px rgba(14, 165, 233, 0.6)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 48,
              fontWeight: 900,
              color: "#38bdf8",
            }}
          >
            LOCKED
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            VERTEX AI PREVIEW
          </div>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 28,
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            RESTRICTED ENTERPRISE ACCESS
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatJulyGearRepair: React.FC = () => {
  const frame = useCurrentFrame();
  const gearRot = frame * 2.5;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 70, alignItems: "center" }}>
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "12px dashed #f59e0b",
            transform: `rotate(${gearRot}deg)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 24,
              color: "#fbbf24",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            PUSHED TO JULY
          </div>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 66,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            MULTI-STEP EFFICIENCY
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatBlueprintRipple: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = 0.96 + Math.sin(frame / 20) * 0.04;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `scale(${scale})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div
          style={{
            padding: "16px 36px",
            border: "2px solid #f43f5e",
            borderRadius: 50,
            fontFamily: bodyFontFamily,
            fontSize: 22,
            color: "#fb7185",
            letterSpacing: "0.15em",
          }}
        >
          NOT AN ISOLATED DELAY
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          SYSTEMIC RIPPLE
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BeatTenDaysExodus: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 110,
            fontWeight: 900,
            color: "#f43f5e",
            letterSpacing: "-0.04em",
            textShadow: "0 10px 40px rgba(244, 63, 94, 0.5)",
          }}
        >
          10 DAYS
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 32,
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          4 SENIOR RESEARCHERS DEPARTED
        </div>
        <div style={{ display: "flex", gap: 30, marginTop: 10 }}>
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              style={{
                transform: `translateX(${interpolate(frame, [0, 80], [0, 20 + idx * 10])}px)`,
                opacity: 0.9,
              }}
            >
              <SilhouetteIcon color="#fb7185" size={80} />
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
