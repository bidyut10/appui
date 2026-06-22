import { IconProps } from "@/types/types";

export const CircleScribble = ({
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 220 64"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M40,40 C20,23 53,7 102,5 C153,3 207,11 211,29 C215,47 167,60 109,60
           C59,60 15,53 19,35 C21,27 27,22 37,20"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      fill="none"
      filter="url(#hd-rough)"
    />
    <path
      d="M43,37 C28,25 58,9 105,7 C151,6 199,14 206,29 C212,45 167,57 110,58"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      fill="none"
      opacity={0.55}
      filter="url(#hd-rough-soft)"
    />
  </svg>
);
