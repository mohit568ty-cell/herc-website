import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";

import authService from "@/services/auth";
import { isAuthenticated } from "@/lib/auth";
import loginBg from "@/assets/gallery/admin-login.png";

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

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
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
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-8"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Ambient glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
            <ShieldCheck className="h-8 w-8 text-emerald-300" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            HERC
          </h1>

          <p className="mt-1 text-sm font-medium tracking-[0.2em] text-emerald-200/90">
            ADMIN PORTAL
          </p>
        </div>

        {/* Login card */}
        <form
          onSubmit={handleSubmit}
          className="
            rounded-3xl
            border border-white/20
            bg-white/10
            p-6
            shadow-2xl
            backdrop-blur-2xl
            sm:p-8
          "
        >
          {/* Card heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-white">
              Welcome back
            </h2>

            <p className="mt-1 text-sm text-white/60">
              Sign in to manage your HERC website.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              Admin Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

              <input
                id="email"
                type="email"
                placeholder="Enter your admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="
                  w-full
                  rounded-xl
                  border border-white/15
                  bg-black/20
                  py-3.5
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/35
                  focus:border-emerald-400/60
                  focus:bg-black/30
                  focus:ring-2
                  focus:ring-emerald-400/20
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="
                  w-full
                  rounded-xl
                  border border-white/15
                  bg-black/20
                  py-3.5
                  pl-12
                  pr-12
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/35
                  focus:border-emerald-400/60
                  focus:bg-black/30
                  focus:ring-2
                  focus:ring-emerald-400/20
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  rounded-lg
                  p-2
                  text-white/40
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="
              group
              relative
              w-full
              overflow-hidden
              rounded-xl
              bg-emerald-600
              px-4
              py-3.5
              font-semibold
              text-white
              shadow-lg
              shadow-emerald-900/30
              transition-all
              duration-200
              hover:bg-emerald-500
              hover:shadow-emerald-500/20
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <span className="relative z-10">
              {loading ? "Authenticating..." : "Sign in to Admin Portal"}
            </span>

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </button>

          {/* Security note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/45">
            <LockKeyhole className="h-3.5 w-3.5" />
            <span>Secure administrator access</span>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-white/40">
          Himalayan Environmental Research & Consultancy
        </p>
      </div>
    </main>
  );
}

