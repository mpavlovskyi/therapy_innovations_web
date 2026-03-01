import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Users,
  ClipboardPen,
  ScanEye,
  Rss,
  BookOpen,
  HeartHandshake,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const workflowSteps: {
  icon: LucideIcon;
  label: string;
  company: string;
}[] = [
  { icon: Users, label: "Hiring", company: "Free ABA Job Listings" },
  { icon: ClipboardPen, label: "Documentation", company: "Nitro Evals" },
  { icon: ScanEye, label: "Verification", company: "EvidentABA" },
  { icon: Rss, label: "News & Education", company: "Breaking News ABA" },
  { icon: BookOpen, label: "Materials", company: "Therapy Materials Vault" },
  { icon: HeartHandshake, label: "Volunteering", company: "Therapy Volunteers" },
];

export function Mission() {
  return (
    <section className="bg-[#1A2E1A] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header + copy */}
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-white">
              Why We Build
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              We spent years inside ABA clinics watching brilliant therapists
              drown in paperwork, clinic owners fly blind on session quality, and
              kids receive less care than they were authorized for. Nobody was
              building the right solutions. So we started building them ourselves
              &mdash; one real problem at a time.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated stats */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <AnimatedCounter
              target={7}
              label="Companies"
              subtitle="Each built to solve one specific ABA problem"
              icon="/icons/stat-companies-icon.svg"
            />
            <AnimatedCounter
              target={10000}
              suffix="+"
              label="ABA Professionals"
              subtitle="BCBAs and RBTs using our tools every week"
              icon="/icons/stat-professionals-icon.svg"
            />
            <AnimatedCounter
              target={80000}
              suffix="+"
              label="Users Served"
              subtitle="Across clinics, schools, and families nationwide"
              icon="/icons/stat-users-icon.svg"
            />
          </div>
        </ScrollReveal>

        {/* ABA Journey workflow diagram */}
        <ScrollReveal delay={300}>
          <div className="mt-4">
            <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-white/40 mb-10">
              The ABA Journey
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:flex-nowrap items-center">
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  {/* Node */}
                  <div className="group relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E8813A] group-hover:bg-[#E8813A]/20 group-hover:border-[#E8813A]/40 transition-all duration-300">
                      <step.icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <span className="mt-3 text-xs text-white/70 font-medium text-center whitespace-nowrap">
                      {step.label}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-white text-[#1A1A1A] text-xs font-medium px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-10">
                      {step.company}
                    </div>
                  </div>
                  {/* Arrow connector */}
                  {i < workflowSteps.length - 1 && (
                    <div className="hidden md:block mx-3 text-white/25">
                      <svg width="28" height="12" viewBox="0 0 28 12">
                        <line
                          x1="0"
                          y1="6"
                          x2="20"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                          className="dash-animate"
                        />
                        <path
                          d="M18 2 L26 6 L18 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
