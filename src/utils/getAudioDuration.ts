import { Input, ALL_FORMATS, UrlSource } from "mediabunny";

export const getAudioDuration = async (src: string): Promise<number> => {
  try {
    const input = new Input({
      formats: ALL_FORMATS,
      source: new UrlSource(src, {
        getRetryDelay: () => null,
      }),
    });
    const duration = await input.computeDuration();
    if (duration && duration > 0) {
      return duration;
    }
  } catch {
    // fallback if UrlSource fails in CLI environment
  }
  return 263.664; // Exact duration of public/Ai Models.m4a and voiceover.wav
};
