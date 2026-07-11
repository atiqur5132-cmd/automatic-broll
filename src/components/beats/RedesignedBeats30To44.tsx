import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";

// Beat 30: 175.36s -> 182.16s
// Audio: "that premium pricing gets a lot harder to justify across the board."
export const Beat30: React.FC = () => (
  <SceneLayout
    title="HARDER TO JUSTIFY PREMIUMS"
    subtitle="Re-evaluating AI software spending across the entire tech industry"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="INDUSTRY SHIFT" label="ENTERPRISE AI BUDGET OPTIMIZATION" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 31: 182.16s -> 187.20s
// Audio: "Now before you go, if this kind of shift is something you want to actually track as it unfolds..."
export const Beat31: React.FC = () => (
  <SceneLayout
    title="TRACKING AI SHIFTS IN REAL TIME"
    subtitle="Stay ahead of structural AI industry moves before they hit mainstream headlines"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="REAL-TIME TELEMETRY" label="DATA-FIRST INDUSTRY BREAKDOWNS" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 32: 187.20s -> 192.56s
// Audio: "instead of catching it three months later in a headline, that's exactly what this channel is for."
export const Beat32: React.FC = () => (
  <SceneLayout
    title="BEFORE THE HEADLINES"
    subtitle="Analyzing developer API telemetry and enterprise architectures as they happen"
    accentColor="#10B981"
  >
    <CinematicComparison
      leftValue="3 MONTHS LATER"
      leftLabel="MAINSTREAM HEADLINES"
      leftColor="#FF5A5F"
      rightValue="REAL-TIME"
      rightLabel="THIS CHANNEL"
      rightColor="#10B981"
      separator="VS"
    />
  </SceneLayout>
);

// Beat 33: 192.56s -> 196.72s
// Audio: "I'm breaking down these AI industry moves as they happen. So if that's useful to you..."
export const Beat33: React.FC = () => (
  <SceneLayout
    title="AI INDUSTRY BREAKDOWNS"
    subtitle="Clear visual essays on the technology and economics reshaping our industry"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="DEEP DIVES" label="TECH, INFRASTRUCTURE & ECONOMICS" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 34: 196.72s -> 201.60s
// Audio: "subscribing means you won't miss the next one because here's what I keep coming back to."
export const Beat34: React.FC = () => (
  <SceneLayout
    title="JOIN THE COMMUNITY"
    subtitle="Subscribe so you won't miss our next data-driven AI breakdown"
    accentColor="#FFB800"
  >
    <CinematicNumber value="SUBSCRIBE" label="NEVER MISS AN EPISODE" accentColor="#FFB800" />
  </SceneLayout>
);

// Beat 35: 201.60s -> 205.44s
// Audio: "Raw performance probably still matters for the hardest problems out there..."
export const Beat35: React.FC = () => (
  <SceneLayout
    title="THE TOP 10% OF WORKLOADS"
    subtitle="Frontier models remain irreplaceable for breakthrough math and scientific research"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="FRONTIER CAPABILITY" label="MAXIMUM IQ FOR COMPLEX PROBLEMS" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 36: 205.44s -> 210.24s
// Audio: "but for the huge, unglamorous majority of everyday AI work, the stuff that actually runs the world's businesses..."
export const Beat36: React.FC = () => (
  <SceneLayout
    title="THE OTHER 90% OF EVERYDAY WORK"
    subtitle="The routine tasks that actually run production business software"
    accentColor="#10B981"
  >
    <CinematicNumber value="EVERYDAY AI" label="DATA EXTRACTION, SUMMARIES & ROUTINE LOGIC" accentColor="#10B981" />
  </SceneLayout>
);

// Beat 37: 210.24s -> 215.04s
// Audio: "cost efficiency might end up mattering just as much. Maybe more."
export const Beat37: React.FC = () => (
  <SceneLayout
    title="THE EQUALIZER"
    subtitle="At enterprise scale, cost efficiency matters just as much as raw capability"
    accentColor="#FFB800"
  >
    <CinematicComparison
      leftValue="RAW IQ"
      leftLabel="FRONTIER CAPABILITY"
      leftColor="#00F0FF"
      rightValue="COST / TASK"
      rightLabel="ECONOMIC EFFICIENCY"
      rightColor="#FFB800"
      separator="="
    />
  </SceneLayout>
);

// Beat 38: 215.04s -> 218.96s
// Audio: "So the real question isn't who builds the smartest model anymore."
export const Beat38: React.FC = () => (
  <SceneLayout
    title="BEYOND BENCHMARK IQ"
    subtitle="The race is no longer just about who builds the smartest model"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="VALUE PER DOLLAR" label="THE NEW COMPETITIVE BATTLEGROUND" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 39: 218.96s -> 223.76s
// Audio: "It's whether smart enough and dramatically cheaper quietly becomes the thing that actually wins this race."
export const Beat39: React.FC = () => (
  <SceneLayout
    title="THE WINNING FORMULA?"
    subtitle="Could smart enough and dramatically cheaper quietly win the global AI race?"
    accentColor="#10B981"
  >
    <CinematicComparison
      leftValue="SMART ENOUGH"
      leftLabel="95% FRONTIER QUALITY"
      leftColor="#00F0FF"
      rightValue="-80% COST"
      rightLabel="DRAMATICALLY CHEAPER"
      rightColor="#10B981"
      separator="+"
    />
  </SceneLayout>
);

// Beat 40: 223.76s -> 229.36s
// Audio: "What do you think? Is that a race the big US labs can still win on their current pricing?"
export const Beat40: React.FC = () => (
  <SceneLayout
    title="WHAT DO YOU THINK?"
    subtitle="Can US frontier labs win on their current pricing models?"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="YOUR TAKE" label="FRONTIER CAPABILITY VS PRICE ROUTING" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 41: 229.36s -> 235.20s
// Audio: "Let me know down in the comments. I want to see where people actually stand on this."
export const Beat41: React.FC = () => (
  <SceneLayout
    title="LET ME KNOW IN THE COMMENTS"
    subtitle="Where do you stand on open frontier models vs premium APIs?"
    accentColor="#FFB800"
  >
    <CinematicNumber value="COMMENT BELOW" label="JOIN THE COMMUNITY DEBATE" accentColor="#FFB800" />
  </SceneLayout>
);

// Beat 42: 235.20s -> 240.96s
// Audio: "Thanks for watching. See you in the next one."
export const Beat42: React.FC = () => (
  <SceneLayout
    title="THANKS FOR WATCHING"
    subtitle="See you in the next deep dive"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="THANK YOU" label="AI INDUSTRY TELEMETRY" accentColor="#00F0FF" />
  </SceneLayout>
);

// Beat 43: 240.96s -> 246.32s
export const Beat43: React.FC = () => (
  <SceneLayout
    title="SUBSCRIBE FOR MORE"
    subtitle="Weekly data-driven essays on AI infrastructure and economics"
    accentColor="#FF5A5F"
  >
    <CinematicNumber value="SUBSCRIBE" label="NEVER MISS AN EPISODE" accentColor="#FF5A5F" />
  </SceneLayout>
);

// Beat 44: 246.32s -> 251.38s
export const Beat44: React.FC = () => (
  <SceneLayout
    title="REPORT ARCHIVED"
    subtitle="Data sourced from OpenRouter developer telemetry"
    accentColor="#00F0FF"
  >
    <CinematicNumber value="END OF REPORT" label="SEE YOU IN THE NEXT BREAKDOWN" accentColor="#00F0FF" />
  </SceneLayout>
);
