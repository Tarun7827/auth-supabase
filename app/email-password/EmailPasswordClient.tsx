"use client";

import { User } from "@supabase/supabase-js";
import { useState } from "react";

type EmailPasswordProps = {
  user: User | null;
};

type Mode = "signup" | "signin";

export default function EmailPasswordClient({ user }: EmailPasswordProps) {
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = mode === "signup" ? "Create an account" : "Log In";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire up Supabase auth here
    console.log(mode, { email, password });
  }

  return (
    <div className="flex w-full justify-center">
      <div className="max-w-lg w-full space-y-4 rounded-lg border border-zinc-600 bg-zinc-50 p-4 text-sm text-zinc-700">
      {user && (
        <div className="rounded-md bg-zinc-100 px-3 py-2 text-xs text-zinc-700">
          Signed in as <span className="font-medium">{user.email}</span>
        </div>
      )}

      <div className="flex items-center justify-between rounded-md bg-zinc-100 p-1 text-xs font-medium text-zinc-700">
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={`flex-1 rounded-md px-3 py-1 transition ${
            mode === "signup"
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-500 hover:text-zinc-800"
          }`}
        >
          Sign up
        </button>
        <button
          type="button"
          onClick={() => setMode("signin")}
          className={`flex-1 rounded-md px-3 py-1 transition ${
            mode === "signin"
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-500 hover:text-zinc-800"
          }`}
        >
          Log in
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-base font-semibold text-zinc-700">{title}</h2>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-zinc-700">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none ring-offset-0 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-zinc-700">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none ring-offset-0 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          {mode === "signup" ? "Create account" : "Log in"}
        </button>
      </form>
      </div>
    </div>
  );
}

