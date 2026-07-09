"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

export function CopyEmailLink() {
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
      className="cursor-pointer transition-colors hover:text-neutral-600"
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
