import Link from "next/link";
import Image from "next/image";
import { Company } from "@/types";

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  fieldwork: { bg: "#EBF5FF", text: "#1E60A8", badge: "#DBEAFE" },
  saas: { bg: "#F5F3FF", text: "#6D28D9", badge: "#EDE9FE" },
  media: { bg: "#FFF1F2", text: "#BE123C", badge: "#FFE4E6" },
  marketplace: { bg: "#ECFDF5", text: "#047857", badge: "#D1FAE5" },
  nonprofit: { bg: "#FFF7ED", text: "#C2410C", badge: "#FFEDD5" },
};

export function CompanyCard({ company }: { company: Company }) {
  const isFeatured = company.featured === true;
  const colors = categoryColors[company.category] || categoryColors.saas;

  if (isFeatured) {
    return (
      <Link href={`/portfolio/${company.slug}`} className="group block">
        <article
          className="relative rounded-3xl overflow-hidden p-8 md:p-10 card-hover"
          style={{ backgroundColor: colors.bg }}
        >
          {/* Top row */}
          <div className="flex items-center gap-3 mb-6">
            {company.logo ? (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-xl bg-white/80 p-1"
              />
            ) : (
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: colors.text }}
              >
                {company.iconInitials}
              </div>
            )}
            <span
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ backgroundColor: colors.badge, color: colors.text }}
            >
              {company.displayCategory}
            </span>
            <span className="ml-auto text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8722A] text-white">
              Featured
            </span>
          </div>

          {/* Content grid */}
          <div className="md:flex md:gap-12 md:items-start">
            <div className="md:flex-1">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>
                {company.name}
              </h3>
              <p className="mt-2 text-sm opacity-60" style={{ color: colors.text }}>
                {company.problem}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed opacity-80" style={{ color: colors.text }}>
                {company.expandedDescription}
              </p>
            </div>

            {/* Stat column */}
            <div className="mt-6 md:mt-0 md:shrink-0 flex md:flex-col items-center gap-4 md:gap-2 md:p-6 md:rounded-2xl md:bg-white/50">
              <p className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]" style={{ color: colors.text }}>
                80,000+
              </p>
              <p className="text-xs font-medium uppercase tracking-wider opacity-50" style={{ color: colors.text }}>
                all-time users
              </p>
              <span className="mt-2 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200" style={{ color: colors.text }}>
                Learn more →
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/portfolio/${company.slug}`} className="group block h-full">
      <article
        className="relative rounded-2xl overflow-hidden p-6 md:p-7 h-full flex flex-col card-hover"
        style={{ backgroundColor: colors.bg }}
      >
        {/* Logo + category */}
        <div className="flex items-center gap-3 mb-5">
          {company.logo ? (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-lg bg-white/80 p-0.5"
            />
          ) : (
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: colors.text }}
            >
              {company.iconInitials}
            </div>
          )}
          <span
            className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ backgroundColor: colors.badge, color: colors.text }}
          >
            {company.displayCategory}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold" style={{ color: colors.text }}>
          {company.name}
        </h3>

        {/* Problem */}
        <p className="mt-2 text-xs opacity-50" style={{ color: colors.text }}>
          {company.problem}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed opacity-70 line-clamp-3 flex-1" style={{ color: colors.text }}>
          {company.expandedDescription}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: `${colors.text}15` }}>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/60" style={{ color: colors.text }}>
            {company.statBadge}
          </span>
          <span className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200" style={{ color: colors.text }}>
            Learn more →
          </span>
        </div>
      </article>
    </Link>
  );
}
