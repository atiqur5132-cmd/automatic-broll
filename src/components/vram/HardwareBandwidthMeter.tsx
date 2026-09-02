import React from "react";
import { RivetCard } from "./RivetCard";
import { interpolate, useCurrentFrame } from "remotion";

export const HardwareBandwidthMeter: React.FC = () => {
  const frame = useCurrentFrame();

  // Particle flow animation across memory bus
  const particleOffset1 = (frame * 8) % 400;
  const particleOffset2 = (frame * 2) % 400;

  // Numerical counter for bandwidth reduction
  const bandwidthGb = interpolate(frame % 120, [0, 60, 120], [140, 14.2, 14.2], {
    extrapolateRight: "clamp",
  });

  return (
    <RivetCard
      title="MEMORY BUS ARCHITECTURE — 70B PARAMETER INFERENCE"
      subTitle="MEMORY BANDWIDTH BOTTLENECK ANALYSIS"
      borderColor="#0088FF"
      bannerText="MEMORY BUS PRESSURE DECREASED BY 89.8%"
      bannerRightText="BUS UNCHOKED"
      bannerBgColor="#0088FF"
      width={1040}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: "12px 0" }}>
        
        {/* Pipeline 1: Standard FP16 (Choking) */}
        <div
          style={{
            backgroundColor: "rgba(244, 63, 94, 0.06)",
            border: "1.5px solid rgba(244, 63, 94, 0.4)",
            borderRadius: 8,
            padding: "16px 20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "13px", fontWeight: 700 }}>
            <span style={{ color: "#F43F5E" }}>STANDARD FP16 (16 BITS / PARAMETER)</span>
            <span style={{ color: "#F43F5E" }}>140.0 GB BUS TRANSFER / TOKEN</span>
          </div>

          {/* Saturated Bus Bar */}
          <div
            style={{
              height: 28,
              backgroundColor: "#1E293B",
              borderRadius: 6,
              position: "relative",
              overflow: "hidden",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "98%",
                backgroundColor: "#F43F5E",
                opacity: 0.85,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.15em",
              }}
            >
              BUS SATURATED (98% CAPACITY) — CLOCK CYCLES IDLE
            </div>
            {/* Moving congestion indicator */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${particleOffset1}px`,
                width: 60,
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
          </div>
        </div>

        {/* Pipeline 2: BitNet b1.58 (Breezing) */}
        <div
          style={{
            backgroundColor: "rgba(16, 185, 129, 0.08)",
            border: "1.5px solid rgba(16, 185, 129, 0.5)",
            borderRadius: 8,
            padding: "16px 20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "13px", fontWeight: 700 }}>
            <span style={{ color: "#10B981" }}>BITNET b1.58 TERNARY (1.58 BITS / PARAMETER)</span>
            <span style={{ color: "#FFC72C", fontSize: "16px", fontWeight: 800 }}>
              {bandwidthGb.toFixed(1)} GB BUS TRANSFER / TOKEN
            </span>
          </div>

          {/* Efficient Bus Bar */}
          <div
            style={{
              height: 28,
              backgroundColor: "#1E293B",
              borderRadius: 6,
              position: "relative",
              overflow: "hidden",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "12%",
                backgroundColor: "#10B981",
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 800,
                color: "#08090C",
              }}
            >
              12%
            </div>
            {/* Smooth flow packet */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${particleOffset2}px`,
                width: 40,
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.8), transparent)",
              }}
            />
          </div>
        </div>

        {/* Bottom Hardware Spec Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          <div style={{ backgroundColor: "#0A0B0E", padding: "12px 16px", borderRadius: 6, border: "1px solid #1E293B" }}>
            <div style={{ fontSize: "11px", color: "#64748B" }}>70B FP16 SIZE</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#F43F5E", marginTop: 4 }}>140 GB</div>
          </div>

          <div style={{ backgroundColor: "#0A0B0E", padding: "12px 16px", borderRadius: 6, border: "1px solid #1E293B" }}>
            <div style={{ fontSize: "11px", color: "#64748B" }}>70B 1.58-BIT SIZE</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#10B981", marginTop: 4 }}>14.2 GB</div>
          </div>

          <div style={{ backgroundColor: "#0A0B0E", padding: "12px 16px", borderRadius: 6, border: "1px solid #1E293B" }}>
            <div style={{ fontSize: "11px", color: "#64748B" }}>TARGET HARDWARE</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#38BDF8", marginTop: 4 }}>UNIFIED 16GB / 32GB</div>
          </div>
        </div>

      </div>
    </RivetCard>
  );
};
