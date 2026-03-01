"use client";

import { getSupabaseBrowserClient } from "@/lib/supabse/browser-client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import UserSession from "../Components/UserSession";
import GoogleLoginPanel from "./GoogleLoginPanel";

type EmailPasswordProps = {
  user: User | null;
};

export default function GoogleLoginClient({ user }: EmailPasswordProps) {
  const supabase = getSupabaseBrowserClient();
  const [currentUser, setCurrentUser] = useState<User | null>(user);

  useEffect( () => {
    const { data: listener} = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setCurrentUser(session?.user ?? null);
      } 
    );

    return () => { listener?.subscription.unsubscribe(); }
  }, [supabase])

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/google-login`,
        skipBrowserRedirect: false,
      },
    });
  }

  return (
    <div className="flex max-w-full h-full justify-center">
      <div className="rounded-[32px] w-full border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(2,6,23,0.65)] backdrop-blur">
        {!currentUser && <GoogleLoginPanel onSubmit={handleGoogleLogin}/>}
        {currentUser && <UserSession user={currentUser} />}
      </div>
    </div>
  );
}
