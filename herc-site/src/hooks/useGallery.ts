import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { GalleryImage } from "@/types/gallery";


export function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await api<{
        success: boolean;
        count: number;
        data: GalleryImage[];
      }>("/gallery");

      return res.data;
    },
  });
}


export function useCreateGalleryImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      title?: string;
      imageUrl: string;
      category?: string;
      description?: string;
      location?: string;
      year?: number;
    }) => {
      return api("/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
      });
    },
  });
}


export function useDeleteGalleryImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return api(`/gallery/${id}`, {
        method: "DELETE",
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
      });
    },
  });
}