import { siteConfig } from "@/configs/site";

const baseUrl =
  siteConfig.url && siteConfig.url.startsWith("http")
    ? siteConfig.url
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "https://syedhassanali.com");

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: siteConfig.creator,
        url: baseUrl,
        image: `${baseUrl}${siteConfig.brand.logo}`,
        jobTitle: siteConfig.title,
        description: siteConfig.description,
        sameAs: siteConfig.sameAs,
        worksFor: {
          "@id": `${baseUrl}/#organization`,
        },
      },

      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.shortName,
        url: baseUrl,
        logo: `${baseUrl}${siteConfig.brand.logo}`,
        sameAs: siteConfig.sameAs,
      },

      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: siteConfig.name,
        url: baseUrl,
        description: siteConfig.description,
        inLanguage: siteConfig.language,

        publisher: {
          "@id": `${baseUrl}/#organization`,
        },

        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
