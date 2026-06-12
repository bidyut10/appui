import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type TeamMemberLoad = {
  name: string;
  role: string;
  load: number;
  tasks: number;
};

export type TeamCapacityCardProps = {
  title?: string;
  avgLoad?: number;
  members?: TeamMemberLoad[];
} & ComponentPropsWithoutRef<"div">;

const defaultMembers: TeamMemberLoad[] = [
  { name: "Ananya", role: "Design", load: 78, tasks: 6 },
  { name: "Rohan", role: "Frontend", load: 92, tasks: 8 },
  { name: "Priya", role: "Backend", load: 54, tasks: 4 },
  { name: "Dev", role: "DevOps", load: 41, tasks: 3 },
];

export const TeamCapacityCard = forwardRef<
  HTMLDivElement,
  TeamCapacityCardProps
>(
  (
    {
      className,
      title = "Team capacity",
      avgLoad = 66,
      members = defaultMembers,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="team-capacity-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[11px] font-medium text-neutral-500">{title}</p>
        <span className="text-[12px] font-semibold text-neutral-700 tabular-nums">
          Avg {avgLoad}%
        </span>
      </div>

      <div className="space-y-3">
        {members.map((member) => (
          <div key={member.name}>
            <div className="mb-1 flex items-center justify-between">
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold text-neutral-900">
                  {member.name}
                </p>
                <p className="text-[10px] text-neutral-400">{member.role}</p>
              </div>
              <span className="shrink-0 text-[11px] text-neutral-500 tabular-nums">
                {member.tasks} tasks
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  member.load >= 85
                    ? "bg-rose-500"
                    : member.load >= 70
                      ? "bg-amber-500"
                      : "bg-teal-500",
                )}
                style={{ width: `${member.load}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

TeamCapacityCard.displayName = "TeamCapacityCard";
