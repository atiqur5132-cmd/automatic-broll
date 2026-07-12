import React from "react";
import { Sequence, useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";
import transcriptData from "../../../public/gemini_transcript.json";
import { DynamicLeaderboardChart } from "../dynamic/DynamicLeaderboardChart";
import { DynamicScatterPlot } from "../dynamic/DynamicScatterPlot";
import { DynamicXiaomiEcosystem } from "../dynamic/DynamicXiaomiEcosystem";
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
        background: "radial-gradient(circle at center, #151822 0%, #0B0C10 100%)",
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

// Part 1: Exact Audio-Synced Dynamic Graphical Cuts (0.00s -> 76.00s | items 0 -> 24)
export const DocumentaryPart1: React.FC = () => {
  const cut1 = getFrameRange(0, 0);   // 0.00s -> 4.85s
  const cut2 = getFrameRange(1, 2);   // 4.85s -> 10.00s
  const cut3 = getFrameRange(3, 4);   // 10.00s -> 18.60s
  const cut4 = getFrameRange(5, 6);   // 18.60s -> 22.00s
  const cut5 = getFrameRange(7, 10);  // 22.00s -> 31.00s
  const cut6 = getFrameRange(11, 13); // 31.00s -> 43.00s
  const cut7 = getFrameRange(14, 17); // 43.00s -> 56.00s
  const cut8 = getFrameRange(18, 24); // 56.00s -> 76.00s

  return (
    <>
      {/* Cut 1: Global Marketplace Scale Intro */}
      <Sequence from={cut1.from} durationInFrames={cut1.durationInFrames}>
        <SubScene accentColor="#00F0FF">
          <div style={{ fontSize: 28, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.2em" }}>
            GLOBAL AI MARKETPLACE ADOPTION
          </div>
          <div style={{ fontSize: 68, fontWeight: 900, marginTop: 24, textAlign: "center" }}>
            THE SINGLE MOST USED AI MODEL IN REAL PRODUCTION
          </div>
        </SubScene>
      </Sequence>

      {/* Cut 2: #1 World Usage Leaderboard Bar Chart */}
      <Sequence from={cut2.from} durationInFrames={cut2.durationInFrames}>
        <SubScene accentColor="#10B981">
          <DynamicLeaderboardChart
            title="GLOBAL ENTERPRISE USAGE LEADERBOARD"
            subtitle="RAW TRAFFIC VOLUME (WEEKLY)"
            items={[
              { name: "Xiaomi AI Workhorse", tokensPerWeek: 2.4, rank: 1, isHero: true },
              { name: "Everyday Cloud Competitor A", tokensPerWeek: 1.6, rank: 2 },
              { name: "Everyday Cloud Competitor B", tokensPerWeek: 1.1, rank: 3 },
            ]}
          />
        </SubScene>
      </Sequence>

      {/* Cut 3: PhD Reasoning Benchmark Testing Criteria */}
      <Sequence from={cut3.from} durationInFrames={cut3.durationInFrames}>
        <SubScene accentColor="#FFD700">
          <div style={{ fontSize: 32, color: "#FFD700", fontWeight: 800 }}>ACADEMIC TESTING CRITERIA</div>
          <div style={{ fontSize: 64, fontWeight: 900, marginTop: 20, textAlign: "center" }}>
            DEEP REASONING &amp; PhD-LEVEL MATH BENCHMARKS
          </div>
        </SubScene>
      </Sequence>

      {/* Cut 4: #10 Benchmark Rank Alert */}
      <Sequence from={cut4.from} durationInFrames={cut4.durationInFrames}>
        <SubScene accentColor="#FF5A5F">
          <DynamicLeaderboardChart
            title="ACADEMIC REASONING BENCHMARK RANKINGS"
            subtitle="PhD &amp; OLYMPIAD MATH LEADERBOARD"
            items={[
              { name: "Frontier Reasoning Lab X", tokensPerWeek: 98, rank: 1 },
              { name: "Frontier Reasoning Lab Y", tokensPerWeek: 95, rank: 2 },
              { name: "Xiaomi AI Model", tokensPerWeek: 72, rank: 10, isHero: true },
            ]}
          />
        </SubScene>
      </Sequence>

      {/* Cut 5: Side-by-Side Paradox Comparison (#1 Usage vs #10 Benchmark) */}
      <Sequence from={cut5.from} durationInFrames={cut5.durationInFrames}>
        <SubScene accentColor="#00F0FF">
          <DynamicDualMonoliths
            leftTitle="ACTUAL USAGE RANK"
            leftHero="#1"
            leftSubtitle="2.4B TOKENS / WEEK"
            leftColor="#10B981"
            rightTitle="REASONING BENCHMARK"
            rightHero="#10"
            rightSubtitle="OUTSIDE GLOBAL TOP TIER"
            rightColor="#FF5A5F"
          />
        </SubScene>
      </Sequence>

      {/* Cut 6: Xiaomi Ecosystem & Server Node Diagram */}
      <Sequence from={cut6.from} durationInFrames={cut6.durationInFrames}>
        <SubScene accentColor="#FF6700">
          <DynamicXiaomiEcosystem />
        </SubScene>
      </Sequence>

      {/* Cut 7: Ranking 1 vs Ranking 2 Divergence */}
      <Sequence from={cut7.from} durationInFrames={cut7.durationInFrames}>
        <SubScene accentColor="#FFD700">
          <DynamicDualMonoliths
            leftTitle="RANKING 1: INTELLIGENCE"
            leftHero="IQ"
            leftSubtitle="HOW SMART ON HARD TESTS"
            leftColor="#00F0FF"
            rightTitle="RANKING 2: ADOPTION"
            rightHero="SCALE"
            rightSubtitle="ACTUAL PRODUCTION VOLUME"
            rightColor="#10B981"
            centerBadge="≠"
          />
        </SubScene>
      </Sequence>

      {/* Cut 8: Animated Inverse Correlation Scatter Plot */}
      <Sequence from={cut8.from} durationInFrames={cut8.durationInFrames}>
        <SubScene accentColor="#FF5A5F">
          <DynamicScatterPlot />
        </SubScene>
      </Sequence>
    </>
  );
};
