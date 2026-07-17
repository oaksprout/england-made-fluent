import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { sources } from "@/data/sources";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { ShareButton } from "@/components/ui/ShareButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import Evidence, { meta } from "@content/evidence.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/evidence/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

export default function EvidencePage() {
  const total = sources.length;
  const placeholderCount = sources.filter(
    (source) => source.verificationStatus === "placeholder",
  ).length;
  const corroboratedCount = sources.filter(
    (source) => source.verificationStatus === "corroborated",
  ).length;
  const verifiedCount = total - placeholderCount - corroboratedCount;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-red">
        {site.subtitle}
      </p>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        {meta.title}
      </h1>
      <div className="mt-4">
        <ReadingTime minutes={5} />
      </div>

      <Prose className="mt-8">
        <Evidence />
      </Prose>

      <div className="mt-12 border-t border-line pt-8">
        <ShareButton title={meta.title} text={meta.description} />
      </div>

      <section className="mt-16 max-w-prose">
        <SectionHeading
          id="research-agenda"
          kicker="The bibliography"
          title="Research agenda"
          lede="Every factual claim on this site is backed by a source entry with a stated verification status. Right now, that status is honest rather than reassuring."
        />
        <Card className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-4xl font-black text-ink">{total}</p>
            <p className="mt-1 text-sm text-ink-faint">
              Sources in the bibliography
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-black text-red">
              {placeholderCount}
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Placeholder — candidate located, awaiting verification
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-black text-navy-soft">
              {corroboratedCount}
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Corroborated citations — full text not yet checked
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-black text-navy">
              {verifiedCount}
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Independently verified
            </p>
          </div>
        </Card>
        <Link
          href="/sources/"
          className="mt-6 inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
        >
          Browse the full bibliography →
        </Link>
      </section>
    </div>
  );
}
