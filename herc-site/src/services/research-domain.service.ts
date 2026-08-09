import type {
  ResearchDomain,
  ResearchDomainResponse,
  ResearchDomainsResponse,
} from "@/types/research-domain";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = `Request failed with status ${res.status}`;

    try {
      const body = await res.json();

      if (body?.message) {
        message = body.message;
      }
    } catch {
      // ignore
    }

    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

/**
 * GET all research domains
 */
export async function fetchResearchDomains(): Promise<ResearchDomain[]> {
  const res = await fetch(`${API_BASE_URL}/research-domains`);

  const json = await handleResponse<ResearchDomainsResponse>(res);

  return json.data;
}

/**
 * GET single research domain
 */
export async function fetchResearchDomainById(
  id: string,
): Promise<ResearchDomain> {
  const res = await fetch(`${API_BASE_URL}/research-domains/${id}`);

  const json = await handleResponse<ResearchDomainResponse>(res);

  return json.data;
}

/**
 * CREATE research domain
 */
export async function createResearchDomain(data: {
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
}) {
  const token = localStorage.getItem("herc_token");

  const res = await fetch(`${API_BASE_URL}/research-domains`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(data),
  });

  return handleResponse(res);
}

/**
 * UPDATE research domain
 */
export async function updateResearchDomain(
  id: string,
  data: {
    title: string;
    slug: string;
    description: string;
    imageUrl?: string;
  },
): Promise<ResearchDomain> {
  const token = localStorage.getItem("herc_token");

  const res = await fetch(`${API_BASE_URL}/research-domains/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(data),
  });

  const json = await handleResponse<ResearchDomainResponse>(res);

  return json.data;
}

/**
 * DELETE research domain
 */
export async function deleteResearchDomain(id: string): Promise<void> {
  const token = localStorage.getItem("herc_token");

  const res = await fetch(`${API_BASE_URL}/research-domains/${id}`, {
    method: "DELETE",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await handleResponse(res);
}
