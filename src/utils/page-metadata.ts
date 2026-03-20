import type { Metadata } from "next";
import { siteConfig } from "../configs/site";

export function PageMetadata({
    title,
    description,
    path,
    noIndex = false,
}: {
    title?: string;
    description?: string;
    path?: string;
    noIndex?: boolean;
}): Metadata {
    const baseUrl =
        siteConfig.url && siteConfig.url.startsWith("http")
            ? siteConfig.url
            : process.env.NEXT_PUBLIC_SITE_URL ?? "https://syedhassanali.com";

    const normalizedBase = baseUrl.replace(/\/$/, "");
    const normalizedPath = path ? `/${path.replace(/^\/+/, "")}` : "";

    const url = `${normalizedBase}${normalizedPath}`;

    const resolvedTitle = title ?? siteConfig.title;
    const resolvedDescription = description ?? siteConfig.description;

    const ogImage = new URL(siteConfig.ogImage, normalizedBase).toString();

    return {
        metadataBase: new URL(normalizedBase),

        title: resolvedTitle,
        description: resolvedDescription,

        alternates: {
            canonical: url,
        },

        openGraph: {
            type: "website",
            url,
            title: resolvedTitle,
            description: resolvedDescription,
            siteName: siteConfig.shortName,
            locale: siteConfig.locale,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: resolvedTitle,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: resolvedTitle,
            description: resolvedDescription,
            images: [ogImage],
            creator: siteConfig.social?.twitter,
        },

        robots: noIndex
            ? { index: false, follow: false }
            : siteConfig.seoDefaults.robots,
    };
}