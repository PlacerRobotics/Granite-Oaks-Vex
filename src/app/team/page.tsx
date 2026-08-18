import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import PageHero from "@/components/PageHero";
import { TOTAL_MODULES } from "@/data/courseRegistry";

export default async function TeamPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div>
        <PageHero
          eyebrow="Team"
          title="Accounts aren't set up yet"
          description="The site owner needs to add Supabase credentials before team tracking works."
        />
      </div>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account/sign-in");
  }

  const { data: me } = await supabase
    .from("profiles")
    .select("team_number")
    .eq("id", user.id)
    .single();

  if (!me?.team_number) {
    return (
      <div>
        <PageHero
          eyebrow="Team"
          title="No team set yet"
          description="Add your team number on your account page to see your team's combined progress."
        />
        <Link
          href="/account"
          className="inline-block rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark"
        >
          Go to your account
        </Link>
      </div>
    );
  }

  const { data: teammates } = await supabase
    .from("profiles")
    .select("id, display_name")
    .eq("team_number", me.team_number);

  const teammateIds = (teammates ?? []).map((t) => t.id);

  const { data: progressRows } = await supabase
    .from("module_progress")
    .select("user_id")
    .in("user_id", teammateIds.length > 0 ? teammateIds : ["00000000-0000-0000-0000-000000000000"]);

  const countByUser = new Map<string, number>();
  for (const row of progressRows ?? []) {
    countByUser.set(row.user_id, (countByUser.get(row.user_id) ?? 0) + 1);
  }

  const roster = (teammates ?? [])
    .map((t) => ({ ...t, completed: countByUser.get(t.id) ?? 0 }))
    .sort((a, b) => b.completed - a.completed);

  return (
    <div>
      <PageHero
        eyebrow="Team"
        title={`Team ${me.team_number}`}
        description="Course progress across everyone signed up with this team number."
      />

      <div className="grid gap-3">
        {roster.map((member) => {
          const pct = Math.round((member.completed / TOTAL_MODULES) * 100);
          const isMe = member.id === user.id;
          return (
            <div
              key={member.id}
              className={`rounded-lg border p-4 ${
                isMe ? "border-brand-green/50 bg-brand-green/10" : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-neutral-100">
                  {member.display_name}
                  {isMe && <span className="ml-2 text-xs text-brand-green-light">(you)</span>}
                </p>
                <span className="text-sm text-neutral-400">
                  {member.completed}/{TOTAL_MODULES}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-brand-green" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}

        {roster.length === 0 && (
          <p className="text-sm text-neutral-400">
            No one else has joined team {me.team_number} yet.
          </p>
        )}
      </div>
    </div>
  );
}
