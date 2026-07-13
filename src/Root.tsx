import React from "react";
import { Composition, CalculateMetadataFunction, staticFile } from "remotion";
import { MyVideo } from "./MyVideo";
import { getAudioDuration } from "./utils/getAudioDuration";
import "./index.css";

const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  const durationInSeconds = await getAudioDuration(staticFile("gemini_35_leaks.wav"));
  const durationInFrames = Math.ceil(durationInSeconds * 30);
  return {
    durationInFrames: durationInFrames > 0 ? durationInFrames : 6652,
    fps: 30,
    width: 1920,
    height: 1080,
  };
};

export const Root: React.FC = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={6652}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const RemotionRoot = Root;