export const siteConfig = {
  name: "opensourceui",
  displayName: "Opensource UI",
  title: "Opensource UI — Free Copy-Paste React & Next.js UI Components",
  description:
    "Opensource UI is a free, MIT-licensed copy-paste library of 100+ production-ready React and Next.js components. Built with TypeScript and Tailwind CSS v4. Browse live previews and copy source code at opensourceui.in.",
  url: "https://opensourceui.in",
  ogImage: "/opensourceui-banner.png",
  github: {
    url: "https://github.com/bidyut10/appui",
  },
  keywords: [
    "opensource ui",
    "opensourceui",
    "open source ui components",
    "free react components",
    "react ui library",
    "next.js ui components",
    "nextjs components",
    "tailwind css components",
    "tailwind v4 components",
    "copy paste components",
    "copy paste ui",
    "typescript react components",
    "free ui kit",
    "production ready components",
    "dashboard components",
    "ui widgets",
    "shadcn alternative",
    "mit licensed ui components",
  ],
  author: {
    name: "Bidyut Kundu",
    url: "https://x.com/BidyutKundu12",
    twitter: "@BidyutKundu12",
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
