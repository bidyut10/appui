import { BOX_PATTERN } from "@/lib/shared";

type ComponentsSearchEmptyProps = Readonly<{
  query: string;
}>;

export function ComponentsSearchEmpty({ query }: ComponentsSearchEmptyProps) {
  return (
    <div
      className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-xl border border-neutral-100 px-6 py-10 md:min-h-80"
      style={BOX_PATTERN}
    >
      <div className="relative z-0 max-w-sm text-center">
        <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
          No results
        </p>
        <p className="mt-3 font-serif text-xl text-neutral-900">
          Nothing matched &ldquo;{query}&rdquo;
        </p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-500">
          Try another component name, category, or keyword.
        </p>
      </div>
    </div>
  );
}
