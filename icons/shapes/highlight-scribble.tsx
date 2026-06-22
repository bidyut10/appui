import { IconProps } from "@/types/types";

export const HighlightScribble = ({
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 170 26"
    preserveAspectRatio="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M4,17 C2,11 5,7 12,6 C45,2 95,2 138,4 C152,5 164,7 166,13
           C167,18 163,21 155,22 C112,24 60,24 16,22 C8,21.5 4,20 4,17 Z"
      fill={color}
      filter="url(#hd-rough-soft)"
    />
  </svg>
);
