/**
 * Mirrors the Prisma `ResearchDomain` model.
 */
export interface ResearchDomain {
 id:string;
 title:string;
 slug:string;
 description:string;
 content?:string;
 imageUrl?:string | null;
 createdAt:string;
}

/**
 * Shape returned by GET /api/research-domains
 */
export interface ResearchDomainsResponse {
  success: boolean;
  count: number;
  data: ResearchDomain[];
}

/**
 * Shape returned by GET /api/research-domains/:id
 */
export interface ResearchDomainResponse {
  success: boolean;
  data: ResearchDomain;
}