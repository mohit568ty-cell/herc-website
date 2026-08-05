import { api } from "@/lib/api";
import type { Project, ProjectsApiResponse } from "@/types/project";


export async function fetchProjects(): Promise<Project[]> {
  const response = await api<ProjectsApiResponse>("/projects");

  if (!response.success) {
    throw new Error("Failed to fetch projects");
  }

  return response.data;
}


export async function fetchProjectBySlug(
  slug: string
): Promise<Project> {
  const response = await api<{
    success: boolean;
    data: Project;
  }>(`/projects/slug/${slug}`);

  if (!response.success) {
    throw new Error("Failed to fetch project");
  }

  return response.data;
}
export interface CreateProjectPayload {
  title: string;
  slug: string;
  description: string;
  status: string;
  imageUrl?: string;
}

export const createProject = async (
  data: CreateProjectPayload
) => {
  return api("/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


export const updateProject = async (
  id: string,
  data: Partial<CreateProjectPayload>
) => {
  return api(`/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


export const deleteProject = async (
  id: string
) => {
  return api(`/projects/${id}`, {
    method: "DELETE",
  });
};
