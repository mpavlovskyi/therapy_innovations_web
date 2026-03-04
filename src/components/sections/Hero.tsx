import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#FAFAF8] pt-20 pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content — 3/5 */}
          <div className="lg:col-span-3">
            <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#6B6B6B] mb-6">
              Chicago-based venture studio
            </p>

            <h1
              className="font-black text-[#0F0F0F] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Building the
              <br />
              infrastructure
              <br />
              of ABA therapy.
            </h1>

            <p className="mt-6 text-lg text-[#6B6B6B] max-w-xl leading-relaxed">
              Seven companies solving the real problems ABA professionals live
              with every day. 100,000+ professionals served. One mission.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors"
              >
                Our Portfolio
                <svg
                  className="h-4 w-4"
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
                className="inline-flex items-center px-7 py-3.5 border border-[#E5E5E5] text-[#6B6B6B] font-semibold text-[15px] hover:border-[#1A1A1A] hover:text-[#0F0F0F] transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right — 2/5 editorial image or placeholder */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] bg-[#F0F0EE]" />
          </div>
        </div>
      </div>
    </section>
  );
}
