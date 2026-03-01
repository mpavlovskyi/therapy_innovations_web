"use client";

import { useState } from "react";
import Image from "next/image";
import { companies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section className="bg-[#F9F6F0] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Portfolio"
          subtitle="Seven companies. One mission. Advancing ABA therapy through technology, media, and community."
          align="center"
        />

        {/* Category filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.key
                  ? "bg-[#1A2E1A] text-white shadow-md"
                  : "bg-white border border-[#E8DFD0] text-[#5A5A5A] hover:border-[#C5B9A8] hover:text-[#1A1A1A]"
              }`}
            >
              {activeCategory === cat.key && (
                <Image src="/icons/filter-active-indicator.svg" width={12} height={12} alt="" />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
