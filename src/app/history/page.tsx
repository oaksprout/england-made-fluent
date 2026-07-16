import type { Metadata } from "next";
import { site } from "@/config/site";
import { timelineEntries } from "@/data/timeline";
import { Prose } from "@/components/ui/Prose";
import { ReadingTime } from "@/components/ui/ReadingTime";
import { ShareButton } from "@/components/ui/ShareButton";
import { Timeline } from "@/components/timeline/Timeline";
import HistoryIntro, { meta } from "@content/history-intro.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/history/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

export default function HistoryPage() {
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
        <HistoryIntro />
      </Prose>

      <div className="mt-12 border-t border-line pt-8">
        <ShareButton title={meta.title} text={meta.description} />
      </div>

      <section className="mt-16">
        <Timeline entries={timelineEntries} />
      </section>
    </div>
  );
}
