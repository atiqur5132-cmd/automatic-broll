import React from "react";
import { useCurrentFrame } from "remotion";
import { displayFontFamily } from "../../fonts";

export const DynamicXiaomiEcosystem: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 1.2;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: displayFontFamily,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#FF6700", letterSpacing: "0.2em" }}>
          THE DECOUPLING INFRASTRUCTURE
        </div>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
          XIAOMI CONNECTED HARDWARE &amp; AI WORKHORSE NODES
        </div>
      </div>

      <div style={{ display: "flex", gap: 60, alignItems: "center", width: "100%" }}>
        {/* Left Node: Hardware Ecosystem */}
        <div
          style={{
            flex: 1,
            background: "rgba(255, 103, 0, 0.12)",
            border: "3px solid #FF6700",
            borderRadius: 36,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              border: "2px dashed rgba(255,103,0,0.4)",
              borderRadius: "50%",
              transform: `rotate(${rotation}deg)`,
            }}
          />
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 28,
              background: "#FF6700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
              fontWeight: 900,
              color: "#FFF",
              zIndex: 2,
              boxShadow: "0 0 40px #FF6700",
            }}
          >
            mi
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#FFF", marginTop: 24, zIndex: 2 }}>
            MILLIONS OF HARDWARE NODES
          </div>
          <div style={{ fontSize: 24, color: "#FF6700", fontWeight: 700, marginTop: 10, zIndex: 2 }}>
            Smartphones • Electric Vehicles • IoT Devices
          </div>
        </div>

        {/* Center Animated Pipeline Arrow */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.1em" }}>
            24/7 INFERENCE STREAM
          </div>
          <div style={{ fontSize: 48, color: "#00F0FF", fontWeight: 900 }}>►►►</div>
        </div>

        {/* Right Node: Production AI Workhorse Cluster */}
        <div
          style={{
            flex: 1,
            background: "rgba(0, 240, 255, 0.12)",
            border: "3px solid #00F0FF",
            borderRadius: 36,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 28,
              background: "#00F0FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 900,
              color: "#0B0C10",
              boxShadow: "0 0 40px #00F0FF",
            }}
          >
            2.4B
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#FFF", marginTop: 24 }}>
            HIGH-THROUGHPUT ENGINE
          </div>
          <div style={{ fontSize: 24, color: "#00F0FF", fontWeight: 700, marginTop: 10 }}>
            Automated Coding • Routine Engineering
          </div>
        </div>
      </div>
    </div>
  );
};
