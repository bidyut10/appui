import { AnnotatedText } from "@/components/underlines/annotated-text";
import type { ShowcaseCategoryGroup } from "@/lib/showcase";

import { ComponentListRow } from "./component-list-row";

type ComponentsBrowseAllProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  totalCount: number;
}>;

export function ComponentsBrowseAll({
  categories,
  totalCount,
}: ComponentsBrowseAllProps) {
  const allComponents = categories
    .flatMap((group) =>
      group.items.map((item) => ({ ...item, category: group.category })),
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl px-4 py-8 md:mt-0 md:px-8 md:py-10">
      <div id="overview" className="min-w-0 scroll-mt-8">
        <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
          Components / Docs
        </p>

        <h1 className="mt-3 font-serif text-2xl text-neutral-900">
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

      <section id="components" className="mt-16 min-w-0 scroll-mt-8 md:mt-10">
        <ul className="mt-6 flex flex-col gap-2">
          {allComponents.map((item, index) => (
            <ComponentListRow key={item.slug} item={item} index={index} />
          ))}
        </ul>
      </section>
    </div>
  );
}
