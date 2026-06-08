"use client";

import React, { useState } from "react";
import { UserGroup } from "@/icons/UserGroup";
import { Mail } from "@/icons/Mail";
import { ChevronUp } from "@/icons/ChevronUp";
import { ChevronDown } from "@/icons/ChevronDown";

export const InviteTeamCard = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const [role, setRole] = useState("Member");
  const [openRole, setOpenRole] = useState(false);

  return (
    <div className="w-84 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-50">
          <UserGroup size={18} className="text-neutral-600" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-900">
            Invite Team
          </h4>

          <p className="text-[11px] text-neutral-400">3 of 5 seats used</p>
        </div>
      </div>

      <div className="mb-4 flex -space-x-2">
        {["JD", "SK", "MR"].map((i) => (
          <div
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-green-500 to-cyan-500 text-[9px] font-bold text-white"
          >
            {i}
          </div>
        ))}

        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] text-neutral-400">
          +2
        </div>
      </div>

      {sent ? (
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-center text-xs font-medium text-emerald-700">
          Invitation sent to {email}
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail
              size={13}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@company.com"
              className="h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 pr-3 pl-9 text-xs transition-all outline-none focus:border-neutral-300"
            />
          </div>

          <button
            onClick={() => email && setSent(true)}
            className="h-9 shrink-0 cursor-pointer rounded-lg bg-neutral-900 px-3 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Invite
          </button>
        </div>
      )}

      <div className="relative mt-2">
        <button
          onClick={() => setOpenRole((v) => !v)}
          className="flex h-8 w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-[11px] text-neutral-600 transition-colors hover:bg-neutral-100"
        >
          <span>{role}</span>

          {openRole ? (
            <ChevronUp size={12} className="text-neutral-400" />
          ) : (
            <ChevronDown size={12} className="text-neutral-400" />
          )}
        </button>

        {openRole && (
          <div className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-xl border border-neutral-700/80 bg-neutral-900 shadow-2xl">
            {["Member", "Admin", "Viewer"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setRole(item);
                  setOpenRole(false);
                }}
                className={`w-full cursor-pointer px-3 py-2.5 text-left text-[11px] font-medium transition-colors ${
                  role === item
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
