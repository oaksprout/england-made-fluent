"use client";

import { motion, useReducedMotion } from "framer-motion";

type Cluster = "navy" | "red" | "grass" | "grey";

type PlayerSpec = {
  id: string;
  cluster: Cluster;
  scatter: { x: number; y: number };
  formation: { x: number; y: number };
};

const CLUSTER_COLOUR: Record<Cluster, string> = {
  navy: "#1b3358",
  red: "#c8102e",
  grass: "#3e7a4f",
  grey: "#8b8f96",
};

const UNIFIED_FILL = "#0c1f3d";
const UNIFIED_RING = "#c8102e";

/**
 * 11 players, four scattered "club system" clusters near the corners/edges
 * of the canvas, converging on a 4-3-3-ish shape centred in the frame.
 * Coordinates live in a 160×100 viewBox.
 */
const PLAYERS: PlayerSpec[] = [
  // Cluster A — navy, top-left (goalkeeper + two of the back line)
  {
    id: "gk",
    cluster: "navy",
    scatter: { x: 14, y: 16 },
    formation: { x: 22, y: 50 },
  },
  {
    id: "cb1",
    cluster: "navy",
    scatter: { x: 26, y: 10 },
    formation: { x: 46, y: 22 },
  },
  {
    id: "cb2",
    cluster: "navy",
    scatter: { x: 10, y: 30 },
    formation: { x: 46, y: 40 },
  },
  // Cluster B — red, top-right (rest of back line + a midfielder)
  {
    id: "rb",
    cluster: "red",
    scatter: { x: 140, y: 12 },
    formation: { x: 46, y: 58 },
  },
  {
    id: "lb",
    cluster: "red",
    scatter: { x: 152, y: 26 },
    formation: { x: 46, y: 76 },
  },
  {
    id: "cm1",
    cluster: "red",
    scatter: { x: 132, y: 22 },
    formation: { x: 82, y: 32 },
  },
  // Cluster C — grass, bottom-left (midfield)
  {
    id: "cm2",
    cluster: "grass",
    scatter: { x: 12, y: 84 },
    formation: { x: 82, y: 50 },
  },
  {
    id: "cm3",
    cluster: "grass",
    scatter: { x: 26, y: 92 },
    formation: { x: 82, y: 68 },
  },
  // Cluster D — grey, bottom-right (front three)
  {
    id: "rw",
    cluster: "grey",
    scatter: { x: 150, y: 78 },
    formation: { x: 118, y: 26 },
  },
  {
    id: "st",
    cluster: "grey",
    scatter: { x: 136, y: 92 },
    formation: { x: 122, y: 50 },
  },
  {
    id: "lw",
    cluster: "grey",
    scatter: { x: 148, y: 66 },
    formation: { x: 118, y: 74 },
  },
];

function TrailPath({
  player,
  opacity,
}: {
  player: PlayerSpec;
  opacity: number;
}) {
  return (
    <path
      d={`M ${player.scatter.x} ${player.scatter.y} Q ${(player.scatter.x + player.formation.x) / 2} ${
        Math.min(player.scatter.y, player.formation.y) - 6
      }, ${player.formation.x} ${player.formation.y}`}
      fill="none"
      stroke={CLUSTER_COLOUR[player.cluster]}
      strokeWidth={0.6}
      strokeDasharray="1.5 2.5"
      strokeLinecap="round"
      opacity={opacity}
    />
  );
}

export function HeroFormation() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div data-testid="hero-formation">
      <div aria-hidden="true" className="relative">
        <svg viewBox="0 0 160 100" className="h-auto w-full">
          {/* Faint pitch-marking hints — designed to sit on a navy background. */}
          <g
            stroke="#faf6ef"
            strokeOpacity={0.15}
            fill="none"
            strokeWidth={0.6}
          >
            <line x1={80} y1={4} x2={80} y2={96} />
            <circle cx={80} cy={50} r={16} />
            <rect x={4} y={4} width={152} height={92} rx={2} />
          </g>

          {PLAYERS.map((player) => (
            <TrailPath
              key={player.id}
              player={player}
              opacity={reduceMotion ? 0.18 : 0.22}
            />
          ))}

          {PLAYERS.map((player, i) =>
            reduceMotion ? (
              <circle
                key={player.id}
                cx={player.formation.x}
                cy={player.formation.y}
                r={3.2}
                fill={UNIFIED_FILL}
                stroke={UNIFIED_RING}
                strokeWidth={1}
              />
            ) : (
              <motion.circle
                key={player.id}
                r={3.2}
                initial={false}
                animate={{
                  cx: [
                    player.scatter.x,
                    player.formation.x,
                    player.formation.x,
                    player.scatter.x,
                  ],
                  cy: [
                    player.scatter.y,
                    player.formation.y,
                    player.formation.y,
                    player.scatter.y,
                  ],
                  fill: [
                    CLUSTER_COLOUR[player.cluster],
                    UNIFIED_FILL,
                    UNIFIED_FILL,
                    CLUSTER_COLOUR[player.cluster],
                  ],
                  stroke: [
                    "transparent",
                    UNIFIED_RING,
                    UNIFIED_RING,
                    "transparent",
                  ],
                }}
                strokeWidth={1}
                transition={{
                  duration: 12,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i * 0.06,
                }}
              />
            ),
          )}
        </svg>
      </div>
      <p className="sr-only">
        Abstract diagram: players arriving from different club systems form one
        coordinated England structure.
      </p>
    </div>
  );
}
