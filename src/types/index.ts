export interface Company {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  description: string;
  shortDescription: string;
  features: string[];
  category: "saas" | "media" | "marketplace" | "fieldwork" | "nonprofit";
  displayCategory: string;
  iconInitials: string;
  logo?: string;
  screenshot?: string;
  problem: string;
  expandedDescription: string;
  statBadge: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  photo?: string;
  photoAlt?: string;
  credentials?: string[];
  linkedin?: string;
  pullQuote?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  social: {
    linkedin?: string;
  };
  email: string;
}
