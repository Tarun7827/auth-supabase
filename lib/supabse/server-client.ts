import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function getEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return { supabaseUrl, supabaseKey };
}

export async function createSupabseServerClient() {
  const { supabaseUrl, supabaseKey} = getEnvironmentVariables();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseKey , {
    cookies: {
      getAll(){
        return cookieStore.getAll();
      },
      setAll(cookesToSet) {
        try { cookesToSet.forEach(({name, value, options}) => 
        cookieStore.set(name, value, options)
      );
    }catch(error) {
      console.log(error)
    }
      }
    }
  });

  
}

