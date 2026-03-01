import type { MetadataRoute } from "next";
import { companies } from "@/data/companies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://therapyinnovations.org";

  const companyPages = companies.map((company) => ({
    url: `${baseUrl}/portfolio/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...companyPages,
  ];
}
