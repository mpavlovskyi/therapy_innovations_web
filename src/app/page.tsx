import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TickerBar } from "@/components/sections/TickerBar";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Mission } from "@/components/sections/Mission";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { StatsBar } from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title: "Therapy Innovations | Building the Infrastructure of ABA Therapy",
  description:
    "Chicago-based venture studio with a portfolio of 7 companies serving 100,000+ ABA therapy professionals.",
  alternates: {
    canonical: "https://therapyinnovations.org",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerBar />
      <PortfolioGrid />
      <Mission />
      <FounderQuote />
      <StatsBar />
    </>
  );
}
