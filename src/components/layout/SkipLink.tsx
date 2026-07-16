/** Visually hidden link that becomes visible on focus, jumping keyboard users past the header to #main-content. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-chalk"
    >
      Skip to main content
    </a>
  );
}
