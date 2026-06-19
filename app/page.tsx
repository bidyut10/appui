import { Box } from "./Box";
import { showcaseRows } from "@/lib/showcase/showcase";

function rowKey(row: (typeof showcaseRows)[number]): string {
  return row.map((item) => item.slug).join("-");
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col items-center overflow-x-hidden px-3 pb-10 selection:bg-neutral-800 selection:text-white sm:px-4">
      <div className="mb-8 flex max-w-xl flex-col items-center px-2 text-center sm:mb-10">
        <h1 className="mt-20 mb-2 text-xl sm:text-2xl">Introduction</h1>
        <p className="max-w-160 text-sm leading-relaxed text-neutral-500">
          I made these for apps I&apos;m building and put them up here. Next.js,
          Tailwind v4, icons from{" "}
          <a
            href="https://nexticons.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-700"
          >
            nexticons.in
          </a>
          {". Click the arrow on a box to copy the code — I'm still adding more."}
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
        {showcaseRows.map((row) => (
          <div
            key={rowKey(row)}
            className="flex w-full min-w-0 flex-col gap-3 min-[1194px]:flex-row min-[1194px]:gap-4"
          >
            {row.map((item) => (
              <Box
                key={item.slug}
                detailHref={`/components/${item.slug}`}
              >
                {item.preview}
              </Box>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
