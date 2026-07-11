export const siteConfig = {
  name: "opensourceui",
  displayName: "Opensource UI",
  title: "opensourceui — Free Open-Source UI Components for React & Next.js",
  description:
    "opensourceui is a free, MIT-licensed copy-paste library of 100+ production-ready UI components for React and Next.js. Built with TypeScript and Tailwind CSS v4. Explore live previews at opensourceui.in.",
  url: "https://opensourceui.in",
  ogImage: "/favicon.ico",
  github: {
    url: "https://github.com/bidyut10/appui",
  },
  keywords: [
    "opensourceui",
    "open source ui",
    "open source ui components",
    "react components",
    "next.js components",
    "nextjs ui library",
    "tailwind css components",
    "tailwind v4 components",
    "dashboard components",
    "ui widgets",
    "copy paste components",
    "free ui kit",
    "production ready components",
    "typescript components",
  ],
  author: {
    name: "Bidyut Kundu",
    url: "https://x.com/BidyutKundu12",
    email: "bidyut.kundu.dev@gmail.com",
  },
  license: {
    name: "MIT",
    url: "https://github.com/bidyut10/appui/blob/main/LICENSE",
    shortNote:
      "Free for personal and commercial use. No UI attribution required.",
    copyNote:
      "Include the MIT copyright notice when copying component source into your project.",
  },
} as const;

function buildMailto(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${siteConfig.author.email}?${params.toString()}`;
}

export const mailtoLinks = {
  work: buildMailto(
    "Let's work together",
    "Hi Bidyut,\n\nI came across Opensource UI and I'd love to work with you on a project.\n\nHere's what I have in mind:\n\n",
  ),
  sponsor: buildMailto(
    "I'd like to sponsor Opensource UI",
    "Hi Bidyut,\n\nI'd like to sponsor Opensource UI. Please share the details on how to get started.\n\nBrand / Company:\nWebsite:\n\n",
  ),
} as const;
