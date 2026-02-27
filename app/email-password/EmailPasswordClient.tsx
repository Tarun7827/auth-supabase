"use client";

import { User } from "@supabase/supabase-js";

type EmailPasswordProps = {
    user: User | null;
};

export default function EmailPasswordClient({ user }: EmailPasswordProps) {
  return (
    <div className="text-sm text-zinc-700">
      {user ? `Signed in as ${user.email}` : "Not signed in"}
    </div>
  );
}

