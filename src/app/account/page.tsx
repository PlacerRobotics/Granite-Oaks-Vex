import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { signOut, updateTeam } from "./actions";
import PageHero from "@/components/PageHero";
import { COURSE_REGISTRY, TOTAL_MODULES } from "@/data/courseRegistry";

export default async function AccountPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div>
        <PageHero
          eyebrow="Account"
          title="Accounts aren't set up yet"
          description="The site owner needs to add Supabase credentials before sign-in works."
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

  const [{ data: profile }, { data: progressRows }] = await Promise.all([
    supabase.from("profiles").select("display_name, team_number").eq("id", user.id).single(),
    supabase.from("module_progress").select("course_slug, module_number").eq("user_id", user.id),
  ]);

  const completedByCourse = new Map<string, number>();
  for (const row of progressRows ?? []) {
    completedByCourse.set(row.course_slug, (completedByCourse.get(row.course_slug) ?? 0) + 1);
  }
  const totalCompleted = progressRows?.length ?? 0;

  return (
    <div>
      <PageHero
        eyebrow="Account"
        title={`Hey, ${profile?.display_name ?? "there"}`}
        description="Your saved course progress, and your team info."
      />

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-4xl font-extrabold text-brand-gold-light">
            {totalCompleted}
            <span className="text-lg font-semibold text-neutral-400">/{TOTAL_MODULES}</span>
          </p>
          <p className="mt-1 text-sm font-semibold text-white">modules completed</p>
        </div>

        <form action={updateTeam} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Name
            </span>
            <input
              name="display_name"
              type="text"
              defaultValue={profile?.display_name ?? ""}
              className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white"
            />
          </label>
          <label className="mt-3 block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Team number
            </span>
            <input
              name="team_number"
              type="text"
              defaultValue={profile?.team_number ?? ""}
              placeholder="e.g. 90210A"
              className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500"
            />
          </label>
          <button
            type="submit"
            className="mt-3 rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Save
          </button>
        </form>
      </div>

      {profile?.team_number && (
        <div className="mb-10 rounded-md border-l-4 border-brand-green bg-brand-green/10 px-5 py-4 text-sm text-neutral-300">
          You&apos;re on team <strong className="text-brand-green-light">{profile.team_number}</strong>.{" "}
          <Link href="/team" className="font-medium text-brand-green-light hover:underline">
            See your team&apos;s progress &rarr;
          </Link>
        </div>
      )}

      <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-green-light">
        Course progress
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {COURSE_REGISTRY.map((c) => {
          const done = completedByCourse.get(c.slug) ?? 0;
          const pct = Math.round((done / c.moduleCount) * 100);
          return (
            <Link
              key={c.slug}
              href={c.href}
              className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-brand-green/50 hover:bg-brand-green/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {c.track}
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  {done}/{c.moduleCount}
                </span>
              </div>
              <p className="mt-1 font-semibold text-neutral-100">{c.title}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-brand-green"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <form action={signOut} className="mt-10">
        <button
          type="submit"
          className="rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
