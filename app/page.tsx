import Link from "next/link";

const authFlows = [
  {
    id: "email-password",
    title: "Email & Password",
    description: "Classic credential-based authentication suitable for most apps.",
    href: "/email-password",
    steps: [
      "Collect email and password from the user.",
      "Validate input and call the auth API.",
      "Store session and redirect to dashboard.",
    ],
  },
  {
    id: "social-oauth",
    title: "Google Login",
    description:
      "Let users sign in with trusted providers like Google.",
    href: "/google-login",
    steps: [
      "Configure OAuth provider in your auth backend.",
      "Redirect users to the provider's login page.",
      "Handle callback, verify token, and create session.",
    ],
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-[#02050b] via-[#050c1d] to-[#071426] text-slate-100">
      <main className="mx-auto flex min-h-screen w-full flex-col gap-10 px-6 py-16">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight">Auth Flows</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Explore different ways users can sign in to your application.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 mx-10 gap-10">
          {authFlows.map((flow) => (
            <div key={flow.id}>
                <Link
                  href={flow.href}
                  className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white-500 p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                >
                  <h2 className="mt-1 text-lg font-semibold">{flow.title}</h2>
                  <p className="mt-2 text-sm text-zinc-600">
                    {flow.description}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                    {flow.steps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </Link> 
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
