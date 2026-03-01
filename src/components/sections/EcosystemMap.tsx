"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const nodes = [
  {
    name: "Free ABA Job Listings",
    slug: "free-aba-job-listings",
    problem: "ABA hiring is broken",
    color: "#047857",
    bg: "#ECFDF5",
    logo: "/images/companies/free-aba-job-listings.png",
    initials: "AJ",
  },
  {
    name: "Nitro Evals",
    slug: "nitro-evals",
    problem: "Report writing steals 6+ hours per week",
    color: "#6D28D9",
    bg: "#F5F3FF",
    logo: "/images/companies/nitro-evals.png",
    initials: "NE",
  },
  {
    name: "EvidentABA",
    slug: "evident-aba",
    problem: "Session fraud costs Medicaid $25M+",
    color: "#6D28D9",
    bg: "#F5F3FF",
    logo: "/images/companies/evident-aba.png",
    initials: "EA",
  },
  {
    name: "Breaking News ABA",
    slug: "breaking-news-aba",
    problem: "No dedicated ABA news source",
    color: "#BE123C",
    bg: "#FFF1F2",
    logo: "/images/companies/breaking-news-aba.png",
    initials: "BN",
  },
  {
    name: "Therapy Materials Vault",
    slug: "therapy-materials-vault",
    problem: "Therapists build materials from scratch",
    color: "#047857",
    bg: "#ECFDF5",
    logo: "/images/companies/therapy-materials-vault.png",
    initials: "TV",
  },
  {
    name: "Therapy Volunteers",
    slug: "therapy-volunteers",
    problem: "Students can\u2019t afford clinical experience",
    color: "#C2410C",
    bg: "#FFF7ED",
    logo: "/images/companies/therapy-volunteers.png",
    initials: "TV",
  },
];

export function EcosystemMap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#0C0C0C] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
              The ecosystem
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              One ecosystem. Every stage of ABA.
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Our companies don&apos;t exist in isolation — they support ABA
              professionals at every stage of their career.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nodes.map((node, i) => (
              <Link
                key={node.slug}
                href={`/portfolio/${node.slug}`}
                className="group relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: hovered === i ? node.bg : "rgba(255,255,255,0.04)",
                  border: hovered === i ? `1px solid ${node.color}30` : "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: hovered === i ? "white" : "rgba(255,255,255,0.06)",
                  }}
                >
                  {node.logo ? (
                    <Image
                      src={node.logo}
                      alt={node.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain rounded-lg"
                    />
                  ) : (
                    <span
                      className="text-sm font-bold"
                      style={{ color: hovered === i ? node.color : "rgba(255,255,255,0.5)" }}
                    >
                      {node.initials}
                    </span>
                  )}
                </div>

                <span
                  className="mt-3 text-xs font-medium text-center leading-tight transition-colors duration-300"
                  style={{ color: hovered === i ? node.color : "rgba(255,255,255,0.5)" }}
                >
                  {node.name}
                </span>

                {hovered === i && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-[#191919] text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-20">
                    {node.problem}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
