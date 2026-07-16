/**
 * Shared coordinate space for tactical pitch diagrams.
 *
 * Content authors (see `GameStateDiagramSpec` / `DiagramMarker`) place markers
 * and arrows in a 0–100 x / 0–100 y "content" space, with x running
 * left→right towards the opponent goal and y running top→bottom.
 *
 * `PitchDiagram` renders into an SVG `viewBox="0 0 100 64"` (a 25:16
 * horizontal pitch). `px`/`py` convert a content coordinate into that
 * viewBox's coordinate space: x maps 1:1 (both run 0–100), y is scaled down
 * to the pitch's 64-unit height.
 */
export const PITCH_VIEWBOX_WIDTH = 100;
export const PITCH_VIEWBOX_HEIGHT = 64;

/** Convert a 0–100 content x coordinate into the pitch viewBox's x axis. */
export function px(x: number): number {
  return x;
}

/** Convert a 0–100 content y coordinate into the pitch viewBox's y axis. */
export function py(y: number): number {
  return (y / 100) * PITCH_VIEWBOX_HEIGHT;
}

/** Muted, chalk-on-grass colours shared by tactical diagrams. */
export const tacticalPalette = {
  grass: "#3e7a4f",
  grassDeep: "#2e5c3b",
  chalk: "#faf6ef",
  navy: "#0c1f3d",
  red: "#c8102e",
  redDeep: "#a00d25",
  opponentGrey: "#8b8f96",
} as const;
