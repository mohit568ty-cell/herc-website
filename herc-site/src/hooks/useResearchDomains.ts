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
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}