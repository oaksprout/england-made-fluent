import type { Metadata } from "next";
import { site } from "@/config/site";
import { nations } from "@/data/nations";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { ShareButton } from "@/components/ui/ShareButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NationComparison } from "@/components/nations/NationComparison";
import { NationCard } from "@/components/nations/NationCard";
import FootballNationsIntro, {
  meta,
} from "@content/football-nations-intro.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/football-nations/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

export default function FootballNationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-red">
        {site.subtitle}
      </p>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        {meta.title}
      </h1>
      <div className="mt-4">
        <ReadingTime minutes={3} />
      </div>

      <Prose className="mt-8">
        <FootballNationsIntro />
      </Prose>

      <div className="mt-12 border-t border-line pt-8">
        <ShareButton title={meta.title} text={meta.description} />
      </div>

      <section className="mt-16">
        <SectionHeading
          id="compare"
          kicker="Side by side"
          title="Compare two or three national models"
        />
        <NationComparison nations={nations} />
      </section>

      <section className="mt-16">
        <SectionHeading
          id="case-studies"
          kicker="Eight case studies"
          title="Full national case studies"
        />
        <div className="space-y-8">
          {nations.map((nation) => (
            <div key={nation.id} id={nation.id} className="scroll-mt-24">
              <NationCard nation={nation} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
