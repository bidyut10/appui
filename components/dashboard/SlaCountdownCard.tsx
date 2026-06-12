import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type SlaItem = {
  label: string;
  deadline: string;
  hoursLeft: number;
  urgent?: boolean;
};

export type SlaCountdownCardProps = {
  title?: string;
  items?: SlaItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: SlaItem[] = [
  { label: "Enterprise ticket #4421", deadline: "Today 6 PM", hoursLeft: 4, urgent: true },
  { label: "Onboarding call — Acme", deadline: "Mon 10 AM", hoursLeft: 28 },
  { label: "Contract renewal review", deadline: "Wed 2 PM", hoursLeft: 72 },
];

export const SlaCountdownCard = forwardRef<
  HTMLDivElement,
  SlaCountdownCardProps
>(
  (
    {
      className,
      title = "SLA countdown",
      items = defaultItems,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="sla-countdown-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-medium text-neutral-500">{title}</p>
      <div className="space-y-3">
        {items.map((item) => {
          const urgency = item.hoursLeft <= 6 ? 95 : item.hoursLeft <= 24 ? 60 : 30;
          return (
            <div
              key={item.label}
              className={cn(
                "rounded-xl border p-3",
                item.urgent
                  ? "border-rose-200 bg-rose-50/40"
                  : "border-neutral-100",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[12px] font-semibold leading-snug text-neutral-800">
                  {item.label}
                </p>
                {item.urgent && (
                  <span className="shrink-0 rounded bg-rose-500 px-1.5 py-0.5 text-[8px] font-bold text-white uppercase">
                    Urgent
                  </span>
                )}
              </div>
              <p className="mt-1 text-[10px] text-neutral-400">{item.deadline}</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      item.urgent ? "bg-rose-500" : "bg-amber-400",
                    )}
                    style={{ width: `${urgency}%` }}
                  />
                </div>
                <span
                  className={cn(
                    "text-[11px] font-bold tabular-nums",
                    item.urgent ? "text-rose-600" : "text-neutral-600",
                  )}
                >
                  {item.hoursLeft}h
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

SlaCountdownCard.displayName = "SlaCountdownCard";
