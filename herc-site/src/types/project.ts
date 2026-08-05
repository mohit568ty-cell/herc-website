export type ProjectStatus =
  | "Ongoing"
  | "Completed"
  | "Upcoming"
  | string;

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  status: ProjectStatus;
  createdAt: string;

  researchArea?: string;
  state?: string;
  location?: string;
  fundingAgency?: string;
  summary?: string;
  year?: number;
  lat?: number;
  lng?: number;
}

export interface ProjectsApiResponse {
  success: boolean;
  count: number;
  data: Project[];
}