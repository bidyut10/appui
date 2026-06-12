import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type ChannelMetric = {
  name: string;
  value: number;
  color: string;
};

export type ChannelLollipopCardProps = {
  title?: string;
  channels?: ChannelMetric[];
} & ComponentPropsWithoutRef<"div">;

const defaultChannels: ChannelMetric[] = [
  { name: "Organic", value: 84, color: "bg-teal-500" },
  { name: "Paid", value: 62, color: "bg-sky-500" },
  { name: "Referral", value: 45, color: "bg-amber-500" },
  { name: "Social", value: 38, color: "bg-rose-400" },
  { name: "Email", value: 28, color: "bg-neutral-400" },
];

export const ChannelLollipopCard = forwardRef<
  HTMLDivElement,
  ChannelLollipopCardProps
>(
  (
    {
      className,
      title = "Channel performance",
      channels = defaultChannels,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="channel-lollipop-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-medium text-neutral-500">{title}</p>
      <div className="space-y-3">
        {channels.map((ch) => (
          <div key={ch.name} className="flex items-center gap-3">
            <span className="w-14 shrink-0 text-[11px] font-medium text-neutral-600">
              {ch.name}
            </span>
            <div className="relative flex-1">
              <div className="h-1.5 rounded-full bg-neutral-100" />
              <div
                className={cn("absolute top-0 left-0 h-1.5 rounded-full", ch.color)}
                style={{ width: `${ch.value}%` }}
              />
              <div
                className={cn(
                  "absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white shadow-sm",
                  ch.color,
                )}
                style={{ left: `calc(${ch.value}% - 7px)` }}
              />
            </div>
            <span className="w-8 text-right text-[11px] font-bold text-neutral-800 tabular-nums">
              {ch.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

ChannelLollipopCard.displayName = "ChannelLollipopCard";
