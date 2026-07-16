import Link from "next/link";
import { site } from "@/config/site";

/** Stub — replaced by the UI components implementation (Agent B). */
export function Header() {
  return (
    <header data-testid="site-header" className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-lg font-bold text-navy">
          {site.name}
        </Link>
      </div>
    </header>
  );
}
