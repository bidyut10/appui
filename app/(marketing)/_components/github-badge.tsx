
import { Star } from "lucide-react";
import Link from "next/link";

const REPO_OWNER = "bidyut10";
const REPO_NAME = "opensourceui";

async function getGitHubStars() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`,
      {
        next: {
          revalidate: 3600, // 1 hour
        },
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch GitHub stars");
    }

    const data: { stargazers_count: number } = await res.json();

    return data.stargazers_count;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function GitHubBadge() {
  const stars = await getGitHubStars();

  return (
    <Link
      href={`https://github.com/${REPO_OWNER}/${REPO_NAME}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-8 items-center overflow-hidden rounded-full border border-neutral-100/80 bg-white shadow-sm transition-all duration-300 hover:border-neutral-100 hover:shadow-md"
    >
      <div className="flex items-center gap-2 pr-1 pl-3">
        <Star
          className="h-3 w-3 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          strokeWidth={2.2}
        />

        <span className="font-mono text-xs text-neutral-700">Star</span>
      </div>

      <div className="h-7 w-px bg-neutral-100" />

      <div className="pr-3 pl-1">
        <span className="font-mono text-xs text-neutral-500">
          {stars?.toLocaleString() ?? "--"}
        </span>
      </div>
    </Link>
  );
}
