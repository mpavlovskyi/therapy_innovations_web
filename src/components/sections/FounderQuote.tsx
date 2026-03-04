import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FounderQuote() {
  return (
    <section className="bg-[#FAFAF8] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <ScrollReveal>
          <blockquote>
            <p className="text-2xl md:text-[28px] leading-snug font-medium text-[#0F0F0F] tracking-tight">
              &ldquo;Every company in our portfolio exists because a real need
              went unmet in the ABA community.&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-sm text-[#6B6B6B]">
            Quinn Niego, Founder &amp; Chairman
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
