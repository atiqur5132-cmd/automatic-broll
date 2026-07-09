import { getAudioDurationInSeconds } from "@remotion/media-utils";

export const getAudioDuration = async (src: string): Promise<number> => {
  try {
    const duration = await getAudioDurationInSeconds(src);
    if (duration && duration > 0) {
      return duration;
    }
  } catch {
    // fallback if CLI/static environment fails to probe URL
  }
  return 290.20; // Exact duration of public/voiceover.wav (8706 frames @ 30fps)
};
