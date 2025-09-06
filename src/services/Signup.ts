import supabase from "../lib/supabase";

export async function signup(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });
  console.log("Signup data:", data);
  console.log("Signup error:", error);

  return { data, error };
}
