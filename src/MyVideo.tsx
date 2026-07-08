import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  Audio,
  staticFile,
  interpolate,
  spring,
  Img,
} from "remotion";
import subtitlesData from "./subtitles.json";

// Theme configuration matching documentary aesthetics
const THEME = {
  bgWarm: "#f4f3ef",
  accentRed: "#d32f2f",
  accentBlue: "#1976d2",
  textDark: "#1a1a1a",
  textGray: "#555555",
  goldHighlight: "#e65100",
  white: "#ffffff",
};

// Word level subtitle interface
interface SubtitleWord {
  text: string;
  startMs: number;
  endMs: number;
  confidence: number;
}

// Visual state definition
interface Shot {
  startSec: number;
  endSec: number;
  title: string;
  subtitle: string;
  image?: string;
  layout: "center" | "split" | "fullscreen" | "decoy" | "car" | "phone";
  badge?: string;
  color?: string;
}

// ── 100+ HIGHLY RELEVANT VISUAL SHOTS SYNCED WITH VOICEOVER
const SHOTS: Shot[] = [
  {
    startSec: 0.0,
    endSec: 3.6,
    title: "AI MODEL TIERS",
    subtitle: "Why every AI company suddenly has three versions",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 3.6,
    endSec: 4.8,
    title: "THE SAME MODEL",
    subtitle: "A single system split into three layers",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 4.8,
    endSec: 5.82,
    title: "LARGE FLAGSHIP",
    subtitle: "The raw supercomputing powerhouse",
    image: "gpu_core.png",
    layout: "center",
    color: THEME.accentRed,
  },
  {
    startSec: 5.82,
    endSec: 6.56,
    title: "MEDIUM STANDARDS",
    subtitle: "The balanced option for daily work",
    image: "storage_phone.png",
    layout: "center",
    color: THEME.accentBlue,
  },
  {
    startSec: 6.56,
    endSec: 8.04,
    title: "MINI & CHEAP",
    subtitle: "The small, lightning-fast lightweight model",
    image: "cash_stacks.png",
    layout: "center",
    color: THEME.goldHighlight,
  },
  {
    startSec: 8.04,
    endSec: 9.31,
    title: "OPENAI TIERS",
    subtitle: "GPT-4o ➔ GPT-4o mini ➔ GPT-3.5",
    image: "tech_founder_1.png",
    layout: "split",
    badge: "OPENAI",
  },
  {
    startSec: 9.31,
    endSec: 10.56,
    title: "ANTHROPIC TIERS",
    subtitle: "Opus ➔ Sonnet ➔ Haiku",
    image: "tech_founder_2.png",
    layout: "split",
    badge: "ANTHROPIC",
  },
  {
    startSec: 10.56,
    endSec: 11.75,
    title: "GOOGLE TIERS",
    subtitle: "Gemini Ultra ➔ Gemini Pro ➔ Gemini Flash",
    image: "thinking_silhouette.png",
    layout: "split",
    badge: "GOOGLE",
  },
  {
    startSec: 11.75,
    endSec: 14.02,
    title: "POLISHED STORIES",
    subtitle: "Optimized for different needs, different use cases",
    image: "gpu_core.png",
    layout: "center",
  },
  {
    startSec: 14.02,
    endSec: 15.36,
    title: "DIFFERENT CASES",
    subtitle: "Custom-made tiers matching different tasks",
    image: "storage_phone.png",
    layout: "split",
  },
  {
    startSec: 15.36,
    endSec: 17.67,
    title: "OPTIMIZED TECH",
    subtitle: "Or is it just a marketing illusion?",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 17.67,
    endSec: 18.91,
    title: "SOUNDS NICE",
    subtitle: "The official justification makes perfect sense",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 18.91,
    endSec: 20.43,
    title: "BUT IS THAT IT?",
    subtitle: "Let's check the financial reality behind AI",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 20.43,
    endSec: 22.56,
    title: "LET'S THINK",
    subtitle: "Why three instead of just one or two?",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 22.56,
    endSec: 24.92,
    title: "THE SILENT TRUTH",
    subtitle: "What AI executives never say out loud",
    image: "tech_founder_1.png",
    layout: "split",
  },
  {
    startSec: 24.92,
    endSec: 27.85,
    title: "STUPID BILLS",
    subtitle: "Training massive models costs a stupid amount of money",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 27.85,
    endSec: 28.97,
    title: "NOT LAPTOP CASH",
    subtitle: "We're not talking about expensive laptop budgets",
    image: "laptop.png",
    layout: "split",
  },
  {
    startSec: 28.97,
    endSec: 31.06,
    title: "DATA CENTERS",
    subtitle: "We are talking warehouse size server rooms",
    image: "data_center.png",
    layout: "fullscreen",
  },
  {
    startSec: 31.06,
    endSec: 32.91,
    title: "GPU HARDWARE",
    subtitle: "Filled with thousands of burning processors",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 32.91,
    endSec: 35.38,
    title: "CITY POWER GRID",
    subtitle: "Consuming electricity like a whole city",
    image: "data_center.png",
    layout: "center",
  },
  {
    startSec: 35.38,
    endSec: 39.36,
    title: "TRIVIAL ANSWERS",
    subtitle: "All this power just to suggest recipe substitutions",
    image: "thinking_silhouette.png",
    layout: "split",
  },
  {
    startSec: 39.36,
    endSec: 40.59,
    title: "FLAGSHIP MODEL",
    subtitle: "The gold standard flagship models",
    image: "gpu_core.png",
    layout: "center",
  },
  {
    startSec: 40.59,
    endSec: 41.75,
    title: "OPUS / ULTRA",
    subtitle: "The massive neural structures",
    image: "tech_founder_2.png",
    layout: "split",
  },
  {
    startSec: 41.75,
    endSec: 44.96,
    title: "THE BIG ONE",
    subtitle: "Whatever they name it this month",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 44.96,
    endSec: 46.64,
    title: "POWERFUL TECH",
    subtitle: "Genuinely capable and extremely smart",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 46.64,
    endSec: 49.85,
    title: "INSANELY COSTLY",
    subtitle: "Genuinely expensive to compute every single time",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 49.85,
    endSec: 51.55,
    title: "THE ENTER KEY",
    subtitle: "Every time a user presses enter, it costs money",
    image: "laptop.png",
    layout: "split",
  },
  {
    startSec: 51.55,
    endSec: 54.36,
    title: "FREE FLAGSHIP?",
    subtitle: "If every single user got this for free...",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 54.36,
    endSec: 56.56,
    title: "BANKRUPT IN WEEKS",
    subtitle: "The company would crash instantly",
    image: "cash_stacks.png",
    layout: "center",
    color: THEME.accentRed,
  },
  {
    startSec: 56.56,
    endSec: 57.6,
    title: "SIMPLE LOGIC",
    subtitle: "As straightforward as arithmetic",
    image: "thinking_silhouette.png",
    layout: "split",
  },
  {
    startSec: 57.6,
    endSec: 58.89,
    title: "TIER ONE",
    subtitle: "The absolute primary business tier",
    image: "gpu_core.png",
    layout: "center",
  },
  {
    startSec: 58.89,
    endSec: 59.86,
    title: "THE OPERATING LOGIC",
    subtitle: "Pure server operational economics",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 59.86,
    endSec: 61.38,
    title: "PURE ECONOMICS",
    subtitle: "But economics alone doesn't explain three tiers",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 61.38,
    endSec: 63.12,
    title: "GETS INTERESTING",
    subtitle: "Costs explain two tiers, not three",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 63.12,
    endSec: 66.49,
    title: "WHY NOT TWO?",
    subtitle: "It explains rich model, cheap model, done",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 66.49,
    endSec: 69.04,
    title: "RICH vs CHEAP",
    subtitle: "A simple two-tier pricing scale",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 69.04,
    endSec: 70.24,
    title: "THE RICH MODEL",
    subtitle: "High cost flagship layers",
    image: "gpu_core.png",
    layout: "center",
  },
  {
    startSec: 70.24,
    endSec: 70.98,
    title: "THE CHEAP MODEL",
    subtitle: "Low cost lightweight layers",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 70.98,
    endSec: 71.92,
    title: "SO WHY THREE?",
    subtitle: "Why do we always see a middle option?",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 71.92,
    endSec: 75.61,
    title: "IT'S ABOUT YOU",
    subtitle: "It stops being about servers and starts being about psychology",
    image: "tech_founder_1.png",
    layout: "split",
  },
  {
    startSec: 75.61,
    endSec: 76.8,
    title: "HOW YOU THINK",
    subtitle: "How consumer minds process comparative options",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 76.8,
    endSec: 80.53,
    title: "CHOOSING A PLAN",
    subtitle: "The cognitive friction of buying subscriptions",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 80.53,
    endSec: 83.84,
    title: "RESTAURANT MENU",
    subtitle: "Think about how restaurant menus are written",
    image: "pasta.png",
    layout: "decoy",
  },
  {
    startSec: 83.84,
    endSec: 86.72,
    title: "THE SECOND MOST",
    subtitle: "The second most expensive item sells the best",
    image: "steak.png",
    layout: "decoy",
  },
  {
    startSec: 86.72,
    endSec: 89.44,
    title: "NOT AN ACCIDENT",
    subtitle: "This is a carefully engineered design",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 89.44,
    endSec: 91.0,
    title: "THE DECOY",
    subtitle: "Putting an outrageously priced dish at the top",
    image: "steak.png",
    layout: "decoy",
  },
  {
    startSec: 91.0,
    endSec: 94.06,
    title: "$80 STEAK ANCHOR",
    subtitle: "The top item sets the price frame",
    image: "steak.png",
    layout: "decoy",
  },
  {
    startSec: 94.06,
    endSec: 96.8,
    title: "NO EXPECTATION",
    subtitle: "They don't actually expect you to buy it",
    image: "tech_founder_2.png",
    layout: "split",
  },
  {
    startSec: 96.8,
    endSec: 99.92,
    title: "LOOK REASONABLE",
    subtitle: "It exists to make the next option look like a bargain",
    image: "pasta.png",
    layout: "decoy",
  },
  {
    startSec: 99.92,
    endSec: 101.59,
    title: "ANCHORING EFFECT",
    subtitle: "A cognitive reference point strategy",
    image: "anchor.png",
    layout: "split",
  },
  {
    startSec: 101.59,
    endSec: 104.09,
    title: "$80 STEAK",
    subtitle: "Establishing a high benchmark cost",
    image: "steak.png",
    layout: "decoy",
  },
  {
    startSec: 104.09,
    endSec: 107.52,
    title: "$30 PASTA",
    subtitle: "Suddenly feels like an absolute steal",
    image: "pasta.png",
    layout: "decoy",
  },
  {
    startSec: 107.52,
    endSec: 110.67,
    title: "AI COMPANIES DO IT",
    subtitle: "Doing the exact same menu trick",
    image: "storage_phone.png",
    layout: "center",
  },
  {
    startSec: 110.67,
    endSec: 111.85,
    title: "FLAGSHIP TIERS",
    subtitle: "The expensive flagship models",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 111.85,
    endSec: 113.12,
    title: "SLOW & PRICEY",
    subtitle: "Too slow and heavy for most everyday tasks",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 113.12,
    endSec: 113.58,
    title: "OVERKILL",
    subtitle: "Genuinely too much capacity for simple questions",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 113.58,
    endSec: 116.0,
    title: "DAILY DRIVER?",
    subtitle: "It isn't actually meant to be your main choice",
    image: "laptop.png",
    layout: "split",
  },
  {
    startSec: 116.0,
    endSec: 118.72,
    title: "THE MID-TIER",
    subtitle: "Making the balanced option look perfect",
    image: "storage_phone.png",
    layout: "center",
  },
  {
    startSec: 118.72,
    endSec: 119.85,
    title: "BALANCED OPTION",
    subtitle: "The smart, sensible, obvious plan",
    image: "storage_phone.png",
    layout: "center",
    color: THEME.accentBlue,
  },
  {
    startSec: 119.85,
    endSec: 121.44,
    title: "NOT PRO POWER",
    subtitle: "You tell yourself: I don't need all that pro speed",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 121.44,
    endSec: 122.88,
    title: "MID-TIER WIN",
    subtitle: "Exactly what they wanted you to click",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 122.88,
    endSec: 125.51,
    title: "CONGRATULATIONS",
    subtitle: "You just ordered the decoy-pricing option",
    image: "tech_founder_1.png",
    layout: "split",
  },
  {
    startSec: 125.51,
    endSec: 127.12,
    title: "BUDGET TIERS",
    subtitle: "And the cheap models? Not charity either",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 127.96,
    endSec: 133.04,
    title: "THE FREE LEVEL",
    subtitle: "Hooking you into their workflow layout",
    image: "storage_phone.png",
    layout: "phone",
  },
  {
    startSec: 133.04,
    endSec: 134.68,
    title: "FREE TRIALS",
    subtitle: "A trial run disguised as a free model",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 134.68,
    endSec: 137.36,
    title: "HABIT LOOPS",
    subtitle: "Forming the behavior pattern in your daily work",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 137.36,
    endSec: 139.05,
    title: "AI vs GOOGLE",
    subtitle: "Asking the model instead of searching the web",
    image: "laptop.png",
    layout: "split",
  },
  {
    startSec: 139.05,
    endSec: 140.37,
    title: "SECOND NATURE",
    subtitle: "Upgrading becomes a natural next choice",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 140.37,
    endSec: 142.88,
    title: "NATURAL STEP",
    subtitle: "Making upgrading feel seamless and friction-free",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 142.88,
    endSec: 144.83,
    title: "CAR TRIM LAYERS",
    subtitle: "The standard automotive retail strategy",
    image: "basic_car.png",
    layout: "car",
  },
  {
    startSec: 144.83,
    endSec: 147.14,
    title: "BASE MODEL",
    subtitle: "Designed just to get you from point A to B",
    image: "basic_car.png",
    layout: "car",
  },
  {
    startSec: 147.14,
    endSec: 148.64,
    title: "MID RANGE TRIM",
    subtitle: "Adding features you actually care about",
    image: "basic_car.png",
    layout: "car",
  },
  {
    startSec: 148.64,
    endSec: 151.32,
    title: "PREMIUM SPECS",
    subtitle: "Good speakers, comfortable seats, cruise control",
    image: "basic_car.png",
    layout: "car",
  },
  {
    startSec: 151.32,
    endSec: 153.44,
    title: "TOP RANGE SECS",
    subtitle: "Features 90% of drivers will never touch",
    image: "basic_car.png",
    layout: "car",
  },
  {
    startSec: 153.44,
    endSec: 157.63,
    title: "FEELING CHEAP",
    subtitle: "Because nobody wants to feel like the budget buyer",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 157.63,
    endSec: 157.9,
    title: "PHONE STORAGE",
    subtitle: "64 GB vs 256 GB vs 1 TB",
    image: "storage_phone.png",
    layout: "phone",
  },
  {
    startSec: 157.9,
    endSec: 158.96,
    title: "PRICE INCREMENTS",
    subtitle: "Never proportional to the physical cost of flash memory",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 158.96,
    endSec: 160.4,
    title: "MINIMAL COST",
    subtitle: "Adding more flash memory costs the manufacturer pennies",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 160.4,
    endSec: 161.62,
    title: "PSYCHOLOGY GAP",
    subtitle: "Paying for the gap between enough and plenty",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 161.62,
    endSec: 164.08,
    title: "COMPUTE SCALES",
    subtitle: "The model performance difference is real",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 164.08,
    endSec: 164.66,
    title: "ENGINEERED PRICING",
    subtitle: "Calculated to manipulate choices, not reflect costs",
    image: "cash_stacks.png",
    layout: "center",
    color: THEME.accentRed,
  },
  {
    startSec: 164.66,
    endSec: 167.09,
    title: "THE SILENT REASON",
    subtitle: "A quieter rationale behind model architecture",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 167.09,
    endSec: 168.55,
    title: "DIFFERENT TASKS",
    subtitle: "Simple queries don't need complex thinking engines",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 168.55,
    endSec: 170.3,
    title: "SUMMARIZE EMAIL",
    subtitle: "Doesn't require supercomputing mainframe power",
    image: "laptop.png",
    layout: "split",
  },
  {
    startSec: 170.3,
    endSec: 173.42,
    title: "RESEARCH SYSTEMS",
    subtitle: "Needs the flagship horsepower to run search pipelines",
    image: "data_center.png",
    layout: "fullscreen",
  },
  {
    startSec: 173.42,
    endSec: 174.13,
    title: "MATCHING JOBS",
    subtitle: "The tiers do serve a real mechanical function",
    image: "gpu_core.png",
    layout: "center",
  },
  {
    startSec: 174.13,
    endSec: 175.04,
    title: "CHEAP ROUTING",
    subtitle: "Redirecting simple queries to small, cheap models",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 175.04,
    endSec: 176.05,
    title: "SAVING FLAGSHIP POWER",
    subtitle: "Saving heavy compute for hard complex tasks",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 176.05,
    endSec: 179.28,
    title: "EFFICIENT PLUMBING",
    subtitle: "This part is just logical infrastructure layout",
    image: "data_center.png",
    layout: "fullscreen",
  },
  {
    startSec: 179.34,
    endSec: 182.71,
    title: "NOT MANIPULATION",
    subtitle: "But that doesn't explain the marketing",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 182.71,
    endSec: 184.19,
    title: "NOT THE WHOLE STORY",
    subtitle: "If it were purely matching tasks to hardware...",
    image: "gpu_core.png",
    layout: "split",
  },
  {
    startSec: 184.19,
    endSec: 186.64,
    title: "NO PRICING LAYERS",
    subtitle: "We wouldn't see three priced tiers compared on a menu",
    image: "cash_stacks.png",
    layout: "center",
  },
  {
    startSec: 186.64,
    endSec: 188.83,
    title: "AUTOMATIC ROUTING",
    subtitle: "It would all happen invisibly behind the scenes",
    image: "data_center.png",
    layout: "fullscreen",
  },
  {
    startSec: 188.83,
    endSec: 190.87,
    title: "INVISIBLE COMPUTING",
    subtitle: "But they want you to see, choose, and buy",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 190.87,
    endSec: 194.31,
    title: "SHOWING THE TIERS",
    subtitle: "Naming them, pricing them, letting you choose",
    image: "storage_phone.png",
    layout: "phone",
  },
  {
    startSec: 194.31,
    endSec: 194.69,
    title: "NOT COGNITIVE EFFICIENCY",
    subtitle: "This is deliberate retail layout positioning",
    image: "cash_stacks.png",
    layout: "split",
  },
  {
    startSec: 194.69,
    endSec: 195.24,
    title: "IT'S A MENU",
    subtitle: "And menus are never neutral choices",
    image: "steak.png",
    layout: "decoy",
  },
  {
    startSec: 195.24,
    endSec: 197.4,
    title: "DESIGNED MENUS",
    subtitle: "Engineered to drive you directly to the middle tier",
    image: "pasta.png",
    layout: "decoy",
  },
  {
    startSec: 197.4,
    endSec: 198.94,
    title: "THE OBVIOUS CHOICE",
    subtitle: "Steering you to Sonnet, Pro, or Medium options",
    image: "thinking_silhouette.png",
    layout: "center",
  },
  {
    startSec: 198.94,
    endSec: 200.86,
    title: "WHO CHOSE?",
    subtitle: "Ask yourself who really decided what is balanced",
    image: "tech_founder_1.png",
    layout: "split",
  },
  {
    startSec: 200.86,
    endSec: 263.66, // Fills out the remainder of the timeline
    title: "YOUR DECISION?",
    subtitle: "Because it probably wasn't you.",
    image: "thinking_silhouette.png",
    layout: "center",
    color: THEME.accentRed,
  },
];

