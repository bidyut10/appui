import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { CreditCard } from "@/icons/CreditCard";
import { Location } from "@/icons/Location";

/**
 * Checkout Stepper Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type CheckoutStep = {
  id: string;
  label: string;
  icon: ReactNode;
  status: "done" | "active" | "pending";
};

export type CheckoutStepperCardProps = {
  steps?: CheckoutStep[];
  orderTotal?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultSteps: CheckoutStep[] = [
  { id: "cart", label: "Cart", icon: <Check size={12} />, status: "done" },
  {
    id: "shipping",
    label: "Shipping",
    icon: <Location size={12} />,
    status: "active",
  },
  {
    id: "payment",
    label: "Payment",
    icon: <CreditCard size={12} />,
    status: "pending",
  },
];

export const CheckoutStepperCard = forwardRef<
  HTMLDivElement,
  CheckoutStepperCardProps
>(
  (
    {
      className,
      steps = defaultSteps,
      orderTotal = "₹2,120",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="checkout-stepper-card"
      className={cn(
        "w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-5 flex items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-white",
                  step.status === "done" && "bg-teal-500",
                  step.status === "active" &&
                    "bg-neutral-900 ring-4 ring-neutral-100",
                  step.status === "pending" &&
                    "border-2 border-neutral-200 bg-white text-neutral-400",
                )}
              >
                {step.status === "pending" ? (
                  <span className="text-[10px] font-bold">{index + 1}</span>
                ) : (
                  step.icon
                )}
              </div>
              <span
                className={cn(
                  "mt-1.5 text-[10px] font-medium",
                  step.status === "active"
                    ? "text-neutral-900"
                    : step.status === "done"
                      ? "text-teal-600"
                      : "text-neutral-400",
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-1 mb-5 h-0.5 flex-1",
                  step.status === "done" ? "bg-teal-300" : "bg-neutral-200",
                )}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3">
        <span className="text-[13px] text-neutral-600">Order total</span>
        <span className="text-lg font-bold text-neutral-900">{orderTotal}</span>
      </div>
    </div>
  ),
);

CheckoutStepperCard.displayName = "CheckoutStepperCard";
