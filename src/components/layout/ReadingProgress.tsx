"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fixed 3px reading-progress bar pinned above the header. Uses a
 * rAF-throttled scroll handler and never affects document layout.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    function computeProgress() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
      frameRef.current = null;
    }

    function handleScroll() {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(computeProgress);
    }

    computeProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const percent = Math.round(progress * 100);

  return (
    <div
      data-testid="reading-progress"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-red transition-[width] duration-150 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
