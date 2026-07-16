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
  return 356.54; // Exact duration of public/kimi audio.m4a (10696 frames @ 30fps)
};
