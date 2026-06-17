import { isValidElement } from "react";

import { Box } from "./Box";
import { showcaseRows01Devices } from "./showcase/component-rows-1";
import { showcaseRows02Social } from "./showcase/component-rows-2";
import type { Row } from "@/types/types";

const rows: Row[] = [...showcaseRows01Devices, ...showcaseRows02Social];

function getShowcaseRowKey(row: Row): string {
  return row
    .map((node) => {
      if (node == null) return "spacer";
      if (isValidElement(node) && node.key != null) return String(node.key);
      return "item";
    })
    .join("-");
}

function getShowcaseSlotKey(node: React.ReactNode): React.Key | undefined {
  if (!isValidElement(node)) return undefined;
  return node.key ?? undefined;
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col items-center overflow-x-hidden px-3 pb-10 sm:px-4">
      <div className="mb-8 flex max-w-xl flex-col items-center px-2 text-center sm:mb-10">
        <h1 className="mt-20 mb-2 text-xl sm:text-2xl">Introduction</h1>
        <p className="max-w-xl text-sm leading-relaxed text-neutral-500">
          Components I built for my own apps—Next.js, Tailwind v4, icons from{" "}
          <a
            href="https://nexticons.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-700"
          >
            nexticons.in
          </a>
          {". Everything below runs live. Copy-paste source is on the way."}
        </p>
        <p className="mt-2 max-w-xl text-sm text-neutral-500">
          Made by{" "}
          <a
            href="https://x.com/BidyutKundu12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 hover:text-neutral-900 hover:decoration-neutral-900"
          >
            Bidyut Kundu
          </a>
        </p>
      </div>

      <div className="w-full max-w-400 min-w-0 space-y-3">
        {rows.map((row) => (
          <div
            key={getShowcaseRowKey(row)}
            className="flex w-full min-w-0 flex-col gap-3 min-[1194px]:flex-row min-[1194px]:gap-4"
          >
            {row.map((node) =>
              node == null ? (
                <div
                  key="showcase-spacer"
                  className="hidden min-h-120 min-w-0 flex-1 min-[1194px]:block"
                  aria-hidden
                />
              ) : (
                <Box key={getShowcaseSlotKey(node)}>{node}</Box>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
