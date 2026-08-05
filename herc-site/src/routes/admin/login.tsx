import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import authService from "@/services/auth";
import { isAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/admin/login")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/admin",
      });
    }
  },

  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await authService.login({
        email,
        password,
      });

      console.log("LOGIN SUCCESS:", response);

      navigate({
        to: "/admin",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-xl border bg-white p-8 shadow"
      >
        <h1 className="text-3xl font-bold">
          HERC Admin Login
        </h1>

        {error && (
          <div className="rounded-lg bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full rounded-lg border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-green-700 p-3 text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}