import Link from "next/link";

import { House } from "@/icons/elements/house";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16 selection:bg-neutral-800 selection:text-white sm:px-6">
      <div className="w-full max-w-xl">
        <p className="font-mono text-xs tracking-[0.18em] text-neutral-400 uppercase">
          404
        </p>

        <h1 className="mt-4 font-serif text-2xl font-medium text-neutral-900 md:text-3xl">
          Page not found
        </h1>

        <p className="mt-3 max-w-md font-serif text-base leading-relaxed text-neutral-500 md:text-lg md:leading-9">
          The page you are looking for does not exist, or it may have been
          moved.
        </p>

        <div className="mt-10 border-t border-neutral-100 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neutral-900 px-5 py-2.5 font-mono text-xs text-white transition-colors hover:bg-neutral-800"
          >
            <House size={12} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
