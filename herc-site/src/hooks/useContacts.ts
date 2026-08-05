import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
}

interface ContactsResponse {
  success: boolean;
  count: number;
  data: ContactMessage[];
}

async function fetchContacts(): Promise<ContactMessage[]> {
  const response = await api<ContactsResponse>("/contact");

  return response.data;
}

export function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}