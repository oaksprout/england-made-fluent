"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/tactical/BrandMark";
import { navItems, site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Nav items shown directly in the desktop bar; the rest sit behind "More". */
const PRIMARY_LABELS = [
  "The case",
  "England's advantage",
  "The model",
  "Football nations",
  "History",
  "Proposals",
];

/**
 * Sticky, translucent site header. Desktop shows a compact primary nav plus
 * a "More" disclosure for overflow items; mobile shows a hamburger toggling
 * a full-width panel. Escape always closes open menus.
 */
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const primaryItems = navItems.filter((item) =>
    PRIMARY_LABELS.includes(item.label),
  );
  const moreItems = navItems.filter(
    (item) => !PRIMARY_LABELS.includes(item.label),
  );

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMoreOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    function handlePointerDown(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [moreOpen]);

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-line bg-chalk/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandMark size={30} />
          <span className="font-display text-base font-bold leading-tight text-navy sm:text-lg">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-red"
                  : "text-ink-soft hover:text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
          {moreItems.length > 0 ? (
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-navy"
              >
                More
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={cn(
                    "transition-transform",
                    moreOpen && "rotate-180",
                  )}
                />
              </button>
              {moreOpen ? (
                <div className="absolute right-0 top-full mt-1 min-w-44 rounded-md border border-line bg-chalk py-1 shadow-lg">
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="block px-4 py-2.5 text-sm text-ink-soft hover:bg-chalk-deep hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </nav>

        <button
          type="button"
          data-testid="mobile-nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy lg:hidden"
        >
          {mobileOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav-panel"
          data-testid="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-chalk px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center py-3 font-display text-base font-medium",
                    isActive(item.href) ? "text-red" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
