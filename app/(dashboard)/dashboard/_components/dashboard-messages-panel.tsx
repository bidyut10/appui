"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Briefcase,
  Clock3,
  HandCoins,
  Inbox,
  Mail,
  Reply,
  Search,
} from "lucide-react";

import { Gmail } from "@/icons/brands/gmail";
import { cn } from "@/lib/cn";
import type { InquiryRecord, InquiryType } from "@/lib/inquiries/types";

function formatWhen(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatFullWhen(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function typeMeta(type: InquiryType) {
  if (type === "sponsor") {
    return {
      label: "Sponsor",
      Icon: HandCoins,
      chip: "bg-rose-600 text-white",
      iconClass: "text-white",
    };
  }
  return {
    label: "Work",
    Icon: Briefcase,
    chip: "bg-rose-700 text-white",
    iconClass: "text-white",
  };
}

type Filter = "all" | InquiryType;

type DashboardEmailsPanelProps = Readonly<{
  inquiries: InquiryRecord[];
  loading?: boolean;
  error?: string;
}>;

export function DashboardEmailsPanel({
  inquiries,
  loading = false,
  error = "",
}: DashboardEmailsPanelProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inquiries.filter((item) => {
      if (filter !== "all" && item.type !== filter) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.message.toLowerCase().includes(q)
      );
    });
  }, [inquiries, filter, query]);

  useEffect(() => {
    if (filtered.length === 0) {
      setSelectedId(null);
      return;
    }
    if (!selectedId || !filtered.some((item) => item.id === selectedId)) {
      setSelectedId(filtered[0]?.id ?? null);
    }
  }, [filtered, selectedId]);

  const selected = filtered.find((item) => item.id === selectedId) ?? null;
  const workCount = inquiries.filter((i) => i.type === "work").length;
  const sponsorCount = inquiries.filter((i) => i.type === "sponsor").length;

  const filters: Array<{ id: Filter; label: string; count: number }> = [
    { id: "all", label: "All", count: inquiries.length },
    { id: "work", label: "Work", count: workCount },
    { id: "sponsor", label: "Sponsor", count: sponsorCount },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-neutral-950">
      <div className="flex shrink-0 flex-col gap-3 border-b border-white/[0.04] px-3 py-3 md:flex-row md:items-center md:justify-between md:px-4">
        <div className="flex items-center gap-2.5">
          <Gmail size={18} className="shrink-0 text-rose-700/70" aria-hidden />
          <div>
            <p className="font-sans text-sm font-semibold text-neutral-400">
              Inbox
            </p>
            <p className="font-mono text-[10px] text-neutral-600">
              {loading
                ? "Loading…"
                : `${inquiries.length} message${inquiries.length === 1 ? "" : "s"}`}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-sans text-xs font-medium transition-colors",
                filter === item.id
                  ? item.id === "sponsor"
                    ? "bg-rose-800/10 text-rose-700/70"
                    : item.id === "work"
                      ? "bg-rose-800/10 text-rose-700/60"
                      : "bg-white/[0.08] text-neutral-300"
                  : "border border-white/[0.05] text-neutral-500 hover:border-white/10 hover:text-neutral-400",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "rounded-md px-1.5 py-0.5 font-sans text-[10px] font-semibold tabular-nums",
                  filter === item.id
                    ? "bg-black/20 text-inherit opacity-80"
                    : "bg-white/[0.04] text-neutral-500",
                )}
              >
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <aside
          className={cn(
            "flex min-h-0 w-full flex-col border-white/[0.04] md:w-88 md:shrink-0 md:border-r",
            selected ? "hidden md:flex" : "flex",
          )}
        >
          <div className="shrink-0 border-b border-white/[0.04] p-3">
            <label className="relative block">
              <Search
                size={14}
                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search mail"
                className="w-full rounded-lg border border-white/[0.05] bg-white/[0.03] py-2 pr-3 pl-9 font-sans text-sm text-neutral-400 outline-none ring-0 placeholder:text-neutral-600 focus:border-white/10 focus:ring-0"
              />
            </label>
          </div>

          <div className="scrollbar-hover min-h-0 flex-1 overflow-y-auto">
            {error && inquiries.length === 0 ? (
              <p className="px-4 py-10 text-center font-sans text-sm text-rose-700/70">
                {error}
              </p>
            ) : loading && inquiries.length === 0 ? (
              <p className="px-4 py-10 text-center font-sans text-sm text-neutral-500">
                Loading messages…
              </p>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center px-4 py-12 text-center">
                <Inbox size={28} className="text-neutral-600" aria-hidden />
                <p className="mt-3 font-sans text-sm text-neutral-500">
                  {query || filter !== "all"
                    ? "No messages match this filter."
                    : "Inbox is empty. New inquiries will show up here."}
                </p>
              </div>
            ) : (
              <ul>
                {filtered.map((item) => {
                  const meta = typeMeta(item.type);
                  const active = item.id === selectedId;
                  return (
                    <li
                      key={item.id}
                      className="border-b border-white/[0.03]"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className={cn(
                          "w-full px-3 py-3 text-left transition-colors",
                          active
                            ? "bg-white/[0.05]"
                            : "hover:bg-white/[0.03]",
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p
                            className={cn(
                              "truncate font-sans text-sm",
                              active
                                ? "font-semibold text-neutral-300"
                                : "font-medium text-neutral-500",
                            )}
                          >
                            {item.name}
                          </p>
                          <span className="shrink-0 font-mono text-[10px] text-neutral-600">
                            {formatWhen(item.createdAt)}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate font-sans text-xs text-neutral-600">
                          {item.email}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[10px] uppercase",
                              meta.chip,
                            )}
                          >
                            <meta.Icon
                              size={10}
                              className={meta.iconClass}
                              aria-hidden
                            />
                            {meta.label}
                          </span>
                          <p className="truncate font-sans text-xs font-medium text-neutral-500">
                            {item.subject}
                          </p>
                        </div>
                        <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-neutral-600">
                          {item.message}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </aside>

        <section
          className={cn(
            "min-h-0 flex-1 flex-col bg-neutral-950",
            selected ? "flex" : "hidden md:flex",
          )}
        >
          {!selected ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <Mail size={32} className="text-neutral-600" aria-hidden />
              <p className="mt-3 font-sans text-sm text-neutral-500">
                Select a message to read it.
              </p>
            </div>
          ) : (
            <>
              <div className="flex shrink-0 items-start gap-3 border-b border-white/[0.04] px-3 py-3 md:px-5 md:py-4">
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="mt-0.5 inline-flex size-8 items-center justify-center rounded-lg border border-white/[0.05] text-neutral-400 transition-colors hover:border-white/10 hover:text-neutral-300 md:hidden"
                  aria-label="Back to inbox"
                >
                  <ArrowLeft size={16} aria-hidden />
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-sans text-base font-semibold text-neutral-400 md:text-lg">
                      {selected.subject}
                    </h2>
                    {(() => {
                      const meta = typeMeta(selected.type);
                      return (
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[10px] uppercase",
                            meta.chip,
                          )}
                        >
                          <meta.Icon
                            size={10}
                            className={meta.iconClass}
                            aria-hidden
                          />
                          {meta.label}
                        </span>
                      );
                    })()}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
                    <span className="font-sans font-medium text-neutral-400">
                      {selected.name}
                    </span>
                    <span className="font-mono text-neutral-500">
                      &lt;{selected.email}&gt;
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-neutral-600">
                      <Clock3 size={11} aria-hidden />
                      {formatFullWhen(selected.createdAt)}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${encodeURIComponent(selected.email)}?subject=${encodeURIComponent(`Re: ${selected.subject}`)}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-2 font-sans text-xs font-medium text-white transition-colors hover:bg-rose-500"
                >
                  <Reply size={14} aria-hidden />
                  Reply
                </a>
              </div>

              <div className="scrollbar-hover min-h-0 flex-1 overflow-y-auto px-3 py-5 md:px-8 md:py-6">
                <article className="mx-auto max-w-2xl rounded-xl border border-white/[0.03] bg-neutral-900/30 p-4 md:p-6">
                  <p className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-neutral-500">
                    {selected.message}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.04] pt-4 font-mono text-[10px] text-neutral-600">
                    <span>Source · {selected.source}</span>
                    <span>ID · {selected.id.slice(0, 8)}</span>
                  </div>
                </article>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
