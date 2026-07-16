"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type TableOfContentsItem = {
  id: string;
  label: string;
};

export type TableOfContentsProps = {
  items: TableOfContentsItem[];
};

/**
 * Table of contents for long-form pages. Renders both a desktop sticky
 * right-rail (active section tracked via IntersectionObserver) and a mobile
 * "On this page" disclosure; responsive classes decide which is visible.
 */
export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <>
      <nav
        aria-label="Table of contents"
        className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block"
      >
        <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
          On this page
        </p>
        <ul className="mt-3 space-y-1 border-l border-line">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                    active
                      ? "border-red font-medium text-navy"
                      : "border-transparent text-ink-faint hover:text-navy",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <details
        data-testid="mobile-toc"
        className="group mb-6 rounded-lg border border-line bg-chalk-deep/40 lg:hidden"
      >
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-display text-sm font-semibold text-navy [&::-webkit-details-marker]:hidden">
          <span>On this page</span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <ul className="space-y-1 px-4 pb-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block min-h-11 py-2 text-sm text-ink-soft hover:text-navy"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
