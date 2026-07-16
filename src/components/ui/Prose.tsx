import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ProseProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Long-form typography wrapper for MDX content. There is no
 * @tailwindcss/typography dependency in this project, so descendant styling
 * is applied via Tailwind arbitrary variants rather than a `prose` class.
 */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "max-w-prose text-lg leading-relaxed text-ink-soft",
        "[&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:scroll-mt-24 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink",
        "[&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:scroll-mt-24 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-ink",
        "[&_h4]:mb-2 [&_h4]:mt-8 [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-ink",
        "[&_p]:my-5 [&_p]:leading-relaxed",
        "[&_a]:text-navy [&_a]:underline [&_a]:decoration-red [&_a]:decoration-2 [&_a]:underline-offset-2 [&_a]:transition-colors [&_a:hover]:text-red",
        "[&_strong]:font-semibold [&_strong]:text-ink",
        "[&_em]:italic",
        "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-navy [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-ink",
        "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
        "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
        "[&_li]:leading-relaxed [&_li_p]:my-1",
        "[&_hr]:my-10 [&_hr]:border-line",
        "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-base",
        "[&_th]:border-b [&_th]:border-line [&_th]:py-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-display [&_th]:font-semibold [&_th]:text-ink",
        "[&_td]:border-b [&_td]:border-line [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top",
        "[&_code]:rounded [&_code]:bg-chalk-deep [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-ink",
        "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-navy [&_pre]:p-4 [&_pre]:text-chalk",
        "[&_img]:my-6 [&_img]:rounded-lg",
        "[&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-ink-faint",
        className,
      )}
    >
      {children}
    </div>
  );
}
