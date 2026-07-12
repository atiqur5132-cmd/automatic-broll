import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import {
  DocumentaryLogoCard,
  DocumentaryVSCard,
  Documentary3DDocument,
  DocumentaryKineticQuote,
} from "../design/DocumentaryOpenAIWarCards";

// Beat 15: Frames 3500 -> 3740
export const Beat15: React.FC = () => (
  <SceneLayout
    title="BEGINNING OF THE END"
    subtitle="For Dario, Daniela, and the safety team, commercial pressures broke the original mission"
    accentColor="#FF5A5F"
  >
    <DocumentaryKineticQuote
      quote="This was the beginning of the end."
      author="THE SAFETY TEAM"
      highlightWord="end"
    />
  </SceneLayout>
);

// Beat 16: Frames 3740 -> 3970
export const Beat16: React.FC = () => (
  <SceneLayout
    title="THE 2020 BREAKING POINT"
    subtitle="Altman accused the Amodeis of plotting against him to the board"
    accentColor="#FFD700"
  >
    <Documentary3DDocument
      header="THE 2020 BOARDROOM RIFT"
      bodyText="Trust was completely shattered inside executive leadership meetings."
      highlightText="ALTMAN ACCUSES AMODEIS TO THE BOARD"
      markerColor="rgba(255, 90, 95, 0.55)"
    />
  </SceneLayout>
);

// Beat 17: Frames 3970 -> 4200
export const Beat17: React.FC = () => (
  <SceneLayout
    title="TRUST DESTROYED"
    subtitle="Dario Amodei on why staying at OpenAI was no longer possible"
    accentColor="#00F0FF"
  >
    <DocumentaryKineticQuote
      quote="Why argue when you don't have the same vision and don't trust them?"
      author="DARIO AMODEI"
      highlightWord="trust"
    />
  </SceneLayout>
);

// Beat 18: Frames 4200 -> 4430
export const Beat18: React.FC = () => (
  <SceneLayout
    title="THE COHESIVE EXODUS"
    subtitle="Dario, Daniela, and nine other crucial employees walked away together"
    accentColor="#FFB800"
  >
    <CinematicNumber
      value="11 DEFECTORS"
      label="CORE SAFETY EXODUS FROM OPENAI"
      accentColor="#FFB800"
    />
  </SceneLayout>
);

// Beat 19: Frames 4430 -> 4660
export const Beat19: React.FC = () => (
  <SceneLayout
    title="WHY THEY LEFT"
    subtitle="Driven by a belief that commercial incentives were overtaking commitment to safety"
    accentColor="#FF5A5F"
  >
    <DocumentaryVSCard
      leftName="COMMERCIAL INCENTIVES"
      leftLogo="https://cdn.simpleicons.org/openai/white"
      leftColor="#10A37F"
      leftTag="MARKET PRESSURE"
      rightName="SAFETY COMMITMENT"
      rightLogo="https://cdn.simpleicons.org/anthropic/white"
      rightColor="#D97757"
      rightTag="MISSION FIRST"
    />
  </SceneLayout>
);

// Beat 20: Frames 4660 -> 4890
export const Beat20: React.FC = () => (
  <SceneLayout
    title="FOUNDING ANTHROPIC"
    subtitle="Believing capped-profit wasn't enough to withstand extreme market pressure"
    accentColor="#D97757"
  >
    <DocumentaryLogoCard
      name="Anthropic"
      logoUrl="https://cdn.simpleicons.org/anthropic/white"
      brandColor="#D97757"
      subtitle="FOUNDED IN 2021 • SAFETY FIRST AI LAB"
      scale={1.15}
    />
  </SceneLayout>
);

// Beat 21: Frames 4890 -> 5120
export const Beat21: React.FC = () => (
  <SceneLayout
    title="THE DARIO MEMO"
    subtitle="Dario wrote a memo defining the ideal corporate structure for an AI lab"
    accentColor="#00F0FF"
  >
    <CinematicComparison
      leftValue="75%"
      leftLabel="PUBLIC BENEFIT GOOD"
      leftColor="#00F0FF"
      rightValue="25%"
      rightLabel="MARKET & INVESTOR RETURN"
      rightColor="#FFD700"
    />
  </SceneLayout>
);

