const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://herc-api-qs5a.onrender.com/api";

export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("herc_token")
      : null;

  const headers = new Headers(options.headers);

  // Do not set Content-Type manually for FormData.
  // Browser automatically sets multipart/form-data boundary.
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

  // Handle expired/invalid authentication
  if (response.status === 401) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("herc_token");
      localStorage.removeItem("herc_user");

      window.location.href = "/admin/login";
    }

    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    const contentType = response.headers.get("content-type");

    let message = `API request failed (${response.status})`;

    if (contentType?.includes("application/json")) {
      const error = (await response.json()) as {
        message?: string;
      };

      message = error.message || message;
    } else {
      const text = await response.text();

      if (text) {
        message = text.slice(0, 200);
      }
    }

    throw new Error(message);
  }

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error("Server returned an invalid response.");
  }

  return (await response.json()) as T;
}