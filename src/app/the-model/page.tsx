import type { Metadata } from "next";
import { site } from "@/config/site";
import { gameStateModules } from "@/data/game-states";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { ShareButton } from "@/components/ui/ShareButton";
import { Callout } from "@/components/ui/Callout";
import { Expandable } from "@/components/ui/Expandable";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { GameStateDiagram } from "@/components/tactical/GameStateDiagram";
import { ArticleJsonLd } from "@/components/home/ArticleJsonLd";
import TheModel, { meta } from "@content/the-model.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/the-model/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

const TOC_ITEMS = [
  {
    id: "what-structured-adaptability-actually-means",
    label: "What structured adaptability means",
  },
  {
    id: "why-this-is-not-just-being-flexible",
    label: "Why it isn't just flexibility",
  },
  { id: "the-four-layers", label: "The four layers" },
  {
    id: "the-constitutional-principle-what-to-standardise-and-what-not-to",
    label: "What to standardise, what not to",
  },
  {
    id: "how-this-differs-from-imposing-a-style",
    label: "How this differs from imposing a style",
  },
  { id: "where-this-would-show-up", label: "Where this would show up" },
  { id: "game-states", label: "Twelve game states" },
];

export default function TheModelPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <ArticleJsonLd
        headline={meta.title}
        description={meta.description}
        path="/the-model/"
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
            <ReadingTime minutes={8} />
          </div>

          <div className="mt-4 lg:hidden">
            <TableOfContents items={TOC_ITEMS} />
          </div>

          <Prose className="mt-8">
            <TheModel />
          </Prose>

          <div className="mt-12 border-t border-line pt-8">
            <ShareButton title={meta.title} text={meta.description} />
          </div>
        </div>

        <div className="hidden lg:block">
          <TableOfContents items={TOC_ITEMS} />
        </div>
      </div>

      <section id="game-states" className="mx-auto mt-20 max-w-prose lg:mt-28">
        <SectionHeading
          id="game-states-heading"
          kicker="The full model"
          title="Twelve recurring game states"
          lede="Every module below sets out a recurring match situation, the coaching detail behind it, why it matters for England specifically, a plural menu of valid responses, and an honest note on the evidence behind the claim."
        />
        <div className="space-y-16">
          {gameStateModules.map((module) => (
            <article
              key={module.id}
              id={module.id}
              data-testid="game-state-module"
              className="scroll-mt-24 border-t border-line pt-10 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-2xl font-bold text-ink">
                {module.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {module.supporterExplanation}
              </p>

              <div className="mt-6 max-w-xl">
                <GameStateDiagram spec={module.diagram} />
              </div>

              <div className="mt-6 space-y-3">
                <Expandable summary="Coaching detail">
                  <p className="leading-relaxed">
                    {module.coachingExplanation}
                  </p>
                </Expandable>
                <Expandable summary="Why this matters">
                  <p className="leading-relaxed">{module.whyItMatters}</p>
                </Expandable>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-faint">
                  Valid responses
                </h4>
                <ul className="mt-3 space-y-4">
                  {module.validResponses.map((response) => (
                    <li key={response.title}>
                      <p className="font-display text-base font-semibold text-ink">
                        {response.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {response.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {module.evidenceKind === "analytical-interpretation" ? (
                <Callout
                  tone="interpretation"
                  title="Analytical interpretation"
                >
                  <p>{module.evidenceNote}</p>
                </Callout>
              ) : (
                <Callout tone="note">
                  <p>{module.evidenceNote}</p>
                </Callout>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
