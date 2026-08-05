import { useQuery } from "@tanstack/react-query";
import { fetchAdminStats } from "@/api/admin";

export function useAdminStats() {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: fetchAdminStats,
  });
}