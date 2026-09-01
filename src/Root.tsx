import React from "react";
import { Composition, CalculateMetadataFunction } from "remotion";
import { AgenticDocumentaryVideo } from "./scenes/AgenticDocumentaryVideo";
import { MyVideo } from "./MyVideo";
import "./index.css";

const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  return {
    durationInFrames: 9403,
    fps: 30,
    width: 1920,
    height: 1080,
  };
};

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="AgenticAI"
        component={AgenticDocumentaryVideo}
        durationInFrames={9403}
        fps={30}
        width={1920}
        height={1080}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={7910}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

export const RemotionRoot = Root;