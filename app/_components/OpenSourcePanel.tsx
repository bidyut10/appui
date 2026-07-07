import Image from "next/image";
import type { ComponentType } from "react";
import { TailwindCSS } from "@/icons/brands/tailwind-css";
import { Typescript } from "@/icons/brands/typescript";
import { mailtoLinks } from "@/lib/site";
import { ShadcnUI } from "@/icons/brands/ShadcnUI";
import { Vercel } from "@/icons/brands/Vercel";
import { Unplash } from "@/icons/brands/Unplash";
import { Anthropic } from "@/icons/brands/Anthropic";
import { NextJs } from "@/icons/brands/next-js";

type ResourceItem = {
  name: string;
  description: string;
  href: string;
  domain?: string;
  Icon?: ComponentType<{ size?: number; className?: string }>;
  imageSrc?: string;
  letter?: string;
};

const resources: ResourceItem[] = [
  {
    name: "Anthropic",
    description: "For AI models",
    href: "https://www.anthropic.com/",
    Icon: Anthropic,
  },
  {
    name: "Vercel",
    description: "For deploying",
    href: "https://vercel.com",
    Icon: Vercel,
  },
  {
    name: "Manu sir",
    description: "For inspiration",
    href: "https://www.manuarora.in",
    imageSrc: "/manu.webp",
  },
  {
    name: "Evil Rabbit",
    description: "For inspiration",
    href: "https://www.evilrabbit.com",
    imageSrc: "/evilrabbit.png",
  },
  {
    name: "Chánh Đại",
    description: "For inspiration",
    href: "https://chanhdai.com",
    imageSrc: "/evilrabbit.png",
  },
  {
    name: "Akash sir",
    description: "For inspiration",
    href: "https://www.designerdada.com",
    imageSrc: "/akash.png",
  },
  {
    name: "Tailwind CSS",
    description: "For styling",
    href: "https://tailwindcss.com",
    Icon: TailwindCSS,
  },
  {
    name: "shadcn/ui",
    description: "For UI",
    href: "https://ui.shadcn.com",
    Icon: ShadcnUI,
  },
  {
    name: "PostHog",
    description: "For tracking",
    href: "https://posthog.com",
    imageSrc: "/posthog.png",
  },
  {
    name: "Dither.it",
    description: "For making images better",
    href: "https://ditherit.com",
    letter: "D",
  },
  {
    name: "Cursor",
    description: "For Editor",
    href: "https://cursor.com",
    imageSrc: "/cursor.webp",
  },
  {
    name: "Unplash",
    description: "For background images",
    href: "https://unsplash.com",
    Icon: Unplash,
  },
  {
    name: "Lucide",
    description: "For icons",
    href: "https://lucide.dev",
    imageSrc: "/lucide-logo.svg",
  },
  {
    name: "Hostinger",
    description: "For managing the domain",
    href: "https://www.hostinger.com",
    imageSrc:  "/hostinger.png",
  },
  {
    name: "TypeScript",
    description: "For type safety",
    href: "https://www.typescriptlang.org",
    Icon: Typescript,
  },
  {
    name: "Next.js",
    description: "For building web applications",
    href: "https://nextjs.org",
    Icon: NextJs,
  },
  {
    name: "Flaticon",
    description: "For image PNGs",
    href: "https://www.flaticon.com",
    imageSrc: "/flaticon.png",
  },
];

function getDomain(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function ListIcon({ item }: { item: ResourceItem }) {
  const { Icon, imageSrc, letter } = item;

  return (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 object-contain rounded"
        />
      ) : Icon ? (
        <Icon size={16} className="text-neutral-800" />
      ) : (
        <span className="font-sans text-[16px] font-semibold text-neutral-600">
          {letter}
        </span>
      )}
    </div>
  );
}

function ListRow({
  item,
  placeholder = false,
}: {
  item: ResourceItem;
  placeholder?: boolean;
}) {
  const domain = item.domain ?? getDomain(item.href);

  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 py-0.5"
      >
        {placeholder ? (
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-dashed border-neutral-300">
            <span className="font-sans text-[10px] text-neutral-400">+</span>
          </div>
        ) : (
          <ListIcon item={item} />
        )}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <p className="min-w-0 flex-1 truncate font-sans text-sm leading-snug">
            <span
              className={
                placeholder
                  ? "font-semibold text-neutral-400 group-hover:text-neutral-600"
                  : "font-semibold text-neutral-900 group-hover:text-neutral-700"
              }
            >
              {item.name}
            </span>
            <span className="text-neutral-300"> / </span>
            <span
              className={
                placeholder
                  ? "text-neutral-400 group-hover:text-neutral-500"
                  : "text-neutral-500"
              }
            >
              {item.description}
            </span>
          </p>
          <span
            className={
              placeholder
                ? "shrink-0 font-mono text-sm text-neutral-300 group-hover:text-neutral-400"
                : "shrink-0 font-mono text-sm text-neutral-400 group-hover:text-neutral-500"
            }
          >
            {domain}
          </span>
        </div>
      </a>
    </li>
  );
}

const sponsorPlaceholder: ResourceItem = {
  name: "Your brand",
  description: "Be the first sponsor — get in touch",
  href: mailtoLinks.sponsor,
  domain: "yoursite.com",
};

export function OpenSourcePanel() {
  return (
    <div className="mt-10 space-y-8">
      <section>
        <h3 className="font-sans text-sm font-semibold text-neutral-900">
          Sponsors
        </h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          <ListRow item={sponsorPlaceholder} placeholder />
        </ul>
      </section>

      <section>
        <h3 className="font-sans text-sm font-semibold text-neutral-900">
          Resources
        </h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          {[...resources]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <ListRow key={item.name} item={item} />
            ))}
        </ul>
      </section>
    </div>
  );
}
