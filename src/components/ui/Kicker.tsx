import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type KickerProps = {
  children: ReactNode;
  className?: string;
};

/** Small caps, red, Archivo eyebrow label used above headings. */
export function Kicker({ children, className }: KickerProps) {
  return (
    <p
      className={cn(
        "font-display text-xs font-semibold uppercase tracking-[0.14em] text-red",
        className,
      )}
    >
      {children}
    </p>
  );
}
