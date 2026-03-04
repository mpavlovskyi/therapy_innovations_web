import { team } from "@/data/team";
import { TeamCard } from "@/components/ui/TeamCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TeamSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#6B6B6B] mb-4">
              The team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F0F0F] tracking-tight">
              The operators behind the portfolio
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
              15+ years inside ABA clinics. We didn&apos;t study this industry
              from the outside — we ran it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
