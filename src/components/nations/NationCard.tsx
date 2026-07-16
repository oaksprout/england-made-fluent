import type { Nation } from "@/lib/types";
import { Expandable } from "@/components/ui/Expandable";
import { Callout } from "@/components/ui/Callout";
import { dimensionFields } from "./dimension-labels";

/** Full editorial case-study card for a single nation's football model. */
export function NationCard({ nation }: { nation: Nation }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-chalk">
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: nation.accent }}
        aria-hidden="true"
      />
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-ink">
          {nation.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-ink-soft">
          {nation.headline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {nation.modelSummary}
        </p>

        {nation.strengths.length > 0 ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink-soft">
            {nation.strengths.map((strength, i) => (
              <li key={i}>{strength}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 space-y-3">
          <Expandable summary="The nine dimensions">
            <dl className="space-y-4">
              {dimensionFields.map(({ key, label }) => {
                const value = nation.dimensions[key];
                return (
                  <div key={key}>
                    <dt className="font-display text-xs uppercase tracking-wide text-ink-faint">
                      {label}
                    </dt>
                    <dd className="mt-1">
                      {key === "interpretation" ? (
                        <Callout tone="interpretation">{value}</Callout>
                      ) : (
                        <span className="text-sm text-ink-soft">{value}</span>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Expandable>

          <Expandable summary="How it changed over time">
            <ol className="space-y-5">
              {nation.eras.map((era) => (
                <li key={era.id}>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-sm font-semibold text-ink">
                      {era.period}
                    </span>
                    <span className="text-sm text-ink-soft">{era.title}</span>
                    {era.contested ? (
                      <span className="rounded-full border border-red-deep/40 bg-red-deep/10 px-2 py-0.5 font-display text-[11px] uppercase tracking-wide text-red-deep">
                        Contested
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {era.summary}
                  </p>
                  {era.interpretation ? (
                    <div className="mt-2">
                      <Callout tone="interpretation">
                        {era.interpretation}
                      </Callout>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </Expandable>

          <Expandable summary="Honest caveats">
            <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">
              {nation.caveats.map((caveat, i) => (
                <li key={i}>{caveat}</li>
              ))}
            </ul>
          </Expandable>
        </div>
      </div>
    </article>
  );
}
