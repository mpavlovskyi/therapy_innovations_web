import Link from "next/link";
import Image from "next/image";
import { Company } from "@/types";

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Link href={`/portfolio/${company.slug}`} className="group block h-full">
      <article className="border border-[#E5E5E5] bg-white p-7 h-full flex flex-col card-hover">
        <div className="flex items-center gap-3 mb-4">
          {company.logo ? (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
          ) : (
            <div className="h-9 w-9 bg-[#F4F4F2] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
              {company.iconInitials}
            </div>
          )}
          <span className="text-[11px] font-medium text-[#6B6B6B] uppercase tracking-wider">
            {company.displayCategory}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0F0F0F]">{company.name}</h3>

        <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed flex-1">
          {company.shortDescription}
        </p>

        <div className="mt-5 pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="text-xs font-medium text-[#6B6B6B]">
            {company.statBadge}
          </span>
          <span className="text-sm font-medium text-[#0F0F0F] group-hover:underline">
            Learn more &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
