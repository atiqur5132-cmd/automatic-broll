import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";
import { KaiThreeTierFlow } from "../../components/kai/KaiThreeTierFlow";

export const Scene2ThreeTierShift: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });

  // Cycle through active tiers over the scene
  const activeTier = frame < 200 ? 1 : frame < 400 ? 2 : 3;

  return (
    <KaiCanvas activeAccent="#38BDF8">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(56, 189, 248, 0.1)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            borderRadius: "20px",
            padding: "8px 22px",
            color: "#38BDF8",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>📊</span> THE 3-LAYER STACK DECODED
        </div>

        <h2
          style={{
            fontSize: "58px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            transform: `scale(${titleSpring})`,
          }}
        >
          Three Fundamentally <span style={{ color: "#FACC15" }}>Different Machines</span>
        </h2>

        {/* 3-Tier Flowchart */}
        <KaiThreeTierFlow activeTier={activeTier} />
      </div>
    </KaiCanvas>
  );
};
