import Link from "next/link";
import { BrandMark } from "@/components/tactical/BrandMark";
import { footerNavItems, site } from "@/config/site";

const COLUMN_SPLIT = Math.ceil(footerNavItems.length / 2);

/**
 * Navy, chalk-text site footer: full site navigation, the independence
 * disclaimer, and small-print legal links. Privacy is only linked when
 * analytics are enabled.
 */
export function Footer() {
  const columnOne = footerNavItems.slice(0, COLUMN_SPLIT);
  const columnTwo = footerNavItems.slice(COLUMN_SPLIT);

  return (
    <footer className="border-t border-line bg-navy text-chalk">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandMark size={28} monochrome />
              <span className="font-display text-lg font-bold">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-chalk/70">
              {site.subtitle}
            </p>
          </div>

          <nav aria-label="Footer, read">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-chalk/50">
              Read
            </h2>
            <ul className="mt-4 space-y-2.5">
              {columnOne.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-chalk/80 transition-colors hover:text-chalk hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer, more">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-chalk/50">
              More
            </h2>
            <ul className="mt-4 space-y-2.5">
              {columnTwo.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-chalk/80 transition-colors hover:text-chalk hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/open-letter/"
                  className="text-sm text-chalk/80 transition-colors hover:text-chalk hover:underline"
                >
                  Open letter
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-chalk/15 pt-8">
          <p
            data-testid="footer-disclaimer"
            className="max-w-2xl text-sm leading-relaxed text-chalk/70"
          >
            {site.disclaimer}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-chalk/50">
            <span>Content licensed for sharing with attribution.</span>
            <Link href="/sources/" className="underline hover:text-chalk">
              Sources
            </Link>
            <Link href="/open-letter/" className="underline hover:text-chalk">
              Open letter
            </Link>
            {site.analytics.enabled ? (
              <Link href="/privacy/" className="underline hover:text-chalk">
                Privacy
              </Link>
            ) : null}
            <span>
              &copy; {new Date().getFullYear()} {site.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
