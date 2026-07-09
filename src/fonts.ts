import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

export const { fontFamily: displayFontFamily } = loadMontserrat("normal", {
  weights: ["700", "800", "900"],
  subsets: ["latin"],
});

export const { fontFamily: bodyFontFamily } = loadInter("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});
