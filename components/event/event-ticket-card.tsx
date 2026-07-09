import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { MapPin, Clock } from "lucide-react";

export type EventTicketCardProps = Readonly<
  {
    title?: string;
    date?: string;
    month?: string;
    time?: string;
    location?: string;
    ticketId?: string;
    ticketType?: string;
    coverImageSrc?: string;
    coverImageAlt?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// Production-ready Event Ticket component — styled with Tailwind CSS.
export const EventTicketCard = forwardRef<HTMLDivElement, EventTicketCardProps>(
  (
    {
      className,
      title = "Design Systems Conference 2026",
      date = "14",
      month = "Jun",
      time = "10:00 AM — 6:00 PM",
      location = "Kolkata, India",
      ticketId = "#DS2026-0042",
      ticketType = "VIP Pass",
      coverImageSrc = "/dith-homee.png",
      coverImageAlt = "Event cover image",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="event-ticket-card"
        className={cn(
          "group flex w-72 overflow-hidden rounded-2xl bg-neutral-50 font-sans",
          className,
        )}
        {...props}
      >
        <div
          data-slot="event-ticket-card-cover"
          className="relative w-24 shrink-0 overflow-hidden"
        >
          <Image
            src={coverImageSrc}
            alt={coverImageAlt}
            fill
            sizes="96px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-teal-900/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-70">
              {month}
            </span>

            <span className="text-2xl leading-none font-light">{date}</span>
          </div>
        </div>

        <div
          data-slot="event-ticket-card-content"
          className="relative flex-1 p-4"
        >
          <div className="absolute top-3 bottom-3 left-0 w-px border-l border-dashed border-neutral-200" />

          <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-white" />

          <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-white" />

          <span className="font-mono text-[10px] tracking-widest text-teal-600 uppercase">
            Live Event
          </span>

          <h3 className="mt-1 text-sm leading-snug font-semibold text-neutral-900">
            {title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-neutral-500">
            <Clock size={10} />
            <span>{time}</span>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-[11px] text-neutral-500">
            <MapPin size={10} />
            <span>{location}</span>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
            <span className="font-mono text-[10px] text-neutral-400">
              {ticketId}
            </span>

            <span className="text-xs font-semibold text-neutral-900">
              {ticketType}
            </span>
          </div>
        </div>
      </div>
    );
  },
);

EventTicketCard.displayName = "EventTicketCard";
