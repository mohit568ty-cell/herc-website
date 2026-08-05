import { api } from "@/lib/api";
import type {
  Publication,
  PublicationsApiResponse,
} from "@/types/publication";

export async function fetchPublications(): Promise<Publication[]> {
  const response =
    await api<PublicationsApiResponse>(
      "/publications"
    );

  if (!response.success) {
    throw new Error("Failed to fetch publications");
  }

  return response.data;
}

export async function createPublication(
  data: {
    title: string;
    authors: string;
    year: number;
    journal: string;
    description?: string;
    pdfUrl: string;
  }
) {
  return api("/publications", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updatePublication(
  id: string,
  data: Partial<{
    title: string;
    authors: string;
    year: number;
    journal: string;
    description?: string;
    pdfUrl: string;
  }>
) {
  return api(`/publications/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deletePublication(
  id: string
) {
  return api(`/publications/${id}`, {
    method: "DELETE",
  });
}