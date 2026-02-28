import { createSupabseServerClient } from "@/lib/supabse/server-client";
import EmailPasswordClient from "./EmailPasswordClient";

export default async function EmailPasswordPage(){
    const supabase = await createSupabseServerClient()
    const {
        data: { user},
    } = await supabase.auth.getUser();
 
    return (
      <div className="min-h-screen h-screen flex items-center justify-center bg-red-900">
        <EmailPasswordClient user={user} />
      </div>
    );
}