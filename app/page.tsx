\"use client\";

import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen font-sans text-zinc-900 dark:text-zinc-50 ${
        isDark ? "dark bg-black" : "bg-zinc-50"
      }`}
    >
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Auth Flows</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Explore different ways users can sign in to your application.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {/* Email / Password Flow */}
          <button
            type="button"
            className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Login type
            </span>
            <h2 className="mt-1 text-lg font-semibold">Email &amp; Password</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Classic credential-based authentication suitable for most apps.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Collect email and password from the user.</li>
              <li>• Validate input and call the auth API.</li>
              <li>• Store session and redirect to dashboard.</li>
            </ul>
          </button>

          {/* OAuth Provider Flow */}
          <button
            type="button"
            className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Login type
            </span>
            <h2 className="mt-1 text-lg font-semibold">Social / OAuth</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Let users sign in with trusted providers like Google or GitHub.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Configure OAuth provider in your auth backend.</li>
              <li>• Redirect users to the provider&apos;s login page.</li>
              <li>• Handle callback, verify token, and create session.</li>
            </ul>
          </button>
        </section>
      </main>
    </div>
  );
}
