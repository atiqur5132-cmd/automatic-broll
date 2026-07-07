import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const Root = () => {
  return (
    <>
      <Composition
        id="YTShorts"
        component={MyVideo}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

export const RemotionRoot = Root;