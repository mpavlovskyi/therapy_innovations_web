import Link from "next/link";
import Image from "next/image";
import { companies } from "@/data/companies";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PortfolioGrid() {
  return (
    <section className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight">
              Portfolio
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company) => (
            <ScrollReveal key={company.slug}>
              <Link
                href={`/portfolio/${company.slug}`}
                className="group block h-full"
              >
                <article className="border border-[#E5E5E5] bg-white p-8 h-full flex flex-col card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    {company.logo ? (
                      <Image
                        src={company.logo}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      <div className="h-8 w-8 bg-[#F4F4F2] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
                        {company.iconInitials}
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-[#0F0F0F]">
                      {company.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">
                    {company.shortDescription}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                    <span className="text-xs font-medium text-[#6B6B6B]">
                      {company.statBadge}
                    </span>
                    <span className="text-sm font-medium text-[#0F0F0F] group-hover:underline">
                      Visit &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
