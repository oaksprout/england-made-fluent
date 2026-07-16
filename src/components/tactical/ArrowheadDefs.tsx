import { tacticalPalette } from "./pitch-geometry";

export type ArrowColourKey = "navy" | "grey" | "red";

const ARROW_COLOURS: Record<ArrowColourKey, string> = {
  navy: tacticalPalette.navy,
  grey: tacticalPalette.opponentGrey,
  red: tacticalPalette.red,
};

/** Deterministic marker id for a given instance prefix + colour key. */
export function arrowMarkerId(
  idPrefix: string,
  colour: ArrowColourKey,
): string {
  return `${idPrefix}-arrowhead-${colour}`;
}

/**
 * Shared `<marker>` arrowhead definitions for tactical arrows. Renders one
 * marker per colour so `stroke`/`marker-end` stay in sync. `idPrefix` should
 * be unique per rendered diagram (e.g. via `useId()`) so multiple diagrams on
 * one page don't collide on marker ids.
 */
export function ArrowheadDefs({ idPrefix }: { idPrefix: string }) {
  return (
    <defs>
      {(Object.keys(ARROW_COLOURS) as ArrowColourKey[]).map((key) => (
        <marker
          key={key}
          id={arrowMarkerId(idPrefix, key)}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 Z" fill={ARROW_COLOURS[key]} />
        </marker>
      ))}
    </defs>
  );
}
