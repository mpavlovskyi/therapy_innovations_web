"use client";

import Image from "next/image";
import { useState } from "react";
import { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = member.photo && !imgError;

  return (
    <div className="group border border-[#E5E5E5] bg-white overflow-hidden">
      {/* Photo */}
      <div className="relative w-full overflow-hidden" style={{ height: 360 }}>
        {showPhoto ? (
          <Image
            src={member.photo!}
            alt={member.photoAlt || member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-[#F4F4F2] flex items-center justify-center">
            <span className="text-5xl font-black text-[#6B6B6B]">
              {member.initials}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-[#0F0F0F]">{member.name}</h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[#6B6B6B]">
          {member.role}
        </p>

        {member.pullQuote && (
          <div className="mt-5 flex gap-3">
            <div className="w-0.5 shrink-0 bg-[#E5E5E5]" />
            <p className="text-[15px] italic text-[#6B6B6B] leading-relaxed">
              &ldquo;{member.pullQuote}&rdquo;
            </p>
          </div>
        )}

        <p className="mt-5 text-sm text-[#6B6B6B] leading-relaxed">
          {member.bio}
        </p>

        {member.credentials && member.credentials.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.credentials.map((cred) => (
              <span
                key={cred}
                className="inline-flex items-center bg-[#F4F4F2] text-[#6B6B6B] text-xs px-2.5 py-1 font-medium"
              >
                {cred}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
