import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { site } from "@/config/site";
import {
  argumentStatements,
  premierLeagueExposures,
  premierLeagueComplications,
  frameworkLayers,
  interopSystems,
  standardise,
  doNotStandardise,
} from "@/data/homepage";
import { nations } from "@/data/nations";
import { timelineEntries } from "@/data/timeline";
import { gameStateModules } from "@/data/game-states";
import { proposals } from "@/data/proposals";
import { objections } from "@/data/objections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { Callout } from "@/components/ui/Callout";
import { Expandable } from "@/components/ui/Expandable";
import { ShareButton } from "@/components/ui/ShareButton";
import { Card } from "@/components/ui/Card";
import { HeroFormation } from "@/components/tactical/HeroFormation";
import { NationComparison } from "@/components/nations/NationComparison";
import { InteropVisual } from "@/components/tactical/InteropVisual";
import { GameStateDiagram } from "@/components/tactical/GameStateDiagram";
import { LetterActions } from "@/components/letter/LetterActions";

export const metadata: Metadata = {
  // The layout's title.template only applies to child segments, not the root
  // page itself, so the brand suffix is spelled out here.
  title: `${site.thesis.headline} — ${site.name}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.subtitle}`,
    description: site.share.primaryCard,
    images: [
      {
        url: "/og/primary.png",
        width: 1200,
        height: 630,
        alt: site.share.primaryCard,
      },
      {
        url: "/og/secondary.png",
        width: 1200,
        height: 630,
        alt: site.share.secondaryCard,
      },
    ],
  },
};

const TEASER_TIMELINE_IDS = [
  "hungary-golden-team",
  "germany-post-2000-reform",
  "spain-2008-2012",
  "st-georges-park-england-dna",
];

const teaserTimelineEntries = TEASER_TIMELINE_IDS.map((id) =>
  timelineEntries.find((entry) => entry.id === id),
).filter((entry): entry is (typeof timelineEntries)[number] => Boolean(entry));

const featuredGameStates = gameStateModules.slice(0, 3);

const ctaButtonClass =
  "inline-flex h-12 items-center justify-center rounded-full px-6 font-display text-sm font-semibold transition-colors";

