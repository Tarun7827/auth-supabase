const authFlows = [
  {
    id: "email-password",
    title: "Email & Password",
    description: "Classic credential-based authentication suitable for most apps.",
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
    steps: [
      "Configure OAuth provider in your auth backend.",
      "Redirect users to the provider's login page.",
      "Handle callback, verify token, and create session.",
    ],
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight">Auth Flows</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Explore different ways users can sign in to your application.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {authFlows.map((flow) => (
            <button
              key={flow.id}
              type="button"
              className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="mt-1 text-lg font-semibold">{flow.title}</h2>
              <p className="mt-2 text-sm text-zinc-600">{flow.description}</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                {flow.steps.map((step) => (
                  <li key={step}>• {step}</li>
                ))}
              </ul>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
