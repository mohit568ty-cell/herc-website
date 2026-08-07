import { useQuery } from "@tanstack/react-query";
import { fetchAdminStats } from "@/api/admin";

export function useAdminStats() {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: fetchAdminStats,

    // Keep dashboard stats cached
    staleTime: 1000 * 60 * 2,

    // Keep cache for smoother navigation
    gcTime: 1000 * 60 * 5,

    // Avoid unnecessary API calls
    refetchOnWindowFocus: false,

    retry: 1,
  });
}