// Beat 22: Frames 5120 -> 5350
export const Beat22: React.FC = () => (
  <SceneLayout
    title="DANIELA AMODEI • PRESIDENT"
    subtitle="Operating as president, she became the operational backbone of Anthropic"
    accentColor="#D97757"
  >
    <DocumentaryKineticQuote
      quote="Building an institution rooted in safety and rigorous alignment."
      author="DANIELA AMODEI — PRESIDENT"
      highlightWord="safety"
    />
  </SceneLayout>
);

// Beat 23: Frames 5350 -> 5580
export const Beat23: React.FC = () => (
  <SceneLayout
    title="THE MISSION FILTER"
    subtitle="Turning away top technical talent if they didn't deeply resonate with safety"
    accentColor="#FF5A5F"
  >
    <Documentary3DDocument
      header="RIGOROUS MISSION FILTER"
      bodyText="Anthropic turned down world-class engineers if they did not share safety-first ethics."
      highlightText="REJECTING TALENT WITHOUT MISSION FIT"
    />
  </SceneLayout>
);

// Beat 24: Frames 5580 -> 5810
export const Beat24: React.FC = () => (
  <SceneLayout
    title="18 MONTHS IN STEALTH"
    subtitle="Focusing purely on the science of AI alignment rather than rushing a product"
    accentColor="#00F0FF"
  >
    <CinematicNumber
      value="18 MONTHS"
      label="ABSOLUTE STEALTH ALIGNMENT RESEARCH"
      accentColor="#00F0FF"
    />
  </SceneLayout>
);

// Beat 25: Frames 5810 -> 6040
export const Beat25: React.FC = () => (
  <SceneLayout
    title="WAR ON TWO FRONTS"
    subtitle="Fought across business architecture and fundamental technical philosophy"
    accentColor="#FFD700"
  >
    <DocumentaryVSCard
      leftName="BUSINESS ARCHITECTURE"
      leftLogo="https://cdn.simpleicons.org/openai/white"
      leftColor="#10A37F"
      leftTag="RLHF & SPEED"
      rightName="TECHNICAL PHILOSOPHY"
      rightLogo="https://cdn.simpleicons.org/anthropic/white"
      rightColor="#D97757"
      rightTag="CONSTITUTIONAL AI"
    />
  </SceneLayout>
);

// Beat 26: Frames 6040 -> 6270
export const Beat26: React.FC = () => (
  <SceneLayout
    title="OPENAI STRATEGY • RLHF"
    subtitle="Reinforcement Learning from Human Feedback driven by aggressive market deployment"
    accentColor="#10A37F"
  >
    <DocumentaryLogoCard
      name="OpenAI RLHF"
      logoUrl="https://cdn.simpleicons.org/openai/white"
      brandColor="#10A37F"
      subtitle="HUMAN FEEDBACK LOOPS + SPEED"
    />
  </SceneLayout>
);

// Beat 27: Frames 6270 -> 6500
export const Beat27: React.FC = () => (
  <SceneLayout
    title="THE MICROSOFT ENGINE"
    subtitle="Deeply intertwined with Microsoft Azure's global supercomputer infrastructure"
    accentColor="#00A4EF"
  >
    <DocumentaryLogoCard
      name="Microsoft Azure"
      logoUrl="https://cdn.simpleicons.org/microsoft/white"
      brandColor="#00A4EF"
      subtitle="GLOBAL SUPERCOMPUTING CLUSTERS"
    />
  </SceneLayout>
);

// Beat 28: Frames 6500 -> 6730
export const Beat28: React.FC = () => (
  <SceneLayout
    title="ANTHROPIC'S BREAKTHROUGH"
    subtitle="Pioneering a revolutionary AI alignment framework: Constitutional AI"
    accentColor="#D97757"
  >
    <DocumentaryLogoCard
      name="Anthropic"
      logoUrl="https://cdn.simpleicons.org/anthropic/white"
      brandColor="#D97757"
      subtitle="CONSTITUTIONAL AI ARCHITECTURE"
    />
  </SceneLayout>
);

// Beat 29: Frames 6730 -> 6960
export const Beat29: React.FC = () => (
  <SceneLayout
    title="THE LITERAL RULEBOOK"
    subtitle="A 1,200-word constitution drawing from the UN Declaration of Human Rights"
    accentColor="#00F0FF"
  >
    <Documentary3DDocument
      header="THE 1,200-WORD CONSTITUTION"
      bodyText="Giving AI models explicit principles from the UN Declaration of Human Rights."
      highlightText="EMBEDDING HUMAN RIGHTS INTO CODE"
    />
  </SceneLayout>
);
