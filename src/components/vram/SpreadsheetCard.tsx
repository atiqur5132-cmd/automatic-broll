import React from "react";
import { RivetCard } from "./RivetCard";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ModelRow {
  model: string;
  quant: string;
  vram: string;
  ctx: string;
  highlight?: boolean;
  status?: "ok" | "oom";
}

interface SpreadsheetCardProps {
  activeRowIndex?: number;
  highlightedRow?: number;
}

const DEFAULT_MODELS: ModelRow[] = [
  { model: "QWEN3-30B-A3B", quant: "Q4_K_M", vram: "18.6 GB", ctx: "32K", highlight: true },
  { model: "LLAMA-3.3-70B", quant: "Q4_K_M", vram: "42.5 GB", ctx: "128K", status: "oom" },
  { model: "MISTRAL-SMALL-24B", quant: "Q5_K_M", vram: "17.1 GB", ctx: "32K" },
  { model: "GEMMA-3-27B", quant: "Q4_K_M", vram: "16.9 GB", ctx: "128K" },
  { model: "QWEN3-14B", quant: "Q6_K", vram: "12.2 GB", ctx: "40K" },
  { model: "BITNET-b1.58-70B", quant: "1.58-BIT", vram: "14.2 GB", ctx: "128K", highlight: true, status: "ok" },
];

export const SpreadsheetCard: React.FC<SpreadsheetCardProps> = ({
  highlightedRow = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, mass: 0.8, stiffness: 100 },
  });

  const cardScale = interpolate(entrance, [0, 1], [0.92, 1]);
  const cardOpacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${cardScale})`,
        opacity: cardOpacity,
      }}
    >
      <RivetCard
        title="LOCAL-MODELS.XLSX — SHEET 1 — WILL IT FIT"
        subTitle="CONSUMER 24GB VRAM LIMIT"
        borderColor="#0088FF"
        bannerText="WILL IT FIT ON MY CARD"
        bannerRightText="ONE GLANCE"
        bannerBgColor="#0088FF"
        width={980}
      >
        {/* Table Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.4fr 1.2fr 1.4fr 1fr",
            padding: "10px 18px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            color: "#64748B",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          <div>MODEL</div>
          <div>QUANT</div>
          <div>VRAM</div>
          <div>CTX</div>
        </div>

        {/* Table Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "6px" }}>
          {DEFAULT_MODELS.map((row, idx) => {
            const isTarget = idx === highlightedRow;
            const rowSpring = spring({
              frame: frame - idx * 4,
              fps,
              config: { damping: 14 },
            });
            const rowOpacity = interpolate(rowSpring, [0, 1], [0, 1]);

            return (
              <div
                key={row.model}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.4fr 1.2fr 1.4fr 1fr",
                  padding: "14px 18px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: row.status === "oom" ? "#F43F5E" : "#E2E8F0",
                  backgroundColor: isTarget
                    ? "rgba(0, 136, 255, 0.14)"
                    : idx % 2 === 0
                    ? "rgba(255, 255, 255, 0.02)"
                    : "transparent",
                  borderLeft: isTarget ? "3px solid #FFC72C" : "3px solid transparent",
                  opacity: rowOpacity,
                  alignItems: "center",
                  borderRadius: "4px",
                }}
              >
                <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>
                  {row.model}
                  {row.status === "oom" && (
                    <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: 4, backgroundColor: "rgba(244, 63, 94, 0.2)", color: "#F43F5E" }}>
                      OOM
                    </span>
                  )}
                  {row.status === "ok" && (
                    <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: 4, backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#10B981" }}>
                      FITS 16GB
                    </span>
                  )}
                </div>
                <div style={{ color: "#94A3B8" }}>{row.quant}</div>
                {/* VRAM highlighted in neon amber (Kai Explains visual staple) */}
                <div
                  style={{
                    color: row.highlight ? "#FFC72C" : row.status === "oom" ? "#F43F5E" : "#38BDF8",
                    fontWeight: 800,
                    textShadow: row.highlight ? "0 0 12px rgba(255, 199, 44, 0.4)" : "none",
                  }}
                >
                  {row.vram}
                </div>
                <div style={{ color: "#94A3B8" }}>{row.ctx}</div>
              </div>
            );
          })}
        </div>
      </RivetCard>
    </div>
  );
};
