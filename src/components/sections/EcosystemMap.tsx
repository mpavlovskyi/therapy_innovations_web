"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const nodes = [
  {
    name: "Free ABA Job Listings",
    slug: "free-aba-job-listings",
    problem: "ABA hiring is broken",
    accent: "#0D9488",
    logo: "/images/companies/free-aba-job-listings.png",
    initials: "AJ",
  },
  {
    name: "Nitro Evals",
    slug: "nitro-evals",
    problem: "Report writing steals 6+ hours per week",
    accent: "#1E3A5F",
    logo: "/images/companies/nitro-evals.png",
    initials: "NE",
  },
  {
    name: "EvidentABA",
    slug: "evident-aba",
    problem: "Session fraud costs Medicaid $25M+",
    accent: "#2563EB",
    logo: "/images/companies/evident-aba.png",
    initials: "EA",
  },
  {
    name: "Breaking News ABA",
    slug: "breaking-news-aba",
    problem: "No dedicated ABA news source",
    accent: "#DC2626",
    logo: "/images/companies/breaking-news-aba.png",
    initials: "BN",
  },
  {
    name: "Therapy Materials Vault",
    slug: "therapy-materials-vault",
    problem: "Therapists build materials from scratch",
    accent: "#7C3AED",
    logo: "/images/companies/therapy-materials-vault.png",
    initials: "TV",
  },
  {
    name: "Therapy Volunteers",
    slug: "therapy-volunteers",
    problem: "Students can\u2019t afford clinical experience",
    accent: "#E8813A",
    logo: "/images/companies/therapy-volunteers.png",
    initials: "TV",
  },
];

export function EcosystemMap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#1A2E1A] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-white">
              One Ecosystem. Every Stage of ABA.
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Our companies don&apos;t exist in isolation &mdash; they&apos;re
              designed to support ABA professionals at every stage of their
              career and every challenge in their practice.
            </p>
          </div>
        </ScrollReveal>

        {/* Hub-and-spoke diagram */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-8">
            <Image src="/icons/ecosystem-diagram.svg" width={200} height={200} alt="" aria-hidden />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* Node row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-0 md:flex-nowrap items-start">
            {nodes.map((node, i) => (
              <div key={node.slug} className="flex items-center">
                {/* Node */}
                <div
                  className="group relative flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Circle node */}
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white/5"
                    style={{
                      borderColor:
                        hovered === i ? node.accent : "rgba(255,255,255,0.15)",
                      boxShadow:
                        hovered === i
                          ? `0 0 20px ${node.accent}40`
                          : "none",
                    }}
                  >
                    {node.logo ? (
                      <Image
                        src={node.logo}
                        alt={node.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain rounded-lg"
                      />
                    ) : (
                      <span
                        className="text-sm font-bold"
                        style={{ color: node.accent }}
                      >
                        {node.initials}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <span className="mt-3 text-xs text-white/70 font-medium text-center max-w-[100px] leading-tight">
                    {node.name}
                  </span>

                  {/* Tooltip */}
                  {hovered === i && (
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-[#1A1A1A] text-xs font-medium px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-20">
                      {node.problem}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>
                  )}
                </div>

                {/* Connector */}
                {i < nodes.length - 1 && (
                  <div className="hidden md:block mx-2">
                    <svg width="40" height="12" viewBox="0 0 40 12">
                      <line
                        x1="0"
                        y1="6"
                        x2="32"
                        y2="6"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        className="dash-animate"
                      />
                      <path
                        d="M30 2 L38 6 L30 10"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
