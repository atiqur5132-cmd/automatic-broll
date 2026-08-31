import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { KineticTitle } from "../components/AnimatedTypography";
import { AppleLogo } from "../components/RealLogos";
import { Car, HardDrive, Gauge } from "lucide-react";

export const Scene5CarTrimStorage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isStoragePhase = frame >= 750;

  const carSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const storageSpring = spring({ frame: frame - 765, fps, config: { damping: 14 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={-12} panY={-8}>
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          {isStoragePhase ? <HardDrive size={20} color="#00F0FF" /> : <Car size={20} color="#FFD700" />}
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, color: isStoragePhase ? "#00F0FF" : "#FFD700" }}>
            {isStoragePhase ? "The Storage Margin Trap" : "The Car Trim Playbook"}
          </span>
        </div>

        {!isStoragePhase ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="THE CAR TRIM STRATEGY: NOBODY WANTS TO FEEL CHEAP"
              fontSize={42}
              accentColor="#FFD700"
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", maxWidth: "1200px", transform: `scale(${carSpring})` }}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "1px" }}>BASE MODEL</div>
                <div style={{ fontSize: "28px", fontWeight: 800 }}>Gets you from A to B</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                  • Cloth seats<br />
                  • Manual controls<br />
                  • No extra perks
                </div>
              </div>

              <div
                style={{
                  flex: 1.2,
                  background: "linear-gradient(180deg, rgba(255, 215, 0, 0.15) 0%, rgba(20, 18, 10, 0.95) 100%)",
                  border: "2px solid #FFD700",
                  borderRadius: "24px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  boxShadow: "0 20px 50px rgba(255, 215, 0, 0.25)",
                  transform: "translateY(-10px)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", fontWeight: 900, color: "#FFD700", letterSpacing: "1px" }}>MID TRIM (SWEET SPOT)</span>
                  <span style={{ background: "#FFD700", color: "#000", fontSize: "12px", fontWeight: 900, padding: "3px 10px", borderRadius: "10px" }}>
                    ★ WHAT YOU BUY
                  </span>
                </div>
                <div style={{ fontSize: "30px", fontWeight: 900, color: "#FFD700" }}>The Stuff You Actually Want</div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: "1.6" }}>
                  • Heated Leather Seats<br />
                  • Premium Sound System<br />
                  • Adaptive Cruise Control
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 75, 75, 0.08)",
                  border: "1px solid rgba(255, 75, 75, 0.25)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#FF4B4B", letterSpacing: "1px" }}>TOP TRIM</div>
                <div style={{ fontSize: "28px", fontWeight: 800 }}>90% Won't Touch</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                  • Nappa carbon trim<br />
                  • Track suspension<br />
                  • Exists to justify mid trim
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="THE STORAGE GAP: PAYING FOR PSYCHOLOGICAL PEACE OF MIND"
              fontSize={42}
              accentColor="#00F0FF"
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", maxWidth: "1200px", transform: `scale(${storageSpring})` }}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "16px", borderRadius: "50%" }}>
                  <AppleLogo size={36} color="rgba(255,255,255,0.6)" />
                </div>
                <div style={{ fontSize: "36px", fontWeight: 900 }}>64 GB</div>
                <div style={{ fontSize: "14px", color: "#FF4B4B", fontWeight: 700 }}>"JUST ENOUGH" (FEAR OF FULL)</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                  Manufactured anxiety pushes users to the next step.
                </div>
              </div>

              <div
                style={{
                  flex: 1.2,
                  background: "linear-gradient(180deg, rgba(0, 240, 255, 0.15) 0%, rgba(10, 18, 28, 0.95) 100%)",
                  border: "2px solid #00F0FF",
                  borderRadius: "24px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "0 20px 50px rgba(0, 240, 255, 0.25)",
                  transform: "translateY(-10px)",
                }}
              >
                <div style={{ background: "rgba(0, 240, 255, 0.15)", padding: "16px", borderRadius: "50%" }}>
                  <AppleLogo size={40} color="#00F0FF" />
                </div>
                <div style={{ fontSize: "42px", fontWeight: 900, color: "#00F0FF" }}>256 GB</div>
                <div style={{ fontSize: "15px", color: "#00F0FF", fontWeight: 900 }}>THE $150 MARKUP FOR $8 OF FLASH MEMORY</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", textAlign: "center" }}>
                  Hardware cost increase is negligible; the psychological premium is 90%+ profit margin.
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "16px", borderRadius: "50%" }}>
                  <AppleLogo size={36} color="rgba(255,255,255,0.6)" />
                </div>
                <div style={{ fontSize: "36px", fontWeight: 900 }}>1 TB</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>THE CEILING ANCHOR</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                  Guarantees the 256GB option feels modest and justified.
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Gauge size={18} />
          <span>The extra storage costs almost nothing... you pay for the psychological gap between enough and plenty.</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
