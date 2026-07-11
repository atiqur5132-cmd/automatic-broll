import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../../fonts";
import { SilhouetteIcon } from "./BeatVisuals1To9";

// Beat 10: Noam Shazeer & Transformer Circuit Node (1699 - 2029)
export const BeatNoamTransformer: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = 0.98 + Math.sin(frame / 15) * 0.03;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 90 }}>
        <div style={{ transform: `scale(${scale})`, filter: "drop-shadow(0 0 30px rgba(96, 165, 250, 0.4))" }}>
          <SilhouetteIcon color="#60a5fa" size={150} />
        </div>

        {/* Transformer Neural Circuit Node */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 24,
              color: "#38bdf8",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            TRANSFORMER ARCHITECTURE
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
            CO-AUTHOR DEPARTED
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 11: $2.7 BILLION & 22 MONTHS (2029 - 2382)
export const BeatPrice27Billion: React.FC = () => {
  const frame = useCurrentFrame();
  const floatY = Math.sin(frame / 15) * 12;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `translateY(${floatY}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 120,
            fontWeight: 900,
            color: "#10b981",
            letterSpacing: "-0.03em",
            textShadow: "0 10px 50px rgba(16, 185, 129, 0.5)",
          }}
        >
          $2.7 BILLION
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 34,
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          LASTED EXACTLY 22 MONTHS
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 12: John Jumper & Nobel Laureate Wreath (2382 - 2505)
export const BeatJohnJumperNobel: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 70 }}>
        <div style={{ filter: "drop-shadow(0 0 35px rgba(251, 191, 36, 0.4))" }}>
          <SilhouetteIcon color="#fbbf24" size={140} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 26,
              color: "#fbbf24",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            NOBEL LAUREATE
          </div>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            JOINED RIVAL LAB
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 13: Jonas Adler & Alexander Pritzel (2505 - 2644)
export const BeatAdlerPritzel: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame, [0, 60], [0, 15]);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
        <div style={{ display: "flex", gap: 30, transform: `translateX(${shift}px)` }}>
          <SilhouetteIcon color="#a855f7" size={120} />
          <SilhouetteIcon color="#ec4899" size={120} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            SAME-WEEK EXODUS
          </div>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 26,
              color: "#c38fff",
              fontWeight: 500,
            }}
          >
            SENIOR RESEARCH ROSTER SHIFT
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 14: Stock Chart Crashing & $225 BILLION (2644 - 2862)
export const BeatStockCrash225B: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 40], [0.95, 1.03]);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `scale(${scale})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 124,
            fontWeight: 900,
            color: "#e11d48",
            letterSpacing: "-0.04em",
            textShadow: "0 10px 50px rgba(225, 29, 72, 0.6)",
          }}
        >
          -$225 BILLION
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 32,
            color: "#fecdd3",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          MARKET VALUE WIPED OUT IN DAYS
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 15: 2M TOKENS & Expanding Document Stack (2862 - 3157)
export const BeatTwoMillionTokens: React.FC = () => {
  const frame = useCurrentFrame();
  const floatY = Math.sin(frame / 18) * 10;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `translateY(${floatY}px)`, display: "flex", alignItems: "center", gap: 80 }}>
        {/* Document Stack Graphic */}
        <div style={{ position: "relative", width: 180, height: 210 }}>
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: idx * -20,
                left: idx * 15,
                width: 140,
                height: 180,
                borderRadius: 16,
                backgroundColor: idx === 2 ? "#3b82f6" : "rgba(59, 130, 246, 0.35)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 110,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            2M TOKENS
          </div>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 30,
              color: "#60a5fa",
              fontWeight: 600,
            }}
          >
            RECORD CONTEXT WINDOW
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 16: Doubling Context Comparison & Code/Financial/Video Stack (3157 - 3548)
export const BeatContextUseCases: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
        {[
          { title: "ENTIRE CODEBASES", color: "#38bdf8" },
          { title: "FINANCIAL ARCHIVES", color: "#818cf8" },
          { title: "HOURS OF VIDEO", color: "#c084fc" },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              width: 320,
              padding: "36px 28px",
              borderRadius: 24,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: `2px solid ${item.color}`,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: `0 20px 45px rgba(0, 0, 0, 0.5)`,
            }}
          >
            <div
              style={{
                fontFamily: displayFontFamily,
                fontSize: 28,
                fontWeight: 800,
                color: item.color,
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#cbd5e1",
              }}
            >
              SINGLE PROMPT PROCESSING
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Beat 17: DEEP THINK & $250/MONTH (3548 - 3892)
export const BeatDeepThink250: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = 25 + Math.sin(frame / 12) * 15;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 80 }}>
        {/* Layered Neural Brain Graphic */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, #8b5cf6, #4c1d95)",
            boxShadow: `0 0 ${glow}px rgba(139, 92, 246, 0.8)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: displayFontFamily,
            fontSize: 24,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          DEEP THINK
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 98,
              fontWeight: 900,
              color: "#fbbf24",
            }}
          >
            $250 / MONTH
          </div>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 28,
              color: "#e2e8f0",
              fontWeight: 600,
            }}
          >
            PREMIUM REASONING TIER
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 18: Statement Emblem to Credibility Balance Scale (3892 - 4038)
export const BeatCredibilityTest: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 26,
            color: "#f43f5e",
            fontWeight: 600,
            letterSpacing: "0.15em",
          }}
        >
          HIGH STAKES
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 78,
            fontWeight: 900,
            color: "#ffffff",
          }}
        >
          CREDIBILITY TEST
        </div>
      </div>
    </AbsoluteFill>
  );
};
