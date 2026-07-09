import React from "react";
import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";

import { Scene1MotherJourney } from "./scenes/Scene1MotherJourney";
import { Scene2NotSciFi } from "./scenes/Scene2NotSciFi";
import { Scene3RadiologyShield } from "./scenes/Scene3RadiologyShield";
import { Scene4StructuredLogic } from "./scenes/Scene4StructuredLogic";
import { Scene5CardiologySymmetry } from "./scenes/Scene5CardiologySymmetry";
import { Scene6NoFatigue } from "./scenes/Scene6NoFatigue";
import { Scene7Admin10Seconds } from "./scenes/Scene7Admin10Seconds";
import { Scene8EarlyDetection } from "./scenes/Scene8EarlyDetection";
import { Scene9AITherapists } from "./scenes/Scene9AITherapists";
import { Scene10InfinitePatience } from "./scenes/Scene10InfinitePatience";
import { Scene11EchoChamber } from "./scenes/Scene11EchoChamber";
import { Scene12IsolationRisk } from "./scenes/Scene12IsolationRisk";
import { Scene13AnimalCommunication } from "./scenes/Scene13AnimalCommunication";
import { Scene14LegalLiability } from "./scenes/Scene14LegalLiability";
import { Scene15ForceMultiplier } from "./scenes/Scene15ForceMultiplier";
import { Scene16ArtOfMedicine } from "./scenes/Scene16ArtOfMedicine";
import { Scene17CTA } from "./scenes/Scene17CTA";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#070913" }}>
      {/* Voiceover Audio File */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Scene 1: Mother Journey (0s - 16.40s) */}
      <Sequence durationInFrames={492}>
        <Scene1MotherJourney />
      </Sequence>

      {/* Scene 2: Not Sci-Fi Reality (16.40s - 41.52s) */}
      <Sequence from={492} durationInFrames={754}>
        <Scene2NotSciFi />
      </Sequence>

      {/* Scene 3: Radiology Myth Shield (41.52s - 51.84s) */}
      <Sequence from={1246} durationInFrames={309}>
        <Scene3RadiologyShield />
      </Sequence>

      {/* Scene 4: Structured Algorithmic Logic (51.84s - 62.48s) */}
      <Sequence from={1555} durationInFrames={319}>
        <Scene4StructuredLogic />
      </Sequence>

      {/* Scene 5: Cardiology & Plastic Surgery Symmetry (62.48s - 72.88s) */}
      <Sequence from={1874} durationInFrames={312}>
        <Scene5CardiologySymmetry />
      </Sequence>

      {/* Scene 6: Zero Fatigue Compute (72.88s - 82.80s) */}
      <Sequence from={2186} durationInFrames={298}>
        <Scene6NoFatigue />
      </Sequence>

      {/* Scene 7: Admin Discharge 10 Seconds (82.80s - 99.04s) */}
      <Sequence from={2484} durationInFrames={487}>
        <Scene7Admin10Seconds />
      </Sequence>

      {/* Scene 8: Early Detection Dementia 10-15 Years Earlier (99.04s - 114.72s) */}
      <Sequence from={2971} durationInFrames={471}>
        <Scene8EarlyDetection />
      </Sequence>

      {/* Scene 9: AI Digital Therapists (114.72s - 136.80s) */}
      <Sequence from={3442} durationInFrames={662}>
        <Scene9AITherapists />
      </Sequence>

      {/* Scene 10: Infinite Patience vs Burnout (136.80s - 153.52s) */}
      <Sequence from={4104} durationInFrames={502}>
        <Scene10InfinitePatience />
      </Sequence>

      {/* Scene 11: Echo Chamber Loop (153.52s - 171.68s) */}
      <Sequence from={4606} durationInFrames={544}>
        <Scene11EchoChamber />
      </Sequence>

      {/* Scene 12: Screen Isolation Risk (171.68s - 178.40s) */}
      <Sequence from={5150} durationInFrames={202}>
        <Scene12IsolationRisk />
      </Sequence>

      {/* Scene 13: Animal Communication Decoding (178.40s - 214.08s) */}
      <Sequence from={5352} durationInFrames={1070}>
        <Scene13AnimalCommunication />
      </Sequence>

      {/* Scene 14: Legal Liability & Human Doctor (214.08s - 240.96s) */}
      <Sequence from={6422} durationInFrames={807}>
        <Scene14LegalLiability />
      </Sequence>

      {/* Scene 15: AI as Force Multiplier & Electricity (240.96s - 262.88s) */}
      <Sequence from={7229} durationInFrames={657}>
        <Scene15ForceMultiplier />
      </Sequence>

      {/* Scene 16: Art of Medicine & Active Listening (262.88s - 273.20s) */}
      <Sequence from={7886} durationInFrames={310}>
        <Scene16ArtOfMedicine />
      </Sequence>

      {/* Scene 17: CTA Like Subscribe Comment (273.20s - 290.20s) */}
      <Sequence from={8196} durationInFrames={510}>
        <Scene17CTA />
      </Sequence>
    </AbsoluteFill>
  );
};