"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { InteropSystem } from "@/lib/types";
import { BrandMark } from "./BrandMark";

function Arrowhead({
  x,
  y,
  angle,
  fill,
}: {
  x: number;
  y: number;
  angle: number;
  fill: string;
}) {
  return (
    <polygon
      points="0,-3 6,0 0,3"
      fill={fill}
      transform={`translate(${x} ${y}) rotate(${angle})`}
    />
  );
}

/**
 * Small abstract glyph representing the habit a given club system brings.
 * Keyed on the known `InteropSystem["id"]` values from the brief; falls back
 * to a plain dot for any id it doesn't recognise so unexpected data never
 * throws.
 */
function SystemGlyph({
  systemId,
  accent,
}: {
  systemId: string;
  accent: string;
}) {
  const content = (() => {
    switch (systemId) {
      case "positional-possession":
        return (
          <g fill={accent}>
            {[14, 30, 46].map((x) =>
              [14, 30, 46].map((y) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r={3} />
              )),
            )}
          </g>
        );
      case "high-press":
        return (
          <g
            stroke={accent}
            strokeWidth={2.4}
            fill="none"
            strokeLinecap="round"
          >
            <line x1={8} y1={8} x2={26} y2={26} />
            <line x1={52} y1={8} x2={34} y2={26} />
            <line x1={8} y1={52} x2={26} y2={34} />
            <line x1={52} y1={52} x2={34} y2={34} />
            <Arrowhead x={26} y={26} angle={45} fill={accent} />
            <Arrowhead x={34} y={26} angle={135} fill={accent} />
            <Arrowhead x={26} y={34} angle={-45} fill={accent} />
            <Arrowhead x={34} y={34} angle={-135} fill={accent} />
          </g>
        );
      case "direct-transition":
        return (
          <g stroke={accent} strokeWidth={3} fill="none" strokeLinecap="round">
            <line x1={8} y1={30} x2={46} y2={30} />
            <Arrowhead x={46} y={30} angle={0} fill={accent} />
          </g>
        );
      case "deep-block":
        return (
          <g fill={accent}>
            {[12, 24, 36, 48].map((x) => (
              <circle key={`a-${x}`} cx={x} cy={20} r={2.6} />
            ))}
            {[12, 24, 36, 48].map((x) => (
              <circle key={`b-${x}`} cx={x} cy={40} r={2.6} />
            ))}
          </g>
        );
      case "back-three":
        return (
          <g>
            <g fill={accent}>
              <circle cx={18} cy={40} r={3} />
              <circle cx={30} cy={44} r={3} />
              <circle cx={42} cy={40} r={3} />
            </g>
            <g
              stroke={accent}
              strokeWidth={2.2}
              fill="none"
              strokeLinecap="round"
            >
              <line x1={18} y1={40} x2={14} y2={16} />
              <Arrowhead x={14} y={16} angle={-95} fill={accent} />
              <line x1={42} y1={40} x2={46} y2={16} />
              <Arrowhead x={46} y={16} angle={-85} fill={accent} />
            </g>
          </g>
        );
      case "midfield-diamond":
        return (
          <polygon
            points="30,8 50,30 30,52 10,30"
            fill="none"
            stroke={accent}
            strokeWidth={2.6}
            strokeLinejoin="round"
          />
        );
      default:
        return <circle cx={30} cy={30} r={5} fill={accent} />;
    }
  })();

  return (
    <svg viewBox="0 0 60 60" className="h-16 w-16 shrink-0" aria-hidden="true">
      {content}
    </svg>
  );
}

export function InteropVisual({ systems }: { systems: InteropSystem[] }) {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    systems[0]?.id,
  );
  const reduceMotion = Boolean(useReducedMotion());
  const headingId = useId();

  const selected = systems.find((s) => s.id === selectedId) ?? systems[0];

  if (!selected) return null;

  const panelTransition = { duration: reduceMotion ? 0 : 0.25 };

  return (
    <div data-testid="interop-visual" className="not-prose">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Club system background"
      >
        {systems.map((system) => {
          const isSelected = system.id === selected.id;
          return (
            <button
              key={system.id}
              type="button"
              data-testid={`interop-system-${system.id}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedId(system.id)}
              className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                isSelected
                  ? "border-navy bg-navy text-chalk"
                  : "border-line bg-transparent text-ink-soft hover:border-navy hover:text-navy"
              }`}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: system.accent }}
              />
              {system.name}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-chalk-deep p-4">
          <h3
            id={`${headingId}-brings`}
            className="font-display text-xs uppercase tracking-wide text-ink-faint"
          >
            What the player brings
          </h3>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
              transition={panelTransition}
              className="mt-3 flex items-center gap-4"
              aria-labelledby={`${headingId}-brings`}
            >
              <SystemGlyph systemId={selected.id} accent={selected.accent} />
              <p className="text-sm text-ink-soft">{selected.habit}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="rounded-lg border border-line bg-navy p-4 text-chalk">
          <h3
            id={`${headingId}-translates`}
            className="font-display text-xs uppercase tracking-wide text-chalk/70"
          >
            How it translates for England
          </h3>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
              transition={panelTransition}
              className="mt-3 flex items-center gap-4"
              aria-labelledby={`${headingId}-translates`}
            >
              <span className="shrink-0 rounded-full bg-chalk/10 p-2">
                <BrandMark size={40} monochrome />
              </span>
              <p className="text-sm text-chalk/90">{selected.translation}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
