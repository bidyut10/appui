"use client";

import { useState } from "react";

import { Check } from "@/icons/activity/check";
import { Copy } from "@/icons/activity/copy";
import { HighlightedCode } from "@/lib/showcase/highlight-code";

type CopyCodeBlockProps = Readonly<{
  code: string;
  filename: string;
  hint?: string;
  compact?: boolean;
}>;

export function CopyCodeBlock({
  code,
  filename,
  compact = false,
}: CopyCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      globalThis.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="bg-neutral-900">
      <div className="relative z-0 flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 py-2 pr-2 pl-3 sm:py-2.5 sm:pr-3 sm:pl-4">
        <p className="min-w-0 flex-1 truncate font-mono text-[11px] text-neutral-400 sm:text-xs">
          {filename}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="inline-flex size-8 shrink-0 items-center justify-center text-neutral-300 transition-colors hover:text-white cursor-pointer"
        >
          {copied ? <Check size={14} className="text-green-400"/> : <Copy size={14} />}
        </button>
      </div>

      <div className="relative z-0 bg-neutral-900">
        <pre
          className={`scrollbar-none overflow-auto select-none ${compact ? "max-h-36 sm:max-h-44" : "max-h-64 sm:max-h-112"}`}
        >
          <HighlightedCode code={code} />
        </pre>
      </div>
    </div>
  );
}

const guideCodeClass =
  "font-mono text-[0.75rem] font-medium text-neutral-800 sm:text-xs";

function InlineCode({ children }: Readonly<{ children: string }>) {
  return (
    <code
      className={`mx-px inline-block max-w-full border border-neutral-100 bg-neutral-50 px-1.5 py-0.5 ${guideCodeClass}`}
    >
      {children}
    </code>
  );
}

function CodeLine({ children }: Readonly<{ children: string }>) {
  return (
    <code
      className={`block w-full border border-neutral-100 bg-neutral-50 px-2.5 py-2 break-all ${guideCodeClass}`}
    >
      {children}
    </code>
  );
}

type SetupGuideProps = Readonly<{
  componentFile: string;
  exportName: string;
  usage: string;
}>;

export function SetupGuide({
  componentFile,
  exportName,
  usage,
}: SetupGuideProps) {
  const importPath = `@/${componentFile.replace(/\.tsx$/, "")}`;

  const steps = [
    {
      id: "install",
      content: (
        <div className="space-y-1.5 font-serif text-lg">
          <p>Run in your terminal:</p>
          <CodeLine>npm install clsx tailwind-merge</CodeLine>
        </div>
      ),
    },
    {
      id: "cn",
      content: (
        <p className="font-serif text-lg">
          Copy <InlineCode>lib/cn.ts</InlineCode> below. Skip if you already
          have <InlineCode>cn()</InlineCode>.
        </p>
      ),
    },
    {
      id: "component",
      content: (
        <p className="font-serif text-lg">
          Copy <InlineCode>{componentFile}</InlineCode>. Replace{" "}
          <InlineCode>@/icons/...</InlineCode> with your icons (
          <a
            href="https://nexticons.in"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-900"
          >
            nexticons.in
          </a>
          {") and swap demo images."}
        </p>
      ),
    },
    {
      id: "usage",
      content: (
        <div className="space-y-1.5">
          <CodeLine>{`import { ${exportName} } from "${importPath}"`}</CodeLine>
          <CodeLine>{usage}</CodeLine>
        </div>
      ),
    },
  ];

  return (
    <section className="border border-neutral-100">
      <div className="border-b border-neutral-100 px-4 py-3 sm:px-5">
        <h2 className="font-serif text-lg font-medium text-neutral-900">
          How to use
        </h2>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li
            key={step.id}
            className="grid grid-cols-[1.25rem_1fr] items-start gap-x-3 border-b border-neutral-100 px-4 py-3.5 last:border-b-0 sm:gap-x-4 sm:px-5 sm:py-4"
          >
            <span className="pt-0.5 font-mono text-xs text-neutral-400 tabular-nums">
              {index + 1}
            </span>
            <div className="min-w-0 text-sm leading-relaxed text-neutral-600">
              {step.content}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
