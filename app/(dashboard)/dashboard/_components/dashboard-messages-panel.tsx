"use client";

import type { InquiryRecord } from "@/lib/inquiries/types";

import { RankPanel } from "@/app/(dashboard)/dashboard/_components/dashboard-panels";

function formatWhen(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function typeLabel(type: InquiryRecord["type"]): string {
  return type === "sponsor" ? "Sponsor" : "Work";
}

function typeTone(type: InquiryRecord["type"]): string {
  return type === "sponsor"
    ? "bg-amber-50 text-amber-700"
    : "bg-violet-50 text-violet-700";
}

type DashboardMessagesPanelProps = Readonly<{
  inquiries: InquiryRecord[];
  loading?: boolean;
  error?: string;
}>;

export function DashboardMessagesPanel({
  inquiries,
  loading = false,
  error = "",
}: DashboardMessagesPanelProps) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="font-sans text-sm font-medium text-neutral-900">
          Messages
        </h2>
        <p className="mt-1 font-sans text-xs text-neutral-500">
          Work-with-me and sponsor inquiries submitted from the site.
        </p>
      </div>

      <RankPanel
        title="Inbox"
        count={inquiries.length}
        emptyLabel={
          loading
            ? "Loading messages…"
            : error || "No messages yet. They will appear here when someone submits the form."
        }
        kind="components"
      >
        {error && inquiries.length === 0 ? null : (
          <ul className="divide-y divide-neutral-100">
            {inquiries.map((item) => (
              <li key={item.id} className="px-3 py-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-sans text-sm font-medium text-neutral-900">
                        {item.name}
                      </p>
                      <span
                        className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${typeTone(item.type)}`}
                      >
                        {typeLabel(item.type)}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-[11px] text-neutral-500">
                      {item.email}
                    </p>
                  </div>
                  <p className="font-mono text-[10px] text-neutral-400">
                    {formatWhen(item.createdAt)}
                  </p>
                </div>

                <p className="mt-3 font-sans text-sm font-medium text-neutral-800">
                  {item.subject}
                </p>
                <p className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-neutral-600">
                  {item.message}
                </p>
                <p className="mt-3 font-mono text-[10px] text-neutral-400">
                  Source · {item.source}
                </p>
              </li>
            ))}
          </ul>
        )}
      </RankPanel>
    </section>
  );
}
