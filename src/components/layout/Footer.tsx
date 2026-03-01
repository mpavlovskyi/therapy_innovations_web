import Link from "next/link";
import Image from "next/image";
import { companies } from "@/data/companies";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative bg-[#1A2E1A] border-t border-[#2F4F2F] overflow-hidden">
      {/* Brand watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.12] pointer-events-none">
        <Image src="/icons/footer-watermark.svg" width={220} height={180} alt="" aria-hidden />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-white font-[family-name:var(--font-heading)]"
            >
              Therapy Innovations
            </Link>
            <p className="mt-2 text-sm text-white/50">
              Chicago, IL &middot; Building the infrastructure of ABA therapy
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Building the tools, platforms, and communities that advance
              Applied Behavior Analysis.
            </p>
          </div>

          {/* Portfolio links */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider">
              Portfolio
            </h3>
            <ul className="mt-4 space-y-2">
              {companies.map((company) => (
                <li key={company.slug}>
                  <Link
                    href={`/portfolio/${company.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/30">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} |{" "}
            {siteConfig.location.city}, {siteConfig.location.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
