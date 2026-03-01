import { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImageAlt?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImageAlt,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      ...(ogImageAlt
        ? {
            images: [
              {
                url: `${siteConfig.url}/images/og-default.png`,
                width: 1200,
                height: 630,
                alt: ogImageAlt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
