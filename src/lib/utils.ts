import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Prefix a public asset path with the deployment base path (GitHub Pages
 * project sites live under /england-made-fluent). next/link handles this
 * automatically; raw asset references do not.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Estimated reading time in whole minutes for a body of text. */
export function readingTimeMinutes(text: string, wordsPerMinute = 220): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

/** Slugify a heading for deep links. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
