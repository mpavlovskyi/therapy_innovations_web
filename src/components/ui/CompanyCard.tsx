import Link from "next/link";
import Image from "next/image";
import { Company } from "@/types";

export function CompanyCard({ company }: { company: Company }) {
  const isFeatured = company.featured === true;

  if (isFeatured) {
    return (
      <article className="group relative rounded-xl bg-white border border-[#E8DFD0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#C5B9A8] ring-1 ring-[#E8722A]/20">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#1E3320] via-[#E8722A] to-[#1E3320]" />

        <Link href={`/portfolio/${company.slug}`} className="relative z-10 block p-8">
          {/* Top row: logo + badges */}
          <div className="flex items-center gap-3 mb-5">
            {company.logo ? (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-lg"
              />
            ) : (
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: company.color }}
              >
                {company.iconInitials}
              </div>
            )}
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8722A]/10 text-[#E8722A]">
              {company.displayCategory}
            </span>
            <span className="bg-[#E8722A] text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 ml-auto">
              ⭐ Featured
            </span>
          </div>

          {/* Content grid */}
          <div className="md:flex md:gap-10 md:items-center">
            <div className="md:flex-1">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A]">
                {company.name}
              </h3>
              <p className="mt-2 text-xs text-[#8A8A8A] italic">
                The problem: {company.problem}
              </p>
              <p className="mt-3 text-sm text-[#5A5A5A] leading-relaxed">
                {company.expandedDescription}
              </p>
            </div>

            {/* Stat + CTA column */}
            <div className="mt-6 md:mt-0 md:flex-shrink-0 flex md:flex-col items-center md:items-center gap-4 md:gap-3 md:px-8 md:py-6 md:rounded-xl md:bg-[#F9F6F0] md:border md:border-[#E8DFD0]">
              <p className="text-2xl md:text-3xl font-bold text-[#1E3320] leading-tight text-center whitespace-nowrap">
                80,000+
              </p>
              <p className="text-xs text-[#8A8A8A] font-medium uppercase tracking-wider text-center">
                all-time users
              </p>
              <span className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all duration-200 text-[#E8722A] mt-1">
                Learn More
                <Image src="/icons/cta-arrow.svg" width={20} height={20} alt="" />
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group relative rounded-xl bg-white border border-[#E8DFD0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#C5B9A8] h-full flex flex-col">
      {/* Left accent border — consistent orange for all */}
      <div className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all duration-300 rounded-l-xl bg-[#E8722A]" />

      {/* Hover background wash */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 bg-[#E8722A]" />

      <Link
        href={`/portfolio/${company.slug}`}
        className="relative z-10 block p-6 pl-7 flex-1 flex flex-col"
      >
        {/* Logo + category row */}
        <div className="flex items-center gap-3 mb-4">
          {company.logo ? (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-lg"
            />
          ) : (
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: company.color }}
            >
              {company.iconInitials}
            </div>
          )}
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full inline-flex items-center gap-1 bg-[#1E3320]/8 text-[#1E3320]">
            {company.displayCategory === "Clinical Tools" && (
              <Image src="/icons/clinical-tools-icon.svg" width={14} height={14} alt="" className="opacity-70" />
            )}
            {company.displayCategory}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1A1A1A]">
          {company.name}
        </h3>

        {/* Problem statement */}
        <p className="mt-2 text-xs text-[#8A8A8A] italic">
          The problem: {company.problem}
        </p>

        {/* Expanded description */}
        <p className="mt-3 text-sm text-[#5A5A5A] leading-relaxed line-clamp-3 flex-1">
          {company.expandedDescription}
        </p>

        {/* Stat badge + CTA — consistent styling */}
        <div className="mt-5 pt-4 border-t border-[#E8DFD0]/60 flex items-center justify-between">
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1E3320]/8 text-[#1E3320]">
            {company.statBadge}
          </span>

          <span className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all duration-200 text-[#E8722A]">
            Learn More
            <Image src="/icons/cta-arrow.svg" width={20} height={20} alt="" />
          </span>
        </div>
      </Link>
    </article>
  );
}