// ── GLOBAL LAYOUT WRAPPERS FOR DIFFERENT SHOT LAYOUTS

const WidescreenShotLayout: React.FC<{ shot: Shot; frame: number }> = ({
  shot,
  frame,
}) => {
  const imageScale = spring({ frame, fps: 30, config: { damping: 15 } });

  // Center alignment wrapper
  if (shot.layout === "center") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "100px 50px 280px 50px",
        }}
      >
        <h1
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontSize: "110px",
            color: shot.color || THEME.accentRed,
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {shot.title}
        </h1>
        {shot.image && (
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                backgroundColor: "rgba(26,26,26,0.1)",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            />
            <Img
              src={staticFile(shot.image)}
              style={{
                height: "380px",
                objectFit: "contain",
                transform: `scale(${imageScale})`,
              }}
              alt={shot.title}
            />
          </div>
        )}
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "36px",
            fontWeight: "bold",
            color: THEME.textDark,
            textAlign: "center",
            maxWidth: "1000px",
            lineHeight: "1.4",
          }}
        >
          {shot.subtitle}
        </p>
      </div>
    );
  }

  // Split-screen wrapper
  if (shot.layout === "split") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          padding: "100px 80px 280px 80px",
        }}
      >
        {shot.image && (
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                backgroundColor: shot.color || THEME.accentBlue,
                zIndex: -1,
                top: 30,
                left: 20,
              }}
            />
            <Img
              src={staticFile(shot.image)}
              style={{
                height: "480px",
                width: "480px",
                objectFit: "contain",
                transform: `scale(${imageScale})`,
              }}
              alt={shot.title}
            />
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {shot.badge && (
            <div
              style={{
                background: THEME.textDark,
                color: THEME.white,
                padding: "10px 25px",
                fontSize: "24px",
                fontFamily: "Impact, sans-serif",
                alignSelf: "flex-start",
                borderRadius: "5px",
              }}
            >
              {shot.badge}
            </div>
          )}
          <h1
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: "90px",
              color: THEME.textDark,
              textTransform: "uppercase",
              lineHeight: "1.0",
            }}
          >
            {shot.title}
          </h1>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              color: THEME.textGray,
              lineHeight: "1.4",
              maxWidth: "700px",
            }}
          >
            {shot.subtitle}
          </p>
        </div>
      </div>
    );
  }

  // Full-screen / backdrop view
  if (shot.layout === "fullscreen") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {shot.image && (
          <Img
            src={staticFile(shot.image)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.25,
            }}
            alt={shot.title}
          />
        )}
        <div
          style={{
            zIndex: 10,
            textAlign: "center",
            padding: "50px",
            background: "rgba(255, 255, 255, 0.9)",
            border: `5px solid ${THEME.textDark}`,
            borderRadius: "20px",
            boxShadow: "20px 20px 0px rgba(0,0,0,0.15)",
            maxWidth: "1000px",
          }}
        >
          <h1
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: "110px",
              color: THEME.accentRed,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {shot.title}
          </h1>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "40px",
              fontWeight: "bold",
              color: THEME.textDark,
              lineHeight: "1.4",
            }}
          >
            {shot.subtitle}
          </p>
        </div>
      </div>
    );
  }

  // Decoy/Restaurant layout
  if (shot.layout === "decoy") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          padding: "100px 50px 280px 50px",
        }}
      >
        {/* Menu Board card */}
        <div
          style={{
            background: THEME.white,
            border: `5px solid ${THEME.textDark}`,
            borderRadius: "20px",
            width: "480px",
            padding: "35px",
            boxShadow: "15px 15px 0px rgba(0,0,0,0.15)",
          }}
        >
          <h2
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: "38px",
              borderBottom: `3px solid ${THEME.textDark}`,
              paddingBottom: "10px",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            MENU ANCHORING
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border:
                  shot.title.includes("STEAK") || shot.title.includes("DECOY")
                    ? `4px solid ${THEME.accentRed}`
                    : "none",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <span>🥩 $80 STEAK</span>
              <span style={{ color: THEME.accentRed }}>DECOY</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: shot.title.includes("PASTA")
                  ? `4px solid ${THEME.accentBlue}`
                  : "none",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <span>🍝 $30 PASTA</span>
              <span style={{ color: THEME.accentBlue }}>STEAL</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>🥗 $15 SALAD</span>
              <span>CHEAP</span>
            </div>
          </div>
        </div>

        {/* Graphic side */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <h1
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: "80px",
              color: THEME.accentRed,
              textTransform: "uppercase",
            }}
          >
            {shot.title}
          </h1>
          {shot.image && (
            <Img
              src={staticFile(shot.image)}
              style={{
                height: "280px",
                width: "280px",
                objectFit: "contain",
                transform: `scale(${imageScale})`,
                alignSelf: "center",
              }}
              alt={shot.title}
            />
          )}
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "30px",
              fontWeight: "bold",
              color: THEME.textGray,
              maxWidth: "500px",
            }}
          >
            {shot.subtitle}
          </p>
        </div>
      </div>
    );
  }

  // Generic backup layout
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "100px 50px 280px 50px",
      }}
    >
      <h1
        style={{
          fontFamily: "Impact, sans-serif",
          fontSize: "90px",
          color: THEME.textDark,
        }}
      >
        {shot.title}
      </h1>
      <p style={{ fontSize: "36px", fontWeight: "bold" }}>{shot.subtitle}</p>
    </div>
  );
};

