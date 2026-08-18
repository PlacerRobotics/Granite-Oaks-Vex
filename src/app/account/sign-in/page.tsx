import Link from "next/link";
import PageHero from "@/components/PageHero";
import { signIn } from "../actions";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-md">
      <PageHero
        eyebrow="Account"
        title="Sign in"
        description="Pick up your saved course progress."
      />

      {error && (
        <div className="mb-6 rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <form action={signIn} className="space-y-4">
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
            className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Don&apos;t have an account?{" "}
        <Link href="/account/sign-up" className="font-medium text-brand-green-light hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
