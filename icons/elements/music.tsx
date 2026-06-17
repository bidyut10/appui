import { IconProps } from "@/types/types";

export const Music = ({
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
    <path d="M21 3H9c-.55 0-1 .45-1 1v9.56c-.59-.34-1.27-.56-2-.56-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V5h10v8.56c-.59-.34-1.27-.56-2-.56-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V4c0-.55-.45-1-1-1M6 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m12 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
  </svg>
);
