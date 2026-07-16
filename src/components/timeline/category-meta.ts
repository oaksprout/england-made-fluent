import type { TimelineCategory } from "@/lib/types";

export const CATEGORY_ORDER: TimelineCategory[] = [
  "institutional",
  "tactical",
  "development",
  "reform",
  "hybrid",
];

/** Muted, distinct styling per category. Colour is never the only signal —
 * every chip also carries the category's text label. */
export const CATEGORY_META: Record<
  TimelineCategory,
  { label: string; className: string }
> = {
  institutional: {
    label: "Institutional",
    className: "border-navy/30 bg-navy/10 text-navy",
  },
  tactical: {
    label: "Tactical",
    className: "border-red-deep/30 bg-red-deep/10 text-red-deep",
  },
  development: {
    label: "Development",
    className: "border-ink-soft/30 bg-ink-soft/10 text-ink-soft",
  },
  reform: {
    label: "Reform",
    className: "border-navy-soft/40 bg-navy-soft/10 text-navy-soft",
  },
  hybrid: {
    label: "Hybrid",
    className:
      "border-ink-faint/40 bg-gradient-to-r from-navy/10 to-red-deep/10 text-ink",
  },
};
