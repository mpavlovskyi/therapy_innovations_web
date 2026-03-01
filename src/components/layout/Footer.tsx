import Link from "next/link";
import { companies } from "@/data/companies";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-lg font-bold text-white font-[family-name:var(--font-heading)]"
            >
              Therapy Innovations
            </Link>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              Building the tools, platforms, and communities that advance
              Applied Behavior Analysis.
            </p>
            <p className="mt-4 text-xs text-white/25">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>

          {/* Portfolio links */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Portfolio
            </h3>
            <ul className="space-y-2.5">
              {companies.map((company) => (
                <li key={company.slug}>
                  <Link
                    href={`/portfolio/${company.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] text-center text-xs text-white/25">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
