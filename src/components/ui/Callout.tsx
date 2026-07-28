import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CalloutTone = "note" | "interpretation" | "contested";

export type CalloutProps = {
  tone?: CalloutTone;
  title?: string;
  children: ReactNode;
};

const TONE_CONFIG: Record<
  CalloutTone,
  { label: string; dot: string; bg: string }
> = {
  note: { label: "Note", dot: "bg-navy", bg: "bg-chalk-deep/50" },
  interpretation: {
    label: "Interpretation",
    dot: "bg-navy",
    bg: "bg-chalk-deep",
  },
  contested: {
    label: "Contested interpretation",
    dot: "bg-red",
    bg: "bg-red/5",
  },
};

/**
 * Labelled aside used to keep analytical readings visually and textually
 * distinct from grounded evidence: a full hairline frame over a tinted
 * ground, with a tone dot beside the label. The tone label is always visible
 * text — colour is never the only signal.
 */
export function Callout({ tone = "note", title, children }: CalloutProps) {
  const config = TONE_CONFIG[tone];
  return (
    <div
      className={cn("my-6 rounded-lg border border-line px-5 py-4", config.bg)}
    >
      <p className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        <span
          aria-hidden="true"
          className={cn("h-2 w-2 shrink-0 rounded-full", config.dot)}
        />
        {config.label}
        {title ? (
          <span className="normal-case tracking-normal text-ink">
            · {title}
          </span>
        ) : null}
      </p>
      <div className="mt-2 text-ink-soft [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>p]:my-2">
        {children}
      </div>
    </div>
  );
}
