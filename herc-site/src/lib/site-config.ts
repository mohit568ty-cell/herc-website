/**
 * Central site configuration for HERC.
 * All copy, nav, and content structure lives here so pages stay declarative.
 * Structured for a future CMS-backed source of truth.
 */
export const siteConfig = {
  name: "HERC",
  fullName: "Himalayan Environmental Research &amp;Centre",
  tagline: "Science • Sustainability • Conservation",
  founder: "Mr. Jagdish Pandey",
  founded: "2026",
  headquarters: "Almora, Uttarakhand, India",
  email: "contact@herc.org.in",
  phone: "+91 000 000 0000",
  workingHours: "Monday – Saturday · 10:00 – 18:00 IST",
  socials: {
    linkedin: "#",
    twitter: "#",
    youtube: "#",
    researchgate: "#",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  restricted?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Careers", href: "/careers" },
];

/**
 * Static search index. Later this can be sourced from the CMS
 * without changing the search UI.
 */
export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: "Projects" | "Services" | "Insights" | "Research" | "Gallery" | "Pages";
};

export const searchIndex: SearchEntry[] = [
  { title: "About HERC", description: "The institute and its founder.", href: "/about", category: "Pages" },
  { title: "Research", description: "Domains of work across the Indian Himalaya.", href: "/research", category: "Research" },
  { title: "Services", description: "Consultancy and technical services offered.", href: "/services", category: "Services" },
  { title: "Projects", description: "Documented professional project experience.", href: "/projects", category: "Projects" },
  { title: "Publications", description: "Reports and technical documents.", href: "/publications", category: "Pages" },
  { title: "Gallery", description: "Field, laboratory and training imagery.", href: "/gallery", category: "Gallery" },
  { title: "Insights", description: "Research updates and field notes.", href: "/insights", category: "Insights" },
  { title: "Collaborate", description: "Partner with HERC on research and field programmes.", href: "/collaborate", category: "Pages" },
  { title: "Contact", description: "Reach the office for enquiries and proposals.", href: "/contact", category: "Pages" },

  { title: "Environmental Impact Assessment", description: "EIA studies, baseline surveys and monitoring.", href: "/services", category: "Services" },
  { title: "Biodiversity & Ecological Surveys", description: "Species inventories and habitat assessments.", href: "/services", category: "Services" },
  { title: "Himalayan Ecosystem Research", description: "Alpine, sub-alpine and forest ecosystem studies.", href: "/services", category: "Services" },
  { title: "Climate Change & Glacier Studies", description: "Cryosphere monitoring and long-term climate data.", href: "/services", category: "Services" },
  { title: "GIS & Remote Sensing Support", description: "Spatial analysis, mapping and remote-sensing workflows.", href: "/services", category: "Services" },
  { title: "Natural Resource Management", description: "Forest, water and land-use documentation.", href: "/services", category: "Services" },
  { title: "Watershed & Water Resource Studies", description: "Catchment characterisation and water resource assessments.", href: "/services", category: "Services" },
  { title: "Environmental Documentation & Reporting", description: "Technical reports and institutional deliverables.", href: "/services", category: "Services" },
];
