import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import {
  DocumentaryLogoCard,
  DocumentaryVSCard,
  Documentary3DDocument,
  DocumentaryKineticQuote,
} from "../design/DocumentaryOpenAIWarCards";

// Beat 0: Frames 0 -> 220
export const Beat0: React.FC = () => (
  <SceneLayout
    title="THE DEFINING CONFLICT OF THE AI ERA"
    subtitle="Imagine a technology so powerful that the people building it are terrified of what it might become"
    accentColor="#00F0FF"
  >
    <DocumentaryKineticQuote
      quote="TERRIFIED OF WHAT IT MIGHT BECOME"
      author="PROLOGUE"
      highlightWord="TERRIFIED"
    />
  </SceneLayout>
);

// Beat 1: Frames 220 -> 440
export const Beat1: React.FC = () => (
  <SceneLayout
    title="A BITTER FEUD FOR CONTROL"
    subtitle="Creators turning against each other, locked in a philosophical civil war"
    accentColor="#FFD700"
  >
    <div style={{ fontSize: 96, fontWeight: 900, color: "#FFFFFF", textAlign: "center", textShadow: "0 0 50px rgba(255,215,0,0.4)" }}>
      THE OPENAI CIVIL WAR
    </div>
  </SceneLayout>
);

// Beat 2: Frames 440 -> 680
export const Beat2: React.FC = () => (
  <SceneLayout
    title="NOT JUST A CORPORATE RIVALRY"
    subtitle="A deeply personal and philosophical battle over the future of intelligence"
    accentColor="#FF5A5F"
  >
    <CinematicComparison
      leftValue="COMMERCIAL"
      leftLabel="SPEED & AGGRESSIVE SCALE"
      leftColor="#10A37F"
      rightValue="PHILOSOPHY"
      rightLabel="SAFETY & CONSTITUTIONAL AI"
      rightColor="#D97757"
    />
  </SceneLayout>
);

// Beat 3: Frames 680 -> 930
export const Beat3: React.FC = () => (
  <SceneLayout
    title="THE JUGGERNAUT"
    subtitle="Sam Altman and OpenAI, backed by Microsoft Azure compute clusters"
    accentColor="#10A37F"
  >
    <DocumentaryLogoCard
      name="OpenAI"
      logoUrl="https://cdn.simpleicons.org/openai/white"
      brandColor="#10A37F"
      subtitle="SAM ALTMAN • MICROSOFT AZURE BACKED"
      scale={1.1}
    />
  </SceneLayout>
);

// Beat 4: Frames 930 -> 1160
export const Beat4: React.FC = () => (
  <SceneLayout
    title="THE ULTIMATE PRIZE"
    subtitle="Moving fast, breaking barriers, and chasing Artificial General Intelligence"
    accentColor="#00F0FF"
  >
    <CinematicNumber
      value="A G I"
      label="ARTIFICIAL GENERAL INTELLIGENCE"
      accentColor="#00F0FF"
    />
  </SceneLayout>
);

// Beat 5: Frames 1160 -> 1400
export const Beat5: React.FC = () => (
  <SceneLayout
    title="THE DEFECTORS"
    subtitle="Dario Amodei and Anthropic, built by OpenAI's own defecting researchers"
    accentColor="#D97757"
  >
    <DocumentaryLogoCard
      name="Anthropic"
      logoUrl="https://cdn.simpleicons.org/anthropic/white"
      brandColor="#D97757"
      subtitle="DARIO AMODEI • SAFETY BEFORE SCALE"
      scale={1.1}
    />
  </SceneLayout>
);

// Beat 6: Frames 1400 -> 1630
export const Beat6: React.FC = () => (
  <SceneLayout
    title="WHERE IT ALL BEGAN • 2016"
    subtitle="A shared San Francisco group house became the battleground for intense debates over AGI"
    accentColor="#FFD700"
  >
    <Documentary3DDocument
      header="THE SAN FRANCISCO GROUP HOUSE"
      bodyText="Home to Dario Amodei, Daniela Amodei, and Holden Karnofsky. Frequent visitor: Greg Brockman."
      highlightText="WHERE THE IDEOLOGICAL SCHISM BEGAN"
    />
  </SceneLayout>
);

