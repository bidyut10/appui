import { AnnotatedText } from "@/components/underlines/AnnotatedText";
import { searchShowcaseEntries } from "@/lib/showcase/search-showcase";
import { ComponentListRow } from "./component-list-row";
import { ComponentsSearchEmpty } from "./components-search-empty";

type ComponentsSearchResultsProps = Readonly<{
  query: string;
}>;

export function ComponentsSearchResults({ query }: ComponentsSearchResultsProps) {
  const results = searchShowcaseEntries(query);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-8 md:py-10">
      <div id="overview" className="min-w-0 scroll-mt-8">
        <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
          Components / Search
        </p>

        <h1 className="mt-3 font-serif text-2xl text-neutral-900">
          Results for{" "}
          <AnnotatedText variant="highlight" color="text-yellow-100">
            {query}
          </AnnotatedText>
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
          {results.length === 0 ? (
            <>No components matched your search.</>
          ) : (
            <>
              Found{" "}
              <span className="font-medium text-neutral-700">
                {results.length}
              </span>{" "}
              {results.length === 1 ? "component" : "components"} matching your
              query.
            </>
          )}
        </p>
      </div>

      <section id="components" className="mt-10 min-w-0 scroll-mt-8">
        {results.length === 0 ? (
          <ComponentsSearchEmpty query={query} />
        ) : (
          <ul className="flex flex-col gap-2">
            {results.map((item, index) => (
              <ComponentListRow key={item.slug} item={item} index={index} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
