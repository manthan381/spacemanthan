"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = (await response.json()) as {
        success: boolean;
        error?: string;
      };
      if (!response.ok || !result.success) {
        setError(result.error ?? "Login failed");
        setLoading(false);
        return;
      }

      router.push("/admin/posts");
      router.refresh();
    } catch {
      setError("Unable to login. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[12s] scale-105"
        style={{
          backgroundImage: "url('/images/hero-bg-spacemanthan.jpg')",
          filter: "brightness(0.45) saturate(1.05)",
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#061a3a]/80 via-[#0b2658]/50 to-[#061a3a]/80" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-none shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Space Manthan Admin
            </h1>
            <p className="text-slate-200 text-sm">
              Secure access for content management
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="admin-username"
                className="block text-xs font-semibold text-slate-200 uppercase tracking-wider ml-1"
              >
                Username
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-white transition-colors">
                  <User size={18} />
                </div>
                <input
                  id="admin-username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-none pl-10 pr-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7aa2ff]/40 focus:bg-white/10 transition-all"
                  placeholder="Enter username"
                  autoComplete="username"
                  required
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="admin-password"
                className="block text-xs font-semibold text-slate-200 uppercase tracking-wider ml-1"
              >
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-white transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-none pl-10 pr-12 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7aa2ff]/40 focus:bg-white/10 transition-all"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  suppressHydrationWarning
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error ? (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-red-200 text-center font-medium bg-red-500/10 py-2 rounded-none border border-red-400/30"
              >
                {error}
              </motion.p>
            ) : null}

            <button
              disabled={loading}
              type="submit"
              className="relative w-full group overflow-hidden rounded-none bg-white py-3.5 text-[#012169] font-bold text-sm tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-[#012169]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Authorized Sign In"
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e9f0ff] to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              Property of Space Manthan (c) {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
