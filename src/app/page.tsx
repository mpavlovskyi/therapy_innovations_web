import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { EcosystemMap } from "@/components/sections/EcosystemMap";
import { TeamSection } from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Therapy Innovations | Built Inside ABA. Built to Fix It.",
  description:
    "Chicago-based holding company with a portfolio of 7 companies serving 80,000+ ABA therapy professionals through innovative technology platforms.",
  alternates: {
    canonical: "https://therapyinnovations.org",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <PortfolioGrid />
      <EcosystemMap />
      <TeamSection />
    </>
  );
}
