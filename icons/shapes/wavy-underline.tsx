import { IconProps } from "@/types/types";

export const WavyUnderline = ({
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 140 14"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2,8 C12,2 17,12 27,7 C37,2 43,12 53,6 C63,1 70,11 80,6
           C90,1 96,11 106,6 C114,2 122,10 132,5"
      stroke={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      fill="none"
      filter="url(#hd-rough-soft)"
    />
  </svg>
);
