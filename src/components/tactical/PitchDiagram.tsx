import type { ReactNode } from "react";
import {
  PITCH_VIEWBOX_HEIGHT,
  PITCH_VIEWBOX_WIDTH,
  tacticalPalette,
} from "./pitch-geometry";

/**
 * Presentational pitch canvas. Renders a horizontal pitch (chalk markings on
 * a muted grass ground) inside a `viewBox="0 0 100 64"` SVG. Callers (e.g.
 * `GameStateDiagram`) draw markers/arrows as children using the `px`/`py`
 * helpers exported from `./pitch-geometry` to convert 0–100 content
 * coordinates into this viewBox's space, then pass the resulting SVG
 * elements in as `children` — they're rendered directly inside this `<svg>`,
 * layered above the pitch markings.
 */
export function PitchDiagram({
  viewLabel,
  children,
}: {
  viewLabel: string;
  children?: ReactNode;
}) {
  const stripeCount = 10;
  const stripeWidth = PITCH_VIEWBOX_WIDTH / stripeCount;

  return (
    <svg
      viewBox={`0 0 ${PITCH_VIEWBOX_WIDTH} ${PITCH_VIEWBOX_HEIGHT}`}
      className="h-auto w-full"
      role="img"
    >
      <title>{viewLabel}</title>
      <desc>{viewLabel}</desc>

      <rect
        x={0}
        y={0}
        width={PITCH_VIEWBOX_WIDTH}
        height={PITCH_VIEWBOX_HEIGHT}
        rx={1}
        fill={tacticalPalette.grass}
      />
      {/* Subtle mow stripes — decorative only, no branding. */}
      {Array.from({ length: stripeCount }).map((_, i) =>
        i % 2 === 0 ? (
          <rect
            key={i}
            x={i * stripeWidth}
            y={0}
            width={stripeWidth}
            height={PITCH_VIEWBOX_HEIGHT}
            fill={tacticalPalette.grassDeep}
            opacity={0.18}
          />
        ) : null,
      )}

      <g
        fill="none"
        stroke={tacticalPalette.chalk}
        strokeOpacity={0.85}
        strokeWidth={0.5}
        strokeLinecap="round"
      >
        {/* Outline */}
        <rect x={2} y={2} width={96} height={60} rx={1} />
        {/* Halfway line */}
        <line x1={50} y1={2} x2={50} y2={62} />
        {/* Centre circle + spot */}
        <circle cx={50} cy={32} r={8} />
        <circle
          cx={50}
          cy={32}
          r={0.6}
          fill={tacticalPalette.chalk}
          stroke="none"
        />

        {/* Left penalty area + six-yard box + spot */}
        <rect x={2} y={15} width={14} height={34} />
        <rect x={2} y={24} width={5} height={16} />
        <circle
          cx={13}
          cy={32}
          r={0.6}
          fill={tacticalPalette.chalk}
          stroke="none"
        />

        {/* Right penalty area + six-yard box + spot */}
        <rect x={84} y={15} width={14} height={34} />
        <rect x={93} y={24} width={5} height={16} />
        <circle
          cx={87}
          cy={32}
          r={0.6}
          fill={tacticalPalette.chalk}
          stroke="none"
        />
      </g>

      {children}
    </svg>
  );
}
