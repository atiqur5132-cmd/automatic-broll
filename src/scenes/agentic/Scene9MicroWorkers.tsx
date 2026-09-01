import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";

export const Scene9MicroWorkers: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });
  const terminalSpring = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 110 } });

  const testPassed = frame > 180;

  return (
    <KaiCanvas activeAccent="#38BDF8">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          width: "1350px",
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
          <span>🔄</span> AUTONOMOUS FEEDBACK LOOPS
        </div>

        <h2
          style={{
            fontSize: "54px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            transform: `scale(${titleSpring})`,
          }}
        >
          Self-Healing <span style={{ color: "#38BDF8" }}>Long-Horizon Execution</span>
        </h2>

        {/* 2.5D Split-Screen Sandbox */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            width: "100%",
            perspective: "1200px",
          }}
        >
          {/* Left: Coder Sandbox */}
          <div
            style={{
              flex: 1,
              transform: `scale(${terminalSpring}) rotateY(4deg)`,
              background: "rgba(16, 19, 26, 0.95)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
            }}
          >
            <div style={{ color: "#38BDF8", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 800, marginBottom: "12px" }}>
              ⚡ CODER AGENT • SANDBOX RUNTIME
            </div>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#E4E4E7", margin: 0, lineHeight: 1.5 }}>
              <code>{`# Fixing Index Out Of Range Error:
def process_embeddings(chunks):
    if not chunks:
        return []
    return [embed_model.encode(c) for c in chunks]`}</code>
            </pre>
          </div>

          {/* Right: Critic Test Terminal */}
          <div
            style={{
              flex: 1,
              transform: `scale(${terminalSpring}) rotateY(-4deg)`,
              background: "rgba(16, 19, 26, 0.95)",
              border: `1px solid ${testPassed ? "#4ADE80" : "#FF2A55"}`,
              borderRadius: "18px",
              padding: "24px",
              boxShadow: `0 15px 40px rgba(0,0,0,0.7), 0 0 30px ${testPassed ? "#4ADE8025" : "#FF2A5525"}`,
            }}
          >
            <div style={{ color: testPassed ? "#4ADE80" : "#FF2A55", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 800, marginBottom: "12px" }}>
              🛡️ CRITIC AGENT • TEST HARNESS
            </div>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: testPassed ? "#4ADE80" : "#FF2A55", margin: 0, lineHeight: 1.5 }}>
              <code>{testPassed ? `>>> pytest -v tests/test_rag.py
tests/test_rag.py::test_empty_chunks PASSED [100%]
tests/test_rag.py::test_vector_dim PASSED   [100%]
================= 14 PASSED in 1.42s =================` : `>>> pytest -v tests/test_rag.py
FAILED: IndexError: list index out of range
>>> Routing error log back to Coder Agent...`}</code>
            </pre>
          </div>
        </div>

        {/* Progress Horizon Strip */}
        <div
          style={{
            background: "rgba(18, 20, 26, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
            padding: "12px 28px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            color: "#A1A1AA",
          }}
        >
          <span style={{ color: "#FFD600", fontWeight: 800 }}>AUTONOMOUS BUDGET:</span>
          <span style={{ color: "#FFFFFF", fontWeight: 900 }}>8-HOUR LONG-HORIZON RUNTIME</span>
          <span style={{ color: "#4ADE80" }}>[ 0 HUMAN INTERRUPTS ]</span>
        </div>
      </div>
    </KaiCanvas>
  );
};
