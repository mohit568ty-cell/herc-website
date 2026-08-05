import { useEffect, useState } from "react";
import authService from "@/services/auth";

export function useAuth() {
  const [user, setUser] = useState(authService.getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(authService.getUser());
    setLoading(false);
  }, []);

  const logout = () => {
    authService.logout();
    setUser(null);
    window.location.href = "/admin/login";
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated: authService.isAuthenticated(),
  };
}