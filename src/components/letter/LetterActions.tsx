"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Printer, Share2 } from "lucide-react";

export type LetterActionsProps = {
  /** id of the element containing the letter's visible text. */
  letterId?: string;
  /**
   * Copy this text directly instead of reading `letterId`'s innerText — used
   * by the homepage teaser, which doesn't render the full letter body.
   */
  copyText?: string;
  shareTitle: string;
  shareText: string;
  shareUrl?: string;
  /** Hide the print action — used by the homepage teaser. Defaults to true. */
  showPrint?: boolean;
};

type Status = "idle" | "copied" | "copy-failed" | "shared";

const STATUS_LABEL: Record<Status, string> = {
  idle: "",
  copied: "Letter text copied",
  "copy-failed":
    "Could not copy automatically — please select and copy the text",
  shared: "Shared",
};

/**
 * Above-the-letter action bar for /open-letter/: copy the letter text,
 * open the print dialog (also usable as "save as PDF"), and share via the
 * Web Share API with a clipboard fallback. Deliberately excludes any
 * signature count or participation metric. Hidden from print output via the
 * caller's "no-print" wrapper class.
 */
export function LetterActions({
  letterId,
  copyText,
  shareTitle,
  shareText,
  shareUrl,
  showPrint = true,
}: LetterActionsProps) {
  const [status, setStatus] = useState<Status>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function announce(next: Status) {
    setStatus(next);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), 3000);
  }

  async function handleCopy() {
    const letterEl = letterId ? document.getElementById(letterId) : null;
    const text = copyText ?? letterEl?.innerText ?? "";
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("Clipboard API unavailable");
      }
      announce("copied");
    } catch {
      announce("copy-failed");
    }
  }

  function handlePrint() {
    window.print();
  }

  async function handleShare() {
    const url = shareUrl ?? window.location.href;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url });
        announce("shared");
      } catch {
        // User cancelled the native share sheet — not an error state.
      }
      return;
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        announce("copied");
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      announce("copy-failed");
    }
  }

  const buttonClass =
    "inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-navy transition-colors hover:border-red hover:text-red";

  return (
    <div className="no-print flex flex-wrap items-center gap-3">
      <button
        type="button"
        data-testid="letter-copy"
        onClick={handleCopy}
        className={buttonClass}
      >
        <Copy size={16} aria-hidden="true" />
        Copy letter text
      </button>
      {showPrint ? (
        <button
          type="button"
          data-testid="letter-print"
          onClick={handlePrint}
          className={buttonClass}
        >
          <Printer size={16} aria-hidden="true" />
          Print or save as PDF
        </button>
      ) : null}
      <button
        type="button"
        data-testid="letter-share"
        onClick={handleShare}
        className={buttonClass}
      >
        <Share2 size={16} aria-hidden="true" />
        Share
      </button>
      <span aria-live="polite" className="text-xs font-medium text-ink-faint">
        {STATUS_LABEL[status]}
      </span>
    </div>
  );
}
