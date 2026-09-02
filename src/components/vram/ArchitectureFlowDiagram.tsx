import React from "react";
import { RivetCard } from "./RivetCard";
import { useCurrentFrame } from "remotion";

export const ArchitectureFlowDiagram: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowFlow1 = (frame * 5) % 180;
  const arrowFlow2 = (frame * 4) % 180;

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 60 }}>
      
      {/* Node 1: Main Core */}
      <div style={{ position: "relative" }}>
        <RivetCard
          title="CORE ARCHITECTURE"
          subTitle="ACTIVATION STREAM"
          borderColor="#0088FF"
          bannerText="70B TERNARY CORE"
          bannerRightText="INT8 / INT2"
          bannerBgColor="#0088FF"
          width={400}
          anchorPins="right"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "10px 0" }}>
            <div style={{ fontSize: "12px", color: "#64748B" }}>INCOMING ACTIVATIONS</div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#38BDF8" }}>
              X ∈ ℝ^(B × S × D)
            </div>
            <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>
              RMSNorm Quantization → 8-Bit Ints
            </div>
          </div>
        </RivetCard>

        {/* Animated Connection Arrow Lines */}
        <svg
          style={{
            position: "absolute",
            top: 40,
            left: 400,
            width: 70,
            height: 180,
            overflow: "visible",
            pointerEvents: "none",
          }}
        >
          {/* Branch Upper */}
          <path
            d="M 0 50 C 35 50, 35 15, 60 15"
            fill="none"
            stroke="#FFC72C"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx={arrowFlow1 < 60 ? arrowFlow1 : 60} cy={arrowFlow1 < 60 ? 50 - (arrowFlow1 / 60) * 35 : 15} r="3" fill="#FFC72C" />

          {/* Branch Lower */}
          <path
            d="M 0 85 C 35 85, 35 120, 60 120"
            fill="none"
            stroke="#0088FF"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx={arrowFlow2 < 60 ? arrowFlow2 : 60} cy={arrowFlow2 < 60 ? 85 + (arrowFlow2 / 60) * 35 : 120} r="3" fill="#0088FF" />
        </svg>
      </div>

      {/* Node 2 & 3: Branch Units */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Branch 1: Addition Matrix */}
        <RivetCard
          title="COMPUTATION UNIT"
          subTitle="ZERO MULTIPLIER"
          borderColor="#FFC72C"
          bannerText="PURE ADD ACCUMULATOR"
          bannerRightText="1-CYCLE"
          bannerBgColor="#FFC72C"
          width={420}
          anchorPins="left"
        >
          <div style={{ fontSize: "12px", color: "#64748B" }}>Ternary Weight Multiplication</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFC72C", marginTop: 6 }}>
            Y = SignFlipOrAdd(X, W_ternary)
          </div>
        </RivetCard>

        {/* Branch 2: Unified Output */}
        <RivetCard
          title="DECODING HEAD"
          subTitle="SPECULATIVE PIPELINE"
          borderColor="#0088FF"
          bannerText="MULTI-TOKEN GENERATION"
          bannerRightText="80+ TOK/S"
          bannerBgColor="#0088FF"
          width={420}
          anchorPins="left"
        >
          <div style={{ fontSize: "12px", color: "#64748B" }}>Memory Bandwidth Pressure</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#10B981", marginTop: 6 }}>
            14.2 GB VRAM Footprint (90% Drop)
          </div>
        </RivetCard>

      </div>
    </div>
  );
};
