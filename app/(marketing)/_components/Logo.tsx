import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FB7185"
      role="img"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>OpenSourceUI</title>
      <title>OpenSourceUI</title>
      {/* four rounded shards rotating around center, 90° apart */}
      <path d="M12 2c-2.2 0-4 1.8-4 4 0 1.1.45 2.1 1.17 2.83L12 12l2.83-3.17A3.98 3.98 0 0 0 16 6c0-2.2-1.8-4-4-4z" />
      <path d="M22 12c0-2.2-1.8-4-4-4-1.1 0-2.1.45-2.83 1.17L12 12l3.17 2.83A3.98 3.98 0 0 0 18 16c2.2 0 4-1.8 4-4z" />
      <path d="M12 22c2.2 0 4-1.8 4-4 0-1.1-.45-2.1-1.17-2.83L12 12l-2.83 3.17A3.98 3.98 0 0 0 8 18c0 2.2 1.8 4 4 4z" />
      <path d="M2 12c0 2.2 1.8 4 4 4 1.1 0 2.1-.45 2.83-1.17L12 12 8.83 9.17A3.98 3.98 0 0 0 6 8c-2.2 0-4 1.8-4 4z" />
      <circle cx="12" cy="12" r="2.4" fill="#fff" />
    </svg>
  );
}
