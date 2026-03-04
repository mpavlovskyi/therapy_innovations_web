import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore Therapy Innovations' portfolio of 7 companies building the infrastructure of ABA therapy.",
  alternates: {
    canonical: "https://therapyinnovations.org/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#FAFAF8] pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio" },
            ]}
          />
          <h1 className="mt-8 text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight">
            Our portfolio
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
            Seven companies united by a shared mission: building the
            infrastructure of ABA therapy.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF8] py-16 lg:py-24 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
