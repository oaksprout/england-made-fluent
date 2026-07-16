import { site } from "@/config/site";

/**
 * Site-wide Organization structured data, rendered once from the root
 * layout. No logo is declared — the project has no official mark to claim
 * ownership of beyond its own abstract BrandMark, which is decorative.
 */
export function OrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
