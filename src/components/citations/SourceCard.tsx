import { ExternalLink } from "lucide-react";
import type { Source, SourceType } from "@/lib/types";
import { cn } from "@/lib/utils";

const SOURCE_TYPE_LABEL: Record<SourceType, string> = {
  official: "Official",
  academic: "Academic",
  journalism: "Journalism",
  data: "Data",
  book: "Book",
  interview: "Interview",
  historical: "Historical",
};

/** Formats an ISO date string in the site's editorial style, e.g. "16 July 2026". */
function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export type SourceCardProps = {
  source: Source;
};

/** Full bibliography entry for a single source, used on /sources/. */
export function SourceCard({ source }: SourceCardProps) {
  const byline = [source.author, source.organisation]
    .filter(Boolean)
    .join(", ");
  const verified = source.verificationStatus === "verified";

  return (
    <article
      id={source.id}
      data-testid="source-entry"
      className="scroll-mt-24 border-b border-line py-6 first:pt-0 last:border-b-0"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-1.5 underline decoration-red decoration-2 underline-offset-2 hover:text-red"
          >
            {source.title}
            <ExternalLink
              size={14}
              aria-hidden="true"
              className="mt-1.5 shrink-0"
            />
          </a>
        </h3>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold",
            verified ? "bg-navy/10 text-navy" : "bg-red-deep/10 text-red-deep",
          )}
        >
          {verified ? "Verified" : "Placeholder — requires verification"}
        </span>
      </div>

      {byline ? <p className="mt-1 text-sm text-ink-faint">{byline}</p> : null}

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center rounded-full bg-chalk-deep px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wide text-navy">
          {SOURCE_TYPE_LABEL[source.sourceType]}
        </span>
        {source.countries?.map((country) => (
          <span
            key={country}
            className="inline-flex items-center rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
          >
            {country}
          </span>
        ))}
        {source.eras?.map((era) => (
          <span
            key={era}
            className="inline-flex items-center rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
          >
            {era}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm text-ink-faint">
        {source.publicationDate ? (
          <>Published {formatDate(source.publicationDate)}. </>
        ) : null}
        Accessed {formatDate(source.accessedDate)}.
      </p>

      {source.supports.length > 0 ? (
        <p className="mt-2 text-xs text-ink-faint">
          Supports: {source.supports.join("; ")}
        </p>
      ) : null}

      {source.notes ? (
        <p className="mt-2 text-sm italic text-ink-soft">{source.notes}</p>
      ) : null}
    </article>
  );
}
