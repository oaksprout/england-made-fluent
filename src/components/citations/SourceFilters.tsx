"use client";

import { useMemo, useState } from "react";
import type { Source, SourceType, VerificationStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SourceCard } from "@/components/citations/SourceCard";

export type SourceFilterListProps = {
  sources: Source[];
};

const SOURCE_TYPE_LABEL: Record<SourceType, string> = {
  official: "Official",
  academic: "Academic",
  journalism: "Journalism",
  data: "Data",
  book: "Book",
  interview: "Interview",
  historical: "Historical",
};

const VERIFICATION_LABEL: Record<VerificationStatus, string> = {
  verified: "Verified",
  corroborated: "Corroborated",
  placeholder: "Placeholder",
};

function unique(values: (string | undefined)[]): string[] {
  return Array.from(
    new Set(values.filter((value): value is string => Boolean(value))),
  ).sort();
}

const selectClass =
  "w-full rounded-md border border-line bg-chalk px-3 py-2.5 text-sm text-ink-soft";

/**
 * Filterable bibliography: free-text search plus source type, country, era
 * and verification-status controls, all backed by React state (no URL
 * params). Renders SourceCard entries and a "Showing X of Y" count.
 */
export function SourceFilterList({ sources }: SourceFilterListProps) {
  const [query, setQuery] = useState("");
  const [sourceType, setSourceType] = useState("all");
  const [country, setCountry] = useState("all");
  const [era, setEra] = useState("all");
  const [verification, setVerification] = useState<"all" | VerificationStatus>(
    "all",
  );

  const sourceTypes = useMemo(
    () => unique(sources.map((s) => s.sourceType)),
    [sources],
  );
  const countries = useMemo(
    () => unique(sources.flatMap((s) => s.countries ?? [])),
    [sources],
  );
  const eras = useMemo(
    () => unique(sources.flatMap((s) => s.eras ?? [])),
    [sources],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sources.filter((source) => {
      if (sourceType !== "all" && source.sourceType !== sourceType)
        return false;
      if (country !== "all" && !(source.countries ?? []).includes(country))
        return false;
      if (era !== "all" && !(source.eras ?? []).includes(era)) return false;
      if (verification !== "all" && source.verificationStatus !== verification)
        return false;
      if (q) {
        const haystack = [
          source.title,
          source.author,
          source.organisation,
          source.notes,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [sources, query, sourceType, country, era, verification]);

  return (
    <div data-testid="source-filters">
      <div className="grid gap-4 rounded-lg border border-line bg-chalk-deep/40 p-5 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <label
            htmlFor="source-search"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-faint"
          >
            Search
          </label>
          <input
            id="source-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, author, organisation…"
            className="w-full rounded-md border border-line bg-chalk px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint"
          />
        </div>

        <div>
          <label
            htmlFor="source-type"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-faint"
          >
            Source type
          </label>
          <select
            id="source-type"
            value={sourceType}
            onChange={(event) => setSourceType(event.target.value)}
            className={selectClass}
          >
            <option value="all">All types</option>
            {sourceTypes.map((type) => (
              <option key={type} value={type}>
                {SOURCE_TYPE_LABEL[type as SourceType] ?? type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="source-country"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-faint"
          >
            Country
          </label>
          <select
            id="source-country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className={selectClass}
            disabled={countries.length === 0}
          >
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="source-era"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-faint"
          >
            Era
          </label>
          <select
            id="source-era"
            value={era}
            onChange={(event) => setEra(event.target.value)}
            className={selectClass}
            disabled={eras.length === 0}
          >
            <option value="all">All eras</option>
            {eras.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="lg:col-span-5">
          <legend className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Verification status
          </legend>
          <div className="flex flex-wrap gap-2">
            {(["all", "verified", "corroborated", "placeholder"] as const).map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  aria-pressed={verification === status}
                  onClick={() => setVerification(status)}
                  className={cn(
                    "min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    verification === status
                      ? "border-navy bg-navy text-chalk"
                      : "border-line text-ink-soft hover:border-navy hover:text-navy",
                  )}
                >
                  {status === "all"
                    ? "All sources"
                    : VERIFICATION_LABEL[status]}
                </button>
              ),
            )}
          </div>
        </fieldset>
      </div>

      <p className="mt-4 text-sm text-ink-faint" aria-live="polite">
        Showing {filtered.length} of {sources.length} sources
      </p>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-lg border border-dashed border-line p-8 text-center text-sm text-ink-faint">
          No sources match these filters. Try widening your search or clearing a
          filter.
        </p>
      ) : (
        <div className="mt-4">
          {filtered.map((source) => (
            <SourceCard key={source.id} source={source} />
          ))}
        </div>
      )}
    </div>
  );
}
