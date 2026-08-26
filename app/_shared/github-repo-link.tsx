"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Star } from "lucide-react";

import { Github } from "@/icons/brands/github";
import { siteConfig } from "@/lib/site";

const REPO_OWNER = "bidyut10";
const REPO_NAME = "opensourceui";

export function GithubRepoLink() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadStars() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          },
        );

        if (!res.ok) return;

        const data: { stargazers_count: number } = await res.json();
        if (!cancelled) setStars(data.stargazers_count);
      } catch {
        if (!cancelled) setStars(null);
      }
    }

    void loadStars();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Link
      href={siteConfig.github.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        stars === null
          ? "View GitHub repository"
          : `View GitHub repository, ${stars.toLocaleString()} stars`
      }
      className="group inline-flex h-8 items-center overflow-hidden rounded-lg border border-neutral-100 bg-white transition-colors hover:border-neutral-100 hover:bg-neutral-50"
    >
      <span className="flex items-center gap-1.5 px-2.5 font-sans text-xs font-medium text-neutral-700">
        <Github size={14} className="text-neutral-800" aria-hidden />
        GitHub
      </span>

      <span aria-hidden className="h-4 w-px bg-neutral-200" />

      <span className="flex min-w-11 items-center justify-center gap-1 px-2.5 font-mono text-xs text-neutral-500 tabular-nums">
        <Star
          className="size-3 fill-amber-400 text-amber-400"
          strokeWidth={2}
          aria-hidden
        />
        {stars?.toLocaleString() ?? "—"}
      </span>
    </Link>
  );
}
