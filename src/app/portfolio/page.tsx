import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore Therapy Innovations' portfolio of 7 companies building technology for ABA therapy professionals — from report automation to AI-powered verification.",
  alternates: {
    canonical: "https://therapyinnovations.org/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-white pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio" },
            ]}
          />
          <h1 className="mt-8 font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
            Seven companies united by a shared mission: advancing ABA therapy
            through technology, media, and community.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F6F0] py-16 lg:py-24 border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
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
    </>
  );
}
