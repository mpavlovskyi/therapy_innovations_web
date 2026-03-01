import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-chicago.mp4" type="video/mp4" />
      </video>

      {/* Warm therapy-room overlay: ambers + deep greens */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E1A]/85 via-[#2a1f0e]/70 to-[#1A2E1A]/60" />

      {/* Dot-grid texture layer */}
      <div className="absolute inset-0 dot-grid" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-28 lg:py-40 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            {/* Overline */}
            <p
              className="text-sm font-semibold tracking-widest uppercase text-[#E8813A] mb-6"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Chicago-based holding company
            </p>

            {/* H1 */}
            <h1
              className="font-[family-name:var(--font-heading)] font-bold text-white leading-[1.06] drop-shadow-lg"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Built Inside ABA.
              <br />
              Built to Fix It.
            </h1>

            {/* Subtitle */}
            <p
              className="mt-7 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
            >
              Seven companies solving the real problems ABA professionals live with
              every day. 80,000+ users. One mission.
            </p>
          </ScrollReveal>

          {/* CTA buttons */}
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-3.5 rounded-lg bg-[#E8813A] text-white font-semibold text-[15px] hover:bg-[#D06E2B] hover:shadow-xl hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                Explore Our Portfolio
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3.5 rounded-lg border border-white/35 text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </ScrollReveal>

          {/* Prominent founder quote */}
          <ScrollReveal delay={400}>
            <blockquote className="mt-20 pl-6 border-l-4 border-[#E8813A]">
              <p
                className="text-white/90 text-xl md:text-2xl italic leading-relaxed font-[family-name:var(--font-heading)]"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
              >
                &ldquo;Every company in our portfolio exists because a real need
                went unmet in the ABA community.&rdquo;
              </p>
              <cite className="mt-4 block text-base not-italic">
                <span className="font-semibold text-white">Quinn Niego</span>
                <span className="text-white/60"> — Founder &amp; Chairman</span>
              </cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A2E1A] to-transparent" />
    </section>
  );
}
