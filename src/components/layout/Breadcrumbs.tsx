import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/data/site";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href ? `${siteConfig.url}${item.href}` : undefined,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-[#8A8A8A]">
        <ol className="flex items-center gap-2">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[#C5C5C5]" aria-hidden="true">
                  /
                </span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#E8813A]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#1A1A1A]">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
