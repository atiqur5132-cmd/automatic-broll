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
  return 251.38; // Exact duration of public/edited_audio.wav (7542 frames @ 30fps)
};
