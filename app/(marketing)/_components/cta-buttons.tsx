import Image from "next/image";
import Link from "next/link";

import { ChevronRight, MoveRight } from "lucide-react";
import { mailtoLinks } from "@/lib/site";

export function CtaButtons() {
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-4">
      <Link
        href="/components"
        className="group flex cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-900 bg-neutral-800 px-4 py-2 text-base font-light text-white shadow-xl shadow-neutral-300/50"
      >
        Browse Components
        <span className="relative inline-flex size-3.5 shrink-0 items-center justify-center">
          <ChevronRight
            size={14}
            strokeWidth={3}
            className="transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
          />
          <MoveRight
            size={14}
            strokeWidth={2.5}
            className="absolute scale-95 -translate-x-0.5 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
          />
        </span>
      </Link>
      <a
        href={mailtoLinks.work}
        className="group flex cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-800 bg-white px-4 py-2 text-base text-neutral-800"
      >
        <span className="inline-flex origin-[70%_90%] transition-transform duration-500 ease-smooth group-hover:-rotate-12">
          <Image
            src="/waving-hand.png"
            alt=""
            width={512}
            height={512}
            quality={100}
            className="size-4.5"
          />
        </span>
        Work With Me
      </a>
    </div>
  );
}
