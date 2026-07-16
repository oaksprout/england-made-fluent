"use client";

import { useState } from "react";
import type { Nation } from "@/lib/types";
import { dimensionFields } from "./dimension-labels";

const MAX_SELECTED = 3;

export function NationComparison({ nations }: { nations: Nation[] }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    nations.slice(0, 2).map((n) => n.id),
  );
  const [announcement, setAnnouncement] = useState("");

  const nameFor = (id: string) =>
    nations.find((n) => n.id === id)?.shortLabel ?? id;

  function toggle(id: string) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        setAnnouncement(`${nameFor(id)} removed from comparison.`);
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= MAX_SELECTED) {
        const [oldest, ...rest] = prev;
        setAnnouncement(
          oldest
            ? `${nameFor(oldest)} removed to make room for ${nameFor(id)}.`
            : `${nameFor(id)} added.`,
        );
        return [...rest, id];
      }
      setAnnouncement(`${nameFor(id)} added to comparison.`);
      return [...prev, id];
    });
  }

  const selected = selectedIds
    .map((id) => nations.find((n) => n.id === id))
    .filter((n): n is Nation => Boolean(n));

  return (
    <div data-testid="nation-compare">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Choose nations to compare"
      >
        {nations.map((nation) => {
          const isSelected = selectedIds.includes(nation.id);
          return (
            <button
              key={nation.id}
              type="button"
              data-testid={`nation-toggle-${nation.id}`}
              aria-pressed={isSelected}
              onClick={() => toggle(nation.id)}
              className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                isSelected
                  ? "border-navy bg-navy text-chalk"
                  : "border-line bg-transparent text-ink-soft hover:border-navy hover:text-navy"
              }`}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: nation.accent }}
              />
              {nation.shortLabel}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {selected.length === 0 ? (
        <p className="mt-6 rounded-lg border border-dashed border-line p-6 text-center text-sm text-ink-faint">
          Select two or three nations above to compare their football models.
        </p>
      ) : (
        <>
          {/* Desktop: grid table, columns = selected nations. */}
          <div className="mt-6 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-40 border-b border-line p-3 text-left align-bottom"
                  />
                  {selected.map((nation) => (
                    <th
                      key={nation.id}
                      scope="col"
                      className="border-b-4 p-3 text-left align-bottom font-display text-base font-bold text-ink"
                      style={{ borderBottomColor: nation.accent }}
                    >
                      {nation.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="border-b border-line p-3 text-left align-top font-display text-xs uppercase tracking-wide text-ink-faint"
                  >
                    Headline
                  </th>
                  {selected.map((nation) => (
                    <td
                      key={nation.id}
                      className="border-b border-line p-3 align-top text-ink-soft"
                    >
                      {nation.headline}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="border-b border-line p-3 text-left align-top font-display text-xs uppercase tracking-wide text-ink-faint"
                  >
                    Strengths
                  </th>
                  {selected.map((nation) => (
                    <td
                      key={nation.id}
                      className="border-b border-line p-3 align-top text-ink-soft"
                    >
                      <ul className="list-disc space-y-1 pl-4">
                        {nation.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                {dimensionFields.map(({ key, label }) => (
                  <tr key={key}>
                    <th
                      scope="row"
                      className="border-b border-line p-3 text-left align-top font-display text-xs uppercase tracking-wide text-ink-faint"
                    >
                      {label}
                    </th>
                    {selected.map((nation) => (
                      <td
                        key={nation.id}
                        className="border-b border-line p-3 align-top text-ink-soft"
                      >
                        {nation.dimensions[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked accessible cards, one per selected nation. */}
          <div className="mt-6 space-y-6 md:hidden">
            {selected.map((nation) => (
              <div
                key={nation.id}
                className="overflow-hidden rounded-lg border border-line"
              >
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: nation.accent }}
                  aria-hidden="true"
                />
                <div className="space-y-4 p-4">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {nation.name}
                  </h3>
                  <div>
                    <p className="font-display text-xs uppercase tracking-wide text-ink-faint">
                      Headline
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {nation.headline}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xs uppercase tracking-wide text-ink-faint">
                      Strengths
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-ink-soft">
                      {nation.strengths.map((strength, i) => (
                        <li key={i}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  {dimensionFields.map(({ key, label }) => (
                    <div key={key}>
                      <p className="font-display text-xs uppercase tracking-wide text-ink-faint">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">
                        {nation.dimensions[key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
