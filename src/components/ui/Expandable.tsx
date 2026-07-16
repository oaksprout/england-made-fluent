import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type ExpandableProps = {
  summary: string;
  children: ReactNode;
};

/**
 * Styled native <details>/<summary> disclosure. Fully keyboard operable with
 * no JavaScript required; the summary is a real <summary> element, and the
 * chevron rotates on the native open state.
 */
export function Expandable({ summary, children }: ExpandableProps) {
  return (
    <details className="group my-4 rounded-lg border border-line bg-chalk-deep/40 open:bg-chalk-deep/60">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
        <span>{summary}</span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="px-5 pb-5 text-ink-soft">{children}</div>
    </details>
  );
}
