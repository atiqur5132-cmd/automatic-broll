import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  Audio,
  staticFile,
  interpolate,
  spring,
  random,
} from "remotion";
import { loadFont as loadSpaceGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadPlusJakartaSans } from "@remotion/google-fonts/PlusJakartaSans";

const { fontFamily: displayFont } = loadSpaceGrotesk("normal", {
  weights: ["700"],
  subsets: ["latin"],
});

const { fontFamily: bodyFont } = loadPlusJakartaSans("normal", {
  weights: ["500", "600"],
  subsets: ["latin"],
});

// Theme configuration optimized for futuristic dark tech look
const THEME = {
  bgDark: "#030712",
  white: "#ffffff",
  textDark: "#1a1a1a",
  bgGradient: "radial-gradient(circle, #0b1528 0%, #030712 100%)",
  neonRed: "#ef4444",
  neonBlue: "#3b82f6",
  neonCyan: "#06b6d4",
  neonGold: "#eab308",
  textLight: "#f9fafb",
  textGray: "#9ca3af",
};

// Kinetic typography helper with staggered reveal & blur-to-focus
const AnimatedText: React.FC<{
  text: string;
  frame: number;
  fontSize?: number;
  color?: string;
  isTitle?: boolean;
}> = ({ text, frame, fontSize = 48, color = THEME.white, isTitle = true }) => {
  const words = text.split(" ");
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.3em",
        fontFamily: isTitle ? displayFont : bodyFont,
        fontWeight: isTitle ? 700 : 500,
        fontSize,
        color,
        lineHeight: 1.15,
        textShadow: isTitle ? `0 0 35px ${color}44` : "none",
        letterSpacing: isTitle ? "-0.02em" : "0em",
      }}
    >
      {words.map((word, i) => {
        const progress = spring({
          frame: Math.max(0, frame - i * 2),
          fps: 30,
          config: { damping: 14, stiffness: 130 },
        });
        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateY = interpolate(progress, [0, 1], [22, 0]);
        const blur = interpolate(progress, [0, 1], [10, 0]);
        const scale = interpolate(progress, [0, 1], [0.9, 1]);

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px) scale(${scale})`,
              filter: `blur(${blur}px)`,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

// Shot configuration
interface Shot {
  startSec: number;
  endSec: number;
  title: string;
  subtitle: string;
  graphic:
    | "pyramid"
    | "logo_openai"
    | "logo_anthropic"
    | "logo_google"
    | "gears"
    | "servers"
    | "laptop"
    | "city_power"
    | "recipe_chat"
    | "menu_decoy"
    | "anchor"
    | "phone_storage"
    | "car"
    | "brain"
    | "scale"
    | "geopolitics"
    | "bankruptcy";
  color?: string;
  badge?: string;
}

// ── 100+ HIGHLY RELEVANT MOTION GRAPHICS SHOTS SYNCED WITH AUDIO TIMINGS
const SHOTS: Shot[] = [
  {
    startSec: 0.0,
    endSec: 3.6,
    title: "AI MODEL TIERS",
    subtitle: "Why every AI company suddenly has three versions",
    graphic: "pyramid",
  },
  {
    startSec: 3.6,
    endSec: 4.8,
    title: "THE SAME MODEL",
    subtitle: "A single system split into three separate layers",
    graphic: "servers",
  },
  {
    startSec: 4.8,
    endSec: 5.82,
    title: "LARGE FLAGSHIP",
    subtitle: "The raw supercomputing powerhouse",
    graphic: "pyramid",
    color: THEME.neonRed,
  },
  {
    startSec: 5.82,
    endSec: 6.56,
    title: "MEDIUM STANDARDS",
    subtitle: "The balanced option for daily workflow tasks",
    graphic: "pyramid",
    color: THEME.neonBlue,
  },
  {
    startSec: 6.56,
    endSec: 8.04,
    title: "MINI / CHEAP TIER",
    subtitle: "The small, lightning-fast lightweight model",
    graphic: "pyramid",
    color: THEME.neonCyan,
  },
  {
    startSec: 8.04,
    endSec: 9.31,
    title: "OPENAI TIERS",
    subtitle: "GPT-4o ➔ GPT-4o mini ➔ GPT-3.5",
    graphic: "logo_openai",
    badge: "OPENAI",
  },
  {
    startSec: 9.31,
    endSec: 10.56,
    title: "ANTHROPIC TIERS",
    subtitle: "Opus ➔ Sonnet ➔ Haiku",
    graphic: "logo_anthropic",
    badge: "ANTHROPIC",
  },
  {
    startSec: 10.56,
    endSec: 11.75,
    title: "GOOGLE TIERS",
    subtitle: "Gemini Ultra ➔ Gemini Pro ➔ Gemini Flash",
    graphic: "logo_google",
    badge: "GOOGLE",
  },
  {
    startSec: 11.75,
    endSec: 14.02,
    title: "POLISHED STORIES",
    subtitle: "Optimized for different needs, different use cases",
    graphic: "gears",
  },
  {
    startSec: 14.02,
    endSec: 15.36,
    title: "DIFFERENT CASES",
    subtitle: "Custom-made tiers matching different tasks",
    graphic: "servers",
  },
  {
    startSec: 15.36,
    endSec: 17.67,
    title: "OPTIMIZED TECH",
    subtitle: "Or is it just a marketing illusion?",
    graphic: "brain",
  },
  {
    startSec: 17.67,
    endSec: 18.91,
    title: "SOUNDS NICE",
    subtitle: "The official justification makes perfect sense",
    graphic: "scale",
  },
  {
    startSec: 18.91,
    endSec: 20.43,
    title: "BUT IS THAT IT?",
    subtitle: "Let's check the financial reality behind AI",
    graphic: "brain",
  },
  {
    startSec: 20.43,
    endSec: 22.56,
    title: "LET'S THINK",
    subtitle: "Why three instead of just one or two?",
    graphic: "pyramid",
  },
  {
    startSec: 22.56,
    endSec: 24.92,
    title: "THE SILENT TRUTH",
    subtitle: "What AI executives never say out loud",
    graphic: "brain",
  },
  {
    startSec: 24.92,
    endSec: 27.85,
    title: "STUPID BILLS",
    subtitle: "Training massive models costs a stupid amount of money",
    graphic: "bankruptcy",
  },
  {
    startSec: 27.85,
    endSec: 28.97,
    title: "NOT LAPTOP CASH",
    subtitle: "We're not talking about expensive laptop budgets",
    graphic: "laptop",
  },
  {
    startSec: 28.97,
    endSec: 31.06,
    title: "DATA CENTERS",
    subtitle: "We are talking warehouse size server rooms",
    graphic: "servers",
  },
  {
    startSec: 31.06,
    endSec: 32.91,
    title: "GPU HARDWARE",
    subtitle: "Filled with thousands of burning processors",
    graphic: "gears",
  },
  {
    startSec: 32.91,
    endSec: 35.38,
    title: "CITY POWER GRID",
    subtitle: "Consuming electricity like a whole city",
    graphic: "city_power",
  },
  {
    startSec: 35.38,
    endSec: 39.36,
    title: "TRIVIAL ANSWERS",
    subtitle: "All this power just to suggest recipe substitutions",
    graphic: "recipe_chat",
  },
  {
    startSec: 39.36,
    endSec: 40.59,
    title: "FLAGSHIP MODEL",
    subtitle: "The gold standard flagship models",
    graphic: "pyramid",
    color: THEME.neonGold,
  },
  {
    startSec: 40.59,
    endSec: 41.75,
    title: "OPUS / ULTRA",
    subtitle: "The massive neural structures",
    graphic: "brain",
  },
  {
    startSec: 41.75,
    endSec: 44.96,
    title: "THE BIG ONE",
    subtitle: "Whatever they name it this month",
    graphic: "pyramid",
  },
  {
    startSec: 44.96,
    endSec: 46.64,
    title: "POWERFUL TECH",
    subtitle: "Genuinely capable and extremely smart",
    graphic: "gears",
  },
  {
    startSec: 46.64,
    endSec: 49.85,
    title: "INSANELY COSTLY",
    subtitle: "Genuinely expensive to compute every single time",
    graphic: "bankruptcy",
  },
  {
    startSec: 49.85,
    endSec: 51.55,
    title: "THE ENTER KEY",
    subtitle: "Every time a user presses enter, it costs money",
    graphic: "laptop",
  },
  {
    startSec: 51.55,
    endSec: 54.36,
    title: "FREE FLAGSHIP?",
    subtitle: "If every single user got this for free...",
    graphic: "scale",
  },
  {
    startSec: 54.36,
    endSec: 56.56,
    title: "BANKRUPT IN WEEKS",
    subtitle: "The company would crash instantly",
    graphic: "bankruptcy",
    color: THEME.neonRed,
  },
  {
    startSec: 56.56,
    endSec: 57.6,
    title: "SIMPLE LOGIC",
    subtitle: "As straightforward as arithmetic",
    graphic: "scale",
  },
  {
    startSec: 57.6,
    endSec: 58.89,
    title: "TIER ONE",
    subtitle: "The absolute primary business tier",
    graphic: "pyramid",
  },
  {
    startSec: 58.89,
    endSec: 59.86,
    title: "THE OPERATING LOGIC",
    subtitle: "Pure server operational economics",
    graphic: "servers",
  },
  {
    startSec: 59.86,
    endSec: 61.38,
    title: "PURE ECONOMICS",
    subtitle: "But economics alone doesn't explain three tiers",
    graphic: "bankruptcy",
  },
  {
    startSec: 61.38,
    endSec: 63.12,
    title: "GETS INTERESTING",
    subtitle: "Costs explain two tiers, not three",
    graphic: "brain",
  },
  {
    startSec: 63.12,
    endSec: 66.49,
    title: "WHY NOT TWO?",
    subtitle: "It explains rich model, cheap model, done",
    graphic: "scale",
  },
  {
    startSec: 66.49,
    endSec: 69.04,
    title: "RICH vs CHEAP",
    subtitle: "A simple two-tier pricing scale",
    graphic: "pyramid",
  },
  {
    startSec: 69.04,
    endSec: 70.24,
    title: "THE RICH MODEL",
    subtitle: "High cost flagship layers",
    graphic: "pyramid",
    color: THEME.neonRed,
  },
  {
    startSec: 70.24,
    endSec: 70.98,
    title: "THE CHEAP MODEL",
    subtitle: "Low cost lightweight layers",
    graphic: "pyramid",
    color: THEME.neonCyan,
  },
  {
    startSec: 70.98,
    endSec: 71.92,
    title: "SO WHY THREE?",
    subtitle: "Why do we always see a middle option?",
    graphic: "brain",
  },
  {
    startSec: 71.92,
    endSec: 75.61,
    title: "IT'S ABOUT YOU",
    subtitle: "It stops being about servers and starts being about psychology",
    graphic: "brain",
  },
  {
    startSec: 75.61,
    endSec: 76.8,
    title: "HOW YOU THINK",
    subtitle: "How consumer minds process comparative options",
    graphic: "brain",
  },
  {
    startSec: 76.8,
    endSec: 80.53,
    title: "CHOOSING A PLAN",
    subtitle: "The cognitive friction of buying subscriptions",
    graphic: "scale",
  },
  {
    startSec: 80.53,
    endSec: 83.84,
    title: "RESTAURANT MENU",
    subtitle: "Think about how restaurant menus are written",
    graphic: "menu_decoy",
  },
  {
    startSec: 83.84,
    endSec: 86.72,
    title: "THE SECOND MOST",
    subtitle: "The second most expensive item sells the best",
    graphic: "menu_decoy",
  },
  {
    startSec: 86.72,
    endSec: 89.44,
    title: "NOT AN ACCIDENT",
    subtitle: "This is a carefully engineered design",
    graphic: "brain",
  },
  {
    startSec: 89.44,
    endSec: 91.0,
    title: "THE DECOY",
    subtitle: "Putting an outrageously priced dish at the top",
    graphic: "menu_decoy",
  },
  {
    startSec: 91.0,
    endSec: 94.06,
    title: "$80 STEAK ANCHOR",
    subtitle: "The top item sets the price frame",
    graphic: "menu_decoy",
  },
  {
    startSec: 94.06,
    endSec: 96.8,
    title: "NO EXPECTATION",
    subtitle: "They don't actually expect you to buy it",
    graphic: "scale",
  },
  {
    startSec: 96.8,
    endSec: 99.92,
    title: "LOOK REASONABLE",
    subtitle: "It exists to make the next option look like a bargain",
    graphic: "menu_decoy",
  },
  {
    startSec: 99.92,
    endSec: 101.59,
    title: "ANCHORING EFFECT",
    subtitle: "A cognitive reference point strategy",
    graphic: "anchor",
  },
  {
    startSec: 101.59,
    endSec: 104.09,
    title: "$80 STEAK",
    subtitle: "Establishing a high benchmark cost",
    graphic: "menu_decoy",
  },
  {
    startSec: 104.09,
    endSec: 107.52,
    title: "$30 PASTA",
    subtitle: "Suddenly feels like an absolute steal",
    graphic: "menu_decoy",
  },
  {
    startSec: 107.52,
    endSec: 110.67,
    title: "AI COMPANIES DO IT",
    subtitle: "Doing the exact same menu trick",
    graphic: "phone_storage",
  },
  {
    startSec: 110.67,
    endSec: 111.85,
    title: "FLAGSHIP TIERS",
    subtitle: "The expensive flagship models",
    graphic: "pyramid",
  },
  {
    startSec: 111.85,
    endSec: 113.12,
    title: "SLOW & PRICEY",
    subtitle: "Too slow and heavy for most everyday tasks",
    graphic: "servers",
  },
  {
    startSec: 113.12,
    endSec: 113.58,
    title: "OVERKILL",
    subtitle: "Genuinely too much capacity for simple questions",
    graphic: "brain",
  },
  {
    startSec: 113.58,
    endSec: 116.0,
    title: "DAILY DRIVER?",
    subtitle: "It isn't actually meant to be your main choice",
    graphic: "laptop",
  },
  {
    startSec: 116.0,
    endSec: 118.72,
    title: "THE MID-TIER",
    subtitle: "Making the balanced option look perfect",
    graphic: "phone_storage",
  },
  {
    startSec: 118.72,
    endSec: 119.85,
    title: "BALANCED OPTION",
    subtitle: "The smart, sensible, obvious plan",
    graphic: "phone_storage",
    color: THEME.neonBlue,
  },
  {
    startSec: 119.85,
    endSec: 121.44,
    title: "NOT PRO POWER",
    subtitle: "You tell yourself: I don't need all that pro speed",
    graphic: "brain",
  },
  {
    startSec: 121.44,
    endSec: 122.88,
    title: "MID-TIER WIN",
    subtitle: "Exactly what they wanted you to click",
    graphic: "scale",
  },
  {
    startSec: 122.88,
    endSec: 125.51,
    title: "CONGRATULATIONS",
    subtitle: "You just ordered the decoy-pricing option",
    graphic: "brain",
  },
  {
    startSec: 125.51,
    endSec: 127.12,
    title: "BUDGET TIERS",
    subtitle: "And the cheap models? Not charity either",
    graphic: "bankruptcy",
  },
  {
    startSec: 127.96,
    endSec: 133.04,
    title: "THE FREE LEVEL",
    subtitle: "Hooking you into their workflow layout",
    graphic: "phone_storage",
  },
  {
    startSec: 133.04,
    endSec: 134.68,
    title: "FREE TRIALS",
    subtitle: "A trial run disguised as a free model",
    graphic: "bankruptcy",
  },
  {
    startSec: 134.68,
    endSec: 137.36,
    title: "HABIT LOOPS",
    subtitle: "Forming the behavior pattern in your daily work",
    graphic: "brain",
  },
  {
    startSec: 137.36,
    endSec: 139.05,
    title: "AI vs GOOGLE",
    subtitle: "Asking the model instead of searching the web",
    graphic: "laptop",
  },
  {
    startSec: 139.05,
    endSec: 140.37,
    title: "SECOND NATURE",
    subtitle: "Upgrading becomes a natural next choice",
    graphic: "brain",
  },
  {
    startSec: 140.37,
    endSec: 142.88,
    title: "NATURAL STEP",
    subtitle: "Making upgrading feel seamless and friction-free",
    graphic: "scale",
  },
  {
    startSec: 142.88,
    endSec: 144.83,
    title: "CAR TRIM LAYERS",
    subtitle: "The standard automotive retail strategy",
    graphic: "car",
  },
  {
    startSec: 144.83,
    endSec: 147.14,
    title: "BASE MODEL",
    subtitle: "Designed just to get you from point A to B",
    graphic: "car",
  },
  {
    startSec: 147.14,
    endSec: 148.64,
    title: "MID RANGE TRIM",
    subtitle: "Adding features you actually care about",
    graphic: "car",
  },
  {
    startSec: 148.64,
    endSec: 151.32,
    title: "PREMIUM SPECS",
    subtitle: "Good speakers, comfortable seats, cruise control",
    graphic: "car",
  },
  {
    startSec: 151.32,
    endSec: 153.44,
    title: "TOP RANGE SECS",
    subtitle: "Features 90% of drivers will never touch",
    graphic: "car",
  },
  {
    startSec: 153.44,
    endSec: 157.63,
    title: "FEELING CHEAP",
    subtitle: "Because nobody wants to feel like the budget buyer",
    graphic: "brain",
  },
  {
    startSec: 157.63,
    endSec: 157.9,
    title: "PHONE STORAGE",
    subtitle: "64 GB vs 256 GB vs 1 TB",
    graphic: "phone_storage",
  },
  {
    startSec: 157.9,
    endSec: 158.96,
    title: "PRICE INCREMENTS",
    subtitle: "Never proportional to the physical cost of flash memory",
    graphic: "bankruptcy",
  },
  {
    startSec: 158.96,
    endSec: 160.4,
    title: "MINIMAL COST",
    subtitle: "Adding more flash memory costs the manufacturer pennies",
    graphic: "gears",
  },
  {
    startSec: 160.4,
    endSec: 161.62,
    title: "PSYCHOLOGY GAP",
    subtitle: "Paying for the gap between enough and plenty",
    graphic: "brain",
  },
  {
    startSec: 161.62,
    endSec: 164.08,
    title: "COMPUTE SCALES",
    subtitle: "The model performance difference is real",
    graphic: "servers",
  },
  {
    startSec: 164.08,
    endSec: 164.66,
    title: "ENGINEERED PRICING",
    subtitle: "Calculated to manipulate choices, not reflect costs",
    graphic: "bankruptcy",
    color: THEME.neonRed,
  },
  {
    startSec: 164.66,
    endSec: 167.09,
    title: "THE SILENT REASON",
    subtitle: "A quieter rationale behind model architecture",
    graphic: "brain",
  },
  {
    startSec: 167.09,
    endSec: 168.55,
    title: "DIFFERENT TASKS",
    subtitle: "Simple queries don't need complex thinking engines",
    graphic: "servers",
  },
  {
    startSec: 168.55,
    endSec: 170.3,
    title: "SUMMARIZE EMAIL",
    subtitle: "Doesn't require supercomputing mainframe power",
    graphic: "laptop",
  },
  {
    startSec: 170.3,
    endSec: 173.42,
    title: "RESEARCH SYSTEMS",
    subtitle: "Needs the flagship horsepower to run search pipelines",
    graphic: "brain",
  },
  {
    startSec: 173.42,
    endSec: 174.13,
    title: "MATCHING JOBS",
    subtitle: "The tiers do serve a real mechanical function",
    graphic: "scale",
  },
  {
    startSec: 174.13,
    endSec: 175.04,
    title: "CHEAP ROUTING",
    subtitle: "Redirecting simple queries to small, cheap models",
    graphic: "servers",
  },
  {
    startSec: 175.04,
    endSec: 176.05,
    title: "SAVING FLAGSHIP POWER",
    subtitle: "Saving heavy compute for hard complex tasks",
    graphic: "gears",
  },
  {
    startSec: 176.05,
    endSec: 179.28,
    title: "EFFICIENT PLUMBING",
    subtitle: "This part is just logical infrastructure layout",
    graphic: "servers",
  },
  {
    startSec: 179.34,
    endSec: 182.71,
    title: "NOT MANIPULATION",
    subtitle: "But that doesn't explain the marketing",
    graphic: "brain",
  },
  {
    startSec: 182.71,
    endSec: 184.19,
    title: "NOT THE WHOLE STORY",
    subtitle: "If it were purely matching tasks to hardware...",
    graphic: "gears",
  },
  {
    startSec: 184.19,
    endSec: 186.64,
    title: "NO PRICING LAYERS",
    subtitle: "We wouldn't see three priced tiers compared on a menu",
    graphic: "menu_decoy",
  },
  {
    startSec: 186.64,
    endSec: 188.83,
    title: "AUTOMATIC ROUTING",
    subtitle: "It would all happen invisibly behind the scenes",
    graphic: "servers",
  },
  {
    startSec: 188.83,
    endSec: 190.87,
    title: "INVISIBLE COMPUTING",
    subtitle: "But they want you to see, choose, and buy",
    graphic: "brain",
  },
  {
    startSec: 190.87,
    endSec: 194.31,
    title: "SHOWING THE TIERS",
    subtitle: "Naming them, pricing them, letting you choose",
    graphic: "phone_storage",
  },
  {
    startSec: 194.31,
    endSec: 194.69,
    title: "NOT COGNITIVE EFFICIENCY",
    subtitle: "This is deliberate retail layout positioning",
    graphic: "bankruptcy",
  },
  {
    startSec: 194.69,
    endSec: 195.24,
    title: "IT'S A MENU",
    subtitle: "And menus are never neutral choices",
    graphic: "menu_decoy",
  },
  {
    startSec: 195.24,
    endSec: 197.4,
    title: "DESIGNED MENUS",
    subtitle: "Engineered to drive you directly to the middle tier",
    graphic: "menu_decoy",
  },
  {
    startSec: 197.4,
    endSec: 198.94,
    title: "THE OBVIOUS CHOICE",
    subtitle: "Steering you to Sonnet, Pro, or Medium options",
    graphic: "brain",
  },
  {
    startSec: 198.94,
    endSec: 200.86,
    title: "WHO CHOSE?",
    subtitle: "Ask yourself who really decided what is balanced",
    graphic: "scale",
  },
  {
    startSec: 200.86,
    endSec: 204.0,
    title: "REAL UTILITY",
    subtitle: "Less about tricking anyone, more about efficiency",
    graphic: "scale",
    color: THEME.neonCyan,
  },
  {
    startSec: 204.0,
    endSec: 208.5,
    title: "FUNCTIONAL TIERS",
    subtitle: "Tiers actually serve a technical architectural purpose",
    graphic: "gears",
  },
  {
    startSec: 208.5,
    endSec: 214.0,
    title: "SIMPLE REQUESTS",
    subtitle: "Routing daily, lightweight tasks to cost-effective models",
    graphic: "recipe_chat",
  },
  {
    startSec: 214.0,
    endSec: 219.5,
    title: "HEAVY FIREPOWER",
    subtitle: "Reserving flagship supercomputing for complex reasoning",
    graphic: "servers",
    color: THEME.neonRed,
  },
  {
    startSec: 219.5,
    endSec: 226.8,
    title: "NEATLY PRICED?",
    subtitle: "If it were purely technical, why three distinct price steps?",
    graphic: "pyramid",
  },
  {
    startSec: 226.8,
    endSec: 233.5,
    title: "THE BEHAVIORAL NUDGE",
    subtitle: "Pricing structures built around consumer psychology",
    graphic: "brain",
    color: THEME.neonBlue,
  },
  {
    startSec: 233.5,
    endSec: 240.0,
    title: "NAMED & PRICED",
    subtitle: "Displaying all options side by side on purpose",
    graphic: "menu_decoy",
  },
  {
    startSec: 240.0,
    endSec: 247.5,
    title: "STEERING TO MIDDLE",
    subtitle: "Driving consumer choice directly to the target tier",
    graphic: "menu_decoy",
    color: THEME.neonGold,
  },
  {
    startSec: 247.5,
    endSec: 254.0,
    title: "NEXT TIME YOU CHOOSE",
    subtitle: "When you select between Flash, Pro, and Ultra...",
    graphic: "phone_storage",
  },
  {
    startSec: 254.0,
    endSec: 258.5,
    title: "WHO DECIDED?",
    subtitle: "Who really shaped what feels balanced to you?",
    graphic: "scale",
    color: THEME.neonRed,
  },
  {
    startSec: 258.5,
    endSec: 263.33,
    title: "THE ARCHITECT'S PLAN",
    subtitle: "Because it probably wasn't you.",
    graphic: "brain",
    color: THEME.neonRed,
  },
];

// ── CODE-DRAWN ANIMATED VECTOR COMPONENTS

const MotionBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Draw floating coordinates and grid lines
  const gridOffset = (frame * 0.7) % 50;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        background: THEME.bgGradient,
        zIndex: 0,
      }}
    >
      {/* Horizontal grid lines */}
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            x={gridOffset}
            y={gridOffset}
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(59, 130, 246, 0.07)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

// 1. Pyramid Layer Component
const GraphicPyramid: React.FC<{ frame: number; color?: string }> = ({
  frame,
  color,
}) => {
  const scale = spring({ frame, fps: 30 });
  const scaleOffset = 1 + Math.sin(frame * 0.08) * 0.03;

  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      style={{
        transform: `scale(${scale * scaleOffset})`,
        filter: `drop-shadow(0px 0px 20px ${color || THEME.neonCyan})`,
      }}
    >
      {/* Top Pro Layer */}
      <polygon
        points="200,50 150,140 250,140"
        fill={color || THEME.neonGold}
        opacity={0.8}
        stroke="#ffffff"
        strokeWidth="3"
      />
      {/* Middle Balanced Layer */}
      <polygon
        points="140,150 260,150 280,240 120,240"
        fill={color || THEME.neonBlue}
        opacity={0.7}
        stroke="#ffffff"
        strokeWidth="3"
      />
      {/* Bottom Cheap Layer */}
      <polygon
        points="110,250 290,250 310,340 90,340"
        fill={color || THEME.neonCyan}
        opacity={0.6}
        stroke="#ffffff"
        strokeWidth="3"
      />
    </svg>
  );
};

// 2. OpenAI Spinning Logo Component
const GraphicOpenAI: React.FC<{ frame: number }> = ({ frame }) => {
  const angle = frame * 1.5;
  const pulse = 1 + Math.sin(frame * 0.08) * 0.04;

  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 200 200"
      style={{
        transform: `rotate(${angle}deg) scale(${pulse})`,
        filter: `drop-shadow(0 0 25px ${THEME.neonCyan})`,
      }}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke={THEME.neonCyan} strokeWidth="4" />
      {[...Array(6)].map((_, i) => {
        const rotation = i * 60;
        return (
          <path
            key={i}
            d="M100,100 C70,70 70,130 100,100 Z"
            fill="none"
            stroke={THEME.neonCyan}
            strokeWidth="3"
            transform={`rotate(${rotation} 100 100)`}
          />
        );
      })}
    </svg>
  );
};

// 3. Anthropic Animated logo
const GraphicAnthropic: React.FC<{ frame: number }> = ({ frame }) => {
  const scale = spring({ frame, fps: 30 });
  const driftY = Math.sin(frame * 0.06) * 10;

  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 200 200"
      style={{
        transform: `scale(${scale}) translateY(${driftY}px)`,
        filter: `drop-shadow(0 0 25px ${THEME.neonRed})`,
      }}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke={THEME.neonRed} strokeWidth="4" />
      {/* Animated triangle/A symbol */}
      <polygon
        points="100,40 50,150 150,150"
        fill="none"
        stroke={THEME.neonRed}
        strokeWidth="6"
      />
      <line x1="75" y1="110" x2="125" y2="110" stroke={THEME.neonRed} strokeWidth="6" />
    </svg>
  );
};

// 4. Google Colorful animated loops
const GraphicGoogle: React.FC<{ frame: number }> = ({ frame }) => {
  const scale = 1 + Math.sin(frame * 0.08) * 0.03;

  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 200 200"
      style={{
        transform: `scale(${scale})`,
        filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
      }}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="2" opacity="0.1" />
      {/* Glowing concentric colored loops */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="30 40" transform={`rotate(${frame * 0.8} 100 100)`} />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="20 30" transform={`rotate(${-frame * 1.2} 100 100)`} />
      <circle cx="100" cy="100" r="30" fill="none" stroke="#eab308" strokeWidth="8" strokeDasharray="15 20" transform={`rotate(${frame * 1.5} 100 100)`} />
    </svg>
  );
};

// 5. Interlocking spinning gears
const GraphicGears: React.FC<{ frame: number }> = ({ frame }) => {
  const rotateLeft = frame * 1.5;
  const rotateRight = -frame * 1.5 + 15;

  return (
    <svg
      width="400"
      height="350"
      viewBox="0 0 400 350"
      style={{
        filter: `drop-shadow(0 0 25px ${THEME.neonBlue})`,
      }}
    >
      {/* Left Gear */}
      <g transform={`translate(150, 180) rotate(${rotateLeft})`}>
        <circle cx="0" cy="0" r="60" fill="none" stroke={THEME.neonBlue} strokeWidth="6" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="-12"
            y="-80"
            width="24"
            height="30"
            fill={THEME.neonBlue}
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle cx="0" cy="0" r="20" fill="none" stroke={THEME.neonBlue} strokeWidth="4" />
      </g>

      {/* Right Gear */}
      <g transform={`translate(270, 130) rotate(${rotateRight})`}>
        <circle cx="0" cy="0" r="45" fill="none" stroke={THEME.neonCyan} strokeWidth="5" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="-9"
            y="-60"
            width="18"
            height="20"
            fill={THEME.neonCyan}
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle cx="0" cy="0" r="15" fill="none" stroke={THEME.neonCyan} strokeWidth="3" />
      </g>
    </svg>
  );
};

// 6. Servers matrix
const GraphicServers: React.FC<{ frame: number }> = ({ frame }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
        width: "360px",
        height: "360px",
        padding: "20px",
        background: "rgba(255, 255, 255, 0.03)",
        border: `3px solid ${THEME.neonBlue}`,
        borderRadius: "15px",
        boxShadow: `0 0 30px rgba(59, 130, 246, 0.2)`,
      }}
    >
      {[...Array(16)].map((_, idx) => {
        // Flicker server led light randomly
        const status = random(`${idx}-${Math.floor(frame / 6)}`) > 0.4;
        return (
          <div
            key={idx}
            style={{
              background: "#111",
              border: "1.5px solid #333",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 5px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: status ? THEME.neonCyan : "#333",
                boxShadow: status ? `0 0 10px ${THEME.neonCyan}` : "none",
              }}
            />
            <div
              style={{
                fontSize: "10px",
                fontFamily: "monospace",
                color: "#666",
                marginTop: "6px",
              }}
            >
              R-{idx}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// 7. Wireframe Laptop Component
const GraphicLaptop: React.FC<{ frame: number }> = ({ frame }) => {
  const angle = interpolate(frame, [0, 45], [90, 30], {
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        filter: `drop-shadow(0 0 25px ${THEME.neonCyan})`,
      }}
    >
      {/* Laptop Keyboard Base */}
      <polygon
        points="30,160 170,160 190,180 10,180"
        fill="none"
        stroke={THEME.neonCyan}
        strokeWidth="4"
      />
      {/* Opening screen lid */}
      <g transform={`translate(100, 160)`}>
        <g transform={`rotate(${angle} 0 0)`}>
          <rect
            x="-70"
            y="-110"
            width="140"
            height="110"
            fill="none"
            stroke={THEME.neonCyan}
            strokeWidth="4"
          />
          {/* Internal screens graphics */}
          <rect
            x="-60"
            y="-100"
            width="120"
            height="90"
            fill="none"
            stroke={THEME.neonCyan}
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </g>
      </g>
    </svg>
  );
};

// 8. Power lines / grids
const GraphicCityPower: React.FC<{ frame: number }> = ({ frame }) => {
  const circles = [1, 2, 3];
  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        filter: `drop-shadow(0 0 25px ${THEME.neonRed})`,
      }}
    >
      <circle cx="100" cy="100" r="10" fill={THEME.neonRed} />
      {circles.map((c) => {
        const rVal = ((frame * 1.5 + c * 40) % 90) + 10;
        const opacity = interpolate(rVal, [10, 90], [1, 0]);
        return (
          <circle
            key={c}
            cx="100"
            cy="100"
            r={rVal}
            fill="none"
            stroke={THEME.neonRed}
            strokeWidth="3"
            opacity={opacity}
          />
        );
      })}
      {/* Radial network spikes */}
      {[...Array(8)].map((_, i) => {
        const x2 = 100 + Math.cos((i * 45 * Math.PI) / 180) * 80;
        const y2 = 100 + Math.sin((i * 45 * Math.PI) / 180) * 80;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke={THEME.neonRed}
            strokeWidth="2"
            opacity="0.3"
          />
        );
      })}
    </svg>
  );
};

// 9. Simulated terminal chat writing recipe
const GraphicRecipeChat: React.FC<{ frame: number }> = ({ frame }) => {
  const promptText = "> How do I substitute eggs?";
  const typedCount = Math.floor(frame * 0.8);
  const promptToShow = promptText.slice(0, typedCount);

  return (
    <div
      style={{
        background: "#080b11",
        border: `3px solid ${THEME.neonCyan}`,
        borderRadius: "15px",
        width: "380px",
        height: "300px",
        padding: "25px",
        boxShadow: `0 0 30px rgba(6, 182, 212, 0.2)`,
        fontFamily: "monospace",
        fontSize: "20px",
        color: THEME.textLight,
        textAlign: "left",
      }}
    >
      <div style={{ color: THEME.neonCyan, marginBottom: "15px" }}>
        {promptToShow}
        {frame % 15 < 7 ? "_" : ""}
      </div>
      {typedCount > promptText.length && (
        <div style={{ color: THEME.textGray, lineHeight: "1.4" }}>
          🥚 Replace with:
          <br />
          🍎 Mashed Applesauce
          <br />
          🍌 Ripe Bananas
          <br />
          🌱 Chia seed mixture
        </div>
      )}
    </div>
  );
};

// 10. Pricing decoy clipboard
const GraphicMenuDecoy: React.FC<{ frame: number; highlightSteak: boolean }> = ({
  frame,
  highlightSteak,
}) => {
  const ovalScale = spring({ frame, fps: 30 });
  return (
    <div
      style={{
        background: THEME.white,
        border: `4px solid ${THEME.textDark}`,
        borderRadius: "15px",
        width: "380px",
        padding: "30px",
        boxShadow: "12px 12px 0px rgba(0,0,0,0.15)",
        position: "relative",
      }}
    >
      {highlightSteak && (
        <div
          style={{
            position: "absolute",
            border: `5px solid ${THEME.neonRed}`,
            borderRadius: "50%",
            width: "350px",
            height: "65px",
            top: "85px",
            left: "12px",
            transform: `scale(${ovalScale})`,
            pointerEvents: "none",
          }}
        />
      )}
      <h3
        style={{
          fontFamily: "Impact, sans-serif",
          fontSize: "30px",
          color: THEME.textDark,
          textAlign: "center",
          borderBottom: `2.5px solid ${THEME.textDark}`,
          paddingBottom: "8px",
          marginBottom: "20px",
        }}
      >
        MENU SELECTION
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "18px",
          color: THEME.textDark,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>🥩 $80 STEAK</span>
          <span style={{ color: THEME.neonRed }}>DECOY</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>🍝 $30 PASTA</span>
          <span style={{ color: THEME.neonBlue }}>STEAL</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>🥗 $15 SALAD</span>
          <span>CHEAP</span>
        </div>
      </div>
    </div>
  );
};

// 11. Swinging Anchor Component
const GraphicAnchor: React.FC<{ frame: number }> = ({ frame }) => {
  const swingAngle = Math.sin(frame * 0.08) * 15;

  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        transform: `rotate(${swingAngle}deg)`,
        transformOrigin: "100px 20px",
        filter: `drop-shadow(0 0 25px ${THEME.neonBlue})`,
      }}
    >
      {/* Chain link line */}
      <line x1="100" y1="20" x2="100" y2="100" stroke={THEME.neonBlue} strokeWidth="5" />
      {/* Center shackle */}
      <circle cx="100" cy="20" r="10" fill="none" stroke={THEME.neonBlue} strokeWidth="5" />
      {/* Main vertical shaft */}
      <line x1="100" y1="30" x2="100" y2="140" stroke={THEME.neonBlue} strokeWidth="8" />
      {/* Cross stock bar */}
      <line x1="60" y1="60" x2="140" y2="60" stroke={THEME.neonBlue} strokeWidth="5" />
      {/* Curved crown base */}
      <path
        d="M 50 120 A 60 60 0 0 0 150 120"
        fill="none"
        stroke={THEME.neonBlue}
        strokeWidth="8"
      />
      {/* Flukes arrows */}
      <polygon points="50,110 40,130 65,125" fill={THEME.neonBlue} />
      <polygon points="150,110 160,130 135,125" fill={THEME.neonBlue} />
    </svg>
  );
};

// 12. Storage levels / Phone visual
const GraphicPhoneStorage: React.FC<{ frame: number }> = ({ frame }) => {
  const scale = spring({ frame, fps: 30 });
  const loadVal = interpolate(frame, [0, 40], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        transform: `scale(${scale})`,
        filter: `drop-shadow(0 0 25px ${THEME.neonCyan})`,
      }}
    >
      {/* Phone chassis */}
      <rect
        x="60"
        y="25"
        width="80"
        height="150"
        rx="12"
        fill="none"
        stroke={THEME.neonCyan}
        strokeWidth="4"
      />
      {/* Storage blocks */}
      {[0, 1, 2].map((i) => {
        const wVal = interpolate(loadVal, [0, 100], [0, 60], {
          extrapolateRight: "clamp",
        });
        return (
          <g key={i} transform={`translate(70, ${50 + i * 40})`}>
            <rect
              x="0"
              y="0"
              width="60"
              height="15"
              fill="none"
              stroke={THEME.neonCyan}
              strokeWidth="2.5"
              rx="4"
            />
            <rect
              x="0"
              y="0"
              width={wVal}
              height="15"
              fill={i === 2 ? THEME.neonGold : i === 1 ? THEME.neonBlue : THEME.neonCyan}
              rx="4"
              opacity="0.6"
            />
          </g>
        );
      })}
    </svg>
  );
};

// 13. Dynamic drifting car wireframe
const GraphicCar: React.FC<{ frame: number }> = ({ frame }) => {
  const driftX = interpolate(frame, [0, 150], [-250, 250]);
  const wheelRotate = frame * 10;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        transform: `translateX(${driftX}px)`,
      }}
    >
      <svg
        width="350"
        height="220"
        viewBox="0 0 200 120"
        style={{
          filter: `drop-shadow(0 0 25px ${THEME.neonCyan})`,
        }}
      >
        {/* Car chassis outline */}
        <path
          d="M 20 80 Q 20 50 40 45 L 80 45 Q 110 20 150 45 L 180 50 Q 190 70 190 80 Z"
          fill="none"
          stroke={THEME.neonCyan}
          strokeWidth="4"
        />
        {/* Wheels */}
        <g transform={`translate(55, 85) rotate(${wheelRotate})`}>
          <circle cx="0" cy="0" r="18" fill="none" stroke={THEME.neonCyan} strokeWidth="3" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke={THEME.neonCyan} strokeWidth="2.5" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke={THEME.neonCyan} strokeWidth="2.5" />
        </g>
        <g transform={`translate(145, 85) rotate(${wheelRotate})`}>
          <circle cx="0" cy="0" r="18" fill="none" stroke={THEME.neonCyan} strokeWidth="3" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke={THEME.neonCyan} strokeWidth="2.5" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke={THEME.neonCyan} strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
};

// 14. Neural network / Brain component
const GraphicBrain: React.FC<{ frame: number }> = ({ frame }) => {
  const nodeCount = 10;
  const nodes = [...Array(nodeCount)].map((_, i) => {
    const angle = (i * 360) / nodeCount;
    const rOffset = Math.sin(frame * 0.05 + i) * 15;
    const x = 100 + Math.cos((angle * Math.PI) / 180) * (60 + rOffset);
    const y = 100 + Math.sin((angle * Math.PI) / 180) * (60 + rOffset);
    return { x, y };
  });

  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        filter: `drop-shadow(0 0 25px ${THEME.neonBlue})`,
      }}
    >
      <circle cx="100" cy="100" r="30" fill="none" stroke={THEME.neonBlue} strokeWidth="3" />
      {nodes.map((node, i) => (
        <g key={i}>
          {/* Node connect lines to center */}
          <line
            x1="100"
            y1="100"
            x2={node.x}
            y2={node.y}
            stroke={THEME.neonBlue}
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* Ring line connections */}
          {i > 0 && (
            <line
              x1={nodes[i - 1].x}
              y1={nodes[i - 1].y}
              x2={node.x}
              y2={node.y}
              stroke={THEME.neonBlue}
              strokeWidth="1.5"
              opacity="0.4"
            />
          )}
          {/* Firing node glow */}
          <circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill={THEME.neonBlue}
            opacity={0.7 + Math.sin(frame * 0.1 + i) * 0.2}
          />
        </g>
      ))}
      {/* Close loop ring */}
      <line
        x1={nodes[nodeCount - 1].x}
        y1={nodes[nodeCount - 1].y}
        x2={nodes[0].x}
        y2={nodes[0].y}
        stroke={THEME.neonBlue}
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
};

// 15. Tilting Weighing scale
const GraphicScale: React.FC<{ frame: number }> = ({ frame }) => {
  const tilt = Math.sin(frame * 0.08) * 8;

  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        filter: `drop-shadow(0 0 25px ${THEME.neonBlue})`,
      }}
    >
      {/* Central stand pylon */}
      <line x1="100" y1="50" x2="100" y2="170" stroke={THEME.neonBlue} strokeWidth="8" />
      <line x1="60" y1="170" x2="140" y2="170" stroke={THEME.neonBlue} strokeWidth="8" />

      {/* Tilting crossbeam */}
      <g transform={`translate(100, 70) rotate(${tilt})`}>
        <line x1="-70" y1="0" x2="70" y2="0" stroke={THEME.neonBlue} strokeWidth="6" />
        {/* Left pan */}
        <g transform={`translate(-70, 0) rotate(${-tilt})`}>
          <line x1="0" y1="0" x2="-15" y2="40" stroke={THEME.neonBlue} strokeWidth="3" />
          <line x1="0" y1="0" x2="15" y2="40" stroke={THEME.neonBlue} strokeWidth="3" />
          <path d="M -25 40 L 25 40 Q 0 50 -25 40" fill={THEME.neonBlue} />
        </g>
        {/* Right pan */}
        <g transform={`translate(70, 0) rotate(${-tilt})`}>
          <line x1="0" y1="0" x2="-15" y2="40" stroke={THEME.neonBlue} strokeWidth="3" />
          <line x1="0" y1="0" x2="15" y2="40" stroke={THEME.neonBlue} strokeWidth="3" />
          <path d="M -25 40 L 25 40 Q 0 50 -25 40" fill={THEME.neonBlue} />
        </g>
      </g>
    </svg>
  );
};

// 16. Bankruptcy grid
const GraphicBankruptcy: React.FC<{ frame: number }> = ({ frame }) => {
  const progress = interpolate(frame, [0, 90], [10, 190], {
    extrapolateRight: "clamp",
  });
  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      style={{
        filter: `drop-shadow(0 0 25px ${THEME.neonRed})`,
      }}
    >
      
      {/* Grid lines */}
      <line x1="10" y1="180" x2="190" y2="180" stroke="#444" strokeWidth="2.5" />
      <line x1="10" y1="10" x2="10" y2="180" stroke="#444" strokeWidth="2.5" />
      {/* Crashing chart path */}
      <path
        d="M 10,40 Q 60,60 100,120 T 190,175"
        fill="none"
        stroke={THEME.neonRed}
        strokeWidth="6"
        strokeDasharray="250"
        strokeDashoffset={250 - (progress / 190) * 250}
      />
      {/* Danger warning icon */}
      {frame > 60 && (
        <polygon
          points="100,110 85,140 115,140"
          fill={THEME.neonRed}
          opacity="0.8"
        />
      )}
    </svg>
  );
};

// ── GLOBAL LAYOUT ROUTER BASED ON GRAPHIC CHOICE

const LayoutRouter: React.FC<{
  shot: Shot;
  frame: number;
  isWidescreen: boolean;
}> = ({ shot, frame, isWidescreen }) => {
  const springScale = spring({ frame, fps: 30, config: { damping: 15 } });

  // Get corresponding vector graphic component
  let vectorGraphic = <div />;
  if (shot.graphic === "pyramid") {
    vectorGraphic = <GraphicPyramid frame={frame} color={shot.color} />;
  } else if (shot.graphic === "logo_openai") {
    vectorGraphic = <GraphicOpenAI frame={frame} />;
  } else if (shot.graphic === "logo_anthropic") {
    vectorGraphic = <GraphicAnthropic frame={frame} />;
  } else if (shot.graphic === "logo_google") {
    vectorGraphic = <GraphicGoogle frame={frame} />;
  } else if (shot.graphic === "gears") {
    vectorGraphic = <GraphicGears frame={frame} />;
  } else if (shot.graphic === "servers") {
    vectorGraphic = <GraphicServers frame={frame} />;
  } else if (shot.graphic === "laptop") {
    vectorGraphic = <GraphicLaptop frame={frame} />;
  } else if (shot.graphic === "city_power") {
    vectorGraphic = <GraphicCityPower frame={frame} />;
  } else if (shot.graphic === "recipe_chat") {
    vectorGraphic = <GraphicRecipeChat frame={frame} />;
  } else if (shot.graphic === "menu_decoy") {
    vectorGraphic = (
      <GraphicMenuDecoy
        frame={frame}
        highlightSteak={shot.title.includes("STEAK") || shot.title.includes("DECOY")}
      />
    );
  } else if (shot.graphic === "anchor") {
    vectorGraphic = <GraphicAnchor frame={frame} />;
  } else if (shot.graphic === "phone_storage") {
    vectorGraphic = <GraphicPhoneStorage frame={frame} />;
  } else if (shot.graphic === "car") {
    vectorGraphic = <GraphicCar frame={frame} />;
  } else if (shot.graphic === "brain") {
    vectorGraphic = <GraphicBrain frame={frame} />;
  } else if (shot.graphic === "scale") {
    vectorGraphic = <GraphicScale frame={frame} />;
  } else if (shot.graphic === "bankruptcy") {
    vectorGraphic = <GraphicBankruptcy frame={frame} />;
  }

  // Continuous camera drift for full-screen motion
  const kenBurnsScale = interpolate(frame, [0, 300], [1, 1.05]);
  const driftY = Math.sin(frame * 0.03) * 8;

  // WIDESCREEN FULL-BLEED CINEMATIC PRESENTATION
  if (isWidescreen) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 120px",
          transform: `scale(${kenBurnsScale}) translateY(${driftY}px)`,
        }}
      >
        {/* Left Side Large Vector graphic */}
        <div
          style={{
            flex: "1 1 55%",
            transform: `scale(${springScale})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {vectorGraphic}
        </div>

        {/* Right Side Typography & Concept Specs */}
        <div
          style={{
            flex: "1 1 45%",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            textAlign: "left",
            maxWidth: "780px",
          }}
        >
          {shot.badge && (
            <div
              style={{
                background: shot.color || THEME.neonBlue,
                color: THEME.textLight,
                padding: "8px 22px",
                fontSize: "20px",
                fontFamily: displayFont,
                fontWeight: 700,
                borderRadius: "30px",
                alignSelf: "flex-start",
                letterSpacing: "0.08em",
                boxShadow: `0 0 20px ${shot.color || THEME.neonBlue}66`,
              }}
            >
              {shot.badge}
            </div>
          )}
          <AnimatedText
            text={shot.title}
            frame={frame}
            fontSize={78}
            color={shot.color || THEME.textLight}
            isTitle={true}
          />
          <AnimatedText
            text={shot.subtitle}
            frame={frame - 4}
            fontSize={32}
            color={THEME.textGray}
            isTitle={false}
          />
        </div>
      </div>
    );
  }

  // PORTRAIT VERTICAL STACKED PRESENTATION (FOR SHORTS)
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "120px 50px 140px 50px",
        textAlign: "center",
        transform: `scale(${kenBurnsScale})`,
      }}
    >
      <AnimatedText
        text={shot.title}
        frame={frame}
        fontSize={66}
        color={shot.color || THEME.textLight}
        isTitle={true}
      />

      {/* Vector Graphic centered */}
      <div
        style={{
          transform: `scale(${springScale})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
        }}
      >
        {vectorGraphic}
      </div>

      <AnimatedText
        text={shot.subtitle}
        frame={frame - 4}
        fontSize={32}
        color={THEME.textGray}
        isTitle={false}
      />
    </div>
  );
};

// ── MAIN COMPOSITION ENGINE

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isWidescreen = width > height;

  const currentSec = frame / 30;

  // Find active visual shot based on current elapsed seconds
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
        backgroundColor: THEME.bgDark,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 1. Drift space background texture grid */}
      <MotionBackground />

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
        <LayoutRouter
          shot={activeShot}
          frame={localFrame}
          isWidescreen={isWidescreen}
        />
      </div>

      {/* 3. Render main voiceover track (no on-screen subtitles rendered) */}
      <Audio src={staticFile("Ai Models.m4a")} />
    </div>
  );
};