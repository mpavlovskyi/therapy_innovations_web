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

      {/* 1. HERO — accent color wash + problem statement */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          background: `linear-gradient(135deg, ${company.accentColor}18, ${company.accentColor}08)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: company.name },
            ]}
          />

          <div className="mt-8 flex items-start gap-6">
            {company.logo ? (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={64}
                height={64}
                className="shrink-0 w-16 h-16 rounded-xl object-contain bg-white/80 p-2 shadow-sm"
              />
            ) : (
              <div
                className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: company.color }}
              >
                {company.iconInitials}
              </div>
            )}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  {company.name}
                </h1>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${company.accentColor}18`,
                    color: company.accentColor,
                  }}
                >
                  {company.displayCategory}
                </span>
              </div>
              <p className="mt-3 text-xl md:text-2xl font-[family-name:var(--font-heading)] text-[#3D3D3D] max-w-2xl leading-snug">
                {company.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="bg-white py-16 border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-6">
              The Problem
            </h2>
            <p className="text-lg text-[#5A5A5A] leading-relaxed">
              {company.expandedDescription}
            </p>
            <div className="mt-6">
              {company.description.split("\n\n").slice(0, 2).map((p, i) => (
                <p
                  key={i}
                  className="text-[#5A5A5A] leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SOLUTION — features */}
      <section className="bg-[#F9F6F0] py-16 border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-8">
            Our Solution
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {company.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke={company.accentColor}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-[#3D3D3D]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. BY THE NUMBERS */}
      <section className="bg-[#1A2E1A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white mb-10 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold font-[family-name:var(--font-heading)]"
                style={{ color: company.accentColor }}
              >
                {company.statBadge}
              </div>
              <p className="mt-2 text-white/60 text-sm">Impact metric</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
                {company.features.length}
              </div>
              <p className="mt-2 text-white/60 text-sm">Key features</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[#E8813A]">
                100%
              </div>
              <p className="mt-2 text-white/60 text-sm">Built for ABA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO IT&apos;S FOR */}
      <section className="bg-white py-16 border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-6">
              Who It&apos;s For
            </h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              {company.description.split("\n\n").slice(-1)[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Website screenshot */}
      {company.screenshot && (
        <section className="bg-[#F9F6F0] py-16 border-t border-[#E8DFD0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-xl overflow-hidden border border-[#E8DFD0] hover:border-[#C5B9A8] transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={company.screenshot}
                alt={`${company.name} website screenshot`}
                width={1280}
                height={800}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-sm font-semibold shadow-lg">
                  Visit {company.name}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* 6. VISIT + BACK */}
      <section className="bg-white py-16 border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: company.accentColor }}
          >
            Visit {company.name}
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-3.5 rounded-lg border border-[#E8DFD0] text-[#3D3D3D] font-semibold text-sm hover:bg-[#F9F6F0] transition-colors"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Related companies */}
      <RelatedCompanies currentSlug={slug} />
    </>
  );
}
