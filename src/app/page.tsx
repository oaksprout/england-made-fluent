import { site } from "@/config/site";

/** Placeholder homepage — replaced by the pages implementation (Agent D). */
export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="font-display text-4xl font-black text-navy">
        {site.thesis.headline}
      </h1>
      <p className="mt-6 text-lg text-ink-soft">{site.thesis.supporting}</p>
    </div>
  );
}
