import { Box } from "@/app/Box";
import { showcaseRows } from "@/lib/showcase/showcase";

function rowKey(row: (typeof showcaseRows)[number]): string {
  return row.map((item) => item.slug).join("-");
}

export function ShowcaseGrid() {
  return (
    <div className="w-full min-w-0 space-y-3">
      {showcaseRows.map((row) => (
        <div
          key={rowKey(row)}
          className="flex w-full min-w-0 flex-col gap-3 md:flex-row md:gap-4"
        >
          {row.map((item) => (
            <Box key={item.slug} detailHref={`/components/${item.slug}`}>
              {item.preview}
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
}
