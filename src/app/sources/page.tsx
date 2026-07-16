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

      <Callout tone="note" title="Every current source is a placeholder">
        <p>
          Every source in this bibliography is currently seeded with
          <code className="mx-1 rounded bg-chalk px-1.5 py-0.5 text-xs">
            verificationStatus: &quot;placeholder&quot;
          </code>
          pending human verification. None of the claims, quotations or figures
          they support should be treated as confirmed until a researcher has
          located the underlying material and checked it directly — see the
          methodology above.
        </p>
      </Callout>

      <section className="mt-12">
        <SourceFilterList sources={sources} />
      </section>
    </div>
  );
}
