import { Kicker } from "@/components/ui/Kicker";
import { CopyLinkButton } from "@/components/ui/CopyLinkButton";
import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
  id: string;
  kicker?: string;
  title: string;
  lede?: string;
};

/**
 * Standard section heading for long-form pages: optional red kicker, large
 * display h2 with an anchor id, an integrated copy-link control, and an
 * optional lede paragraph.
 */
export function SectionHeading({
  id,
  kicker,
  title,
  lede,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-prose">
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <div
        className={cn(
          "flex items-start justify-between gap-3",
          kicker && "mt-2",
        )}
      >
        <h2
          id={id}
          className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-1 shrink-0">
          <CopyLinkButton anchor={id} />
        </div>
      </div>
      {lede ? (
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">{lede}</p>
      ) : null}
    </div>
  );
}
