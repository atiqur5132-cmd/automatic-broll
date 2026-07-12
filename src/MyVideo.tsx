import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import {
  Beat0,
  Beat1,
  Beat2,
  Beat3,
  Beat4,
  Beat5,
  Beat6,
  Beat7,
  Beat8,
  Beat9,
  Beat10,
  Beat11,
  Beat12,
  Beat13,
  Beat14,
  Beat15,
  Beat16,
  Beat17,
  Beat18,
  Beat19,
  Beat20,
  Beat21,
  Beat22,
  Beat23,
  Beat24,
  Beat25,
  Beat26,
  Beat27,
  Beat28,
  Beat29,
  Beat30,
  Beat31,
  Beat32,
  Beat33,
  Beat34,
  Beat35,
  Beat36,
  Beat37,
  Beat38,
  Beat39,
  Beat40,
  Beat41,
  Beat42,
  Beat43,
  Beat44,
} from "./components/beats/VideoBeats";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0D0E12" }}>
      {/* Primary Voiceover Audio Track */}
      <Audio src={staticFile("edited_audio.wav")} volume={1.0} />
      {/* Macro Background & Cinematic Atmosphere Layer */}
      <BackgroundLayers />
      {/* Foreground Documentary Beats Sequence */}
      <Sequence durationInFrames={220}>
        <Beat0 />
      </Sequence>
      <Sequence from={220} durationInFrames={220}>
        <Beat1 />
      </Sequence>
      <Sequence from={440} durationInFrames={240}>
        <Beat2 />
      </Sequence>
      <Sequence from={680} durationInFrames={250}>
        <Beat3 />
      </Sequence>
      <Sequence from={930} durationInFrames={230}>
        <Beat4 />
      </Sequence>
      <Sequence from={1160} durationInFrames={240}>
        <Beat5 />
      </Sequence>
      <Sequence from={1400} durationInFrames={230}>
        <Beat6 />
      </Sequence>
      <Sequence
        from={1630}
        durationInFrames={230}
        style={{
          translate: "-1px 0px",
        }}
      >
        <Beat7 />
      </Sequence>
      <Sequence from={1860} durationInFrames={240}>
        <Beat8 />
      </Sequence>
      <Sequence from={2100} durationInFrames={240}>
        <Beat9 />
      </Sequence>
      <Sequence from={2340} durationInFrames={230}>
        <Beat10 />
      </Sequence>
      <Sequence from={2570} durationInFrames={230}>
        <Beat11 />
      </Sequence>
      <Sequence from={2800} durationInFrames={230}>
        <Beat12 />
      </Sequence>
      <Sequence from={3030} durationInFrames={230}>
        <Beat13 />
      </Sequence>
      <Sequence from={3260} durationInFrames={240}>
        <Beat14 />
      </Sequence>
      <Sequence from={3500} durationInFrames={240}>
        <Beat15 />
      </Sequence>
      <Sequence from={3740} durationInFrames={230}>
        <Beat16 />
      </Sequence>
      <Sequence from={3970} durationInFrames={230}>
        <Beat17 />
      </Sequence>
      <Sequence from={4200} durationInFrames={230}>
        <Beat18 />
      </Sequence>
      <Sequence from={4430} durationInFrames={230}>
        <Beat19 />
      </Sequence>
      <Sequence from={4660} durationInFrames={230}>
        <Beat20 />
      </Sequence>
      <Sequence from={4890} durationInFrames={230}>
        <Beat21 />
      </Sequence>
      <Sequence from={5120} durationInFrames={230}>
        <Beat22 />
      </Sequence>
      <Sequence from={5350} durationInFrames={230}>
        <Beat23 />
      </Sequence>
      <Sequence from={5580} durationInFrames={230}>
        <Beat24 />
      </Sequence>
      <Sequence from={5810} durationInFrames={230}>
        <Beat25 />
      </Sequence>
      <Sequence from={6040} durationInFrames={230}>
        <Beat26 />
      </Sequence>
      <Sequence from={6270} durationInFrames={230}>
        <Beat27 />
      </Sequence>
      <Sequence from={6500} durationInFrames={230}>
        <Beat28 />
      </Sequence>
      <Sequence from={6730} durationInFrames={230}>
        <Beat29 />
      </Sequence>
      <Sequence from={6960} durationInFrames={230}>
        <Beat30 />
      </Sequence>
      <Sequence from={7190} durationInFrames={230}>
        <Beat31 />
      </Sequence>
      <Sequence from={7420} durationInFrames={230}>
        <Beat32 />
      </Sequence>
      <Sequence from={7650} durationInFrames={230}>
        <Beat33 />
      </Sequence>
      <Sequence from={7880} durationInFrames={230}>
        <Beat34 />
      </Sequence>
      <Sequence from={8110} durationInFrames={230}>
        <Beat35 />
      </Sequence>
      <Sequence from={8340} durationInFrames={230}>
        <Beat36 />
      </Sequence>
      <Sequence from={8570} durationInFrames={230}>
        <Beat37 />
      </Sequence>
      <Sequence from={8800} durationInFrames={230}>
        <Beat38 />
      </Sequence>
      <Sequence from={9030} durationInFrames={230}>
        <Beat39 />
      </Sequence>
      <Sequence from={9260} durationInFrames={230}>
        <Beat40 />
      </Sequence>
      <Sequence from={9490} durationInFrames={230}>
        <Beat41 />
      </Sequence>
      <Sequence from={9720} durationInFrames={230}>
        <Beat42 />
      </Sequence>
      <Sequence from={9950} durationInFrames={120}>
        <Beat43 />
      </Sequence>
      <Sequence from={10070} durationInFrames={114}>
        <Beat44 />
      </Sequence>
    </AbsoluteFill>
  );
};
