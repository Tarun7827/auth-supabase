"use client";

import { AuthPageDescription } from "@/app/Components/AuthPageDescription";
import { getSupabaseBrowserClient } from "@/lib/supabse/browser-client";
import { User } from "@supabase/supabase-js";
import type { EmailPasswordFormData } from "./EmailPasswordForm";
import EmailPasswordForm from "./EmailPasswordForm";
import { useState } from "react";

type EmailPasswordProps = {
  user: User | null;
};

export default function EmailPasswordClient({ user }: EmailPasswordProps) {
  const supabase = getSupabaseBrowserClient();
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit({ mode, email, password }: EmailPasswordFormData) {
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ 
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        }
       });
      setStatus( error ? error.message : "Check your inbox for confirmation");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setStatus( error ? error.message : "Successfully logged in" );
    }
  }

  return (
    <AuthPageDescription
      title="Email + Password"
      intro="Classic credentials—users enter details, Supabase secures the rest while getSession + onAuthStateChange keep the UI live."
      steps={[
        "Toggle between sign up and sign in.",
        "Submit to watch the session card refresh instantly.",
        "Sign out to reset the listener.",
      ]}
    >
      <div className="flex max-w-full justify-center">
        <div className="rounded-[32px] w-full border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(2,6,23,0.65)] backdrop-blur">
          {user && (
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur">
              Signed in as <span className="font-medium text-white">{user.email}</span>
            </div>
          )}
          {!user && <EmailPasswordForm onSubmit={handleSubmit} status = {status} />}
        </div>
      </div>
    </AuthPageDescription>
  );
}