export default function HomePage() {
  return (
    <>
      {/* --------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* --------------------------------------------------------------- */}
      <section id="hero" className="border-b border-line bg-navy text-chalk">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-chalk/60">
              {site.subtitle}
            </p>
            <h1 className="mt-3 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {site.thesis.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk/80">
              {site.thesis.supporting}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={site.cta.primary.href}
                className={`${ctaButtonClass} bg-red text-chalk hover:bg-red-deep`}
              >
                {site.cta.primary.label}
              </Link>
              <Link
                href={site.cta.secondary.href}
                className={`${ctaButtonClass} border border-chalk/40 text-chalk hover:border-chalk hover:bg-chalk/10`}
              >
                {site.cta.secondary.label}
              </Link>
            </div>
          </div>
          <div>
            <HeroFormation />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Argument in 60 seconds                                           */}
      {/* --------------------------------------------------------------- */}
      <section
        id="argument-60-seconds"
        className="border-b border-line py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            id="argument-60-seconds-heading"
            kicker="The argument"
            title="The argument in 60 seconds"
            lede="The complete case, compressed into six statements, before the rest of this page sets out the evidence and the proposals behind it."
          />
          <ReadingTime minutes={1} />
          <ol className="mt-8 space-y-6">
            {argumentStatements.map((statement, index) => (
              <li key={statement.id} className="flex gap-5">
                <span className="w-10 shrink-0 font-display text-3xl font-black text-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-lg leading-relaxed text-ink-soft">
                  {statement.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Structural advantage                                             */}
      {/* --------------------------------------------------------------- */}
      <section
        id="structural-advantage"
        className="border-b border-line bg-chalk-deep/30 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            id="structural-advantage-heading"
            kicker="England's inheritance"
            title="A structural advantage most nations do not have"
            lede="England may possess more concentrated, week-to-week tactical experience than almost any national squad in world football — and still lack a shared method for combining it."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {premierLeagueExposures.map((statement) => (
              <Card
                key={statement.id}
                className="text-sm leading-relaxed text-ink-soft"
              >
                {statement.text}
              </Card>
            ))}
          </div>

          <div className="mt-14 max-w-3xl">
            <h3 className="font-display text-xl font-bold text-ink">
              The complications
            </h3>
            <ul className="mt-4 space-y-3">
              {premierLeagueComplications.map((statement) => (
                <li key={statement.id} className="flex gap-3 text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red"
                  />
                  <span className="leading-relaxed">{statement.text}</span>
                </li>
              ))}
            </ul>

            <Callout tone="note" title="What this site does not claim">
              <p>
                This site does not claim the Premier League automatically
                benefits England. Diversity is only an advantage when it is
                supported by interoperability — the shared language, recognition
                and responses that turn varied experience into collective
                understanding rather than confusion.
              </p>
            </Callout>

            <Link
              href="/englands-advantage/"
              className="inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
            >
              Read the full case for England&rsquo;s advantage →
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* No single model                                                  */}
      {/* --------------------------------------------------------------- */}
      <section
        id="no-single-model"
        className="border-b border-line py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            id="no-single-model-heading"
            kicker="Comparative evidence"
            title="There is no single successful national model"
            lede="Every nation that has converted its footballing culture into reliable collective performance did so through a different model, built around its own actual structural strengths."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nations.map((nation) => (
              <Link
                key={nation.id}
                href={`/football-nations/#${nation.id}`}
                className="group block rounded-lg border border-line bg-chalk p-5 transition-colors hover:border-navy"
              >
                <span
                  aria-hidden="true"
                  className="block h-1 w-10 rounded-full"
                  style={{ backgroundColor: nation.accent }}
                />
                <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-navy">
                  {nation.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{nation.headline}</p>
                <ul className="mt-3 space-y-1 text-xs leading-relaxed text-ink-faint">
                  {nation.strengths.slice(0, 2).map((strength, i) => (
                    <li key={i}>{strength}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-ink-soft leading-relaxed">
            The purpose here is not to rank countries. It is to show that
            nations succeed when they align their systems with their own actual
            structural strengths, not when they copy whichever style happens to
            be fashionable.
          </p>
          <div className="mt-10">
            <NationComparison nations={nations} />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Comparative timeline (teaser)                                    */}
      {/* --------------------------------------------------------------- */}
      <section
        id="comparative-timeline"
        className="border-b border-line bg-chalk-deep/30 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            id="comparative-timeline-heading"
            kicker="Seventy years of evidence"
            title="This has happened before, more than once"
            lede="National footballing systems are built, revised and sometimes left to stagnate — years before the tournament result that gets remembered."
          />
          <div className="space-y-6">
            {teaserTimelineEntries.map((entry) => (
              <div key={entry.id} className="border-l-2 border-line pl-5">
                <p className="font-display text-sm font-semibold text-ink-faint">
                  {entry.startYear}
                  {entry.endYear ? `–${entry.endYear}` : ""} · {entry.country}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {entry.summary}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/history/"
            className="mt-8 inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
          >
            Explore the full timeline →
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* False choice                                                     */}
      {/* --------------------------------------------------------------- */}
      <section
        id="false-choice"
        className="border-b border-line py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            id="false-choice-heading"
            kicker="Neither extreme"
            title="The false choice"
            lede="English football is regularly offered two options for solving this. Both are wrong."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-ink-soft">
                Rigid, top-down orthodoxy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                One prescribed style, imposed uniformly from academy to senior
                level regardless of the players actually available or the
                opponent in front of them.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-ink-soft">
                Improvisation around available players
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                No shared method at all — each squad and manager starts again
                from first principles, hoping talent and togetherness are enough
                to invent a system in a fortnight.
              </p>
            </Card>
          </div>
          <div className="mt-6 rounded-r-md border-l-4 border-red bg-red/5 p-6">
            <h3 className="font-display text-xl font-bold text-ink">
              A common operating system for tactical diversity
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The aim is not to make every English player learn the same
              football. It is to ensure players educated in different systems
              can rapidly understand one another — a shared language, shared
              recognition and a shared menu of responses, not a shared style.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Proposed identity: structured adaptability                       */}
      {/* --------------------------------------------------------------- */}
      <section
        id="proposed-identity"
        className="border-b border-line bg-chalk-deep/30 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            id="proposed-identity-heading"
            kicker={site.thesis.identity}
            title="Structured adaptability"
            lede={site.thesis.proposition}
          />
          <blockquote className="border-l-4 border-navy py-2 pl-6 font-display text-2xl font-semibold leading-snug text-ink">
            {site.thesis.identityDefinition}
          </blockquote>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            This is not vague flexibility. It requires repeated training, a
            common language, clear reference points and defined
            responsibilities.
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {frameworkLayers.map((layer) => (
              <li
                key={layer.number}
                className="rounded-lg border border-line bg-chalk p-5"
              >
                <span className="font-display text-3xl font-black text-red">
                  {layer.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {layer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {layer.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                What England should standardise
              </h3>
              <ul className="mt-4 space-y-3">
                {standardise.map((statement) => (
                  <li key={statement.id} className="flex gap-3">
                    <Check
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-navy"
                    />
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {statement.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                What it should not standardise
              </h3>
              <ul className="mt-4 space-y-3">
                {doNotStandardise.map((statement) => (
                  <li key={statement.id} className="flex gap-3">
                    <X
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-red"
                    />
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {statement.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Interoperability                                                 */}
      {/* --------------------------------------------------------------- */}
      <section
        id="interoperability"
        className="border-b border-line py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            id="interoperability-heading"
            kicker="Translation, not conversion"
            title="Turning club habits into shared national principles"
            lede="Apparently conflicting club habits are not actually incompatible. Each can be translated into a shared national-team principle that players from other systems can also work with."
          />
          <InteropVisual systems={interopSystems} />
          <p className="mt-6 text-xs text-ink-faint">
            Markers and diagrams throughout this site are neutral and fictional
            — they do not represent real players, teams or match footage.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Game states                                                      */}
      {/* --------------------------------------------------------------- */}
      <section
        id="game-states"
        className="border-b border-line bg-chalk-deep/30 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            id="game-states-heading"
            kicker="Shared recognition, shared response"
            title="Twelve recurring match situations, three in focus"
            lede="Structured adaptability means the squad shares a rehearsed, plural menu of responses to situations that recur in almost every match — not one prescribed answer."
          />
          <div className="space-y-14">
            {featuredGameStates.map((module) => (
              <article key={module.id}>
                <h3 className="font-display text-xl font-bold text-ink">
                  {module.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                  {module.supporterExplanation}
                </p>
                <div className="mt-6 max-w-xl">
                  <GameStateDiagram spec={module.diagram} />
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/the-model/#game-states"
            className="mt-4 inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
          >
            All twelve game states →
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* England DNA (teaser)                                             */}
      {/* --------------------------------------------------------------- */}
      <section id="england-dna" className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            id="england-dna-heading"
            kicker="A fair examination"
            title="Did England DNA standardise the right things?"
            lede="England DNA was a serious attempt to solve a real problem. This site does not assume it failed — it asks, in good faith, what evidence exists either way."
          />
          <p className="leading-relaxed text-ink-soft">
            The FA&rsquo;s framework set out real ambitions for a shared
            national approach from 2014 onward. What has not been publicly
            established is whether it produced recognisable, transferable
            senior-team behaviour a decade on — and whether it standardised
            language and recognition, or drifted toward prescribing one style.
          </p>
          <Link
            href="/england-dna/"
            className="mt-4 inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
          >
            Read the full examination →
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Proposals (condensed)                                            */}
      {/* --------------------------------------------------------------- */}
      <section
        id="proposals"
        className="border-b border-line bg-chalk-deep/30 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            id="proposals-heading"
            kicker="Twelve testable proposals"
            title="What we are actually asking the FA to do"
            lede="Each proposal is reversible and testable, and is paired publicly with its strongest objection and its own risk of unintended consequences."
          />
          <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {proposals.map((proposal) => (
              <li key={proposal.id} className="flex gap-3">
                <span className="w-8 shrink-0 font-display text-lg font-black text-red">
                  {String(proposal.number).padStart(2, "0")}
                </span>
                <span className="text-ink-soft leading-relaxed">
                  {proposal.title}
                </span>
              </li>
            ))}
          </ol>
          <Link
            href="/proposals/"
            className="mt-8 inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
          >
            Read all twelve proposals in full →
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Objections                                                       */}
      {/* --------------------------------------------------------------- */}
      <section id="objections" className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            id="objections-heading"
            kicker="Steelmanning the case"
            title="The strongest objections"
            lede="A campaign that only presents agreeable objections is not a serious one."
          />
          <div>
            {objections.map((objection) => (
              <Expandable key={objection.id} summary={objection.objection}>
                {objection.concession ? (
                  <p className="text-sm italic text-ink-faint">
                    {objection.concession}
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {objection.answer}
                </p>
              </Expandable>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Open letter (teaser)                                             */}
      {/* --------------------------------------------------------------- */}
      <section
        id="open-letter"
        className="border-b border-line bg-chalk-deep/30 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            id="open-letter-heading"
            kicker="Addressed to the FA"
            title="An open letter, not a petition"
            lede="We are asking the FA to examine one specific question honestly and publish what it finds — not demanding anyone's removal, and not assuming the answer in advance."
          />
          <LetterActions
            showPrint={false}
            copyText={site.share.shareText}
            shareTitle={site.name}
            shareText={site.share.shareText}
            shareUrl={`${site.url}/open-letter/`}
          />
          <Link
            href="/open-letter/"
            className="mt-6 inline-flex items-center font-display text-sm font-semibold text-navy underline decoration-red decoration-2 underline-offset-2 hover:text-red"
          >
            Read the open letter →
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Closing                                                          */}
      {/* --------------------------------------------------------------- */}
      <section id="closing" className="bg-navy py-20 text-chalk sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl">
            {site.thesis.closingHeadline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-chalk/80">
            {site.thesis.closingCopy}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={site.cta.primary.href}
              className={`${ctaButtonClass} bg-red text-chalk hover:bg-red-deep`}
            >
              {site.cta.primary.label}
            </Link>
            <div className="inline-flex rounded-full bg-chalk p-1">
              <ShareButton title={site.name} text={site.share.shareText} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
