import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export async function getCourseProgress(courseSlug: string) {
  if (!isSupabaseConfigured()) {
    return { userId: null as string | null, completedModules: [] as string[] };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { userId: null as string | null, completedModules: [] as string[] };
  }

  const { data } = await supabase
    .from("module_progress")
    .select("module_number")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug);

  return {
    userId: user.id as string | null,
    completedModules: (data ?? []).map((r) => r.module_number as string),
  };
}

/** Per-course completed-module counts for the signed-in user, keyed by course slug. */
export async function getAllProgressCounts(): Promise<{
  signedIn: boolean;
  counts: Map<string, number>;
}> {
  const counts = new Map<string, number>();
  if (!isSupabaseConfigured()) return { signedIn: false, counts };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { signedIn: false, counts };

  const { data } = await supabase.from("module_progress").select("course_slug").eq("user_id", user.id);

  for (const row of data ?? []) {
    counts.set(row.course_slug, (counts.get(row.course_slug) ?? 0) + 1);
  }

  return { signedIn: true, counts };
}
