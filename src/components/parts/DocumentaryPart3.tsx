import React from "react";
import { Sequence, useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";
import transcriptData from "../../../public/gemini_transcript.json";
import { DynamicDualMonoliths } from "../dynamic/DynamicDualMonoliths";

const items = transcriptData.transcription;

const getFrameRange = (startIdx: number, endIdx: number) => {
  const fromFrame = Math.round((items[startIdx].offsets.from / 1000) * 30);
  const toFrame = Math.round((items[endIdx].offsets.to / 1000) * 30);
  return { from: fromFrame, durationInFrames: Math.max(1, toFrame - fromFrame) };
};

const SubScene: React.FC<{ children: React.ReactNode; accentColor?: string }> = ({
  children,
  accentColor = "#00F0FF",
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 150], [0.98, 1.02], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #191622 0%, #0B0C10 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${accentColor}22 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );
};

// Part 3: Exact Audio-Synced Dynamic Graphical Cuts (134.00s -> 217.04s | items 43 -> 70)
export const DocumentaryPart3: React.FC = () => {
  const cut1 = getFrameRange(43, 48); // 134.00s -> 154.00s (Frontier Surgical vs High Volume)
  const cut2 = getFrameRange(49, 53); // 154.00s -> 166.00s (Not rejected, saved for high stakes)
  const cut3 = getFrameRange(54, 57); // 166.00s -> 178.00s (Intelligence & Adoption Decoupling)
  const cut4 = getFrameRange(58, 63); // 178.00s -> 195.00s (Two Divergent Leaderboards)
  const cut5 = getFrameRange(64, 70); // 195.00s -> 217.04s (Strategic Future & Outro)

  return (
    <>
      {/* Cut 1: Frontier Precision vs Daily Workhorse Comparison */}
      <Sequence from={cut1.from} durationInFrames={cut1.durationInFrames}>
        <SubScene accentColor="#00F0FF">
          <DynamicDualMonoliths
            leftTitle="FRONTIER MODELS"
            leftHero="IQ"
            leftSubtitle="HIGH STAKES SURGICAL DEBUGGING"
            leftColor="#00F0FF"
            rightTitle="EVERYDAY WORKHORSES"
            rightHero="SCALE"
            rightSubtitle="99% OF ROUTINE CODING WORKLOADS"
            rightColor="#FFB800"
          />
        </SubScene>
      </Sequence>

      {/* Cut 2: Saved for Moments vs Constant Run */}
      <Sequence from={cut2.from} durationInFrames={cut2.durationInFrames}>
        <SubScene accentColor="#FFD700">
          <div style={{ fontSize: 32, color: "#FFD700", fontWeight: 800 }}>RESOURCE ALLOCATION</div>
          <div style={{ fontSize: 64, fontWeight: 900, marginTop: 24, textAlign: "center" }}>
            SAVED FOR COMPLEX CRISES — WORKHORSES RUN 24/7
          </div>
        </SubScene>
      </Sequence>

      {/* Cut 3: Intelligence & Adoption Decoupling */}
      <Sequence from={cut3.from} durationInFrames={cut3.durationInFrames}>
        <SubScene accentColor="#FF5A5F">
          <div style={{ fontSize: 32, color: "#FF5A5F", fontWeight: 800 }}>THE REAL SHIFT</div>
          <div style={{ fontSize: 76, fontWeight: 900, marginTop: 24, textAlign: "center" }}>
            INTELLIGENCE AND ADOPTION ARE DECOUPLING
          </div>
        </SubScene>
      </Sequence>

      {/* Cut 4: Two Divergent Leaderboards */}
      <Sequence from={cut4.from} durationInFrames={cut4.durationInFrames}>
        <SubScene accentColor="#10B981">
          <DynamicDualMonoliths
            leftTitle="BENCHMARK LEADERBOARD"
            leftHero="CAPABILITY"
            leftSubtitle="WHAT IS THE SMARTEST MODEL?"
            leftColor="#00F0FF"
            rightTitle="USAGE LEADERBOARD"
            rightHero="ADOPTION"
            rightSubtitle="WHAT DO PEOPLE TRUST EVERY DAY?"
            rightColor="#10B981"
          />
        </SubScene>
      </Sequence>

      {/* Cut 5: Strategic Future Horizon & Call to Action */}
      <Sequence from={cut5.from} durationInFrames={cut5.durationInFrames}>
        <SubScene accentColor="#00F0FF">
          <div style={{ fontSize: 28, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.2em" }}>
            THE FUTURE OF AI STRATEGY
          </div>
          <div style={{ fontSize: 60, fontWeight: 900, margin: "30px 0", lineHeight: 1.2, textAlign: "center" }}>
            WINNERS WILL OPERATE AT MASSIVE PRODUCTION SCALE
          </div>
          <div style={{ fontSize: 36, color: "#FFD700", marginTop: 20, fontWeight: 800 }}>
            LET ME KNOW YOUR THOUGHTS IN THE COMMENTS BELOW
          </div>
        </SubScene>
      </Sequence>
    </>
  );
};
