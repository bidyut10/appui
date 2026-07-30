import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

export type SlowLivingPolaroidCardProps = Readonly<
  {
    image?: string;
    imageAlt?: string;
    category?: string;
    issue?: string;
    topic?: string;
    date?: string;
    ritual?: string;
    headline?: string;
    body?: string;
    footer?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// Production-ready Slow Living Polaroid component — styled with Tailwind CSS.
export const SlowLivingPolaroidCard = forwardRef<
  HTMLDivElement,
  SlowLivingPolaroidCardProps
>(
  (
    {
      className,
      image = "/background5.webp",
      imageAlt = "Slow morning portrait",
      category = "LIFESTYLE",
      issue = "01",
      topic = "slow living",
      date = "JAN 2026",
      ritual = "daily ritual",
      headline = "The beauty of a slow morning.",
      body = "Fresh coffee, soft light, and a moment to just breathe before the day starts.",
      footer = "stay grounded",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="slow-living-polaroid-card"
      className={cn(
        "relative h-88 w-72 overflow-hidden bg-[#4a2525] font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="absolute top-5 right-5 z-30 text-right font-mono text-[8px] leading-[1.6] tracking-[0.14em] text-[#efe6dc] uppercase">
        <p>
          {category} / {issue} — {topic} —
        </p>
        <p>{date}</p>
      </div>

      <div className="absolute top-15 left-[54%] z-10 w-35 -translate-x-1/2 rotate-6">
        <div
          className="absolute -top-1.5 -left-2.5 z-20 h-6 w-12 rotate-[-14deg] bg-[#d9c9a3] shadow-sm [clip-path:polygon(4%_18%,12%_2%,88%_8%,96%_22%,92%_88%,84%_98%,14%_94%,2%_78%)]"
          aria-hidden
        />

        <div className="bg-white p-2 pb-8 shadow-[0_14px_28px_rgba(0,0,0,0.32)]">
          <div className="relative aspect-square w-full overflow-hidden bg-neutral-300">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="168px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-4 top-[56%] bottom-4 z-30 flex flex-col justify-end font-mono text-[9px] leading-[1.7] text-[#e8ddd4] lowercase">
        <p className="text-[#f3ebe3]">{ritual}</p>
        <p className="mt-1.5 text-[#faf5ef]">{headline}</p>
        <p className="mt-1.5">{body}</p>
        <p className="mt-2 text-[#d9cfc4]">{footer}</p>
      </div>
    </div>
  ),
);

SlowLivingPolaroidCard.displayName = "SlowLivingPolaroidCard";
