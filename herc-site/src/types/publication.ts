export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  description?: string | null;
  pdfUrl: string;
  createdAt: string;
}

export interface PublicationsApiResponse {
  success: boolean;
  count: number;
  data: Publication[];
}