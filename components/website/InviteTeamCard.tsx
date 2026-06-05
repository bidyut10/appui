"use client";
import React, { useState } from "react";
import { UserGroup } from "@/icons/UserGroup";
import { Mail } from "@/icons/Mail";

export const InviteTeamCard = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-5 font-sans">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
          <UserGroup size={18} className="text-violet-600" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Invite Team</h4>
          <p className="text-[11px] text-neutral-400">3 of 5 seats used</p>
        </div>
      </div>
      <div className="flex -space-x-2 mb-4">
        {["JD", "SK", "MR"].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
            {i}
          </div>
        ))}
        <div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] text-neutral-400">+2</div>
      </div>
      {sent ? (
        <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-700 font-medium text-center">
          Invitation sent to {email}
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="colleague@company.com"
              className="w-full h-9 pl-9 pr-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all" />
          </div>
          <button onClick={() => email && setSent(true)} className="h-9 px-3 bg-neutral-900 text-white text-xs font-medium rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer shrink-0">
            Invite
          </button>
        </div>
      )}
      <select className="w-full mt-2 h-8 px-3 rounded-xl border border-neutral-200 bg-neutral-50 text-[11px] text-neutral-600 outline-none cursor-pointer">
        <option>Member</option>
        <option>Admin</option>
        <option>Viewer</option>
      </select>
    </div>
  );
};
