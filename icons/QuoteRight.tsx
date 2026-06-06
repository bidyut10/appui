import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const QuoteRight = ({
  size = 16,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className={className}
    {...props}
  >
    <path d="M3 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1H3zM15 14h2.85c-.27 1.02-1.01 2.51-3.1 3.03l-.76.19V20h1c2.78 0 4.91-.77 6.31-2.29 1.89-2.05 1.7-4.68 1.69-4.71V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2Zm0-8h6v7.08s.12 1.9-1.18 3.29c-.48.52-1.11.91-1.87 1.19 1.56-1.42 2.04-3.4 2.04-4.56v-1h-5V6Z" />
  </svg>
);