// ── MAIN PORTRAIT LAYOUT WRAPPERS (FOR SHORTS / VERTICAL)

const PortraitShotLayout: React.FC<{ shot: Shot; frame: number }> = ({
  shot,
  frame,
}) => {
  const imageScale = spring({ frame, fps: 30, config: { damping: 15 } });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "150px 40px 320px 40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "80px",
          color: shot.color || THEME.accentRed,
          textTransform: "uppercase",
          lineHeight: "1.1",
        }}
      >
        {shot.title}
      </h1>

      {shot.image && (
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: shot.color || "rgba(26,26,26,0.1)",
              zIndex: -1,
              top: 10,
              left: 10,
            }}
          />
          <Img
            src={staticFile(shot.image)}
            style={{
              height: "380px",
              width: "380px",
              objectFit: "contain",
              transform: `scale(${imageScale})`,
            }}
            alt={shot.title}
          />
        </div>
      )}

      <div
        style={{
          background: THEME.white,
          border: `4px solid ${THEME.textDark}`,
          borderRadius: "15px",
          padding: "20px 25px",
          boxShadow: "10px 10px 0px rgba(0,0,0,0.15)",
          width: "100%",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "30px",
            fontWeight: "bold",
            color: THEME.textDark,
            lineHeight: "1.3",
          }}
        >
          {shot.subtitle}
        </p>
      </div>
    </div>
  );
};

