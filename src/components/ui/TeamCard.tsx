"use client";

import Image from "next/image";
import { useState } from "react";
import { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = member.photo && !imgError;

  return (
    <div className="group rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] overflow-hidden card-hover">
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
          <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center">
            <span className="text-5xl font-bold font-[family-name:var(--font-heading)] text-[#9CA3AF]">
              {member.initials}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#191919]">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#E8722A]">
          {member.role}
        </p>

        {member.pullQuote && (
          <div className="mt-5 flex gap-3">
            <div className="w-0.5 shrink-0 rounded-full bg-[#E8722A]" />
            <p className="text-[15px] italic text-[#6B7280] leading-relaxed">
              &ldquo;{member.pullQuote}&rdquo;
            </p>
          </div>
        )}

        <p className="mt-5 text-sm text-[#6B7280] leading-relaxed">
          {member.bio}
        </p>

        {member.credentials && member.credentials.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.credentials.map((cred) => (
              <span
                key={cred}
                className="inline-flex items-center rounded-full bg-[#E5E7EB] text-[#6B7280] text-xs px-2.5 py-1 font-medium"
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
