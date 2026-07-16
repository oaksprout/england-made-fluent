"use client";

import { useEffect, useRef, useState } from "react";
import { Share2 } from "lucide-react";

export type ShareButtonProps = {
  title: string;
  text: string;
  url?: string;
};

/**
 * Share action that uses the Web Share API where available, falling back to
 * copying the URL to the clipboard with an inline confirmation.
 */
export function ShareButton({ title, text, url }: ShareButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "shared">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function announce(next: "copied" | "shared") {
    setStatus(next);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), 2500);
  }

  async function handleShare() {
    const shareUrl = url ?? window.location.href;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
        announce("shared");
      } catch {
        // User cancelled the native share sheet — not an error state.
      }
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {
        // No clipboard access available in this environment; nothing more to do.
      }
      document.body.removeChild(textarea);
    }
    announce("copied");
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        data-testid="share-button"
        onClick={handleShare}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-navy transition-colors hover:border-red hover:text-red"
      >
        <Share2 size={16} aria-hidden="true" />
        Share
      </button>
      <span aria-live="polite" className="text-xs font-medium text-ink-faint">
        {status === "copied"
          ? "Link copied"
          : status === "shared"
            ? "Shared"
            : ""}
      </span>
    </span>
  );
}
