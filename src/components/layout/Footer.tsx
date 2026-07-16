import { site } from "@/config/site";

/** Stub — replaced by the UI components implementation (Agent B). */
export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm text-ink-faint">{site.disclaimer}</p>
      </div>
    </footer>
  );
}
