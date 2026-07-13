import React from "react";
import { Sequence, useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";
const transcriptData = { transcription: [] as any[] };
import { DynamicIDETerminal } from "../dynamic/DynamicIDETerminal";
import { DynamicSpeedometerDashboard } from "../dynamic/DynamicSpeedometerDashboard";

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
        background: "radial-gradient(circle at center, #181E2A 0%, #0B0C10 100%)",
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

// Part 2: Exact Audio-Synced Dynamic Graphical Cuts (76.00s -> 134.00s | items 25 -> 42)
export const DocumentaryPart2: React.FC = () => {
  const cut1 = getFrameRange(25, 26); // 76.00s -> 82.00s
  const cut2 = getFrameRange(27, 28); // 82.00s -> 89.00s
  const cut3 = getFrameRange(29, 34); // 89.00s -> 109.00s (IDE Cybernetic Window + Donut Chart)
  const cut4 = getFrameRange(35, 38); // 109.00s -> 120.00s (Fast / Cheap / Good Enough Dashboard)
  const cut5 = getFrameRange(39, 42); // 120.00s -> 134.00s (Xiaomi Strategic High-Volume Lane)

  return (
    <>
      {/* Cut 1: Why Would That Happen? */}
      <Sequence from={cut1.from} durationInFrames={cut1.durationInFrames}>
        <SubScene accentColor="#FFD700">
          <div style={{ fontSize: 32, color: "#FFD700", fontWeight: 800 }}>THE PARADIGM SHIFT</div>
          <div style={{ fontSize: 72, fontWeight: 900, marginTop: 20 }}>
            WHY WOULD HIGHER BENCHMARK ≠ HIGHER USAGE?
          </div>
        </SubScene>
      </Sequence>

      {/* Cut 2: Past Era Scattered AI */}
      <Sequence from={cut2.from} durationInFrames={cut2.durationInFrames}>
        <SubScene accentColor="#FF5A5F">
          <div style={{ fontSize: 28, fontWeight: 800, color: "#FF5A5F" }}>THE PREVIOUS ERA</div>
          <div style={{ fontSize: 64, fontWeight: 900, marginTop: 20 }}>
            SCATTERED CHAT • WRITING • ESSAYS
          </div>
        </SubScene>
      </Sequence>

      {/* Cut 3: Realistic Cybernetic IDE Terminal + Animated Donut Chart */}
      <Sequence from={cut3.from} durationInFrames={cut3.durationInFrames}>
        <SubScene accentColor="#00F0FF">
          <DynamicIDETerminal />
        </SubScene>
      </Sequence>

      {/* Cut 4: Animated Speedometer HUD Dashboard (Fast • Cheap • Good Enough) */}
      <Sequence from={cut4.from} durationInFrames={cut4.durationInFrames}>
        <SubScene accentColor="#10B981">
          <DynamicSpeedometerDashboard />
        </SubScene>
      </Sequence>

      {/* Cut 5: Xiaomi Strategic High Volume Lane */}
      <Sequence from={cut5.from} durationInFrames={cut5.durationInFrames}>
        <SubScene accentColor="#FF6700">
          <div style={{ fontSize: 32, color: "#FF6700", fontWeight: 800 }}>XIAOMI STRATEGIC FOCUS</div>
          <div style={{ fontSize: 68, fontWeight: 900, marginTop: 20, textAlign: "center" }}>
            OPTIMIZED HARD FOR HIGH-VOLUME CONTINUOUS CODING
          </div>
        </SubScene>
      </Sequence>
    </>
  );
};
