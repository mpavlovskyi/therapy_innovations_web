import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Mission() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight leading-tight">
              Why we build.
            </h2>
            <p className="mt-8 text-lg text-[#6B6B6B] leading-relaxed">
              We spent years inside ABA clinics watching brilliant therapists
              drown in paperwork, clinic owners fly blind on session quality, and
              kids receive less care than they were authorized for. So we started
              building solutions ourselves — one real problem at a time.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
