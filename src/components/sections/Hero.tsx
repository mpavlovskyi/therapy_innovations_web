import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0C0C0C]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/hero-chicago.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-transparent to-[#0C0C0C]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-32 lg:py-40 lg:px-8">
        <div className="max-w-4xl">
          <ScrollReveal>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E8722A]" />
              <span className="text-sm font-medium text-white/80">
                Chicago-based holding company
              </span>
            </div>

            {/* H1 — large display type like OpenNote */}
            <h1 className="font-[family-name:var(--font-heading)] font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              Built inside ABA.
              <br />
              <span className="text-[#E8722A]">Built to fix it.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Seven companies solving the real problems ABA professionals live
              with every day. 80,000+ users. One mission.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={150}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8722A] text-white font-semibold text-[15px] hover:bg-[#D06020] transition-all duration-200 shadow-lg shadow-[#E8722A]/20"
              >
                Explore portfolio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-all duration-200"
              >
                Our story
              </Link>
            </div>
          </ScrollReveal>

          {/* Founder quote */}
          <ScrollReveal delay={300}>
            <div className="mt-20 flex items-start gap-4 max-w-xl">
              <div className="w-1 shrink-0 rounded-full bg-[#E8722A] self-stretch" />
              <div>
                <p className="text-white/50 text-base md:text-lg leading-relaxed italic">
                  &ldquo;Every company in our portfolio exists because a real need
                  went unmet in the ABA community.&rdquo;
                </p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-white/70">Quinn Niego</span>
                  <span className="text-white/40"> — Founder & Chairman</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
