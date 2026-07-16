import React from "react";
import { Composition, CalculateMetadataFunction, staticFile } from "remotion";
import { MyVideo } from "./MyVideo";
import { ToxicRelationshipsShort } from "./components/shorts/ToxicRelationshipsShort";
import { InfiniteScrollingPsychologyShort } from "./components/shorts/InfiniteScrollingPsychologyShort";
import { getAudioDuration } from "./utils/getAudioDuration";
import "./index.css";

const calculateMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  const durationInSeconds = await getAudioDuration(staticFile("kimi audio.m4a"));
  const durationInFrames = Math.ceil(durationInSeconds * 30);
  return {
    durationInFrames: durationInFrames > 0 ? durationInFrames : 10696,
    fps: 30,
    width: 1920,
    height: 1080,
  };
};

const calculateShortMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  const durationInSeconds = await getAudioDuration(staticFile("toxic_relationships_clean.wav"));
  const durationInFrames = Math.ceil(durationInSeconds * 30);
  return {
    durationInFrames: durationInFrames > 0 ? durationInFrames : 1594,
    fps: 30,
    width: 1080,
    height: 1920,
  };
};

const calculateInfiniteScrollingMetadata: CalculateMetadataFunction<Record<string, unknown>> = async () => {
  const durationInSeconds = await getAudioDuration(staticFile("infinite-scrolling-cleaned.mp3"));
  const durationInFrames = Math.ceil(durationInSeconds * 30);
  return {
    durationInFrames: durationInFrames > 0 ? durationInFrames : 1104,
    fps: 30,
    width: 1080,
    height: 1920,
  };
};

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={10696}
        fps={30}
        width={1920}
        height={1080}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="InfiniteScrollingPsychologyShort"
        component={InfiniteScrollingPsychologyShort}
        durationInFrames={1104}
        fps={30}
        width={1080}
        height={1920}
        calculateMetadata={calculateInfiniteScrollingMetadata}
      />
      <Composition
        id="ToxicRelationshipsShort"
        component={ToxicRelationshipsShort}
        durationInFrames={1594}
        fps={30}
        width={1080}
        height={1920}
        calculateMetadata={calculateShortMetadata}
      />
    </>
  );
};

export const RemotionRoot = Root;