import type { Metadata } from "next";
import { site } from "@/config/site";
import { Prose } from "@/components/ui/Prose";
import { LetterActions } from "@/components/letter/LetterActions";
import { ArticleJsonLd } from "@/components/home/ArticleJsonLd";
import OpenLetter, { meta } from "@content/open-letter.mdx";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/open-letter/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: meta.title },
    ],
  },
};

export default function OpenLetterPage() {
  return (
    <div
      data-testid="open-letter"
      className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <ArticleJsonLd
        headline={meta.title}
        description={meta.description}
        path="/open-letter/"
      />

      <div className="mb-10">
        <LetterActions
          letterId="letter-body"
          shareTitle={meta.title}
          shareText={meta.description}
          shareUrl={`${site.url}/open-letter/`}
        />
      </div>

      <article
        id="letter-body"
        className="font-serif text-[1.05rem] leading-loose text-ink"
      >
        <p className="text-sm text-ink-faint">16 July 2026</p>
        <h1 className="mt-4 font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
          {meta.title}
        </h1>
        <Prose className="mt-8 max-w-none">
          <OpenLetter />
        </Prose>
      </article>
    </div>
  );
}
