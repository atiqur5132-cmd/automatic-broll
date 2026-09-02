import React from "react";
import { RivetCard } from "./RivetCard";
import { interpolate, useCurrentFrame } from "remotion";

export const HardwareComparisonBench: React.FC = () => {
  const frame = useCurrentFrame();

  const tokenCounter = Math.min(82.4, Math.floor(interpolate(frame % 90, [0, 60], [0, 82.4])));

  return (
    <div style={{ display: "flex", gap: 30, alignItems: "center", justifyContent: "center" }}>
      
      {/* Left Machine: High-End Discrete GPU */}
      <RivetCard
        title="DISCRETE GRAPHICS RIG"
        subTitle="NVIDIA RTX 4090 (24GB VRAM)"
        borderColor="#F43F5E"
        bannerText="STATUS: CUDA OUT OF MEMORY"
        bannerRightText="$2,000+ HARDWARE"
        bannerBgColor="#F43F5E"
        width={480}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: "12px", color: "#64748B", letterSpacing: "0.12em" }}>TARGET: 70B REASONING MODEL</div>
          
          <div
            style={{
              backgroundColor: "rgba(244, 63, 94, 0.12)",
              border: "1px solid rgba(244, 63, 94, 0.4)",
              borderRadius: 6,
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#F43F5E" }}>CRITICAL ALLOCATION FAILURE</div>
            <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: "1.5" }}>
              torch.cuda.OutOfMemoryError: Tried to allocate 42.50 GiB (GPU 0 has 24.00 GiB total capacity).
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700 }}>
            <span style={{ color: "#94A3B8" }}>INFERENCE SPEED</span>
            <span style={{ color: "#F43F5E" }}>0.0 TOKENS/SEC</span>
          </div>
        </div>
      </RivetCard>

      {/* Right Machine: Low-Cost Consumer Hardware */}
      <RivetCard
        title="CONSUMER UNIFIED SILICON"
        subTitle="APPLE M-SERIES / CONSUMER CPU"
        borderColor="#10B981"
        bannerText="STATUS: RUNNING LOCALLY"
        bannerRightText="$499 HARDWARE"
        bannerBgColor="#10B981"
        width={520}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: "12px", color: "#64748B", letterSpacing: "0.12em" }}>TARGET: BITNET b1.58 70B MODEL</div>
          
          <div
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: 6,
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#10B981" }}>SUCCESSFUL UNIFIED MAPPING</div>
            <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: "1.5" }}>
              Memory Footprint: 14.2 GB Allocated. Zero GPU required. Pure integer addition engine active.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#94A3B8" }}>INFERENCE SPEED</span>
            <span style={{ fontSize: "24px", fontWeight: 800, color: "#FFC72C", textShadow: "0 0 15px rgba(255, 199, 44, 0.4)" }}>
              {tokenCounter} TOKENS/SEC
            </span>
          </div>
        </div>
      </RivetCard>

    </div>
  );
};
