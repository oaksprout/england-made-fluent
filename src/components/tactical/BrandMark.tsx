/**
 * BrandMark — the site's original abstract mark.
 *
 * Geometry: a simplified, off-centre St George's cross (two thin rectangles
 * — no field, no shield, no badge outline) sits behind two tactical route
 * lines: one solid curved run ending in an arrowhead, one dashed run ending
 * in a small dot. The cross bars are deliberately offset from the canvas
 * centre and from one another so the mark reads as a tactical diagram first,
 * not as a flag or crest. Nothing here reproduces the official England
 * crest, a shield, lions, or any federation badge.
 */
export function BrandMark({
  size = 32,
  monochrome = false,
}: {
  size?: number;
  monochrome?: boolean;
}) {
  const crossColour = monochrome ? "currentColor" : "#c8102e";
  const routeColour = monochrome ? "currentColor" : "#0c1f3d";
  const crossOpacity = monochrome ? 0.55 : 1;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="England, Made Fluent mark"
    >
      <title>England, Made Fluent mark</title>
      {/* Off-centre St George's cross: two bars, not a flag field. */}
      <rect
        x="39"
        y="6"
        width="8"
        height="82"
        rx="1.5"
        fill={crossColour}
        opacity={crossOpacity}
      />
      <rect
        x="8"
        y="36"
        width="80"
        height="8"
        rx="1.5"
        fill={crossColour}
        opacity={crossOpacity}
      />

      {/* Solid curved tactical run, ending in an arrowhead. */}
      <path
        d="M10 86 C 34 70, 46 34, 82 14"
        fill="none"
        stroke={routeColour}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M82 14 L 71 15.5 L 76 24.5 Z" fill={routeColour} />

      {/* Dashed tactical run, ending in a dot. */}
      <path
        d="M92 82 C 68 78, 52 48, 22 24"
        fill="none"
        stroke={routeColour}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <circle cx="22" cy="24" r="4.5" fill={routeColour} />
    </svg>
  );
}
