import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  fetchPublications,
  createPublication,
  updatePublication,
  deletePublication,
} from "@/api/publications";

export function usePublications() {
  return useQuery({
    queryKey: ["publications"],
    queryFn: fetchPublications,
  });
}

export function useCreatePublication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPublication,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["publications"],
      });
    },
  });
}

export function useUpdatePublication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof updatePublication>[1];
    }) => updatePublication(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["publications"],
      });
    },
  });
}

export function useDeletePublication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePublication,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["publications"],
      });
    },
  });
}