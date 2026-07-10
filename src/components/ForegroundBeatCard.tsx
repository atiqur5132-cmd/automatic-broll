import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { ForegroundBeat } from "../data/privacyBeats";
import { AnimatedIcon } from "./AnimatedIcon";
import { VisualDiagram } from "./VisualDiagrams";
import { displayFontFamily, bodyFontFamily } from "../fonts";

export const ForegroundBeatCard: React.FC<{ beat: ForegroundBeat }> = ({ beat }) => {
  const frame = useCurrentFrame();

  // Entrance animations relative to start of beat
  const localFrame = Math.max(0, frame - beat.fromFrame);

  const containerOpacity = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleTranslateY = interpolate(localFrame, [0, 14], [25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const titleOpacity = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtextOpacity = interpolate(localFrame, [5, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Continuous subtle breathing motion on headline
  const titleFloat = Math.sin((frame + beat.id * 10) * 0.05) * 3;

  // Determine if this beat uses a specialized VisualDiagram
  const isSpecializedDiagram = [
    "toggle_default_on",
    "five_years_retention",
    "three_years_retention",
    "twenty_dollars_phone",
    "time_screen_glow",
    "return_to_1am",
    "pipeline_ingestion",
  ].includes(beat.visualType);

  return (
    <AbsoluteFill
      style={{
        opacity: containerOpacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "110px 140px 95px 140px",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Top Header Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 24px",
          borderRadius: 999,
          background: "rgba(255, 255, 255, 0.04)",
          border: `1px solid ${beat.accentColor}44`,
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: beat.accentColor,
            boxShadow: `0 0 12px ${beat.accentColor}`,
          }}
        />
        <span
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 15,
            fontWeight: 600,
            color: "#e2e8f0",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          BEAT #{beat.id} • AI PRIVACY INVESTIGATION
        </span>
      </div>

      {/* Main Visual Centerpiece (Full Edge-to-Edge Prominent Visual) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          width: "100%",
          padding: "20px 0",
        }}
      >
        {isSpecializedDiagram ? (
          <VisualDiagram visualType={beat.visualType} accentColor={beat.accentColor} />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            {beat.icons.map((iconName, idx) => (
              <AnimatedIcon
                key={`${beat.id}-${iconName}-${idx}`}
                name={iconName}
                size={96}
                color={beat.accentColor}
                delay={idx * 4}
                index={idx}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Cinematic Typography Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 1400,
          opacity: titleOpacity,
          translate: `0px ${titleTranslateY + titleFloat}px`,
        }}
      >
        {beat.headline && (
          <h1
            style={{
              fontFamily: displayFontFamily,
              fontSize: beat.headline.length > 25 ? 52 : 68,
              fontWeight: 900,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              textShadow: `0 10px 40px rgba(0, 0, 0, 0.7), 0 0 45px ${beat.accentColor}33`,
            }}
          >
            {beat.headline}
          </h1>
        )}

        {beat.subtext && (
          <p
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 26,
              fontWeight: 500,
              color: "#cbd5e1",
              margin: "18px 0 0 0",
              opacity: subtextOpacity,
              letterSpacing: 0.5,
              lineHeight: 1.3,
            }}
          >
            {beat.subtext}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};
