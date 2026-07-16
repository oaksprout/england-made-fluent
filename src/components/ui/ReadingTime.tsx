import { Clock } from "lucide-react";

export type ReadingTimeProps = {
  minutes: number;
};

/** Small metadata row showing estimated reading time for a piece of long-form content. */
export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <p className="inline-flex items-center gap-1.5 text-sm text-ink-faint">
      <Clock size={14} aria-hidden="true" />
      <span>{minutes}-minute read</span>
    </p>
  );
}
