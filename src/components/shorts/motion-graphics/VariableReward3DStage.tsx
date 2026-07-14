import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

export interface VariableReward3DStageProps {
  headline?: string;
  subhead?: string;
}

export const VariableReward3DStage: React.FC<VariableReward3DStageProps> = ({
  headline = "VARIABLE REWARD",
  subhead = "SLOT MACHINE PSYCHOLOGY",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 100 },
  });

  // Reel rotations with staggered stops
  const reel1 = interpolate(frame, [0, 25], [720, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateRight: "clamp",
  });
  const reel2 = interpolate(frame, [0, 35], [1080, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateRight: "clamp",
  });
  const reel3 = interpolate(frame, [0, 48], [1440, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateRight: "clamp",
  });

  const tiltY = Math.sin(frame * 0.05) * 8;

  const reelSymbols = ["777", "DOPAMINE", "JACKPOT"];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1600,
        position: "relative",
      }}
    >
      {/* Volumetric glow behind machine */}
      <div
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,180,0,0.25) 0%, rgba(255,40,100,0.15) 55%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* 3D Casino Reward Stage Container */}
      <div
        style={{
          width: 520,
          height: 440,
          borderRadius: 36,
          background: "linear-gradient(145deg, rgba(30,25,50,0.95), rgba(15,10,25,0.98))",
          border: "2px solid rgba(255,200,60,0.45)",
          boxShadow: "0 40px 90px rgba(0,0,0,0.85), inset 0 0 45px rgba(255,180,0,0.15)",
          transformStyle: "preserve-3d",
          transform: `rotateX(15deg) rotateY(${tiltY}deg) scale(${enterSpring})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 36,
        }}
      >
        {/* Top Header Label */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "SpaceGrotesk, sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: "#FFD038",
              letterSpacing: 3,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontFamily: "PlusJakartaSans, sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: 1.5,
              marginTop: 4,
            }}
          >
            {subhead}
          </div>
        </div>

        {/* 3 Reels Windows */}
        <div
          style={{
            width: "100%",
            height: 180,
            background: "rgba(0,0,0,0.7)",
            borderRadius: 24,
            border: "3px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 10px 30px rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0 20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Reel 1 */}
          <div
            style={{
              width: 120,
              height: 130,
              borderRadius: 16,
              background: "linear-gradient(180deg, #1A142A 0%, #2A2045 50%, #1A142A 100%)",
              border: "2px solid #FFD038",
              boxShadow: "0 0 20px rgba(255,208,56,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `rotateX(${reel1}deg)`,
            }}
          >
            <span
              style={{
                fontFamily: "SpaceGrotesk, sans-serif",
                fontSize: 32,
                fontWeight: 900,
                color: "#FFD038",
              }}
            >
              {reelSymbols[0]}
            </span>
          </div>

          {/* Reel 2 */}
          <div
            style={{
              width: 120,
              height: 130,
              borderRadius: 16,
              background: "linear-gradient(180deg, #1A142A 0%, #2A2045 50%, #1A142A 100%)",
              border: "2px solid #FF387A",
              boxShadow: "0 0 20px rgba(255,56,122,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `rotateX(${reel2}deg)`,
            }}
          >
            <span
              style={{
                fontFamily: "SpaceGrotesk, sans-serif",
                fontSize: 22,
                fontWeight: 900,
                color: "#FF387A",
              }}
            >
              {reelSymbols[1]}
            </span>
          </div>

          {/* Reel 3 */}
          <div
            style={{
              width: 120,
              height: 130,
              borderRadius: 16,
              background: "linear-gradient(180deg, #1A142A 0%, #2A2045 50%, #1A142A 100%)",
              border: "2px solid #00FFC2",
              boxShadow: "0 0 20px rgba(0,255,194,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `rotateX(${reel3}deg)`,
            }}
          >
            <span
              style={{
                fontFamily: "SpaceGrotesk, sans-serif",
                fontSize: 24,
                fontWeight: 900,
                color: "#00FFC2",
              }}
            >
              {reelSymbols[2]}
            </span>
          </div>
        </div>

        {/* Bottom Reward Banner */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 14,
            background: "linear-gradient(90deg, #FF387A, #FFD038)",
            color: "#090A0F",
            fontFamily: "SpaceGrotesk, sans-serif",
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: 2,
            boxShadow: "0 0 25px rgba(255,56,122,0.6)",
          }}
        >
          INTERMITTENT DOPAMINE LOOP
        </div>
      </div>
    </div>
  );
};
