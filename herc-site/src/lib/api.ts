const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("herc_token")
      : null;

  const headers = new Headers(options.headers);

  // Don't force Content-Type for FormData uploads
  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Auto logout on expired/invalid token
  if (response.status === 401) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("herc_token");
      localStorage.removeItem("herc_user");
      window.location.href = "/login";
    }

    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));

    throw new Error(error.message || "API request failed");
  }

  return response.json() as Promise<T>;
}