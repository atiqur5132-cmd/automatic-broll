import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 11 } });
  const scale = interpolate(entrance, [0, 1], [0.3, 1]);

  return (
    <div style={{ flex: 1, backgroundColor: "#0d1117", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ transform: `scale(${scale})`, color: "#58a6ff", fontSize: "70px", fontFamily: "sans-serif" }}>
        Anti-Gravity Motion Graphic!
      </h1>
    </div>
  );
};