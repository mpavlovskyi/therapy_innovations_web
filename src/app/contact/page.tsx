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
      <section className="bg-white pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1 className="mt-8 font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F6F0] py-16 lg:py-24 border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E8DFD0] flex items-center justify-center shrink-0">
                    <svg
                      className="h-5 w-5 text-[#E8813A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#E8813A] hover:text-[#D06E2B] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E8DFD0] flex items-center justify-center shrink-0">
                    <svg
                      className="h-5 w-5 text-[#1A2E1A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Location</h3>
                    <p className="text-[#6B6B6B]">
                      {siteConfig.location.city}, {siteConfig.location.state}
                    </p>
                  </div>
                </div>

                {siteConfig.social.linkedin && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E8DFD0] flex items-center justify-center shrink-0">
                      <svg
                        className="h-5 w-5 text-[#0A66C2]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">LinkedIn</h3>
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E8813A] hover:text-[#D06E2B] transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-6">
                Send a Message
              </h2>
              <form
                action={`mailto:${siteConfig.email}`}
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#3D3D3D] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DFD0] text-[#1A1A1A] placeholder-[#B5B5B5] focus:ring-2 focus:ring-[#E8813A]/20 focus:border-[#E8813A] outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#3D3D3D] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DFD0] text-[#1A1A1A] placeholder-[#B5B5B5] focus:ring-2 focus:ring-[#E8813A]/20 focus:border-[#E8813A] outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#3D3D3D] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8DFD0] text-[#1A1A1A] placeholder-[#B5B5B5] focus:ring-2 focus:ring-[#E8813A]/20 focus:border-[#E8813A] outline-none transition-all resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#E8813A] text-white font-semibold text-sm hover:bg-[#D06E2B] transition-colors"
                >
                  Send Message
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
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
