import Image from "next/image";
import type { ReactNode } from "react";

import { Clock, Eye, Users } from "lucide-react";

import { cn } from "@/lib/cn";
import { HOME_REVIEWS } from "@/lib/home/testimonials";
import { siteConfig } from "@/lib/site";

const VISITOR_AVATARS = HOME_REVIEWS.slice(0, 3);

const VISITOR_BARS = [
  { id: "w1", height: "h-8" },
  { id: "w2", height: "h-10" },
  { id: "w3", height: "h-9" },
  { id: "w4", height: "h-12" },
  { id: "w5", height: "h-11" },
  { id: "w6", height: "h-14" },
  { id: "w7", height: "h-16" },
] as const;

type HomeStatsProps = Readonly<{
  className?: string;
}>;

function StatCardShell({
  icon: Icon,
  note,
  children,
  value,
  label,
}: Readonly<{
  icon: typeof Eye;
  note: string;
  children: ReactNode;
  value: string;
  label: string;
}>) {
  return (
    <article className="flex w-full flex-col rounded-2xl border border-neutral-100 bg-white p-4 md:h-full md:min-w-0">
      <div className="mb-4 flex items-start justify-between gap-2">
        <span className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-100 bg-white text-neutral-500">
          <Icon size={14} strokeWidth={1.75} aria-hidden />
        </span>
        <span className="font-sans text-[11px] text-neutral-400">{note}</span>
      </div>

      <div className="flex flex-1 flex-col justify-center">{children}</div>

      <footer className="mt-4 border-t border-neutral-100 pt-3 md:mt-auto">
        <p className="font-serif text-2xl leading-none text-neutral-900 tabular-nums">
          {value}
        </p>
        <p className="mt-1 font-sans text-xs text-neutral-500">{label}</p>
      </footer>
    </article>
  );
}

function PageViewsCard() {
  return (
    <StatCardShell
      icon={Eye}
      note="Since launch"
      value={siteConfig.stats.pageViews}
      label="Page views"
    >
      <svg
        viewBox="0 0 160 52"
        className="h-18 w-full text-neutral-700"
        aria-hidden
      >
        <path
          d="M0 44 L28 40 L56 33 L84 26 L112 18 L140 12 L160 8 V52 H0 Z"
          className="fill-neutral-100"
        />
        <polyline
          points="0,44 28,40 56,33 84,26 112,18 140,12 160,8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StatCardShell>
  );
}

function VisitorsCard() {
  return (
    <StatCardShell
      icon={Users}
      note="Unique people"
      value={siteConfig.stats.visitors}
      label="Visitors"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center">
          {VISITOR_AVATARS.map((review, index) => (
            <div
              key={review.name}
              className="relative size-8 shrink-0 overflow-hidden rounded-full bg-neutral-200 ring-2 ring-white not-first:-ml-2"
              style={{ zIndex: VISITOR_AVATARS.length - index }}
            >
              <Image
                src={review.avatar}
                alt=""
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex h-18 items-end gap-1">
          {VISITOR_BARS.map((bar, index) => (
            <span
              key={bar.id}
              aria-hidden
              className={cn(
                "flex-1 rounded-sm",
                bar.height,
                index === VISITOR_BARS.length - 1
                  ? "bg-neutral-400"
                  : "bg-neutral-100",
              )}
            />
          ))}
        </div>
      </div>
    </StatCardShell>
  );
}

function AvgVisitCard() {
  return (
    <StatCardShell
      icon={Clock}
      note="Per session"
      value={`${siteConfig.stats.avgVisitMinutes} min`}
      label="Avg. visit"
    >
      <div className="flex h-18 flex-col justify-center gap-3">
        <div className="relative px-1">
          <span
            aria-hidden
            className="absolute inset-x-1 top-1/2 h-px -translate-y-1/2 bg-neutral-100"
          />
          <div className="relative flex justify-between">
            {[0, 1, 2, 3, 4].map((minute) => (
              <span
                key={minute}
                aria-hidden
                className={cn(
                  "size-2 rounded-full",
                  minute >= 2 ? "bg-neutral-700" : "bg-neutral-200",
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between font-sans text-[10px] text-neutral-400">
          <span>0</span>
          <span>5 min</span>
        </div>
      </div>
    </StatCardShell>
  );
}

export function HomeStats({ className }: HomeStatsProps) {
  return (
    <section
      aria-label="Site usage statistics"
      className={cn("mt-10 w-full min-w-0", className)}
    >
      <div className="flex w-full flex-col gap-3 md:grid md:grid-cols-3 md:items-stretch">
        <PageViewsCard />
        <VisitorsCard />
        <AvgVisitCard />
      </div>
    </section>
  );
}
