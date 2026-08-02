"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

export function DocsCopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.author.email);
      setCopied(true);
      globalThis.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-rose-100/50 bg-rose-50 px-2 py-1.5 font-sans text-xs whitespace-nowrap text-neutral-900 transition-colors hover:border-rose-100 hover:bg-rose-100"
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
