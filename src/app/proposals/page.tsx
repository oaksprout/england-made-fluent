import type { Metadata } from "next";
import { site } from "@/config/site";
import { proposals } from "@/data/proposals";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { ShareButton } from "@/components/ui/ShareButton";
import ProposalsIntro, { meta } from "@content/proposals-intro.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/proposals/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

const FIELDS: { key: keyof (typeof proposals)[number]; label: string }[] = [
  { key: "purpose", label: "Purpose" },
  { key: "implementation", label: "Implementation" },
  { key: "owner", label: "Institutional owner" },
  { key: "objection", label: "Likely objection" },
  { key: "response", label: "Response" },
  { key: "successMeasure", label: "Success measure" },
  { key: "unintendedRisk", label: "Risk of unintended consequences" },
];

export default function ProposalsPage() {
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
        <ProposalsIntro />
      </Prose>

      <div className="mt-12 border-t border-line pt-8">
        <ShareButton title={meta.title} text={meta.description} />
      </div>

      <div className="mt-16 space-y-16">
        {proposals.map((proposal) => (
          <article
            key={proposal.id}
            id={proposal.id}
            className="scroll-mt-24 border-t border-line pt-10 first:border-t-0 first:pt-0"
          >
            <div className="flex items-start gap-5">
              <span className="font-display text-4xl font-black leading-none text-red">
                {String(proposal.number).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl font-bold text-ink">
                {proposal.title}
              </h2>
            </div>
            <dl className="mt-6 space-y-5">
              {FIELDS.map(({ key, label }) => (
                <div key={key}>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                    {label}
                  </dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-soft">
                    {proposal[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
