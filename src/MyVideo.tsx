import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  Audio,
  staticFile,
  interpolate,
  spring,
  Img,
} from "remotion";
import subtitlesData from "./subtitles.json";

// Theme configuration matching documentary aesthetics
const THEME = {
  bgWarm: "#f4f3ef",
  accentRed: "#d32f2f",
  accentBlue: "#1976d2",
  textDark: "#1a1a1a",
  textGray: "#555555",
  goldHighlight: "#e65100",
  white: "#ffffff",
};

// Word level subtitle interface
interface SubtitleWord {
  text: string;
  startMs: number;
  endMs: number;
  confidence: number;
}

// ── GLOBAL COMPONENTS

// Drifting grunge background for texture
const UniversalBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Create a subtle Ken Burns pan
  const scale = interpolate(frame, [0, 8000], [1.02, 1.15], {
    extrapolateRight: "clamp",
  });
  const xTranslation = interpolate(frame, [0, 8000], [0, -40], {
    extrapolateRight: "clamp",
  });

  return (
    <Img
      src={staticFile("grunge_background.png")}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        objectFit: "cover",
        transform: `scale(${scale}) translate(${xTranslation}px, 0px)`,
        zIndex: 0,
      }}
    />
  );
};

// Kinetic typography engine optimized for giant readability
const DynamicSubtitles: React.FC<{ currentTime: number }> = ({
  currentTime,
}) => {
  const { width, height } = useVideoConfig();
  const isWidescreen = width > height;

  const currentMs = currentTime * 1000;

  // Find active words in a 3-second window
  const activeWords = (subtitlesData as SubtitleWord[]).filter(
    (w) => currentMs >= w.startMs - 300 && currentMs <= w.endMs + 300
  );

  // Find current active word
  const activeWord = (subtitlesData as SubtitleWord[]).find(
    (w) => currentMs >= w.startMs && currentMs <= w.endMs
  );

  if (activeWords.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: isWidescreen ? "80px" : "200px",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
        padding: "0 40px",
      }}
    >
      <div
        style={{
          background: "rgba(26, 26, 26, 0.9)",
          padding: isWidescreen ? "15px 35px" : "25px 45px",
          borderRadius: "30px",
          border: "2px solid #333",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isWidescreen ? "10px" : "15px",
          maxWidth: isWidescreen ? "1200px" : "900px",
        }}
      >
        {activeWords.map((word, idx) => {
          const isActive = activeWord?.text === word.text;
          return (
            <span
              key={`${word.text}-${idx}`}
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                fontSize: isWidescreen ? "54px" : "68px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: isActive ? THEME.goldHighlight : "#ffffff",
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? "1.1" : "1.0",
                transformOrigin: "center",
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// ── SCENE 1: The Three Tier Mystery (0.0s - 24.9s)
const Scene1ThreeTiers: React.FC<{ frame: number; isWidescreen: boolean }> = ({
  frame,
  isWidescreen,
}) => {
  const currentSec = frame / 30;

  // Visual offsets
  const leftFounderY = spring({
    frame: frame - 120,
    fps: 30,
    config: { damping: 15 },
  });
  const rightFounderY = spring({
    frame: frame - 180,
    fps: 30,
    config: { damping: 15 },
  });

  const headingOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headingScale = interpolate(frame, [0, 45], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  // Animated quote bubble
  const quote1Scale = spring({ frame: frame - 150, fps: 30 });
  const quote2Scale = spring({ frame: frame - 210, fps: 30 });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "100px 50px 250px 50px",
        position: "relative",
      }}
    >
      {/* Top Header */}
      <h1
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: isWidescreen ? "130px" : "90px",
          color: THEME.accentRed,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "2px",
          opacity: headingOpacity,
          scale: headingScale,
          marginTop: isWidescreen ? "0" : "80px",
        }}
      >
        AI MODEL TIERS?
      </h1>

      {/* Sub-scenarios based on timings */}
      {currentSec < 11.7 ? (
        // Cutout character view
        <div
          style={{
            display: "flex",
            flexDirection: isWidescreen ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
            width: "100%",
          }}
        >
          {/* Founder 1 (Left) */}
          <div
            style={{
              position: "relative",
              transform: `translateY(${(1 - leftFounderY) * 600}px)`,
            }}
          >
            {/* Red backdrop circle */}
            <div
              style={{
                position: "absolute",
                width: isWidescreen ? "350px" : "280px",
                height: isWidescreen ? "350px" : "280px",
                borderRadius: "50%",
                backgroundColor: THEME.accentRed,
                zIndex: -1,
                top: 50,
                left: 20,
              }}
            />
            <Img
              src={staticFile("tech_founder_1.png")}
              style={{
                height: isWidescreen ? "450px" : "350px",
                objectFit: "contain",
              }}
              alt="Bezos-like figure"
            />
            {/* Quote Bubble */}
            <div
              style={{
                position: "absolute",
                top: -50,
                right: -80,
                background: THEME.white,
                border: `3px solid ${THEME.textDark}`,
                borderRadius: "15px",
                padding: "15px 25px",
                fontFamily: "Arial, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                transform: `scale(${quote1Scale})`,
                boxShadow: "5px 5px 0px rgba(0,0,0,0.15)",
              }}
            >
              "Industrial Bubble"
            </div>
          </div>

          {/* Founder 2 (Right) */}
          <div
            style={{
              position: "relative",
              transform: `translateY(${(1 - rightFounderY) * 600}px)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: isWidescreen ? "350px" : "280px",
                height: isWidescreen ? "350px" : "280px",
                borderRadius: "50%",
                backgroundColor: THEME.accentBlue,
                zIndex: -1,
                top: 50,
                left: 20,
              }}
            />
            <Img
              src={staticFile("tech_founder_2.png")}
              style={{
                height: isWidescreen ? "450px" : "350px",
                objectFit: "contain",
              }}
              alt="Gates-like figure"
            />
            <div
              style={{
                position: "absolute",
                top: -50,
                left: -80,
                background: THEME.white,
                border: `3px solid ${THEME.textDark}`,
                borderRadius: "15px",
                padding: "15px 25px",
                fontFamily: "Arial, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                transform: `scale(${quote2Scale})`,
                boxShadow: "-5px 5px 0px rgba(0,0,0,0.15)",
              }}
            >
              "Financial Bubble"
            </div>
          </div>
        </div>
      ) : (
        // The three boxes animation (Large, Medium, Small models comparison)
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "50px",
            width: "100%",
            height: "400px",
          }}
        >
          {["CHEAP", "BALANCED", "PRO"].map((tier, idx) => {
            const delay = 350 + idx * 10;
            const boxScale = spring({ frame: frame - delay, fps: 30 });
            return (
              <div
                key={tier}
                style={{
                  background:
                    idx === 1
                      ? THEME.accentRed
                      : idx === 2
                        ? THEME.accentBlue
                        : THEME.white,
                  color: idx === 0 ? THEME.textDark : THEME.white,
                  border: `4px solid ${THEME.textDark}`,
                  borderRadius: "20px",
                  width: isWidescreen ? "260px" : "200px",
                  height: `${180 + idx * 80}px`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "30px 10px",
                  transform: `scale(${boxScale})`,
                  boxShadow: "10px 10px 0px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Impact, sans-serif",
                    fontSize: "36px",
                  }}
                >
                  {tier}
                </div>
                <div
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  {idx === 0 ? "$0.00" : idx === 1 ? "$20.00" : "$80.00"}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ── SCENE 2: Giga Compute Costs (24.9s - 61.3s)
const Scene2ComputeCosts: React.FC<{
  frame: number;
  isWidescreen: boolean;
}> = ({ frame, isWidescreen }) => {

  // Component enters
  const gigaScale = spring({ frame, fps: 30 });
  const meterVal = interpolate(frame, [150, 450], [10, 100], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: isWidescreen ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "100px 50px 250px 50px",
      }}
    >
      {/* GPU Graphic Side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          scale: `${gigaScale}`,
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          {/* Pulsing halo */}
          <div
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              backgroundColor: "rgba(211, 47, 47, 0.2)",
              scale: `${1.1 + Math.sin(frame * 0.1) * 0.05}`,
              zIndex: -1,
              top: -20,
              left: -20,
            }}
          />
          <Img
            src={staticFile("gpu_core.png")}
            style={{
              width: isWidescreen ? "340px" : "280px",
              height: isWidescreen ? "340px" : "280px",
              objectFit: "contain",
            }}
            alt="GPU Core"
          />
        </div>
        <h2
          style={{
            fontFamily: "Impact, sans-serif",
            fontSize: "64px",
            color: THEME.textDark,
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          GPU POWER HOUSE
        </h2>
      </div>

      {/* Stats Meter Box */}
      <div
        style={{
          background: THEME.white,
          border: `5px solid ${THEME.textDark}`,
          borderRadius: "20px",
          width: isWidescreen ? "550px" : "90%",
          padding: "40px 30px",
          boxShadow: "15px 15px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "26px",
              color: THEME.textGray,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>POWER CONSUMPTION</span>
            <span style={{ color: THEME.accentRed }}>{meterVal.toFixed(0)}%</span>
          </div>
          {/* Progress bar container */}
          <div
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#e0e0e0",
              borderRadius: "15px",
              marginTop: "10px",
              overflow: "hidden",
              border: `2px solid ${THEME.textDark}`,
            }}
          >
            <div
              style={{
                width: `${meterVal}%`,
                height: "100%",
                backgroundColor: THEME.accentRed,
              }}
            />
          </div>
        </div>

        {/* Dynamic labels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontFamily: "Impact, sans-serif",
            fontSize: "36px",
            color: THEME.textDark,
          }}
        >
          <div style={{ opacity: frame > 100 ? 1 : 0.1 }}>
            💸 STUPID AMOUNT OF CASH
          </div>
          <div style={{ opacity: frame > 250 ? 1 : 0.1 }}>
            ⚡ CITY-SIZE ELECTRICITY
          </div>
          <div style={{ opacity: frame > 400 ? 1 : 0.1 }}>
            🛑 GENUINELY EXPENSIVE
          </div>
        </div>
      </div>
    </div>
  );
};

// ── SCENE 3: The Psychology of Anchoring (61.3s - 127.9s)
const Scene3Anchoring: React.FC<{ frame: number; isWidescreen: boolean }> = ({ frame, isWidescreen }) => {

  // Slide timelines offsets
  const leftMenuX = spring({ frame, fps: 30, config: { damping: 14 } });
  const circleHighlighter = spring({ frame: frame - 150, fps: 30 });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: isWidescreen ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "100px 50px 250px 50px",
      }}
    >
      {/* Left Menu Board */}
      <div
        style={{
          background: THEME.white,
          border: `5px solid ${THEME.textDark}`,
          borderRadius: "20px",
          width: isWidescreen ? "500px" : "90%",
          padding: "40px",
          boxShadow: "15px 15px 0px rgba(0,0,0,0.15)",
          transform: `translateX(${(1 - leftMenuX) * -600}px)`,
          position: "relative",
        }}
      >
        {/* Highlighter circle overlay on the top item */}
        <div
          style={{
            position: "absolute",
            border: `6px solid ${THEME.accentRed}`,
            borderRadius: "50%",
            width: "440px",
            height: "90px",
            top: "135px",
            left: "25px",
            transform: `scale(${circleHighlighter})`,
            pointerEvents: "none",
            opacity: circleHighlighter,
          }}
        />

        <h2
          style={{
            fontFamily: "Impact, sans-serif",
            fontSize: "48px",
            textAlign: "center",
            borderBottom: `4px solid ${THEME.textDark}`,
            paddingBottom: "15px",
            marginBottom: "30px",
          }}
        >
          MENU ANCHORING
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>🥩 80$ STAKE (ANCHOR)</span>
            <span style={{ color: THEME.accentRed }}>OUTRAGEOUS</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "rgba(25, 118, 210, 0.15)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <span>🍝 30$ PASTA</span>
            <span style={{ color: THEME.accentBlue }}>BEST SELLER</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>🥗 15$ SALAD</span>
            <span>CHEAP</span>
          </div>
        </div>
      </div>

      {/* Right Anchoring explanation */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: isWidescreen ? "flex-start" : "center",
          justifyContent: "center",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            background: THEME.accentRed,
            color: THEME.white,
            padding: "15px 30px",
            fontSize: "36px",
            fontFamily: "Impact, sans-serif",
            transform: "rotate(-3deg)",
            boxShadow: "5px 5px 0px rgba(0,0,0,0.15)",
          }}
        >
          DECOY EFFECT
        </div>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "36px",
            fontWeight: "bold",
            color: THEME.textDark,
            marginTop: "30px",
            lineHeight: "1.4",
            textAlign: isWidescreen ? "left" : "center",
          }}
        >
          "The most expensive model exists only to make the middle option look
          balanced and smart."
        </p>
      </div>
    </div>
  );
};

// ── SCENE 4: The Storage Trap (127.9s - 190.8s)
const Scene4StorageTrap: React.FC<{ frame: number; isWidescreen: boolean }> = ({ frame, isWidescreen }) => {

  // Animations
  const phoneScale = spring({ frame, fps: 30 });
  const cashSlideY = spring({ frame: frame - 150, fps: 30 });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: isWidescreen ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "100px 50px 250px 50px",
      }}
    >
      {/* Phone Storage graphics */}
      <div
        style={{
          position: "relative",
          scale: `${phoneScale}`,
        }}
      >
        <Img
          src={staticFile("storage_phone.png")}
          style={{
            width: isWidescreen ? "350px" : "280px",
            height: isWidescreen ? "350px" : "280px",
            objectFit: "contain",
          }}
          alt="Storage Phone"
        />
        {/* Tiers labels floating next to the phone */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -60,
            background: THEME.accentBlue,
            color: THEME.white,
            borderRadius: "15px",
            padding: "10px 20px",
            fontSize: "24px",
            fontFamily: "Impact, sans-serif",
          }}
        >
          1 TB Storage
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: -60,
            background: THEME.accentRed,
            color: THEME.white,
            borderRadius: "15px",
            padding: "10px 20px",
            fontSize: "24px",
            fontFamily: "Impact, sans-serif",
          }}
        >
          64 GB Base
        </div>
      </div>

      {/* Cash stacks and calculations */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateY(${(1 - cashSlideY) * 400}px)`,
        }}
      >
        <Img
          src={staticFile("cash_stacks.png")}
          style={{
            width: isWidescreen ? "300px" : "220px",
            height: isWidescreen ? "300px" : "220px",
            objectFit: "contain",
          }}
          alt="Cash stacks"
        />
        <div
          style={{
            background: THEME.white,
            border: `4px solid ${THEME.textDark}`,
            borderRadius: "15px",
            padding: "20px 30px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "24px",
            boxShadow: "8px 8px 0px rgba(0,0,0,0.15)",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          🚨 PSYCHOLOGICAL VALUE GAP
        </div>
      </div>
    </div>
  );
};

// ── SCENE 5: Invisible Plumbing / Routing (190.8s - 229.6s)
const Scene5Routing: React.FC<{ frame: number; isWidescreen: boolean }> = ({ frame, isWidescreen }) => {

  // Animations
  const mapScale = spring({ frame, fps: 30 });
  const pulseRadar = interpolate(frame, [60, 200], [0.8, 1.3], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: isWidescreen ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "100px 50px 250px 50px",
      }}
    >
      {/* Globe side */}
      <div
        style={{
          position: "relative",
          scale: `${mapScale}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            border: `4px solid ${THEME.accentBlue}`,
            scale: `${pulseRadar}`,
            opacity: interpolate(frame, [60, 200], [1, 0]),
            top: 0,
            left: 0,
          }}
        />
        <Img
          src={staticFile("earth_globe.png")}
          style={{
            width: isWidescreen ? "350px" : "280px",
            height: isWidescreen ? "350px" : "280px",
            objectFit: "contain",
          }}
          alt="Earth Globe"
        />
      </div>

      {/* Plumbing visual routing board */}
      <div
        style={{
          background: THEME.white,
          border: `5px solid ${THEME.textDark}`,
          borderRadius: "20px",
          width: isWidescreen ? "550px" : "90%",
          padding: "45px 35px",
          boxShadow: "15px 15px 0px rgba(0,0,0,0.15)",
        }}
      >
        <h3
          style={{
            fontFamily: "Impact, sans-serif",
            fontSize: "44px",
            marginBottom: "25px",
            color: THEME.accentBlue,
          }}
        >
          EFFICIENT PLUMBING
        </h3>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            color: THEME.textDark,
            lineHeight: "1.5",
          }}
        >
          Route cheap, simple email requests to cheap models, and save expensive
          power for hard research.
        </p>

        {/* Dynamic diagram mapping lines */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "30px",
            fontFamily: "Impact, sans-serif",
            fontSize: "26px",
          }}
        >
          <div style={{ color: THEME.accentBlue }}>
            📧 Summarize Email ➔ HAIKU / MINI
          </div>
          <div style={{ color: THEME.accentRed }}>
            🔬 Code Synthesis ➔ OPUS / PRO
          </div>
        </div>
      </div>
    </div>
  );
};

// ── SCENE 6: Conclusion (229.6s - 263.6s)
const Scene6Conclusion: React.FC<{ frame: number; isWidescreen: boolean }> = ({ frame, isWidescreen }) => {

  // Animations
  const finalReveal = spring({ frame, fps: 30 });
  const quoteScale = spring({ frame: frame - 150, fps: 30 });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "100px 50px 250px 50px",
      }}
    >
      {/* Top Title */}
      <h1
        style={{
          fontFamily: "Impact, sans-serif",
          fontSize: isWidescreen ? "120px" : "80px",
          color: THEME.textDark,
          textTransform: "uppercase",
          letterSpacing: "1px",
          textAlign: "center",
          scale: `${finalReveal}`,
        }}
      >
        WHO REALLY DECIDED?
      </h1>

      {/* Silhouette and conclusion text */}
      <div
        style={{
          display: "flex",
          flexDirection: isWidescreen ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          width: "100%",
        }}
      >
        <Img
          src={staticFile("thinking_silhouette.png")}
          style={{
            height: isWidescreen ? "350px" : "280px",
            objectFit: "contain",
            transform: `scale(${1 + Math.sin(frame * 0.05) * 0.03})`,
          }}
          alt="Thinking Silhouette"
        />

        <div
          style={{
            background: THEME.white,
            border: `5px solid ${THEME.textDark}`,
            borderRadius: "20px",
            padding: "40px",
            maxWidth: "600px",
            boxShadow: "15px 15px 0px rgba(0,0,0,0.15)",
            scale: `${quoteScale}`,
          }}
        >
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "32px",
              fontWeight: "bold",
              color: THEME.textDark,
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            "Next time you pick between the Smart, the Fast, or the Pro model...
            it probably wasn't your choice."
          </p>
        </div>
      </div>
    </div>
  );
};

// ── MAIN COMPOSITION ENGINE

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isWidescreen = width > height;

  const currentSec = frame / 30;

  // Scene triggers based on subtitles timeline
  const scene1Duration = 24.92 * 30; // 0s - 24.92s
  const scene2Duration = (61.38 - 24.92) * 30; // 24.92s - 61.38s
  const scene3Duration = (127.96 - 61.38) * 30; // 61.38s - 127.96s
  const scene4Duration = (190.87 - 127.96) * 30; // 127.96s - 190.87s
  const scene5Duration = (229.66 - 190.87) * 30; // 190.87s - 229.66s

  // Determine current active scene and local frames
  let activeScene = <div />;
  if (currentSec < 24.92) {
    activeScene = (
      <Scene1ThreeTiers frame={frame} isWidescreen={isWidescreen} />
    );
  } else if (currentSec >= 24.92 && currentSec < 61.38) {
    activeScene = (
      <Scene2ComputeCosts
        frame={frame - scene1Duration}
        isWidescreen={isWidescreen}
      />
    );
  } else if (currentSec >= 61.38 && currentSec < 127.96) {
    activeScene = (
      <Scene3Anchoring
        frame={frame - (scene1Duration + scene2Duration)}
        isWidescreen={isWidescreen}
      />
    );
  } else if (currentSec >= 127.96 && currentSec < 190.87) {
    activeScene = (
      <Scene4StorageTrap
        frame={frame - (scene1Duration + scene2Duration + scene3Duration)}
        isWidescreen={isWidescreen}
      />
    );
  } else if (currentSec >= 190.87 && currentSec < 229.66) {
    activeScene = (
      <Scene5Routing
        frame={
          frame -
          (scene1Duration +
            scene2Duration +
            scene3Duration +
            scene4Duration)
        }
        isWidescreen={isWidescreen}
      />
    );
  } else {
    activeScene = (
      <Scene6Conclusion
        frame={
          frame -
          (scene1Duration +
            scene2Duration +
            scene3Duration +
            scene4Duration +
            scene5Duration)
        }
        isWidescreen={isWidescreen}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: THEME.bgWarm,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 1. Drift background texture */}
      <UniversalBackground />

      {/* 2. Render active scene */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        {activeScene}
      </div>

      {/* 3. Sync Dynamic Subtitles */}
      <DynamicSubtitles currentTime={currentSec} />

      {/* 4. Render main voiceover track */}
      <Audio src={staticFile("Ai Models.m4a")} />
    </div>
  );
};