import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TeamSection } from "@/components/sections/TeamSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Therapy Innovations — a Chicago-based venture studio building the infrastructure of ABA therapy.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#FAFAF8] pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <h1 className="mt-8 text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight">
            About Therapy Innovations
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
            Building the infrastructure of ABA therapy from Chicago.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-24 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#6B6B6B] mb-4">
              Our story
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Therapy Innovations was founded with a simple conviction: the
              professionals who dedicate their careers to Applied Behavior
              Analysis deserve better tools. Better technology. Better access to
              information, materials, and community.
            </p>

            <div className="my-8 flex gap-3">
              <div className="w-0.5 shrink-0 bg-[#E5E5E5]" />
              <p className="text-xl text-[#0F0F0F] italic leading-relaxed">
                Every company in our portfolio exists because a real need went
                unmet.
              </p>
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              What started as a single platform has grown into a portfolio of
              seven companies, each solving a distinct challenge in the ABA
              ecosystem. From tracking fieldwork hours to connecting therapists
              with jobs, every company in our portfolio exists because a real
              need went unmet.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Based in Chicago, we operate at the intersection of healthcare and
              technology — building platforms that serve 100,000+ professionals
              nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FAFAF8] py-16 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#6B6B6B] mb-4">
              Our mission
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              We believe that advancing ABA therapy requires more than clinical
              research — it requires innovation across every layer of the field.
              How professionals document their work. How they find jobs. How they
              stay informed. How their work is verified for quality.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Our mission is to build, acquire, and operate the best technology
              platforms serving the ABA community. We invest in companies that
              share our commitment to quality, accessibility, and measurable
              impact.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
}
