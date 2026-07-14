import React from "react";
import { useCurrentFrame } from "remotion";

export interface Neural3DNetworkProps {
  nodeCount?: number;
  primaryColor?: string;
  accentColor?: string;
  size?: number;
}

interface NeuralNode {
  id: number;
  x: number;
  y: number;
  z: number;
  label?: string;
}

export const Neural3DNetwork: React.FC<Neural3DNetworkProps> = ({
  primaryColor = "#00F0FF",
  accentColor = "#FF2E63",
  size = 620,
}) => {
  const frame = useCurrentFrame();

  // 3D Isometric rotation
  const rotY = Math.sin(frame * 0.025) * 15;
  const rotX = 18 + Math.cos(frame * 0.02) * 8;

  // Static defined 3D neural nodes
  const nodes: NeuralNode[] = [
    { id: 1, x: -140, y: -90, z: 40, label: "EGO" },
    { id: 2, x: 130, y: -110, z: -30, label: "BIAS" },
    { id: 3, x: 0, y: -10, z: 60, label: "SUBCONSCIOUS" },
    { id: 4, x: -110, y: 110, z: -40, label: "HABIT" },
    { id: 5, x: 140, y: 100, z: 30, label: "IMPULSE" },
  ];

  const connections = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [0, 3],
    [1, 4],
  ];

  return (
    <div
      style={{
        width: size,
        height: size,
        perspective: 1400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* SVG Synaptic Connections Layer */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
          viewBox="-300 -300 600 600"
        >
          {connections.map(([a, b], idx) => {
            const nA = nodes[a];
            const nB = nodes[b];
            const dashOffset = (frame * (6 + idx * 2)) % 200;

            return (
              <g key={`conn-${idx}`}>
                {/* Ambient Synaptic Line */}
                <line
                  x1={nA.x}
                  y1={nA.y}
                  x2={nB.x}
                  y2={nB.y}
                  stroke={idx % 2 === 0 ? primaryColor : accentColor}
                  strokeWidth={2.5}
                  opacity={0.35}
                />
                {/* Laser Pulse Traveling Line */}
                <line
                  x1={nA.x}
                  y1={nA.y}
                  x2={nB.x}
                  y2={nB.y}
                  stroke={idx % 2 === 0 ? primaryColor : accentColor}
                  strokeWidth={4}
                  strokeDasharray="25 175"
                  strokeDashoffset={-dashOffset}
                  strokeLinecap="round"
                  filter="drop-shadow(0px 0px 8px #00F0FF)"
                />
              </g>
            );
          })}
        </svg>

        {/* 3D Floating Synaptic Nodes */}
        {nodes.map((n, idx) => {
          const pulseScale = 1 + Math.sin(frame * 0.1 + idx) * 0.12;
          const nodeColor = idx === 2 ? accentColor : primaryColor;

          return (
            <div
              key={n.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate3d(${n.x}px, ${n.y}px, ${n.z}px) translate(-50%, -50%) scale(${pulseScale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Outer Core Aura */}
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${nodeColor}88 0%, transparent 75%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 25px ${nodeColor}`,
                }}
              >
                {/* Inner Glowing Core */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    boxShadow: `0 0 12px ${nodeColor}`,
                  }}
                />
              </div>

              {n.label && (
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: 1.5,
                    textShadow: `0 0 10px ${nodeColor}`,
                  }}
                >
                  {n.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
