import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  createResearchDomain,
  deleteResearchDomain,
  updateResearchDomain,
} from "@/services/research-domain.service";

import { researchDomainsQueryKey } from "./useResearchDomains";

export function useCreateResearchDomain() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createResearchDomain,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: researchDomainsQueryKey,
      });
    },
  });
}

export function useDeleteResearchDomain() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteResearchDomain,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: researchDomainsQueryKey,
      });
    },
  });
}

export function useUpdateResearchDomain() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: {
        title: string;
        slug: string;
        description: string;
        imageUrl?: string;
      };
    }) => updateResearchDomain(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: researchDomainsQueryKey,
      });
    },
  });
}