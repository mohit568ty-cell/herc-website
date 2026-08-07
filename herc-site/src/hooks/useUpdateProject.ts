import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "@/api/projects";

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof updateProject>[1];
    }) => updateProject(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}