import type { Metadata } from "next";
import { sources } from "@/data/sources";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { Callout } from "@/components/ui/Callout";
import { SourceFilterList } from "@/components/citations/SourceFilters";
import SourcesMethodology, { meta } from "@content/sources-methodology.mdx";

export const metadata: Metadata = {
  title: "Sources & bibliography",
  description: meta.description,
  alternates: { canonical: "/sources/" },
  openGraph: {
    title: "Sources & bibliography",
    description: meta.description,
    images: [
      {
        url: "/og/primary.png",
        width: 1200,
        height: 630,
        alt: "Sources & bibliography",
      },
    ],
  },
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-red">
        {sources.length} sources
      </p>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        Sources &amp; bibliography
      </h1>
      <div className="mt-4">
        <ReadingTime minutes={3} />
      </div>

      <Prose className="mt-8">
        <SourcesMethodology />
      </Prose>

      <Callout tone="note" title="How far each source has been checked">
        <p>
          Entries marked <strong>corroborated</strong> have had their exact
          citation details (title, author, publisher or journal, date, URL or
          DOI) confirmed against multiple independent bibliographic and search
          records, but the underlying document has not yet been retrieved and
          read in full. Entries marked <strong>placeholder</strong> record the
          best candidate source located so far. Nothing in this bibliography is
          yet marked <strong>verified</strong>: no claim, quotation or figure
          should be treated as confirmed until a researcher has read the
          underlying material directly — see the methodology above.
        </p>
      </Callout>

      <section className="mt-12">
        <SourceFilterList sources={sources} />
      </section>
    </div>
  );
}