// Drifting background texture (Universal)
const UniversalBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const scale = interpolate(frame, [0, 8000], [1.02, 1.15], {
    extrapolateRight: "clamp",
  });
  const xTranslation = interpolate(frame, [0, 8000], [0, -40], {
    extrapolateRight: "clamp",
  });

  return (
    <Img
      src={staticFile("grunge_background.png")}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        objectFit: "cover",
        transform: `scale(${scale}) translate(${xTranslation}px, 0px)`,
        zIndex: 0,
      }}
    />
  );
};

// Kinetic typography engine optimized for giant readability
const DynamicSubtitles: React.FC<{ currentTime: number }> = ({
  currentTime,
}) => {
  const { width, height } = useVideoConfig();
  const isWidescreen = width > height;

  const currentMs = currentTime * 1000;

  // Find active words in a 3.5-second window
  const activeWords = (subtitlesData as SubtitleWord[]).filter(
    (w) => currentMs >= w.startMs - 350 && currentMs <= w.endMs + 350
  );

  // Find current active word
  const activeWord = (subtitlesData as SubtitleWord[]).find(
    (w) => currentMs >= w.startMs && currentMs <= w.endMs
  );

  if (activeWords.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: isWidescreen ? "80px" : "200px",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
        padding: "0 40px",
      }}
    >
      <div
        style={{
          background: "rgba(26, 26, 26, 0.9)",
          padding: isWidescreen ? "15px 35px" : "25px 45px",
          borderRadius: "30px",
          border: "2px solid #333",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isWidescreen ? "10px" : "15px",
          maxWidth: isWidescreen ? "1200px" : "900px",
        }}
      >
        {activeWords.map((word, idx) => {
          const isActive = activeWord?.text === word.text;
          return (
            <span
              key={`${word.text}-${idx}`}
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                fontSize: isWidescreen ? "54px" : "68px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: isActive ? THEME.goldHighlight : "#ffffff",
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? "1.1" : "1.0",
                transformOrigin: "center",
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// ── MAIN COMPOSITION ENGINE

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isWidescreen = width > height;

  const currentSec = frame / 30;

  // Find the active visual shot based on current elapsed seconds
  const activeShot =
    SHOTS.find(
      (shot) => currentSec >= shot.startSec && currentSec < shot.endSec
    ) || SHOTS[0];

  // Local frame count of the active shot for internal animations (e.g. spring)
  const localFrame = frame - Math.floor(activeShot.startSec * 30);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: THEME.bgWarm,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 1. Drift background texture */}
      <UniversalBackground />

      {/* 2. Render active scene layout */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        {isWidescreen ? (
          <WidescreenShotLayout shot={activeShot} frame={localFrame} />
        ) : (
          <PortraitShotLayout shot={activeShot} frame={localFrame} />
        )}
      </div>

      {/* 3. Sync Dynamic Subtitles */}
      <DynamicSubtitles currentTime={currentSec} />

      {/* 4. Render main voiceover track */}
      <Audio src={staticFile("Ai Models.m4a")} />
    </div>
  );
};