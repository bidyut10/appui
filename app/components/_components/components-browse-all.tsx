import { SaveScrollLink } from "@/app/save-scroll-link";
import { AnnotatedText } from "@/components/underlines/AnnotatedText";
import { ChevronRight } from "@/icons/actions/chevron-right";
import { MoveRight } from "@/icons/keys/move-right";
import { cn } from "@/lib/cn";
import type { ShowcaseCategoryGroup, ShowcaseEntry } from "@/lib/showcase";

type ComponentsBrowseAllProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  totalCount: number;
}>;

type ListedComponent = ShowcaseEntry & Readonly<{ category: string }>;

const LETTER_COLORS = [
  { bg: "bg-neutral-100", text: "text-sky-700" },
  { bg: "bg-neutral-100", text: "text-rose-600" },
  { bg: "bg-neutral-100", text: "text-amber-700" },
  { bg: "bg-neutral-100", text: "text-emerald-700" },
  { bg: "bg-neutral-100", text: "text-violet-700" },
  { bg: "bg-neutral-100", text: "text-cyan-700" },
  { bg: "bg-neutral-100", text: "text-orange-700" },
  { bg: "bg-neutral-100", text: "text-fuchsia-700" },
  { bg: "bg-neutral-100", text: "text-lime-700" },
  { bg: "bg-neutral-100", text: "text-indigo-700" },
] as const;

function getLetterColor(index: number) {
  return LETTER_COLORS[index % LETTER_COLORS.length];
}

function ComponentRow({
  item,
  index,
}: {
  item: ListedComponent;
  index: number;
}) {
  const letterColor = getLetterColor(index);
  const letter = item.title.charAt(0).toUpperCase();

  return (
    <li className="min-w-0">
      <SaveScrollLink
        href={`/components/${item.slug}`}
        className="group flex min-w-0 items-center gap-2.5 py-1 max-[499px]:gap-2"
      >
        <div
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded",
            letterColor.bg,
          )}
        >
          <span
            className={cn(
              "font-sans text-[10px] font-semibold",
              letterColor.text,
            )}
          >
            {letter}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 max-[499px]:gap-2">
          <p className="min-w-0 flex-1 truncate font-sans text-sm leading-snug">
            <span className="font-semibold text-neutral-900 group-hover:text-neutral-700">
              {item.title}
            </span>
            <span className="text-neutral-300"> / </span>
            <span className="text-neutral-500">{item.category}</span>
          </p>

          <span className="relative inline-flex size-3 shrink-0 items-center justify-center text-neutral-400 group-hover:text-neutral-700">
            <ChevronRight
              size={12}
              strokeWidth={3}
              className="transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
              aria-hidden
            />
            <MoveRight
              size={12}
              strokeWidth={2.5}
              className="absolute scale-95 -translate-x-0.5 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              aria-hidden
            />
          </span>
        </div>
      </SaveScrollLink>
    </li>
  );
}

export function ComponentsBrowseAll({
  categories,
  totalCount,
}: ComponentsBrowseAllProps) {
  const allComponents: ListedComponent[] = categories
    .flatMap((group) =>
      group.items.map((item) => ({ ...item, category: group.category })),
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-8 md:py-10">
      <div id="overview" className="min-w-0 scroll-mt-8">
        <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
          Components / Docs
        </p>

        <h1 className="mt-3 font-serif text-2xl text-neutral-900 ">
          All{" "}
          <AnnotatedText variant="line" color="text-cyan-200">
            Available components
          </AnnotatedText>
          .
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
          Explore{" "}
          <span className="font-medium text-neutral-700">{totalCount}</span>{" "}
          polished React and Next.js components, organized across{" "}
          <span className="font-medium text-neutral-700">
            {categories.length}
          </span>{" "}
          categories. Pick what you need,{" "}
          <AnnotatedText variant="wavy" color="text-rose-200">
            copy the code
          </AnnotatedText>
          , and make it yours.
        </p>
      </div>

      <section id="components" className="mt-10 min-w-0 scroll-mt-8">

        <ul className="mt-6 flex flex-col gap-2">
          {allComponents.map((item, index) => (
            <ComponentRow key={item.slug} item={item} index={index} />
          ))}
        </ul>
      </section>
    </div>
  );
}
