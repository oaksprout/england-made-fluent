import type { Metadata } from "next";
import { site } from "@/config/site";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { ShareButton } from "@/components/ui/ShareButton";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { ArticleJsonLd } from "@/components/home/ArticleJsonLd";
import EnglandDna, { meta } from "@content/england-dna.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/england-dna/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

const TOC_ITEMS = [
  { id: "the-right-ambition", label: "The right ambition" },
  { id: "influence-on-the-youth-teams", label: "Influence on the youth teams" },
  { id: "the-question-worth-asking", label: "The question worth asking" },
  {
    id: "questions-worth-investigating",
    label: "Questions worth investigating",
  },
  { id: "a-hypothesis-not-a-finding", label: "A hypothesis, not a finding" },
  {
    id: "what-we-are-asking-for-not-concluding",
    label: "What we are asking for",
  },
];

export default function EnglandDnaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <ArticleJsonLd
        headline={meta.title}
        description={meta.description}
        path="/england-dna/"
      />
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
        <div className="max-w-prose">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-red">
            {site.subtitle}
          </p>
          <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {meta.title}
          </h1>
          <div className="mt-4">
            <ReadingTime minutes={6} />
          </div>

          <div className="mt-4 lg:hidden">
            <TableOfContents items={TOC_ITEMS} />
          </div>

          <Prose className="mt-8">
            <EnglandDna />
          </Prose>

          <div className="mt-12 border-t border-line pt-8">
            <ShareButton title={meta.title} text={meta.description} />
          </div>
        </div>

        <div className="hidden lg:block">
          <TableOfContents items={TOC_ITEMS} />
        </div>
      </div>
    </div>
  );
}
