import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Mail } from "@/icons/Mail";
import { Phone } from "@/icons/Phone";
import { Location } from "@/icons/Location";
import { Clock } from "@/icons/Clock";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type ContactItem = {
  label: string;
  value: string;
  icon: ReactNode;
};

export type ContactInfoCardProps = {
  title?: string;

  description?: string;

  contacts?: ContactItem[];

  actionLabel?: string;

  onActionClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultContacts: ContactItem[] = [
  {
    label: "Email",
    value: "hello@appui.dev",
    icon: <Mail size={15} className="text-neutral-600" />,
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    icon: <Phone size={15} className="text-neutral-600" />,
  },
  {
    label: "Office",
    value: "Kolkata, West Bengal",
    icon: <Location size={15} className="text-neutral-600" />,
  },
  {
    label: "Hours",
    value: "Mon–Fri, 9AM–6PM IST",
    icon: <Clock size={15} className="text-neutral-600" />,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Contact Info Card                             */
/* -------------------------------------------------------------------------- */

export const ContactInfoCard = forwardRef<HTMLDivElement, ContactInfoCardProps>(
  (
    {
      className,

      title = "Get in Touch",

      description = "We'd love to hear from you",

      contacts = defaultContacts,

      actionLabel = "Send Message",

      onActionClick,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="contact-info-card"
      className={cn(
        "w-72 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* ---------------------------------------------------------------------- */}
      {/* Header                                                                 */}
      {/* ---------------------------------------------------------------------- */}

      <div data-slot="contact-info-card-header">
        <h4 className="mb-1 text-sm font-semibold text-neutral-900">{title}</h4>

        <p className="mb-4 text-[11px] text-neutral-500">{description}</p>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Contact List                                                           */}
      {/* ---------------------------------------------------------------------- */}

      <div data-slot="contact-info-card-list" className="space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            data-slot="contact-info-card-item"
            className="flex items-center gap-3"
          >
            <div
              data-slot="contact-info-card-icon"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100"
            >
              {contact.icon}
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                {contact.label}
              </p>

              <p className="mt-0.5 text-xs font-medium text-neutral-800">
                {contact.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Footer                                                                 */}
      {/* ---------------------------------------------------------------------- */}

      <button
        type="button"
        data-slot="contact-info-card-action"
        onClick={onActionClick}
        className="mt-4 h-9 w-full cursor-pointer rounded-lg bg-neutral-900 text-xs font-medium text-white transition-colors hover:bg-neutral-950"
      >
        {actionLabel}
      </button>
    </div>
  ),
);

ContactInfoCard.displayName = "ContactInfoCard";
