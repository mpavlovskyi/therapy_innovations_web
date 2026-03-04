import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-[15px] font-bold text-[#0F0F0F]"
            >
              Therapy Innovations
            </Link>
            <p className="mt-2 text-sm text-[#6B6B6B] max-w-xs leading-relaxed">
              Building the infrastructure of ABA therapy.
            </p>
            <p className="mt-1 text-xs text-[#6B6B6B]">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <Link
              href="/portfolio"
              className="text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors"
            >
              Contact
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors"
            >
              {siteConfig.email}
            </a>
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E5E5] text-xs text-[#6B6B6B]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
