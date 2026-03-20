export const siteConfig = {
    name: "Syed Hassan Ali | Digital Systems Architect & Automation Engineer",
    shortName: "SHA Systems",
    title: "Digital Systems Architecture & Intelligent Automation",
    description:
        "Digital Systems Architect specializing in scalable software platforms, backend infrastructure, AI automation, cloud systems, and enterprise-grade digital solutions for modern businesses.",
    tagline:
        "Designing Scalable Software, Infrastructure & Intelligent Automation Systems",

    url:
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://syedhassanali.com",

    brand: {
        logo: "/favicons/logo.svg",
        logoFallback: "/favicons/logo.png",
        ogImage: "/favicons/og-image.png",
    },

    keywords: [
        "Digital Systems Architect",
        "Software Architecture",
        "SaaS Development",
        "Cloud Infrastructure",
        "Backend Systems",
        "AI Automation",
        "Enterprise Software",
        "Custom Digital Systems",
        "System Design",
        "Technical Consulting"
    ],

    authors: [
        {
            name: "Syed Hassan Ali",
            url:
                process.env.NEXT_PUBLIC_SITE_URL ??
                "https://syedhassanali.com"
        }
    ],
    creator: "Syed Hassan Ali",
    publisher: "Syed Hassan Ali",

    language: "en-US",
    locale: "en_US",
    colors: {
        primary: "#5b5cf6",
        backgroundLight: "#ffffff",
        backgroundDark: "#0a0f1f"
    },

    favicons: {
        light: {
            favicon: "/favicons/light-favicon.ico",
            apple: "/favicons/fav-light-apple-icon.png",
            icon96: "/favicons/fav-light-logo-96x96.png",
            icon192: "/favicons/fav-light-logo-192x192.png",
            icon512: "/favicons/fav-light-logo-512x512.png"
        },

        dark: {
            favicon: "/favicons/dark-favicon.ico",
            apple: "/favicons/fav-dark-apple-icon.png",
            icon96: "/favicons/fav-dark-logo-96x96.png",
            icon192: "/favicons/fav-dark-logo-192x192.png",
            icon512: "/favicons/fav-dark-logo-512x512.png"
        }
    },

    contact: {
        email:
            process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
            "contact@syedhassanali.com"
    },

    links: {
        home: "/",
        services: "/services",
        caseStudies: "/case-studies",
        engagement: "/engagement",
        contact: "/contact",
        privacy: "/privacy",
        terms: "/terms"
    },

    features: [
        "Software & Product Engineering",
        "Backend & Infrastructure Architecture",
        "AI & Automation Systems",
        "Enterprise Platforms",
        "Security & Optimization",
        "Technical Advisory & Remote Partnerships"
    ],

    seoDefaults: {
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1
            }
        }
    },

    social: {
        github:
            process.env.NEXT_PUBLIC_GITHUB ??
            "https://github.com/syed-hassan-ali",

        twitter:
            process.env.NEXT_PUBLIC_TWITTER ??
            "https://twitter.com/syedhassanai",

        linkedin:
            process.env.NEXT_PUBLIC_LINKEDIN ??
            "https://linkedin.com/in/syed-hassan-ali",

        upwork:
            process.env.NEXT_PUBLIC_UPWORK ??
            "https://www.upwork.com/freelancers/~syedhassanali",

        fiverr:
            process.env.NEXT_PUBLIC_FIVERR ??
            "https://www.fiverr.com/syedhassanali"
    },

    sameAs: [
        process.env.NEXT_PUBLIC_GITHUB ??
        "https://github.com/syed-hassan-ali",

        process.env.NEXT_PUBLIC_TWITTER ??
        "https://twitter.com/syedhassanai",

        process.env.NEXT_PUBLIC_LINKEDIN ??
        "https://linkedin.com/in/syed-hassan-ali",

        process.env.NEXT_PUBLIC_UPWORK ??
        "https://www.upwork.com/freelancers/~syedhassanali",

        process.env.NEXT_PUBLIC_FIVERR ??
        "https://www.fiverr.com/syedhassanali"
    ]

} as const

export type SiteConfig = typeof siteConfig