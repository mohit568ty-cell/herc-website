const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://herc-api-qs5a.onrender.com/api";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
  };
}

class AuthService {
  async login(data: LoginData): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      throw new Error(
        `Server returned an invalid response (${response.status}).`
      );
    }

    const result = (await response.json()) as LoginResponse & {
      message?: string;
    };

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    localStorage.setItem("herc_token", result.token);
    localStorage.setItem(
      "herc_user",
      JSON.stringify(result.user)
    );

    return result;
  }

  logout(): void {
    localStorage.removeItem("herc_token");
    localStorage.removeItem("herc_user");
  }

  getToken(): string | null {
    return localStorage.getItem("herc_token");
  }

  getUser(): LoginResponse["user"] | null {
    const user = localStorage.getItem("herc_user");

    if (!user) {
      return null;
    }

    try {
      return JSON.parse(user) as LoginResponse["user"];
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default new AuthService();
