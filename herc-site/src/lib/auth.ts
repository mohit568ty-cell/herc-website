const TOKEN_KEY = "herc_token";
const USER_KEY = "herc_user";

export function saveToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function saveUser(user: unknown): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser<T = unknown>(): T | null {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem(USER_KEY);

  if (!user) return null;

  try {
    return JSON.parse(user) as T;
  } catch {
    return null;
  }
}

export function logout(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function removeToken(): void {
  logout();
}

export function isAuthenticated(): boolean {
  return !!getToken();
}