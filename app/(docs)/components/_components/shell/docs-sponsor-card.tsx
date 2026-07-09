import { ChevronRight, MoveRight } from "lucide-react";
import { mailtoLinks } from "@/lib/site";

export function DocsSponsorCard() {
  return (
    <div className="shrink-0 border-t border-neutral-100 px-6 py-5">
      <p className="mb-3 font-mono text-[10px] tracking-[0.12em] text-neutral-300 uppercase">
        Sponsor spot · demo preview
      </p>

      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-neutral-50"
        >
          <span className="font-mono text-[9px] tracking-wide text-neutral-400 uppercase">
            Logo
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-sans text-sm font-semibold text-neutral-900">
            Your brand name
          </p>
          <p className="font-sans text-xs text-neutral-400">
            Your tagline or category
          </p>
        </div>
      </div>

      <p className="mt-3 font-sans text-xs leading-relaxed text-neutral-500">
        A short pitch about your product or service goes here. This is a
        preview of how sponsor cards will look in this sidebar.
      </p>

      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-200 bg-neutral-50 px-3 py-1.5 font-sans text-xs font-medium text-neutral-500">
        Your call to action
        <span className="relative inline-flex size-3 shrink-0 items-center justify-center">
          <ChevronRight size={12} strokeWidth={3} />
        </span>
      </span>

      <div className="mt-5 border-t border-neutral-100 pt-4">
        <p className="font-sans text-xs leading-relaxed text-neutral-500">
          This slot is available. Sponsor Opensource UI and reach developers
          browsing components every day.
        </p>
        <a
          href={mailtoLinks.sponsor}
          className="group mt-3 inline-flex items-center gap-1.5 font-sans text-xs text-neutral-500 underline decoration-neutral-200 underline-offset-4 transition-colors hover:text-neutral-800 hover:decoration-neutral-400"
        >
          Become a sponsor
          <span className="relative inline-flex size-3 shrink-0 items-center justify-center">
            <ChevronRight
              size={12}
              strokeWidth={3}
              className="transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
            />
            <MoveRight
              size={12}
              strokeWidth={2.5}
              className="absolute scale-95 -translate-x-0.5 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
