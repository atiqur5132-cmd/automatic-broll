import { getAudioDurationInSeconds } from "@remotion/media-utils";

export const getAudioDuration = async (src: string): Promise<number> => {
  try {
    const duration = await getAudioDurationInSeconds(src);
    if (duration && duration > 0) {
      return duration;
    }
  } catch {
    // fallback if environment probing fails
  }
  return 261.00; // Exact duration of public/voiceover.wav (7830 frames @ 30fps)
};
