import { useQuery } from "@tanstack/react-query";
import { fetchResearchDomains } from "@/services/research-domain.service";
import type { ResearchDomain } from "@/types/research-domain";

export const researchDomainsQueryKey = ["research-domains"] as const;

/**
 * Fetches all research domains for the Research Domains section.
 */
export function useResearchDomains() {
  return useQuery<ResearchDomain[], Error>({
    queryKey: researchDomainsQueryKey,
    queryFn: fetchResearchDomains,

    // Keep data fresh for 5 minutes
    staleTime: 5 * 60 * 1000,

    // Keep cached data for smoother navigation
    gcTime: 10 * 60 * 1000,

    // Avoid unnecessary API calls
    refetchOnWindowFocus: false,

    // Less aggressive retry
    retry: 1,
    retryDelay: 1000,
  });
}