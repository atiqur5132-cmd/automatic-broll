import React from "react";
import { MassiveKineticTitle } from "./MassiveKineticTitle";

export interface VisualFirstSceneStageProps {
  /** Optional primary 3D Icon or Motion Graphic passed directly */
  children?: React.ReactNode;
  /** Or passed explicitly as hero3DGraphic */
  hero3DGraphic?: React.ReactNode;
  /** Title text if passing string */
  title?: string;
  /** Or pass custom title graphic component */
  titleGraphic?: React.ReactNode;
  /** Index of keyword to highlight */
  activeWordIndex?: number;
  /** Accent glow color */
  accentColor?: string;
  /** Optional top category badge text */
  badgeText?: string;
  /** Badge color */
  badgeColor?: string;
}

/**
 * Enforces Broadcast-Grade Professional 9:16 Shorts layout:
 * - Ultra-legible high-contrast category header badge (34px bold)
 * - Huge 3D Hero Stage (Center visual dominance)
 * - Concept Topic Title (74px massive typography)
 */
export const VisualFirstSceneStage: React.FC<VisualFirstSceneStageProps> = ({
  children,
  hero3DGraphic,
  title = "",
  titleGraphic,
  activeWordIndex = 0,
  accentColor = "#00FFC2",
  badgeText,
  badgeColor = "#00FFC2",
}) => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 150, // Top UI safe area
        boxSizing: "border-box",
      }}
    >
      {/* High-Contrast Bold Professional Top Header Badge (34px) */}
      {badgeText && (
        <div
          style={{
            padding: "14px 44px",
            borderRadius: 999,
            background: "rgba(10, 14, 28, 0.95)",
            border: `3px solid ${badgeColor}`,
            color: badgeColor,
            fontFamily: "SpaceGrotesk, sans-serif",
            fontSize: 34,
            fontWeight: 900,
            letterSpacing: 3,
            textTransform: "uppercase",
            boxShadow: `0 12px 45px rgba(0,0,0,0.85), 0 0 40px ${badgeColor}66`,
            marginBottom: 40,
            zIndex: 10,
          }}
        >
          {badgeText}
        </div>
      )}

      {/* Massive Hero 3D Area (Center Screen Dominance) */}
      <div
        style={{
          width: "100%",
          height: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {hero3DGraphic || children}
      </div>

      {/* Concept Topic Title Anchor (Just below visual hero stage) */}
      {title && (
        <div
          style={{
            width: 980,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            zIndex: 10,
          }}
        >
          {titleGraphic || (
            <MassiveKineticTitle
              text={title}
              activeWordIndex={activeWordIndex}
              accentColor={accentColor}
              fontSize={74}
            />
          )}
        </div>
      )}
    </div>
  );
};
