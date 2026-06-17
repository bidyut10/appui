import { IconProps } from "@/types/types";

export const Camera = ({
  size = 14,
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
    <path d="M12 8c-2.17 0-4 1.83-4 4s1.83 4 4 4 4-1.83 4-4-1.83-4-4-4m0 6c-1.07 0-2-.93-2-2s.93-2 2-2 2 .93 2 2-.93 2-2 2" />
    <path d="M20 5h-2.59L14.7 2.29a1 1 0 0 0-.71-.29h-4c-.27 0-.52.11-.71.29L6.57 5H3.98c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 13H4V7h3c.27 0 .52-.11.71-.29L10.42 4h3.17l2.71 2.71c.19.19.44.29.71.29h3v11Z" />
  </svg>
);
