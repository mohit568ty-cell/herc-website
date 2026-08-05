import { api } from "@/lib/api";
import type { GalleryImage, GalleryApiResponse } from "@/types/gallery";


export async function fetchGallery(): Promise<GalleryImage[]> {
  const response = await api<GalleryApiResponse>("/gallery");

  if (!response.success) {
    throw new Error("Failed to fetch gallery");
  }

  return response.data;
}


export interface CreateGalleryPayload {
  title?: string;
  imageUrl: string;
  category?: string;
  description?: string;
  location?: string;
  year?: number;
}


export const createGalleryImage = async (
  data: CreateGalleryPayload
) => {
  return api("/gallery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


export const updateGalleryImage = async (
  id: string,
  data: Partial<CreateGalleryPayload>
) => {
  return api(`/gallery/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


export const deleteGalleryImage = async (
  id: string
) => {
  return api(`/gallery/${id}`, {
    method: "DELETE",
  });
};