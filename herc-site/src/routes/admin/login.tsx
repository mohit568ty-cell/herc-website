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

      await authService.login({
        email,
        password,
      });

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-950 via-green-900 to-black px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          space-y-5
          rounded-2xl
          border
          bg-white/95
          p-8
          shadow-2xl
          backdrop-blur
        "
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-900">
            HERC Admin Login
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Secure management portal
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-100 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="
            w-full
            rounded-lg
            border
            p-3
            outline-none
            transition
            focus:border-green-700
            focus:ring-2
            focus:ring-green-200
          "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            rounded-lg
            border
            p-3
            outline-none
            transition
            focus:border-green-700
            focus:ring-2
            focus:ring-green-200
          "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-lg
            bg-green-700
            p-3
            font-medium
            text-white
            transition
            hover:bg-green-800
            active:scale-95
            disabled:opacity-50
          "
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
}