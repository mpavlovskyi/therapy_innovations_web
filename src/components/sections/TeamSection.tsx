import { team } from "@/data/team";
import { TeamCard } from "@/components/ui/TeamCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TeamSection() {
  return (
    <section className="bg-[#F9F6F0] py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              The Operators Behind the Portfolio
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
              15+ years inside ABA clinics. We didn&apos;t study this industry
              from the outside &mdash; we ran it.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column card grid */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
