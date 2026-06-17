import { IconProps } from "@/types/types";

export const SkipPrevious = ({
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
    <path d="M17.46 6.11c-.33-.17-.73-.14-1.04.08l-7 5c-.26.19-.42.49-.42.81s.16.63.42.81l7 5c.17.12.38.19.58.19.16 0 .31-.04.46-.11.33-.17.54-.51.54-.89V7c0-.37-.21-.72-.54-.89M16 15.06 11.72 12 16 8.94v6.11ZM6 6h2v12H6z" />
  </svg>
);
