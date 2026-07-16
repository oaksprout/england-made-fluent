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
  { label: string; border: string; bg: string }
> = {
  note: { label: "Note", border: "border-navy", bg: "bg-chalk-deep/50" },
  interpretation: {
    label: "Interpretation",
    border: "border-navy",
    bg: "bg-chalk-deep",
  },
  contested: {
    label: "Contested interpretation",
    border: "border-red",
    bg: "bg-red/5",
  },
};

/**
 * Labelled aside used to keep analytical readings visually and textually
 * distinct from grounded evidence. The tone label is always visible text —
 * colour is never the only signal.
 */
export function Callout({ tone = "note", title, children }: CalloutProps) {
  const config = TONE_CONFIG[tone];
  return (
    <div
      className={cn(
        "my-6 rounded-r-md border-l-4 py-4 pl-5 pr-5",
        config.border,
        config.bg,
      )}
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        {config.label}
        {title ? (
          <span className="ml-2 normal-case tracking-normal text-ink">
            — {title}
          </span>
        ) : null}
      </p>
      <div className="mt-2 text-ink-soft [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>p]:my-2">
        {children}
      </div>
    </div>
  );
}
