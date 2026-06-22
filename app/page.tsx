import Image from "next/image";
import AnnotatedParagraph from "./Annotatedparagraph";
import { Box } from "./Box";
import { ShowcaseScrollRestoration } from "./showcase-scroll-restoration";
import { showcaseRows } from "@/lib/showcase/showcase";
import oui from "@/public/opensourceui-logo.png"
function rowKey(row: (typeof showcaseRows)[number]): string {
  return row.map((item) => item.slug).join("-");
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col items-center overflow-x-hidden px-3 pb-10 selection:bg-neutral-800 selection:text-white sm:px-4">
      <ShowcaseScrollRestoration />
      <nav className="w-full max-w-xl border-b border-neutral-100 px-4 py-4 md:px-0 select-none">
        <div className="flex w-full items-center justify-between">
          <Image src={oui} alt="opensource-ui-logo" width={20} />

          <div className="flex items-center gap-4 font-serif">
            <a
              href="https://x.com/BidyutKundu12"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs leading-8 font-normal text-neutral-600 underline decoration-neutral-600 underline-offset-4 transition-colors duration-300 hover:text-neutral-900 hover:decoration-neutral-900 md:leading-9"
            >
              Twitter/X
            </a>{" "}
            <a
              href="https://github.com/bidyut10/appui"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs leading-8 font-normal text-neutral-600 underline decoration-neutral-600 underline-offset-4 transition-colors duration-300 hover:text-neutral-900 hover:decoration-neutral-900 md:leading-9"
            >
              Github
            </a>
          </div>
        </div>
      </nav>
      <AnnotatedParagraph />

      <div className="w-full max-w-400 min-w-0 space-y-3">
        {showcaseRows.map((row) => (
          <div
            key={rowKey(row)}
            className="flex w-full min-w-0 flex-col gap-3 min-[1194px]:flex-row min-[1194px]:gap-4"
          >
            {row.map((item) => (
              <Box key={item.slug} detailHref={`/components/${item.slug}`}>
                {item.preview}
              </Box>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
