import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies, getCompanyBySlug } from "@/data/companies";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedCompanies } from "@/components/sections/RelatedCompanies";
import {
  generateBreadcrumbSchema,
  generateCompanySchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/data/site";

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  fieldwork: { bg: "#EBF5FF", text: "#1E60A8", badge: "#DBEAFE" },
  saas: { bg: "#F5F3FF", text: "#6D28D9", badge: "#EDE9FE" },
  media: { bg: "#FFF1F2", text: "#BE123C", badge: "#FFE4E6" },
  marketplace: { bg: "#ECFDF5", text: "#047857", badge: "#D1FAE5" },
  nonprofit: { bg: "#FFF7ED", text: "#C2410C", badge: "#FFEDD5" },
};

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return { title: "Company Not Found" };

  return {
    title: `${company.name} — ${company.tagline}`,
    description: company.shortDescription,
    alternates: { canonical: `${siteConfig.url}/portfolio/${company.slug}` },
    openGraph: {
      title: `${company.name} — ${company.tagline} | ${siteConfig.name}`,
      description: company.shortDescription,
      url: `${siteConfig.url}/portfolio/${company.slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${company.name} | ${siteConfig.name}`,
      description: company.shortDescription,
    },
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const colors = categoryColors[company.category] || categoryColors.saas;
  const breadcrumbItems = [
    { name: "Home", url: siteConfig.url },
    { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
    { name: company.name },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCompanySchema(company)),
        }}
      />

      {/* Hero */}
      <section className="bg-white pt-12 pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: company.name },
            ]}
          />

          <div className="mt-10 flex items-start gap-5">
            {company.logo ? (
              <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-[#FAFAFA] border border-[#E5E7EB] p-2">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: colors.text }}
              >
                {company.iconInitials}
              </div>
            )}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#191919]">
                  {company.name}
                </h1>
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: colors.badge, color: colors.text }}
                >
                  {company.displayCategory}
                </span>
              </div>
              <p className="mt-3 text-xl md:text-2xl font-[family-name:var(--font-heading)] text-[#6B7280] max-w-2xl leading-snug">
                {company.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#FAFAFA] py-16 border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
              The problem
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              {company.expandedDescription}
            </p>
            <div className="mt-6 space-y-4">
              {company.description.split("\n\n").slice(0, 2).map((p, i) => (
                <p key={i} className="text-[#6B7280] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
            Our solution
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#191919] mb-8">
            Key features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {company.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 shrink-0 mt-0.5 text-[#E8722A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-[#6B7280]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0C0C0C] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[#E8722A]">
                {company.statBadge}
              </div>
              <p className="mt-2 text-white/40 text-sm">Impact metric</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
                {company.features.length}
              </div>
              <p className="mt-2 text-white/40 text-sm">Key features</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[#E8722A]">
                100%
              </div>
              <p className="mt-2 text-white/40 text-sm">Built for ABA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
              Who it&apos;s for
            </p>
            <p className="text-[#6B7280] leading-relaxed text-lg">
              {company.description.split("\n\n").slice(-1)[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      {company.screenshot && (
        <section className="bg-[#FAFAFA] py-16 border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#D1D5DB] transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={company.screenshot}
                alt={`${company.name} website screenshot`}
                width={1280}
                height={800}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#191919] text-sm font-semibold shadow-lg">
                  Visit {company.name}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* CTA buttons */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8722A] text-white font-semibold text-sm transition-all hover:bg-[#D06020] shadow-lg shadow-[#E8722A]/20"
          >
            Visit {company.name}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-[#E5E7EB] text-[#6B7280] font-semibold text-sm hover:bg-[#FAFAFA] transition-colors"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </section>

      <RelatedCompanies currentSlug={slug} />
    </>
  );
}
