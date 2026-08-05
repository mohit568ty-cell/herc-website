import { useQuery } from "@tanstack/react-query";
import { fetchProjectBySlug } from "@/api/projects";

export function useProject(slug: string) {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => fetchProjectBySlug(slug),
    enabled: Boolean(slug),
  });
}