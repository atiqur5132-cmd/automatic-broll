import { Composition, CalculateMetadataFunction, staticFile } from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { MyVideo } from "./MyVideo";

const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  try {
    const durationInSeconds = await getAudioDurationInSeconds(
      staticFile("Ai Models.m4a")
    );
    return {
      durationInFrames: Math.ceil(durationInSeconds * 30),
      width: 1920,
      height: 1080,
      fps: 30,
    };
  } catch {
    // Fallback to exact detected length of Ai Models.m4a (263.33s @ 30fps = 7900 frames)
    return {
      durationInFrames: 7900,
      width: 1920,
      height: 1080,
      fps: 30,
    };
  }
};

export const Root = () => {
  return (
    <>
      {/* 16:9 ratio composition - primary HD video */}
      <Composition
        id="YTVideo"
        component={MyVideo}
        durationInFrames={7900}
        fps={30}
        width={1920}
        height={1080}
        calculateMetadata={calculateMetadata}
      />
      {/* 9:16 ratio composition */}
      <Composition
        id="YTShorts"
        component={MyVideo}
        durationInFrames={7900}
        fps={30}
        width={1080}
        height={1920}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};

export const RemotionRoot = Root;