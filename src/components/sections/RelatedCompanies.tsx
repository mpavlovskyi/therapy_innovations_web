import { getRelatedCompanies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";

export function RelatedCompanies({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedCompanies(currentSlug, 3);

  return (
    <section className="bg-[#FAFAFA] py-16 border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
          More from our portfolio
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#191919] mb-10">
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
