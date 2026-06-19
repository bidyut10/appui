import { IconProps } from "@/types/types";

import { cn } from "@/lib/cn";

const CURVE_END = { x: 58.5, y: 17.5 };
const TIP = { x: 71.5, y: 12 };
const BASE_HALF = 3.25;

const dx = TIP.x - CURVE_END.x;
const dy = TIP.y - CURVE_END.y;
const len = Math.hypot(dx, dy);
const ux = dx / len;
const uy = dy / len;
const px = -uy;
const py = ux;

const baseLeft = {
  x: CURVE_END.x + px * BASE_HALF,
  y: CURVE_END.y + py * BASE_HALF,
};
const baseRight = {
  x: CURVE_END.x - px * BASE_HALF,
  y: CURVE_END.y - py * BASE_HALF,
};

export const LoopArrow = ({
  size,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 88 56"
    fill="none"
    overflow="visible"
    width={size}
    height={size}
    className={cn("shrink-0 overflow-visible", className)}
    {...props}
  >
    <path
      d={`M 6 44 C 24 42, 44 24, ${CURVE_END.x} ${CURVE_END.y}`}
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeDasharray="3 2.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d={`M ${TIP.x} ${TIP.y} L ${baseLeft.x} ${baseLeft.y} L ${baseRight.x} ${baseRight.y} Z`}
      fill={color}
    />
  </svg>
);
