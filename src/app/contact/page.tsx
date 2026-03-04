import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Therapy Innovations. Based in Chicago, IL — reach us by email or connect on LinkedIn.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#FAFAF8] pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1 className="mt-8 text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight">
            Contact us
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
            Have a question, partnership idea, or just want to say hello?
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-sm font-medium text-[#0F0F0F] mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#6B6B6B] hover:text-[#0F0F0F] underline underline-offset-4 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-sm font-medium text-[#0F0F0F] mb-1">
                  Location
                </h3>
                <p className="text-[#6B6B6B]">
                  {siteConfig.location.city}, {siteConfig.location.state}
                </p>
              </div>

              {/* LinkedIn */}
              {siteConfig.social.linkedin && (
                <div>
                  <h3 className="text-sm font-medium text-[#0F0F0F] mb-1">
                    LinkedIn
                  </h3>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B6B] hover:text-[#0F0F0F] underline underline-offset-4 transition-colors"
                  >
                    Follow us on LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
