"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes: Node[] = [
  {
    id: "javascript",
    position: { x: 250, y: 50 },
    data: { label: "JavaScript" },
  },
  {
    id: "typescript",
    position: { x: 100, y: 220 },
    data: { label: "TypeScript" },
  },
  {
    id: "react",
    position: { x: 400, y: 220 },
    data: { label: "React" },
  },
];

const edges: Edge[] = [
  {
    id: "javascript-typescript",
    source: "javascript",
    target: "typescript",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "javascript-react",
    source: "javascript",
    target: "react",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export default function Page() {
  return (
    <main style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} />
        <Controls />
      </ReactFlow>
    </main>
  );
}
