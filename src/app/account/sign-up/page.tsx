import Link from "next/link";
import PageHero from "@/components/PageHero";
import { signUp } from "../actions";

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-md">
      <PageHero
        eyebrow="Account"
        title="Create an account"
        description="Track which course modules you've completed, and see how your team is progressing."
      />

      {error && (
        <div className="mb-6 rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <form action={signUp} className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Name</span>
          <input
            name="display_name"
            type="text"
            required
            placeholder="First name or nickname"
            className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Team number</span>
          <input
            name="team_number"
            type="text"
            placeholder="e.g. 90210A (optional, can add later)"
            className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Password</span>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Already have an account?{" "}
        <Link href="/account/sign-in" className="font-medium text-brand-green-light hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
