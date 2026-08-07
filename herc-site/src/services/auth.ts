
const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    // Save JWT token and user
    localStorage.setItem("herc_token", result.token);
    localStorage.setItem("herc_user", JSON.stringify(result.user));

    return result;
  }

  logout() {
    localStorage.removeItem("herc_token");
    localStorage.removeItem("herc_user");
  }

  getToken(): string | null {
    return localStorage.getItem("herc_token");
  }

  getUser() {
    const user = localStorage.getItem("herc_user");

    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default new AuthService();
