import { createSupabseServerClient } from "@/lib/supabse/server-client";
import EmailPasswordClient from "./EmailPasswordClient";

export default async function EmailPasswordPage(){
    const supabase = await createSupabseServerClient()
    const {
        data: { user},
    } = await supabase.auth.getUser();
    console.log({user});
 
    return  <EmailPasswordClient user={user}/>
}