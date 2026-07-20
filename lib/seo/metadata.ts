import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

const OG_IMAGE = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.displayName} — free React UI components`,
} as const;

type PageMetadataOptions = Readonly<{
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}>;

function absoluteUrl(path: string): string {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.displayName,
      title,
      description,
      images: [
        {
          url: OG_IMAGE.url,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.author.twitter,
      site: siteConfig.author.twitter,
      images: [
        {
          url: OG_IMAGE.url,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: title,
        },
      ],
    },
  };
}

export function createComponentMetadata(
  entry: Readonly<{
    title: string;
    description: string;
    slug: string;
    category: string;
    exportName: string;
  }>,
): Metadata {
  const title = `${entry.title} React Component`;
  const description = `${entry.description} Copy-paste ${entry.exportName} into your React or Next.js project. MIT licensed, TypeScript, Tailwind CSS v4.`;
  const path = `/components/${entry.slug}`;
  const keywords = [
    entry.title,
    entry.exportName,
    `${entry.category} component`,
    "react component",
    "next.js component",
    "tailwind component",
    "copy paste ui",
    siteConfig.displayName,
  ];

  return createPageMetadata({ title, description, path, keywords });
}

export function getRootSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.displayName,
        alternateName: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/components?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.displayName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/osui-logo.png`,
        },
        sameAs: [siteConfig.github.url, siteConfig.author.url],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: siteConfig.displayName,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: siteConfig.description,
        url: `${siteConfig.url}/components`,
        license: siteConfig.license.url,
        programmingLanguage: ["TypeScript", "JavaScript"],
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          url: siteConfig.author.url,
        },
      },
    ],
  };
}

export function getComponentJsonLd(
  entry: Readonly<{
    title: string;
    description: string;
    slug: string;
    category: string;
    exportName: string;
  }>,
) {
  const pageUrl = `${siteConfig.url}/components/${entry.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Components",
            item: `${siteConfig.url}/components`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: entry.category,
            item: `${siteConfig.url}/components?category=${encodeURIComponent(entry.category)}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: entry.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "SoftwareSourceCode",
        name: entry.title,
        description: entry.description,
        url: pageUrl,
        codeRepository: siteConfig.github.url,
        programmingLanguage: ["TypeScript", "JavaScript"],
        runtimePlatform: "React",
        license: siteConfig.license.url,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          url: siteConfig.author.url,
        },
        keywords: `${entry.exportName}, ${entry.category}, React, Next.js, Tailwind CSS`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How do I use ${entry.title} in my project?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Copy the ${entry.exportName} source code from ${pageUrl}, add lib/cn.ts if needed, install clsx tailwind-merge and lucide-react, then import and render the component in your React or Next.js app.`,
            },
          },
          {
            "@type": "Question",
            name: `Can I use ${entry.title} in a commercial project?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. ${siteConfig.displayName} is MIT licensed. You can use ${entry.exportName} in personal and commercial projects without UI attribution.`,
            },
          },
        ],
      },
    ],
  };
}

type ListItemEntry = Readonly<{
  slug: string;
  title: string;
  description: string;
}>;

export function getComponentsItemListJsonLd(
  items: readonly ListItemEntry[],
  listName: string,
  listUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: listUrl,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
      url: `${siteConfig.url}/components/${item.slug}`,
    })),
  };
}

export function getComponentsBreadcrumbJsonLd(
  crumbs: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
