import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import { RouterNetwork3D, ServerBlade3D } from "../design/Vectors3D";

// Beat 15: 91.92s -> 97.12s
export const Beat15: React.FC = () => (
  <SceneLayout
    title="CATCHING UP WHERE IT MATTERS"
    subtitle="Enterprise value is measured by cost per solved task, not academic leaderboards"
    accentColor="#10B981"
  >
    <CinematicComparison
      leftValue="THEORY"
      leftLabel="SYNTHETIC LEADERBOARDS"
      leftColor="#00F0FF"
      rightValue="BUSINESS ROI"
      rightLabel="RELIABILITY, LATENCY & COST"
      rightColor="#10B981"
      separator="VS"
    />
  </SceneLayout>
);

// Beat 16: 97.12s -> 104.32s
export const Beat16: React.FC = () => (
  <SceneLayout
    title="CLOSE ENOUGH AT A FRACTION OF THE COST"
    subtitle="Delivering top-tier practical reasoning without premium API rates"
    accentColor="#FFB800"
  >
    <CinematicComparison
      leftValue="100% IQ"
      leftLabel="PREMIUM US FRONTIER PRICING"
      leftColor="#00F0FF"
      rightValue="95% IQ"
      rightLabel="FRACTION OF THE COST"
      rightColor="#FFB800"
      separator="VS"
    />
  </SceneLayout>
);

// Beat 17: 104.32s -> 109.92s
export const Beat17: React.FC = () => (
  <SceneLayout
    title="THE TIPPING POINT"
    subtitle="When capability delta shrinks to <5%, token price becomes the decisive metric"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="PRICE IS KING" label="WHEN QUALITY IS CLOSE ENOUGH" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 18: 109.92s -> 114.88s
export const Beat18: React.FC = () => (
  <SceneLayout
    title="REAL-WORLD ENTERPRISE CASE STUDY"
    subtitle="The concrete example that shows how companies are applying this today"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="REAL WORLD PROOF" label="FROM THEORY TO PRODUCTION" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 19: 114.88s -> 119.84s
export const Beat19: React.FC = () => (
  <SceneLayout
    title="CASE STUDY: COINBASE"
    subtitle="Shifted major production AI workloads to cost-efficient open models"
    accentColor="#FFB800"
  >
    <ServerBlade3D
      title="COINBASE"
      subtitle="Production multi-model architecture scaling API throughput"
      accentColor="#FFB800"
    />
  </SceneLayout>
);

// Beat 20: 119.84s -> 125.04s
export const Beat20: React.FC = () => (
  <SceneLayout
    title="THE AUTOMATED MODEL ROUTER"
    subtitle="No manual switching — an intelligent 3D routing pipeline inspects and assigns every prompt"
    accentColor="#00F0FF"
  >
    <RouterNetwork3D />
  </SceneLayout>
);

// Beat 21: 125.04s -> 129.68s
export const Beat21: React.FC = () => (
  <SceneLayout
    title="ROUTING BY COMPLEXITY & COST"
    subtitle="Simple jobs hit efficient models; extreme edge cases hit frontier APIs"
    accentColor="#10B981"
  >
    <CinematicComparison
      leftValue="90%"
      leftLabel="ROUTINE WORK ➜ EFFICIENT MODELS"
      leftColor="#10B981"
      rightValue="10%"
      rightLabel="EDGE CASES ➜ FRONTIER MODELS"
      rightColor="#FFB800"
      separator="+"
    />
  </SceneLayout>
);

// Beat 22: 129.68s -> 135.28s
export const Beat22: React.FC = () => (
  <SceneLayout
    title="COINBASE FINANCIAL OUTCOME"
    subtitle="Total token volume surged while monthly cloud AI bill dropped in half"
    accentColor="#10B981"
  >
    <CinematicComparison
      leftValue="-50%"
      leftLabel="TOTAL AI SPEND"
      leftColor="#10B981"
      rightValue="+UP"
      rightLabel="TOTAL AI USAGE"
      rightColor="#00F0FF"
      separator="&"
    />
  </SceneLayout>
);

// Beat 23: 135.28s -> 141.52s
export const Beat23: React.FC = () => (
  <SceneLayout
    title="SPENDING DOWN. USAGE UP."
    subtitle="Why paying default premium prices across the board is unsustainable"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="-50% SPEND / +USAGE" label="THE NEW ENTERPRISE ROI STANDARD" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 24: 141.52s -> 146.96s
export const Beat24: React.FC = () => (
  <SceneLayout
    title="TASK-LEVEL ROUTING"
    subtitle="Match the cost of the model directly to the economic value of the task"
    accentColor="#FFB800"
  >
    <CinematicNumber value="GRANULAR ROUTING" label="RIGHT-SIZING EVERY AI WORKLOAD" accentColor="#FFB800" />
  </SceneLayout>
);

// Beat 25: 146.96s -> 152.08s
export const Beat25: React.FC = () => (
  <SceneLayout
    title="THE OLD RULE"
    subtitle='"Pay for the biggest, most expensive model every time for everything"'
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="1 MODEL FOR ALL" label="LEGACY ENTERPRISE PARADIGM (BROKEN)" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 26: 152.08s -> 158.16s
export const Beat26: React.FC = () => (
  <SceneLayout
    title="THAT RULE IS BREAKING"
    subtitle="Efficient models now handle 90% of daily production tasks effortlessly"
    accentColor="#10B981"
  >
    <CinematicNumber value="SMART ENOUGH" label="DECOUPLING DAILY WORKLOADS FROM FRONTIER PRICING" accentColor="#10B981" />
  </SceneLayout>
);

// Beat 27: 158.16s -> 164.24s
export const Beat27: React.FC = () => (
  <SceneLayout
    title="THE NEW QUESTION"
    subtitle="Shifting from pure leaderboard rank to practical cost-efficiency"
    accentColor="#00F0FF"
  >
    <CinematicComparison
      leftValue="SMARTEST?"
      leftLabel="OLD QUESTION"
      leftColor="#FF5A5F"
      rightValue="BEST ROI?"
      rightLabel="NEW QUESTION"
      rightColor="#00F0FF"
      separator="➜"
    />
  </SceneLayout>
);

// Beat 28: 164.24s -> 169.92s
export const Beat28: React.FC = () => (
  <SceneLayout
    title="THE MARGIN SQUEEZE"
    subtitle="Challenging high default pricing as enterprise customers adopt dynamic routing"
    accentColor="#FFB800"
  >
    <CinematicNumber value="MARGIN PRESSURE" label="DEFAULT PREMIUM PRICING CHALLENGED" accentColor="#FFB800" />
  </SceneLayout>
);

// Beat 29: 169.92s -> 175.36s
export const Beat29: React.FC = () => (
  <SceneLayout
    title="THE ENTERPRISE BLUEPRINT"
    subtitle="Routine work ➜ Efficient models | Extreme edge cases ➜ Frontier APIs"
    accentColor="#00F0FF"
  >
    <RouterNetwork3D />
  </SceneLayout>
);
