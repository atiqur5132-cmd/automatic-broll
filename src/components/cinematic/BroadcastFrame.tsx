import React from "react";

export const CinematicBroadcastFrame: React.FC<{
  children: React.ReactNode;
  category?: string;
  statusText?: string;
}> = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 80px",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
