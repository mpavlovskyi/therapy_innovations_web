"use client";

import Image from "next/image";
import { useState } from "react";
import { TeamMember } from "@/types";

const roleBadges: Record<string, string> = {
  "Quinn Niego": "/icons/founder-badge.svg",
  "Michael Pavlovskyi": "/icons/managing-partner-badge.svg",
};

export function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = member.photo && !imgError;
  const badge = roleBadges[member.name];

  return (
    <div className="group rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-[#E8DFD0]">
      {/* Photo area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 380 }}
      >
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
          <div className="absolute inset-0 bg-[#E8E4DC] flex items-center justify-center">
            <span className="text-5xl font-bold font-[family-name:var(--font-heading)] text-[#B5AFA5]">
              {member.initials}
            </span>
          </div>
        )}
        {/* Role badge */}
        {badge && (
          <div className="absolute top-3 right-3 z-10">
            <Image src={badge} width={48} height={48} alt={`${member.name} role`} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A]">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[#E8813A]">
          {member.role}
        </p>

        {/* Pull quote */}
        {member.pullQuote && (
          <blockquote className="mt-5 pl-4 border-l-3 border-[#E8813A]">
            <p className="text-[15px] italic text-[#3D3D3D] leading-relaxed font-[family-name:var(--font-heading)]">
              &ldquo;{member.pullQuote}&rdquo;
            </p>
          </blockquote>
        )}

        <p className="mt-5 text-[14px] text-[#5A5A5A] leading-relaxed">
          {member.bio}
        </p>

        {/* Credential tags */}
        {member.credentials && member.credentials.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.credentials.map((cred) => (
              <span
                key={cred}
                className="inline-flex items-center rounded-full bg-[#F0EDE7] text-[#5C5248] text-xs px-2.5 py-1"
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
