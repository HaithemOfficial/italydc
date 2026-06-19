import { useState } from "react";
import type { FormEvent } from "react";
import { Map } from "lucide-react";

const CREDENTIALS = {
  email: "admin@Elnadjah.com",
  password: "admin",
};

interface Props {
  onLogin: () => void;
}

export default function Login({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === CREDENTIALS.email.toLowerCase() &&
        password === CREDENTIALS.password
      ) {
        onLogin();
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 400);
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center mb-3">
            <Map className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Playfair Display, serif" }}>
            El Nadjah
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">Study Abroad · Internal Tool</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-800 mb-5">Sign in to continue</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@elnadjah.com"
                required
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-[#1E293B] active:scale-[0.98] transition-all disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