// Beat 7: Frames 1630 -> 1860
export const Beat7: React.FC = () => (
  <SceneLayout
    title="THE EARLY DIVIDE"
    subtitle="Internal debates over who should control the most powerful AI systems"
    accentColor="#FF5A5F"
  >
    <DocumentaryVSCard
      leftName="DARIO AMODEI"
      leftLogo="https://cdn.simpleicons.org/anthropic/white"
      leftColor="#D97757"
      leftTag="SAFETY & GOVERNANCE"
      rightName="GREG BROCKMAN"
      rightLogo="https://cdn.simpleicons.org/openai/white"
      rightColor="#10A37F"
      rightTag="SPEED & DEPLOYMENT"
    />
  </SceneLayout>
);

// Beat 8: Frames 1860 -> 2100
export const Beat8: React.FC = () => (
  <SceneLayout
    title="HOUSE OF DEBATES"
    subtitle="Late night arguments over the geopolitical consequences of superintelligence"
    accentColor="#00F0FF"
  >
    <DocumentaryKineticQuote
      quote="INTENSE DEBATES OVER THE FUTURE OF AGI"
      author="SAN FRANCISCO • 2016"
      highlightWord="AGI"
    />
  </SceneLayout>
);

// Beat 9: Frames 2100 -> 2340
export const Beat9: React.FC = () => (
  <SceneLayout
    title="THE NUCLEAR PROPOSAL"
    subtitle="Brockman floated selling AGI to UN Security Council nuclear powers"
    accentColor="#FF5A5F"
  >
    <Documentary3DDocument
      header="UN SECURITY COUNCIL PROPOSAL"
      bodyText="Floated idea: Transferring AGI control to international nuclear superpowers."
      highlightText="SELLING AGI TO NUCLEAR POWERS"
      markerColor="rgba(255, 90, 95, 0.55)"
    />
  </SceneLayout>
);

// Beat 10: Frames 2340 -> 2570
export const Beat10: React.FC = () => (
  <SceneLayout
    title="DARIO'S REACTION"
    subtitle="Dario Amodei considered the proposal fundamentally dangerous"
    accentColor="#FFD700"
  >
    <DocumentaryKineticQuote
      quote="That proposal is tantamount to treason."
      author="DARIO AMODEI"
      highlightWord="treason"
    />
  </SceneLayout>
);

// Beat 11: Frames 2570 -> 2800
export const Beat11: React.FC = () => (
  <SceneLayout
    title="LEADERSHIP SHAKEUP • 2018"
    subtitle="Elon Musk exited OpenAI and Sam Altman took full executive control"
    accentColor="#10A37F"
  >
    <DocumentaryLogoCard
      name="OpenAI"
      logoUrl="https://cdn.simpleicons.org/openai/white"
      brandColor="#10A37F"
      subtitle="2018: SAM ALTMAN TAKES THE REINS"
    />
  </SceneLayout>
);

// Beat 12: Frames 2800 -> 3030
export const Beat12: React.FC = () => (
  <SceneLayout
    title="THE GPT BLOCKADE"
    subtitle="Dario blocked Brockman from GPT project; Daniela threatened to step down"
    accentColor="#FF5A5F"
  >
    <Documentary3DDocument
      header="THE GPT MODEL STANDOFF"
      bodyText="Internal conflicts boil over: Dario blocks Brockman from core language model team."
      highlightText="DANIELA THREATENS TO RESIGN"
    />
  </SceneLayout>
);

// Beat 13: Frames 3030 -> 3260
export const Beat13: React.FC = () => (
  <SceneLayout
    title="COMMERCIAL PIVOT"
    subtitle="OpenAI transitioned from a pure non-profit to a capped-profit commercial entity"
    accentColor="#00F0FF"
  >
    <CinematicComparison
      leftValue="NON-PROFIT"
      leftLabel="2015 FOUNDING CHARTER"
      leftColor="#00F0FF"
      rightValue="CAPPED PROFIT"
      rightLabel="COMMERCIAL RESTRUCTURING"
      rightColor="#FFD700"
    />
  </SceneLayout>
);

// Beat 14: Frames 3260 -> 3500
export const Beat14: React.FC = () => (
  <SceneLayout
    title="THE $1 BILLION PARTNERSHIP"
    subtitle="Massive computing deal with Microsoft Azure to fuel the compute needed for AGI"
    accentColor="#00A4EF"
  >
    <CinematicNumber
      value="$1,000,000,000"
      label="MICROSOFT AZURE COMPUTE INFUSION"
      accentColor="#00A4EF"
    />
  </SceneLayout>
);
