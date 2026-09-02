import React from "react";
import { Composition, CalculateMetadataFunction } from "remotion";
import { MyVideo } from "./MyVideo";
import "./index.css";

const TOTAL_DURATION_FRAMES = 7915; // 263.83s exact sync with Whisper voiceover

const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  return {
    durationInFrames: TOTAL_DURATION_FRAMES,
    fps: 30,
    width: 1920,
    height: 1080,
  };
};

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={TOTAL_DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};

export const RemotionRoot = Root;