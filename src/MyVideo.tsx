import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 11 } });
  const scale = interpolate(entrance, [0, 1], [0.3, 1]);

  const isLandscape = width > height;
  const fontSize = isLandscape ? "100px" : "60px";

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#0d1117",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          transform: `scale(${scale})`,
          color: "#58a6ff",
          fontSize,
          fontFamily: "sans-serif",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Anti-Gravity Motion Graphic!
      </h1>
      <p
        style={{
          color: "#8b949e",
          fontSize: isLandscape ? "30px" : "24px",
          fontFamily: "sans-serif",
          marginTop: "20px",
          opacity: entrance,
          textAlign: "center",
        }}
      >
        Rendering in {isLandscape ? "Landscape (16:9)" : "Portrait (9:16)"}
      </p>
    </div>
  );
};