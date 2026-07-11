"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";
import { CopyEmailLink } from "./copy-email";
import { InquiryTrigger } from "@/components/inquiries/inquiry-provider";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { author } = siteConfig;

  return (
    <footer className="mt-36 w-full max-w-xl px-4 md:px-0">
      <div className="border-t border-neutral-200 pt-12 pb-8">
        <Image
          src="/osui-logo.png"
          alt={siteConfig.displayName}
          width={0}
          height={0}
          sizes="128px"
          className="h-auto w-28"
        />

        <p className="mt-6 flex items-center gap-2 font-serif text-3xl text-neutral-900">
          Ready when you are.
          <Image
            src="/waving-hand.png"
            alt=""
            width={512}
            height={512}
            quality={100}
            className="size-6"
          />
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">
          Pick a component, copy the code, and ship.{" "}
          <a
            href={siteConfig.license.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-900 hover:decoration-neutral-500"
          >
            {siteConfig.license.name} licensed
          </a>{" "}
          — {siteConfig.license.shortNote} Made &amp; maintained by{" "}
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-900 hover:decoration-neutral-500"
          >
            {author.name}
          </a>
          .
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/components"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-500"
          >
            Browse components
            <span className="relative inline-flex size-3 shrink-0 items-center justify-center">
              <ChevronRight
                size={12}
                strokeWidth={3}
                className="ease-smooth transition-[opacity,transform] duration-500 group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
              />
              <MoveRight
                size={12}
                strokeWidth={2.5}
                className="ease-smooth absolute -translate-x-0.5 scale-95 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              />
            </span>
          </Link>
          <InquiryTrigger
            type="work"
            className="group inline-flex items-center gap-1.5 text-sm text-neutral-500 underline decoration-neutral-200 underline-offset-4 transition-colors hover:text-neutral-700 hover:decoration-neutral-400"
          >
            Work with me
            <span className="relative inline-flex size-3 shrink-0 items-center justify-center">
              <ChevronRight
                size={12}
                strokeWidth={3}
                className="ease-smooth transition-[opacity,transform] duration-500 group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
              />
              <MoveRight
                size={12}
                strokeWidth={2.5}
                className="ease-smooth absolute -translate-x-0.5 scale-95 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              />
            </span>
          </InquiryTrigger>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-400">
          <span>© {year} {siteConfig.displayName}</span>
          <span aria-hidden="true">·</span>
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-600"
          >
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-600"
          >
            Twitter/X
          </a>
          <span aria-hidden="true">·</span>
          <CopyEmailLink />
        </div>
      </div>
    </footer>
  );
}
