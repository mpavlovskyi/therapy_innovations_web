"use client";

import { useState } from "react";
import { companies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categories = [
  { key: "all", label: "All" },
  { key: "fieldwork", label: "Fieldwork Tracking" },
  { key: "saas", label: "Clinical Tools" },
  { key: "media", label: "Industry News" },
  { key: "marketplace", label: "Resources & Hiring" },
  { key: "nonprofit", label: "Community" },
] as const;

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? companies
      : companies.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
              Our portfolio
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#191919]">
              Seven companies. One mission.
            </h2>
            <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
              Advancing ABA therapy through technology, media, and community.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter chips */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-[#191919] text-white shadow-md"
                    : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#D1D5DB] hover:text-[#191919]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((company) => (
            <div
              key={company.slug}
              className={company.featured ? "md:col-span-2 lg:col-span-3" : ""}
            >
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
