import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Mission() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8722A] mb-4">
              Why we build
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#191919] leading-tight">
              Solving the problems nobody else would
            </h2>
            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
              We spent years inside ABA clinics watching brilliant therapists
              drown in paperwork, clinic owners fly blind on session quality, and
              kids receive less care than they were authorized for. So we started
              building solutions ourselves — one real problem at a time.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] p-8 text-center">
              <AnimatedCounter
                target={7}
                label="Companies"
                subtitle="Each solving one specific ABA problem"
              />
            </div>
            <div className="rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] p-8 text-center">
              <AnimatedCounter
                target={10000}
                suffix="+"
                label="ABA Professionals"
                subtitle="BCBAs and RBTs using our tools weekly"
              />
            </div>
            <div className="rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] p-8 text-center">
              <AnimatedCounter
                target={80000}
                suffix="+"
                label="Users Served"
                subtitle="Across clinics, schools, and families"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
