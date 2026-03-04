import { getRelatedCompanies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";

export function RelatedCompanies({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedCompanies(currentSlug, 3);

  return (
    <section className="bg-[#FAFAF8] py-16 border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#6B6B6B] mb-4">
          More from our portfolio
        </p>
        <h2 className="text-2xl font-bold text-[#0F0F0F] mb-10">
          Other companies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((company) => (
            <CompanyCard key={company.slug} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
