import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const Root = () => {
  return (
    <>
      {/* 9:16 ratio composition */}
      <Composition
        id="YTShorts"
        component={MyVideo}
        durationInFrames={1419}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* 16:9 ratio composition */}
      <Composition
        id="YTVideo"
        component={MyVideo}
        durationInFrames={1419}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

export const RemotionRoot = Root;