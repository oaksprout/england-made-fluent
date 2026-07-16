import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

/** Restrained bordered panel used for grouping related content. */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-chalk-deep/50 p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
