import type { Locale } from "./locale";
import { site } from "./site";

type JsonLdInput = {
  canonicalUrl: string;
  description: string;
  imageUrl: string;
  inLanguage: Locale;
  pageTitle: string;
  siteUrl: string;
};

export function getJsonLd(input: JsonLdInput) {
  const organizationId = `${input.siteUrl}#organization`;
  const websiteId = `${input.siteUrl}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": organizationId,
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NL",
          addressLocality: site.location,
        },
        alternateName: site.shortName,
        email: site.email,
        image: input.imageUrl,
        logo: new URL("/logo.svg", input.siteUrl).href,
        name: site.name,
        sameAs: [site.facebookUrl],
        url: input.siteUrl,
      },
      {
        "@id": websiteId,
        "@type": "WebSite",
        inLanguage: ["nl", "en"],
        name: site.name,
        publisher: { "@id": organizationId },
        url: input.siteUrl,
      },
      {
        "@id": `${input.canonicalUrl}#webpage`,
        "@type": "WebPage",
        about: { "@id": organizationId },
        description: input.description,
        inLanguage: input.inLanguage,
        isPartOf: { "@id": websiteId },
        name: input.pageTitle,
        primaryImageOfPage: input.imageUrl,
        url: input.canonicalUrl,
      },
    ],
  };
}
