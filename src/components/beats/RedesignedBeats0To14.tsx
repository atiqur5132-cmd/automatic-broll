import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import { IsometricBarChart3D, ServerBlade3D } from "../design/Vectors3D";

// Beat 0: 0.00s -> 5.44s
export const Beat0: React.FC = () => (
  <SceneLayout
    title="1 YEAR AGO ON OPENROUTER"
    subtitle="Chinese AI providers controlled less than 2% of total platform traffic"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="< 2.0%" label="CHINESE AI MARKET SHARE" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 1: 5.44s -> 12.32s
export const Beat1: React.FC = () => (
  <SceneLayout
    title="THE 12-MONTH SHIFT"
    subtitle="From under 2% to commanding nearly half of all developer API traffic"
    accentColor="#00F0FF"
  >
    <CinematicComparison
      leftValue="< 2%"
      leftLabel="1 YEAR AGO"
      leftColor="#FF5A5F"
      rightValue="45%"
      rightLabel="TODAY"
      rightColor="#00F0FF"
    />
  </SceneLayout>
);

// Beat 2: 12.32s -> 18.56s
export const Beat2: React.FC = () => (
  <SceneLayout
    title="PLATFORM ANOMALY"
    subtitle="A smartphone maker processes more AI traffic than OpenAI on the same platform"
    accentColor="#FFB800"
  >
    <CinematicComparison
      leftValue="XIAOMI"
      leftLabel="PHONE & GADGET MAKER"
      leftColor="#FFB800"
      rightValue="OPENAI"
      rightLabel="FRONTIER AI LAB"
      rightColor="#10B981"
      separator="VS"
    />
  </SceneLayout>
);

// Beat 3: 18.56s -> 23.76s
export const Beat3: React.FC = () => (
  <SceneLayout
    title="DEEP DIVE BREAKDOWN"
    subtitle="Breaking down the numbers, the models, and how enterprise routing works"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="HOW IT HAPPENED" label="THE DATA & CASE STUDY" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 4: 23.76s -> 28.96s
export const Beat4: React.FC = () => (
  <SceneLayout
    title="WHY WESTERN LABS ARE WORRIED"
    subtitle="When open models become 'close enough' at a fraction of the price"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="THE MARGIN THREAT" label="SCALE VS DEFAULT PREMIUM PRICING" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 5: 28.96s -> 35.52s
export const Beat5: React.FC = () => (
  <SceneLayout
    title="OPENROUTER MARKETPLACE"
    subtitle="Connecting developers and production apps to every major AI API"
    accentColor="#00F0FF"
  >
    <ServerBlade3D
      title="OPENROUTER"
      subtitle="The global API marketplace connecting developers to every major AI model"
      accentColor="#00F0FF"
    />
  </SceneLayout>
);

// Beat 6: 35.52s -> 40.96s
export const Beat6: React.FC = () => (
  <SceneLayout
    title="1 YEAR AGO — TRAFFIC SHARE"
    subtitle="Western models held almost 100% of marketplace API calls"
    accentColor="#FF5A5F"
  >
    <IsometricBarChart3D westernShare={98.5} chineseShare={1.5} />
  </SceneLayout>
);

// Beat 7: 40.96s -> 47.20s
export const Beat7: React.FC = () => (
  <SceneLayout
    title="THE STEADY 12-MONTH FLIP"
    subtitle="Quietly, month after month, developer traffic shifted toward efficient alternatives"
    accentColor="#00F0FF"
  >
    <CinematicComparison
      leftValue="98.5%"
      leftLabel="WESTERN MONOPOLY"
      leftColor="#00F0FF"
      rightValue="STEADY RISE"
      rightLabel="CHINESE OPEN MODELS"
      rightColor="#FFB800"
    />
  </SceneLayout>
);

// Beat 8: 47.20s -> 53.36s
export const Beat8: React.FC = () => (
  <SceneLayout
    title="NO SINGLE HEADLINE MOMENT"
    subtitle="Driven by engineers optimizing daily API costs across production workloads"
    accentColor="#FFB800"
  >
    <CinematicNumber value="STEADY MIGRATION" label="COST-DRIVEN ADOPTION AT SCALE" accentColor="#FFB800" />
  </SceneLayout>
);

// Beat 9: 53.36s -> 58.48s
export const Beat9: React.FC = () => (
  <SceneLayout
    title="TODAY'S MARKETPLACE SHARE"
    subtitle="Chinese providers now command nearly half of all traffic on OpenRouter"
    accentColor="#00F0FF"
  >
    <IsometricBarChart3D westernShare={55.0} chineseShare={45.0} />
  </SceneLayout>
);

// Beat 10: 58.48s -> 64.56s
export const Beat10: React.FC = () => (
  <SceneLayout
    title="WHO DID THIS & WHY?"
    subtitle="Investigating the top companies and models driving the shift"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="WHO & WHY?" label="THE CATALYSTS BEHIND THE 45% SHIFT" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 11: 64.56s -> 70.40s
export const Beat11: React.FC = () => (
  <SceneLayout
    title="THE SURPRISE LEADER"
    subtitle="Yes, the global smartphone and consumer electronics powerhouse"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="XIAOMI" label="CONSUMER HARDWARE & AI POWERHOUSE" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 12: 70.40s -> 78.32s
export const Beat12: React.FC = () => (
  <SceneLayout
    title="XIAOMI ON OPENROUTER"
    subtitle="Bigger than OpenAI's total weekly token volume on the platform"
    accentColor="#FFB800"
  >
    <ServerBlade3D
      title="4.21 TRILLION TOKENS / WK"
      subtitle="Commanding a 21.1% market share on OpenRouter — exceeding traditional frontier labs"
      accentColor="#FFB800"
    />
  </SceneLayout>
);

// Beat 13: 78.32s -> 84.00s
export const Beat13: React.FC = () => (
  <SceneLayout
    title="SIT WITH THAT FOR A SECOND"
    subtitle="A consumer phone brand out-processing traditional US frontier labs"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="21.1% SHARE" label="HARDWARE SCALE MEETS OPEN AI" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 14: 84.00s -> 91.92s
export const Beat14: React.FC = () => (
  <SceneLayout
    title="MODEL SPOTLIGHT"
    subtitle="The model at the center of the open-weight efficiency debate"
    accentColor="#10B981"
  >
    <ServerBlade3D
      title="Z.AI — GLM-5.2"
      subtitle="The open frontier model pushing practical business reasoning at low cost"
      accentColor="#10B981"
    />
  </SceneLayout>
);
