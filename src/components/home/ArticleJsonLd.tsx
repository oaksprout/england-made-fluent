import { site } from "@/config/site";

export type ArticleJsonLdProps = {
  headline: string;
  description: string;
  /** Path including leading and trailing slash, e.g. "/the-case/". */
  path: string;
};

/**
 * Article structured data for long-form pages (the case, England's
 * advantage, the model, England DNA, etc). Rendered as a JSON-LD script tag
 * inside the page itself, alongside the layout-level Organization JSON-LD.
 */
export function ArticleJsonLd({
  headline,
  description,
  path,
}: ArticleJsonLdProps) {
  const url = `${site.url}${path}`;
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    inLanguage: site.locale,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
