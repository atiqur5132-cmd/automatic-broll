import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { KineticTitle } from "../components/AnimatedTypography";
import { Perspective3DCard } from "../components/DocumentInspection";
import { Utensils, Anchor, Sparkles, CheckCircle2, ArrowRight, MousePointerClick } from "lucide-react";

export const Scene4RestaurantMenu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const menuSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const aiPricingSpring = spring({ frame: frame - 715, fps, config: { damping: 14 } });
  const habitSpring = spring({ frame: frame - 1415, fps, config: { damping: 14 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={10} panY={-8}>
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
            background: "rgba(255, 215, 0, 0.12)",
            border: "1px solid rgba(255, 215, 0, 0.4)",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          <Anchor size={20} color="#FFD700" />
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, color: "#FFD700" }}>
            {frame < 700 ? "Psychological Anchoring" : frame < 1400 ? "The Decoy Effect in AI" : "The Habit Loop & Free Trial"}
          </span>
        </div>

        {frame < 700 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%" }}>
            <KineticTitle
              text="THE $80 STEAK MAKES THE $30 PASTA FEEL LIKE A STEAL"
              fontSize={42}
              accentColor="#FFD700"
            />

            <div style={{ width: "100%", maxWidth: "1000px", transform: `scale(${menuSpring})` }}>
              <Perspective3DCard rotateX={8} rotateY={-6} borderColor="rgba(255, 215, 0, 0.3)" glowColor="rgba(255, 215, 0, 0.2)">
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "840px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,215,0,0.2)", paddingBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Utensils size={24} color="#FFD700" />
                      <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "2px", color: "#FFD700" }}>L'ANCRE BISTRO MENU</span>
                    </div>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>PSYCHOLOGY EXPERIMENT</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div
                      style={{
                        background: "rgba(255, 75, 75, 0.12)",
                        border: "1px solid rgba(255, 75, 75, 0.4)",
                        borderRadius: "16px",
                        padding: "20px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "22px", fontWeight: 800 }}>DRY-AGED PRIME TOMAHAWK</span>
                          <span style={{ background: "#FF4B4B", color: "#FFF", fontSize: "12px", fontWeight: 800, padding: "2px 10px", borderRadius: "10px" }}>
                            THE ANCHOR (OVERPRICED)
                          </span>
                        </div>
                        <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>
                          Exists solely to re-frame your reference point.
                        </div>
                      </div>
                      <div style={{ fontSize: "32px", fontWeight: 900, color: "#FF4B4B" }}>$80</div>
                    </div>

                    <div
                      style={{
                        background: "linear-gradient(90deg, rgba(255, 215, 0, 0.2) 0%, rgba(0, 240, 255, 0.15) 100%)",
                        border: "2px solid #FFD700",
                        borderRadius: "16px",
                        padding: "20px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxShadow: "0 10px 30px rgba(255, 215, 0, 0.25)",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "22px", fontWeight: 800, color: "#FFD700" }}>TRUFFLE RIGATONI PASTA</span>
                          <span style={{ background: "#FFD700", color: "#000", fontSize: "12px", fontWeight: 900, padding: "2px 10px", borderRadius: "10px" }}>
                            ★ BESTSELLER (PERCEIVED STEAL)
                          </span>
                        </div>
                        <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>
                          Compared to $80, this suddenly feels completely reasonable.
                        </div>
                      </div>
                      <div style={{ fontSize: "32px", fontWeight: 900, color: "#FFD700" }}>$32</div>
                    </div>

                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "16px",
                        padding: "16px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <span style={{ fontSize: "18px", fontWeight: 600 }}>House Garden Soup</span>
                        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Base minimum option.</div>
                      </div>
                      <div style={{ fontSize: "24px", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>$14</div>
                    </div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>
          </div>
        ) : frame < 1400 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%" }}>
            <KineticTitle
              text="THE FLAGSHIP ISN'T YOUR DAILY DRIVER... IT'S A DECOY"
              fontSize={42}
              accentColor="#00F0FF"
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", maxWidth: "1200px", transform: `scale(${aiPricingSpring})` }}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 75, 75, 0.1)",
                  border: "1px solid rgba(255, 75, 75, 0.3)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#FF4B4B", letterSpacing: "1px" }}>PRO / FLAGSHIP TIER</div>
                <div style={{ fontSize: "36px", fontWeight: 900 }}>$200<span style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>/mo</span></div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
                  Slow, expensive, overkill. Exists to establish the high price anchor.
                </div>
              </div>

              <div
                style={{
                  flex: 1.2,
                  background: "linear-gradient(180deg, rgba(0, 240, 255, 0.2) 0%, rgba(10, 15, 25, 0.95) 100%)",
                  border: "2px solid #00F0FF",
                  borderRadius: "24px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "0 20px 50px rgba(0, 240, 255, 0.3)",
                  transform: "translateY(-10px)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", fontWeight: 900, color: "#00F0FF", letterSpacing: "1px" }}>PLUS / BALANCED TIER</span>
                  <span style={{ background: "#00F0FF", color: "#000", fontSize: "12px", fontWeight: 900, padding: "3px 10px", borderRadius: "10px" }}>
                    WHAT YOU PICK
                  </span>
                </div>
                <div style={{ fontSize: "44px", fontWeight: 900, color: "#00F0FF" }}>$20<span style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)" }}>/mo</span></div>
                <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
                  Feels like a massive bargain next to $200. You picked exactly what they intended.
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "1px" }}>FREE / BUDGET TIER</div>
                <div style={{ fontSize: "36px", fontWeight: 900 }}>$0<span style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>/mo</span></div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
                  The Trojan horse. Gets you hooked on the workflow habit.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%" }}>
            <KineticTitle
              text="THE FREE TIER IS A TRIAL DISGUISED AS A PRODUCT"
              fontSize={42}
              accentColor="#32DC78"
            />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", width: "100%", maxWidth: "1200px", transform: `scale(${habitSpring})` }}>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", padding: "28px 20px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                <MousePointerClick size={36} color="#00F0FF" />
                <div style={{ fontSize: "18px", fontWeight: 800 }}>1. INTERFACE HOOK</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>You start using AI instead of traditional search engines.</div>
              </div>

              <ArrowRight size={28} color="rgba(255,255,255,0.3)" />

              <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", padding: "28px 20px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                <Sparkles size={36} color="#FFD700" />
                <div style={{ fontSize: "18px", fontWeight: 800 }}>2. SECOND NATURE</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Daily habit established. Workflows become deeply reliant.</div>
              </div>

              <ArrowRight size={28} color="rgba(255,255,255,0.3)" />

              <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(50,220,120,0.2) 0%, rgba(15,25,20,0.9) 100%)", border: "2px solid #32DC78", borderRadius: "20px", padding: "28px 20px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", textAlign: "center" }}>
                <CheckCircle2 size={36} color="#32DC78" />
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#32DC78" }}>3. FRICTIONLESS UPGRADE</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>Upgrading feels like an obvious, natural evolution.</div>
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
          <Anchor size={18} />
          <span>Congratulations... you just picked exactly what they designed you to pick.</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
