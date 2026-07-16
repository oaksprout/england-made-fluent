"use client";

import { useMemo, useState } from "react";
import type { TimelineCategory, TimelineEntry } from "@/lib/types";
import { Expandable } from "@/components/ui/Expandable";
import { CATEGORY_META, CATEGORY_ORDER } from "./category-meta";

type CategoryFilter = TimelineCategory | "all";

function decadeOf(year: number): number {
  return Math.floor(year / 10) * 10;
}

function CategoryChip({ category }: { category: TimelineCategory }) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-display text-[11px] uppercase tracking-wide ${meta.className}`}
    >
      {meta.label}
    </span>
  );
}

function TimelineEntryCard({ entry }: { entry: TimelineEntry }) {
  const years = entry.endYear
    ? `${entry.startYear}–${entry.endYear}`
    : `${entry.startYear}`;

  return (
    <div
      data-testid="timeline-entry"
      className="rounded-lg border border-line bg-chalk p-4"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        <span className="font-display font-semibold text-ink">{years}</span>
        <span aria-hidden="true">·</span>
        <span>{entry.country}</span>
        <CategoryChip category={entry.category} />
        {entry.contested ? (
          <span className="inline-flex items-center rounded-full border border-red-deep/40 bg-red-deep/10 px-2 py-0.5 font-display text-[11px] uppercase tracking-wide text-red-deep">
            Contested interpretation
          </span>
        ) : null}
      </div>

      <h3 className="mt-2 font-display text-lg font-bold text-ink">
        {entry.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
        {entry.summary}
      </p>

      <div className="mt-3">
        <Expandable summary="Full detail">
          <dl className="space-y-4">
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                Institutional structure
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {entry.institutionalStructure}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                Development environment
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {entry.developmentEnvironment}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                Coaching methodology
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {entry.coachingMethodology}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                Senior-team tactics
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {entry.seniorTactics}
              </dd>
            </div>
            <div className="rounded-md bg-chalk-deep p-3">
              <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                Interpretation
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {entry.interpretation}
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                Measurable evidence
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {entry.measurableEvidence}
              </dd>
            </div>
          </dl>
        </Expandable>
      </div>
    </div>
  );
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const [country, setCountry] = useState<string>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const countries = useMemo(
    () =>
      Array.from(new Set(entries.map((e) => e.country))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [entries],
  );

  const filtered = useMemo(
    () =>
      entries
        .filter((e) => country === "all" || e.country === country)
        .filter((e) => category === "all" || e.category === category)
        .sort((a, b) => a.startYear - b.startYear),
    [entries, country, category],
  );

  const categoriesPresent = useMemo(
    () => CATEGORY_ORDER.filter((c) => entries.some((e) => e.category === c)),
    [entries],
  );

  function resetAll() {
    setCountry("all");
    setCategory("all");
  }

  let previousDecade: number | null = null;

  return (
    <div data-testid="timeline">
      <div
        data-testid="timeline-filters"
        className="flex flex-wrap items-end gap-4"
      >
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-display text-xs uppercase tracking-wide text-ink-faint">
            Country
          </span>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded-md border border-line bg-chalk px-3 py-2 text-sm text-ink"
          >
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
          <button
            type="button"
            onClick={resetAll}
            className={`rounded-full border px-3 py-2 text-sm transition ${
              category === "all" && country === "all"
                ? "border-navy bg-navy text-chalk"
                : "border-line text-ink-soft hover:border-navy hover:text-navy"
            }`}
          >
            All
          </button>
          {categoriesPresent.map((c) => {
            const meta = CATEGORY_META[c];
            const isActive = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(isActive ? "all" : c)}
                aria-pressed={isActive}
                className={`rounded-full border px-3 py-2 text-sm transition ${
                  isActive
                    ? "border-navy bg-navy text-chalk"
                    : "border-line text-ink-soft hover:border-navy hover:text-navy"
                }`}
              >
                {meta.label}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="text-sm text-ink-faint">
          {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
        </p>
      </div>

      <ol className="relative mt-8 ml-3 space-y-8 border-l-2 border-line pl-8">
        {filtered.length === 0 ? (
          <p className="text-sm text-ink-faint">
            No entries match these filters.
          </p>
        ) : (
          filtered.map((entry) => {
            const decade = decadeOf(entry.startYear);
            const showDecade = decade !== previousDecade;
            previousDecade = decade;
            return (
              <li key={entry.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-chalk bg-navy"
                />
                {showDecade ? (
                  <p
                    aria-hidden="true"
                    className="mb-2 font-display text-sm font-semibold text-ink-faint"
                  >
                    {decade}s
                  </p>
                ) : null}
                <TimelineEntryCard entry={entry} />
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
}
