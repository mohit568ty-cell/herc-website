import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/api/projects";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,

    // Performance optimization
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,

    // Avoid refetch every time page/tab focus changes
    refetchOnWindowFocus: false,
  });
}