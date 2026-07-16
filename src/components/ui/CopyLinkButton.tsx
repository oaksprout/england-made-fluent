"use client";

import { useEffect, useRef, useState } from "react";
import { Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CopyLinkButtonProps = {
  /** Element id this link should scroll to, e.g. a SectionHeading id. */
  anchor: string;
  label?: string;
};

/**
 * Icon button that copies a deep link (origin + pathname + #anchor) to the
 * section it sits beside, with an inline "Copied" confirmation announced to
 * screen readers via aria-live.
 */
export function CopyLinkButton({
  anchor,
  label = "Copy link to this section",
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
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
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={label}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-faint transition-colors",
          "hover:bg-chalk-deep hover:text-red focus-visible:text-red",
        )}
      >
        <LinkIcon size={16} aria-hidden="true" />
      </button>
      <span aria-live="polite" className="text-xs font-medium text-ink-faint">
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
}
