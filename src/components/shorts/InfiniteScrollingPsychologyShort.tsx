import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
import {
  VisualFirstSceneStage,
  Real3DIconStage,
  Perspective3DCard,
  Neural3DNetwork,
  MassiveKineticTitle,
  DopamineLoopGauge,
  VariableReward3DStage,
  CameraWhipPan,
  OrigamiFoldCard,
  MaskRevealWipe,
  ImpactShake,
} from "./motion-graphics";
import { RealtimeSpokenCaptions } from "./RealtimeSpokenCaptions";
import subtitlesData from "../../data/infinite-scrolling-subtitles.json";

export const InfiniteScrollingPsychologyShort: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle atmospheric color shift across duration
  const bgHue = interpolate(frame, [0, 1104], [250, 310]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07080E",
        fontFamily: "SpaceGrotesk, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Dark Atmosphere & Volumetric Haze */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, hsla(${bgHue}, 80%, 14%, 0.45) 0%, #07080E 80%)`,
        }}
      />

      {/* Primary Cleaned Voiceover Narration */}
      <Audio src={staticFile("infinite-scrolling-cleaned.mp3")} volume={1} />

      {/* =========================================================
          SCENE 1: frames 0 - 99 (0.0s - 3.3s)
          "You don't choose to keep scrolling. Your brain does."
          ========================================================= */}
      <Sequence durationInFrames={99}>
        <MaskRevealWipe durationFrames={18} mode="angled-slice">
          <VisualFirstSceneStage
            hero3DGraphic={
              <Real3DIconStage
                iconType="brain"
                size={560}
                glowColor="rgba(0,255,194,0.4)"
                accentColor="#8A00FF"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="YOUR BRAIN SCROLLS"
                activeWordIndex={Math.floor(frame / 25) % 3}
                accentColor="#00FFC2"
                fontSize={76}
              />
            }
            badgeText="NEUROPSYCHOLOGY HOOK"
            badgeColor="#00FFC2"
          />
        </MaskRevealWipe>
      </Sequence>

      {/* =========================================================
          SCENE 2: frames 99 - 267 (3.3s - 8.9s)
          "Every swipe gives your brain a tiny dose of dopamine..."
          ========================================================= */}
      <Sequence from={99} durationInFrames={168}>
        <CameraWhipPan direction="left" durationFrames={16}>
          <VisualFirstSceneStage
            hero3DGraphic={
              <DopamineLoopGauge
                level={94}
                label="DOPAMINE SPIKE"
                chemicalFormula="C8H11NO2"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="DOPAMINE HIT TRAP"
                activeWordIndex={Math.floor((frame - 99) / 35) % 3}
                accentColor="#00FFC2"
                fontSize={74}
              />
            }
            badgeText="NEUROCHEMICAL REWARD"
            badgeColor="#00FFC2"
          />
        </CameraWhipPan>
      </Sequence>

      {/* =========================================================
          SCENE 3: frames 267 - 408 (8.9s - 13.6s)
          "Most posts are boring. But every now and then..."
          ========================================================= */}
      <Sequence from={267} durationInFrames={141}>
        <OrigamiFoldCard axis="Y" delay={0}>
          <VisualFirstSceneStage
            hero3DGraphic={
              <Perspective3DCard
                title="INTERMITTENT REWARD"
                badge="THE SURPRISE STIMULUS"
                borderColor="#FF387A"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="UNPREDICTABLE REWARD"
                activeWordIndex={Math.floor((frame - 267) / 35) % 2}
                accentColor="#FF387A"
                fontSize={74}
              />
            }
            badgeText="COGNITIVE CONDITIONING"
            badgeColor="#FF387A"
          />
        </OrigamiFoldCard>
      </Sequence>

      {/* =========================================================
          SCENE 4: frames 408 - 552 (13.6s - 18.4s)
          "That unpredictability is exactly what makes infinite scrolling..."
          ========================================================= */}
      <Sequence from={408} durationInFrames={144}>
        <CameraWhipPan direction="up" durationFrames={16}>
          <VisualFirstSceneStage
            hero3DGraphic={
              <Neural3DNetwork
                nodeCount={16}
                primaryColor="#00EAFF"
                accentColor="#9000FF"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="ADDICTION LOOP"
                activeWordIndex={Math.floor((frame - 408) / 40) % 2}
                accentColor="#00EAFF"
                fontSize={80}
              />
            }
            badgeText="HABIT FORMATION CIRCUIT"
            badgeColor="#00EAFF"
          />
        </CameraWhipPan>
      </Sequence>

      {/* =========================================================
          SCENE 5: frames 552 - 762 (18.4s - 25.4s)
          "Psychologists call it variable reward. Slot machines..."
          ========================================================= */}
      <Sequence from={552} durationInFrames={210}>
        <ImpactShake intensity={18} triggerFrame={552}>
          <VisualFirstSceneStage
            hero3DGraphic={
              <VariableReward3DStage
                headline="VARIABLE REWARD"
                subhead="SLOT MACHINE PSYCHOLOGY"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="VARIABLE REWARD LAW"
                activeWordIndex={Math.floor((frame - 552) / 45) % 3}
                accentColor="#FFD038"
                fontSize={74}
              />
            }
            badgeText="B.F. SKINNER OPERANT LAW"
            badgeColor="#FFD038"
          />
        </ImpactShake>
      </Sequence>

      {/* =========================================================
          SCENE 6: frames 762 - 894 (25.4s - 29.8s)
          "Your brain starts chasing the next surprise..."
          ========================================================= */}
      <Sequence from={762} durationInFrames={132}>
        <OrigamiFoldCard axis="Y">
          <VisualFirstSceneStage
            hero3DGraphic={
              <Real3DIconStage
                iconType="puppet-strings"
                size={560}
                glowColor="rgba(255,56,122,0.4)"
                accentColor="#7A00FF"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="CHASING THE SURPRISE"
                activeWordIndex={Math.floor((frame - 762) / 35) % 3}
                accentColor="#FF387A"
                fontSize={74}
              />
            }
            badgeText="NEURAL EXHAUSTION"
            badgeColor="#FF387A"
          />
        </OrigamiFoldCard>
      </Sequence>

      {/* =========================================================
          SCENE 7: frames 894 - 1104 (29.8s - 36.8s)
          "The feed never ends... you take back control."
          ========================================================= */}
      <Sequence from={894} durationInFrames={210}>
        <MaskRevealWipe durationFrames={20} mode="angled-slice">
          <VisualFirstSceneStage
            hero3DGraphic={
              <Real3DIconStage
                iconType="lock"
                size={560}
                glowColor="rgba(255,208,56,0.4)"
                accentColor="#00FFC2"
              />
            }
            titleGraphic={
              <MassiveKineticTitle
                text="TAKE BACK CONTROL"
                activeWordIndex={Math.floor((frame - 894) / 45) % 3}
                accentColor="#00FFC2"
                fontSize={78}
              />
            }
            badgeText="BREAK THE SCROLLING LOOP"
            badgeColor="#00FFC2"
          />
        </MaskRevealWipe>
      </Sequence>

      {/* =========================================================
          GLOBAL OVERLAY: Real-Time Dynamic Spoken Subtitles (Hormozi Style)
          ========================================================= */}
      <RealtimeSpokenCaptions transcription={subtitlesData.transcription} />
    </AbsoluteFill>
  );
};
