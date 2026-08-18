"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

const NOT_CONFIGURED =
  "Accounts aren't set up on this site yet — the site owner needs to add Supabase credentials.";

export async function signUp(formData: FormData) {
  if (!isSupabaseConfigured()) {
    redirect("/account/sign-up?error=" + encodeURIComponent(NOT_CONFIGURED));
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const displayName = String(formData.get("display_name") ?? "").trim();
  const teamNumber = String(formData.get("team_number") ?? "").trim().toUpperCase();

  if (!email || !password || !displayName) {
    redirect("/account/sign-up?error=" + encodeURIComponent("Fill in all required fields."));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName,
        team_number: teamNumber || null,
      },
    },
  });

  if (error) {
    redirect("/account/sign-up?error=" + encodeURIComponent(error.message));
  }

  redirect("/account");
}

export async function signIn(formData: FormData) {
  if (!isSupabaseConfigured()) {
    redirect("/account/sign-in?error=" + encodeURIComponent(NOT_CONFIGURED));
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/account/sign-in?error=" + encodeURIComponent(error.message));
  }

  redirect("/account");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

export async function updateTeam(formData: FormData) {
  const teamNumber = String(formData.get("team_number") ?? "").trim().toUpperCase();
  const displayName = String(formData.get("display_name") ?? "").trim();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account/sign-in");
  }

  await supabase
    .from("profiles")
    .update({ team_number: teamNumber || null, display_name: displayName || undefined })
    .eq("id", user.id);

  redirect("/account");
}
