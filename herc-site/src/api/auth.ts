import { api } from "@/lib/api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export async function login(data: LoginRequest) {
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}