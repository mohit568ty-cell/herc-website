import { api } from "@/lib/api";

export interface AdminStats {
  projects: number;
  publications: number;
  galleryImages: number;
  researchDomains: number;
  contactMessages: number;
}

export async function fetchAdminStats(): Promise<AdminStats> {
  const response = await api<{
    success: boolean;
    data: AdminStats;
  }>("/admin/stats");

  return response.data;
}