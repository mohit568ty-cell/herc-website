import type { Project } from "@/types/project";

export interface TeamMember {
  name: string;
  role: string;
}

export interface TimelineItem {
  date: string;
  label: string;
}

export interface DownloadItem {
  label: string;
  size: string;
  url?: string;
}

export interface RelatedProject {
  slug: string;
  title: string;
  imageUrl?: string;
  researchArea?: string;
  location?: string;
}

export interface ProjectViewModel {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  summary: string;
  status: string;
  researchArea: string;
  location: string;
  fundingAgency: string;
  duration: string;
  year: number;
  overview: string;
  studyArea: string;
  objectives: string[];
  methodology: string[];
  team: TeamMember[];
  deliverables: string[];
  timeline: TimelineItem[];
  gallery: string[];
  downloads: DownloadItem[];
  relatedServices: string[];
  related: RelatedProject[];
}

export function toProjectViewModel(p: Project): ProjectViewModel {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,

    imageUrl: p.imageUrl ?? "/images/project-placeholder.jpg",

    summary: p.summary ?? p.description ?? "",

    status: p.status ?? "—",

    researchArea: p.researchArea ?? "General Research",

    location: p.location ?? p.state ?? "Location TBD",

    fundingAgency: p.fundingAgency ?? "—",

    duration: "—",

    year: p.year ?? new Date(p.createdAt).getFullYear(),

    overview: p.summary ?? p.description ?? "",

    studyArea: p.description ?? "",

    // Backend does not currently provide these — safe empty fallbacks.
    // UI sections for these render nothing when empty.
    objectives: [],
    methodology: [],
    team: [],
    deliverables: [],
    timeline: [],
    gallery: [],
    downloads: [],
    relatedServices: [],
    related: [],
  };
}