"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type {
  DiagramArrow,
  DiagramArrowKind,
  DiagramMarker,
  GameStateDiagramSpec,
} from "@/lib/types";
import { PitchDiagram } from "./PitchDiagram";
import { px, py, tacticalPalette } from "./pitch-geometry";
import {
  ArrowheadDefs,
  arrowMarkerId,
  type ArrowColourKey,
} from "./ArrowheadDefs";

function arrowColourKey(arrow: DiagramArrow): ArrowColourKey {
  if (arrow.kind === "press") return "red";
  if (arrow.team === "opponent") return "grey";
  return "navy";
}

function arrowStrokeProps(kind: DiagramArrowKind): {
  strokeWidth: number;
  strokeDasharray?: string;
} {
  switch (kind) {
    case "run":
      return { strokeWidth: 1.6, strokeDasharray: "3.2 2.4" };
    case "shift":
      return { strokeWidth: 1.4, strokeDasharray: "0.4 2.4" };
    case "press":
      return { strokeWidth: 2.6 };
    case "pass":
    default:
      return { strokeWidth: 1.6 };
  }
}

function markerIdentity(marker: DiagramMarker, index: number): string {
  return `${marker.team}-${marker.label ?? index}`;
}

function MarkerDot({
  marker,
  reduceMotion,
}: {
  marker: DiagramMarker;
  reduceMotion: boolean;
}) {
  const target = { x: px(marker.x), y: py(marker.y) };
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeInOut" as const };

  if (marker.team === "ball") {
    return (
      <motion.g initial={false} animate={target} transition={transition}>
        <circle r={1.4} fill="#fff" stroke="#191a1c" strokeWidth={0.4} />
      </motion.g>
    );
  }

  const isEngland = marker.team === "england";

  return (
    <motion.g initial={false} animate={target} transition={transition}>
      <circle
        r={3.2}
        fill={isEngland ? tacticalPalette.navy : tacticalPalette.opponentGrey}
        stroke={isEngland ? tacticalPalette.red : "none"}
        strokeWidth={isEngland ? 1 : 0}
      />
      {marker.label ? (
        <text
          x={0}
          y={0}
          dy="0.32em"
          textAnchor="middle"
          fontSize={3.1}
          fontWeight={700}
          fill="#fff"
          stroke={tacticalPalette.navy}
          strokeWidth={0.25}
          paintOrder="stroke"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {marker.label}
        </text>
      ) : null}
    </motion.g>
  );
}

const LEGEND: { kind: DiagramArrowKind; label: string }[] = [
  { kind: "pass", label: "Pass" },
  { kind: "run", label: "Run" },
  { kind: "press", label: "Press" },
  { kind: "shift", label: "Shift" },
];

function ArrowLegend({ idPrefix }: { idPrefix: string }) {
  return (
    <ul
      className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-soft"
      aria-hidden="true"
    >
      {LEGEND.map(({ kind, label }) => {
        const colour =
          kind === "press" ? tacticalPalette.red : tacticalPalette.navy;
        const stroke = arrowStrokeProps(kind);
        return (
          <li key={kind} className="flex items-center gap-2">
            <svg width={28} height={10} viewBox="0 0 28 10" aria-hidden="true">
              <line
                x1={1}
                y1={5}
                x2={22}
                y2={5}
                stroke={colour}
                strokeWidth={stroke.strokeWidth}
                strokeDasharray={stroke.strokeDasharray}
                strokeLinecap="round"
                markerEnd={`url(#${arrowMarkerId(idPrefix, kind === "press" ? "red" : "navy")})`}
              />
            </svg>
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function GameStateDiagram({ spec }: { spec: GameStateDiagramSpec }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const reduceMotion = Boolean(useReducedMotion());
  const idPrefix = useId().replace(/[^a-zA-Z0-9-]/g, "");

  const phases = spec.phases;
  const phase = phases[phaseIndex];
  const isFirst = phaseIndex === 0;
  const isLast = phaseIndex === phases.length - 1;

  if (!phase) return null;

  return (
    <div data-testid="game-state-diagram" className="not-prose">
      <PitchDiagram viewLabel={spec.description}>
        <ArrowheadDefs idPrefix={idPrefix} />

        <motion.g
          key={phaseIndex}
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
        >
          {phase.arrows.map((arrow, i) => {
            const colourKey = arrowColourKey(arrow);
            const stroke = arrowStrokeProps(arrow.kind);
            return (
              <line
                key={i}
                x1={px(arrow.from[0])}
                y1={py(arrow.from[1])}
                x2={px(arrow.to[0])}
                y2={py(arrow.to[1])}
                stroke={
                  colourKey === "red"
                    ? tacticalPalette.red
                    : colourKey === "grey"
                      ? tacticalPalette.opponentGrey
                      : tacticalPalette.navy
                }
                strokeWidth={stroke.strokeWidth}
                strokeDasharray={stroke.strokeDasharray}
                strokeLinecap="round"
                markerEnd={`url(#${arrowMarkerId(idPrefix, colourKey)})`}
              />
            );
          })}
        </motion.g>

        {phase.markers.map((marker, i) => (
          <MarkerDot
            key={markerIdentity(marker, i)}
            marker={marker}
            reduceMotion={reduceMotion}
          />
        ))}
      </PitchDiagram>

      <ArrowLegend idPrefix={idPrefix} />

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPhaseIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          aria-label="Previous phase"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:border-navy enabled:hover:bg-navy enabled:hover:text-chalk"
        >
          <ChevronLeft aria-hidden="true" size={20} />
        </button>

        <span className="font-display text-sm text-ink-faint">
          Phase {phaseIndex + 1} of {phases.length}
        </span>

        <button
          type="button"
          onClick={() =>
            setPhaseIndex((i) => Math.min(phases.length - 1, i + 1))
          }
          disabled={isLast}
          aria-label="Next phase"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:border-navy enabled:hover:bg-navy enabled:hover:text-chalk"
        >
          <ChevronRight aria-hidden="true" size={20} />
        </button>
      </div>

      <p aria-live="polite" className="mt-2 text-sm text-ink-soft">
        {phase.caption}
      </p>
    </div>
  );
}
