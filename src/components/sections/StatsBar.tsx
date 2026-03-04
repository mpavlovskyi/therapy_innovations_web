import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: "7", label: "Companies" },
  { value: "100,000+", label: "Professionals" },
  { value: "1,000+", label: "Jobs Listed" },
  { value: "13 yrs", label: "In ABA" },
];

export function StatsBar() {
  return (
    <section className="bg-[#F4F4F2] py-16 border-y border-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-[#0F0F0F] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-[#6B6B6B] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
