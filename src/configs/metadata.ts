import type { Metadata } from "next";
import { siteConfig } from "./site";

const baseUrl =
    siteConfig.url && siteConfig.url.startsWith("http")
        ? siteConfig.url
        : process.env.NEXT_PUBLIC_SITE_URL ?? "https://syedhassanali.com";

const twitterHandle =
    siteConfig.social?.twitter?.split("/").pop()
        ? `@${siteConfig.social.twitter.split("/").pop()}`
        : undefined;

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.shortName}`,
    },

    description: siteConfig.description,

    applicationName: siteConfig.shortName,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",

    keywords: [...siteConfig.keywords],

    authors: siteConfig.authors.map((a) => ({
        ...a,
        url: a.url ?? baseUrl,
    })),

    creator: siteConfig.creator,
    publisher: siteConfig.publisher,

    manifest: "/manifest.json",

    icons: {
        icon: [
            {
                url: siteConfig.favicons.dark.favicon,
                media: "(prefers-color-scheme: light)"
            },
            {
                url: siteConfig.favicons.light.favicon,
                media: "(prefers-color-scheme: dark)"
            }
        ],

        apple: [
            {
                url: siteConfig.favicons.dark.apple,
                media: "(prefers-color-scheme: light)"
            },
            {
                url: siteConfig.favicons.light.apple,
                media: "(prefers-color-scheme: dark)"
            }
        ],

        other: [
            {
                rel: "icon",
                url: siteConfig.favicons.dark.icon96,
                sizes: "96x96",
                type: "image/png",
                media: "(prefers-color-scheme: light)"
            },
            {
                rel: "icon",
                url: siteConfig.favicons.light.icon96,
                sizes: "96x96",
                type: "image/png",
                media: "(prefers-color-scheme: dark)"
            }
        ]
    },

    robots: siteConfig.seoDefaults.robots,

    alternates: {
        canonical: baseUrl,
    },

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    openGraph: {
        type: "website",
        url: baseUrl,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.shortName,
        locale: siteConfig.locale,
        images: [
            {
                url: `${baseUrl}${siteConfig.brand.ogImage}`,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [`${baseUrl}${siteConfig.brand.ogImage}`],
        creator: twitterHandle,
        site: twitterHandle,
    },

    category: "technology",

    other: {
        sameAs: [...siteConfig.sameAs],
    },
};