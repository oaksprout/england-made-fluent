"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { getSource } from "@/data/sources";
import type { SourceType } from "@/lib/types";

export type CiteProps = {
  id: string;
  children?: ReactNode;
};

const SOURCE_TYPE_LABEL: Record<SourceType, string> = {
  official: "Official",
  academic: "Academic",
  journalism: "Journalism",
  data: "Data",
  book: "Book",
  interview: "Interview",
  historical: "Historical",
};

function formatShortDate(value?: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Inline citation marker. Renders a small superscript trigger that opens an
 * accessible popover (hover, focus or tap) with the source's key details and
 * a link into the full bibliography. Unknown ids render their children
 * unchanged and warn in development rather than crashing.
 */
export function Cite({ id, children }: CiteProps) {
  const source = getSource(id);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"top" | "bottom">("top");
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!source && process.env.NODE_ENV !== "production") {
       
      console.warn(`Cite: unknown source id "${id}"`);
    }
  }, [source, id]);

  useEffect(() => {
    if (!open) return;
    const rect = wrapperRef.current?.getBoundingClientRect();
    setPlacement(rect && rect.top < 240 ? "bottom" : "top");

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!source) {
    return <>{children}</>;
  }

  const publicationDate = formatShortDate(source.publicationDate);
  const accessedDate = formatShortDate(source.accessedDate);

  return (
    <span
      ref={wrapperRef}
      data-testid="cite"
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="mx-0.5 inline-flex min-h-0 items-baseline align-super text-[0.7em] font-semibold text-red underline decoration-dotted underline-offset-2"
        aria-expanded={open}
        aria-describedby={open ? popoverId : undefined}
        onFocus={() => setOpen(true)}
        onBlur={(event) => {
          if (!wrapperRef.current?.contains(event.relatedTarget as Node))
            setOpen(false);
        }}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">†</span>
        <span className="sr-only">Source: {source.title}</span>
      </button>

      {open ? (
        <span
          id={popoverId}
          role="dialog"
          aria-label={`Source details: ${source.title}`}
          className={`absolute left-1/2 z-50 w-72 -translate-x-1/2 rounded-lg border border-line bg-chalk p-4 text-left text-sm normal-case tracking-normal shadow-xl ${
            placement === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <span className="mb-1.5 mr-1.5 inline-block rounded-full bg-chalk-deep px-2 py-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-wide text-navy">
            {SOURCE_TYPE_LABEL[source.sourceType] ?? source.sourceType}
          </span>
          {source.verificationStatus === "placeholder" ? (
            <span className="mb-1.5 inline-block rounded-full bg-red-deep/10 px-2 py-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-wide text-red-deep">
              Unverified — placeholder awaiting verification
            </span>
          ) : null}
          <p className="mt-1.5 font-display text-sm font-semibold leading-snug text-ink">
            {source.title}
          </p>
          {source.author || source.organisation ? (
            <p className="mt-1 text-xs text-ink-faint">
              {[source.author, source.organisation].filter(Boolean).join(", ")}
            </p>
          ) : null}
          <p className="mt-1 text-xs text-ink-faint">
            {publicationDate ? <>Published {publicationDate}. </> : null}
            {accessedDate ? <>Accessed {accessedDate}.</> : null}
          </p>
          <Link
            href={`/sources/#${source.id}`}
            className="mt-2 inline-block text-xs font-semibold text-navy underline decoration-red hover:text-red"
          >
            View in bibliography
          </Link>
        </span>
      ) : null}
    </span>
  );
}
