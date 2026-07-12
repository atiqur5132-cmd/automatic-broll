import React from "react";
import { useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";
import { BrandLogoSVG } from "./BrandLogosSVG";

export const DocumentaryLogoCard: React.FC<{
  name: string;
  logoUrl?: string;
  brandColor: string;
  subtitle?: string;
  scale?: number;
}> = ({ name, brandColor, subtitle, scale = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 105 },
  });

  const floatY = Math.sin(frame / 20) * 8;

  return (
    <div
      style={{
        transform: `scale(${enter * scale}) translateY(${(1 - enter) * 40 + floatY}px)`,
        opacity: enter,
        background: "rgba(18, 20, 28, 0.75)",
        backdropFilter: "blur(24px)",
        border: `1.5px solid ${brandColor}66`,
        borderRadius: "28px",
        padding: "36px 54px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        boxShadow: `0 30px 70px rgba(0,0,0,0.65), 0 0 60px ${brandColor}44`,
      }}
    >
      <div style={{ filter: `drop-shadow(0 0 18px ${brandColor})` }}>
        <BrandLogoSVG brand={name} size={90} color={brandColor} />
      </div>
      <div
        style={{
          color: "#FFFFFF",
          fontSize: 42,
          fontWeight: 800,
          letterSpacing: "-0.5px",
        }}
      >
        {name}
      </div>
      {subtitle && (
        <div
          style={{
            color: brandColor,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};

export const DocumentaryVSCard: React.FC<{
  leftName: string;
  leftLogo?: string;
  leftColor: string;
  leftTag: string;
  rightName: string;
  rightLogo?: string;
  rightColor: string;
  rightTag: string;
}> = ({
  leftName,
  leftColor,
  leftTag,
  rightName,
  rightColor,
  rightTag,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftEnter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const rightEnter = spring({
    frame: frame - 6,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "64px",
        width: "100%",
        maxWidth: 1400,
      }}
    >
      {/* Left Card */}
      <div
        style={{
          flex: 1,
          transform: `scale(${leftEnter}) translateX(${(1 - leftEnter) * -60}px)`,
          opacity: leftEnter,
          background: "rgba(16, 20, 28, 0.7)",
          backdropFilter: "blur(20px)",
          border: `1.5px solid ${leftColor}77`,
          borderRadius: "28px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 50px ${leftColor}33`,
        }}
      >
        <div style={{ filter: `drop-shadow(0 0 16px ${leftColor})` }}>
          <BrandLogoSVG brand={leftName} size={80} color={leftColor} />
        </div>
        <div style={{ fontSize: 38, fontWeight: 800, color: "#FFFFFF" }}>{leftName}</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: leftColor, textTransform: "uppercase" }}>{leftTag}</div>
      </div>

      {/* VS Badge */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 900,
          color: "#FFD700",
          background: "rgba(255, 215, 0, 0.15)",
          border: "2px solid #FFD700",
          borderRadius: "50%",
          width: 80,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
        }}
      >
        VS
      </div>

      {/* Right Card */}
      <div
        style={{
          flex: 1,
          transform: `scale(${rightEnter}) translateX(${(1 - rightEnter) * 60}px)`,
          opacity: rightEnter,
          background: "rgba(22, 18, 22, 0.7)",
          backdropFilter: "blur(20px)",
          border: `1.5px solid ${rightColor}77`,
          borderRadius: "28px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 50px ${rightColor}33`,
        }}
      >
        <div style={{ filter: `drop-shadow(0 0 16px ${rightColor})` }}>
          <BrandLogoSVG brand={rightName} size={80} color={rightColor} />
        </div>
        <div style={{ fontSize: 38, fontWeight: 800, color: "#FFFFFF" }}>{rightName}</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: rightColor, textTransform: "uppercase" }}>{rightTag}</div>
      </div>
    </div>
  );
};

export const Documentary3DDocument: React.FC<{
  header: string;
  bodyText: string;
  highlightText: string;
  date?: string;
  markerColor?: string;
}> = ({
  header,
  bodyText,
  highlightText,
  date = "CONFIDENTIAL DOSSIER • SAN FRANCISCO 2016",
  markerColor = "rgba(250, 204, 21, 0.55)",
}) => {
  const frame = useCurrentFrame();

  const highlightWidth = interpolate(frame, [15, 45], [0, 100], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        perspective: "1200px",
        width: "100%",
        maxWidth: 1050,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform: "rotateX(7deg) rotateY(-5deg)",
          background: "rgba(245, 243, 238, 0.95)",
          color: "#1A1B20",
          borderRadius: "16px",
          padding: "48px 60px",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 50px rgba(255,255,255,0.15)",
          border: "1px solid #D0CEC6",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#6D6E75",
            letterSpacing: "0.15em",
            borderBottom: "2px solid #E0DED6",
            paddingBottom: "12px",
          }}
        >
          {date}
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#111114",
            lineHeight: 1.2,
          }}
        >
          {header}
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#3A3B42",
            lineHeight: 1.5,
          }}
        >
          {bodyText}
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            alignSelf: "flex-start",
            marginTop: 8,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 4,
              height: "65%",
              width: `${highlightWidth}%`,
              backgroundColor: markerColor,
              borderRadius: "4px",
              zIndex: 0,
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: 34,
              fontWeight: 900,
              color: "#0F1014",
            }}
          >
            “{highlightText}”
          </span>
        </div>
      </div>
    </div>
  );
};

export const DocumentaryKineticQuote: React.FC<{
  quote: string;
  author: string;
  highlightWord?: string;
}> = ({ quote, author, highlightWord }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = quote.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1150,
        textAlign: "center",
        gap: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {words.map((word, idx) => {
          const enter = spring({
            frame: frame - idx * 2,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          const isHighlighted =
            highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());

          return (
            <span
              key={idx}
              style={{
                display: "inline-block",
                transform: `translateY(${(1 - enter) * 24}px)`,
                opacity: enter,
                fontSize: 52,
                fontWeight: 800,
                color: isHighlighted ? "#FFD700" : "#FFFFFF",
                textShadow: isHighlighted ? "0 0 25px rgba(255, 215, 0, 0.6)" : "none",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      <div
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#00F0FF",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        — {author}
      </div>
    </div>
  );
};

export const DocumentaryMultiLogoGrid: React.FC = () => {
  const logos = [
    { name: "OpenAI", color: "#10A37F" },
    { name: "Anthropic", color: "#D97757" },
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Meta", color: "#0668E1" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
        maxWidth: 1300,
      }}
    >
      {logos.map((l, idx) => (
        <DocumentaryLogoCard
          key={idx}
          name={l.name}
          brandColor={l.color}
          scale={0.85}
        />
      ))}
    </div>
  );
};
