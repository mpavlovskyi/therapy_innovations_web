import { getRelatedCompanies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RelatedCompanies({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedCompanies(currentSlug, 3);

  return (
    <section className="bg-[#F9F6F0] py-16 border-t border-[#E8DFD0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Other Portfolio Companies" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((company) => (
            <CompanyCard key={company.slug} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
