import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Flower } from "lucide-react";

type DailyMotivationCardOwnProps = {
  image?: string;
  imageAlt?: string;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  lineFour?: string;
  stickerText?: string;
};

export type DailyMotivationCardProps = Readonly<DailyMotivationCardOwnProps> &
  ComponentPropsWithoutRef<"div">;

// Production-ready Daily Motivation component — styled with Tailwind CSS.
export const DailyMotivationCard = forwardRef<
  HTMLDivElement,
  DailyMotivationCardProps
>(
  (
    {
      className,
      image = "/wallpaper-15.png",
      imageAlt = "Woman holding flowers",
      lineOne = "Your daily",
      lineTwo = "motivation",
      lineThree = "for this Week",
      stickerText = "GOOD DAY!",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="daily-motivation-card"
      className={cn(
        "relative h-100 w-96 overflow-hidden bg-[#f4f4ea] px-6 pt-6 pb-5 font-sans",
        className,
      )}
      {...props}
    >
      <div className="relative z-10 max-w-44 space-y-1 font-serif text-[1.85rem] leading-[0.92] tracking-tight text-[#2d3e40]">
        <p>{lineOne}</p>
        <p>{lineTwo}</p>
        <p>{lineThree}</p>
      </div>

      <div className="absolute top-6 right-7 z-20 overflow-visible p-1">
        <Flower size={58} color="#2d3e40" />
      </div>

      <div className="absolute right-3 bottom-4 z-10 w-37 rotate-12">
        <div className="bg-white p-2 pb-7 shadow-[0_12px_28px_rgba(45,62,64,0.14)]">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="148px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute -bottom-1 -left-5 z-20 -rotate-6 rounded-full border-4 border-[#9f93b8] bg-[#e2d9f3] px-3.5 py-1.5">
          <p className="font-sans text-[10px] font-bold tracking-wide text-[#474253]">
            {stickerText}
          </p>
        </div>
      </div>
    </div>
  ),
);

DailyMotivationCard.displayName = "DailyMotivationCard";
