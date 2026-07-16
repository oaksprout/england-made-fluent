"use client";

import {
  Children,
  isValidElement,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type DepthKey = "brief" | "detailed" | "evidence";

export type DepthSlotProps = {
  children: ReactNode;
};

/** Slot wrapper identifying the "Brief" reading-depth layer. Used as a DepthLayers child (e.g. from MDX) or rendered standalone. */
export function DepthBrief({ children }: DepthSlotProps) {
  return <>{children}</>;
}

/** Slot wrapper identifying the "Detailed" reading-depth layer. */
export function DepthDetailed({ children }: DepthSlotProps) {
  return <>{children}</>;
}

/** Slot wrapper identifying the "Evidence" reading-depth layer. */
export function DepthEvidence({ children }: DepthSlotProps) {
  return <>{children}</>;
}

export type DepthLayersProps = {
  /** Direct content, for programmatic (non-MDX) use. */
  brief?: ReactNode;
  detailed?: ReactNode;
  evidence?: ReactNode;
  defaultLayer?: DepthKey;
  /**
   * MDX usage: pass <DepthBrief>/<DepthDetailed>/<DepthEvidence> children —
   * they are matched by component identity regardless of order.
   */
  children?: ReactNode;
};

const TAB_ORDER: { key: DepthKey; label: string }[] = [
  { key: "brief", label: "Brief" },
  { key: "detailed", label: "Detailed" },
  { key: "evidence", label: "Evidence" },
];

/**
 * Accessible tabbed control for presenting the same idea at three depths
 * (Brief / Detailed / Evidence). Understated segmented control with a red
 * underline for the active tab; full tablist keyboard semantics.
 */
export function DepthLayers({
  brief,
  detailed,
  evidence,
  defaultLayer = "brief",
  children,
}: DepthLayersProps) {
  const [active, setActive] = useState<DepthKey>(defaultLayer);
  const tabRefs = useRef<Record<DepthKey, HTMLButtonElement | null>>({
    brief: null,
    detailed: null,
    evidence: null,
  });
  const baseId = useId();

  const slots: Record<DepthKey, ReactNode> = {
    brief: brief ?? null,
    detailed: detailed ?? null,
    evidence: evidence ?? null,
  };

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    const props = child.props as DepthSlotProps;
    if (child.type === DepthBrief) slots.brief = props.children;
    else if (child.type === DepthDetailed) slots.detailed = props.children;
    else if (child.type === DepthEvidence) slots.evidence = props.children;
  });

  function focusTab(key: DepthKey) {
    setActive(key);
    tabRefs.current[key]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab(TAB_ORDER[(index + 1) % TAB_ORDER.length]!.key);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab(
        TAB_ORDER[(index - 1 + TAB_ORDER.length) % TAB_ORDER.length]!.key,
      );
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(TAB_ORDER[0]!.key);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(TAB_ORDER[TAB_ORDER.length - 1]!.key);
    }
  }

  return (
    <div data-testid="depth-layers" className="my-8">
      <div
        role="tablist"
        aria-label="Reading depth"
        className="inline-flex items-center gap-1 border-b border-line"
      >
        {TAB_ORDER.map(({ key, label }, index) => {
          const selected = active === key;
          return (
            <button
              key={key}
              ref={(node) => {
                tabRefs.current[key] = node;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${key}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${key}`}
              tabIndex={selected ? 0 : -1}
              data-testid={`depth-tab-${key}`}
              onClick={() => setActive(key)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "relative min-h-11 px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide transition-colors",
                selected ? "text-navy" : "text-ink-faint hover:text-navy",
              )}
            >
              {label}
              {selected ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-px h-0.5 bg-red"
                />
              ) : null}
            </button>
          );
        })}
      </div>
      {TAB_ORDER.map(({ key }) => (
        <div
          key={key}
          role="tabpanel"
          id={`${baseId}-panel-${key}`}
          aria-labelledby={`${baseId}-tab-${key}`}
          hidden={active !== key}
          className="pt-5"
        >
          {slots[key]}
        </div>
      ))}
    </div>
  );
}
