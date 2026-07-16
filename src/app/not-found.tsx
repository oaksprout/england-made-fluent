import Link from "next/link";
import { BrandMark } from "@/components/tactical/BrandMark";

/** Styled 404 page for the static export. */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <BrandMark size={40} />
      <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.14em] text-red">
        Page not found
      </p>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        This page has moved out of position
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
        Whatever you were looking for isn&rsquo;t at this address. It may have
        been renamed or never existed on this site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-red px-6 font-display text-sm font-semibold text-chalk transition-colors hover:bg-red-deep"
      >
        Return to the homepage
      </Link>
    </div>
  );
}
