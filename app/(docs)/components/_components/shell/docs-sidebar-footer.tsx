"use client";

import Image from "next/image";

import { ChevronRight, MoveRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

import { InquiryTrigger } from "@/components/inquiries/inquiry-provider";
import { DocsCopyEmailButton } from "./docs-copy-email-button";

export function DocsSidebarFooter() {
  const year = new Date().getFullYear();
  const { author } = siteConfig;

  return (
    <div className="shrink-0 border-t border-neutral-100 px-5 py-5">
      <p className="flex items-center gap-1.5 font-serif text-lg text-neutral-900">
        Ready when you are.
        <Image
          src="/waving-hand.png"
          alt=""
          width={512}
          height={512}
          quality={100}
          className="size-5"
        />
      </p>

      <p className="mt-2 font-sans text-xs leading-relaxed text-neutral-500">
        Free, open source, and yours to own. Made &amp; maintained by{" "}
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

      <div className="mt-4 grid grid-cols-2 gap-2">
        <InquiryTrigger
          type="work"
          className="group inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5 font-sans text-xs whitespace-nowrap text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
        >
          <span className="ease-smooth inline-flex shrink-0 origin-[70%_90%] transition-transform duration-500 group-hover:-rotate-12">
            <Image
              src="/freelancer.png"
              alt=""
              width={512}
              height={512}
              quality={100}
              className="size-3.5"
            />
          </span>
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

        <DocsCopyEmailButton />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-xs text-neutral-400">
        <span>© {year} Opensource UI </span>
        <span aria-hidden="true">·</span>
        <span> Made in India </span>
      </div>
    </div>
  );
}
