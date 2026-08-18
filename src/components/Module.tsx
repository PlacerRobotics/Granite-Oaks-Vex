"use client";

import Link from "next/link";
import { useModuleProgress } from "./progress/ProgressContext";

export default function Module({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const progress = useModuleProgress();
  const done = progress?.completed.has(number) ?? false;

  return (
    <section
      className={`mb-8 rounded-xl border p-6 transition-colors ${
        done ? "border-brand-green/50 bg-brand-green/5" : "border-white/10 bg-white/5"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-brand-gold-light">{number}</span>
          <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        </div>

        {progress &&
          (progress.userId ? (
            <button
              type="button"
              onClick={() => progress.toggle(number)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                done
                  ? "bg-brand-green/20 text-brand-green-light hover:bg-brand-green/30"
                  : "bg-white/10 text-neutral-300 hover:bg-white/20"
              }`}
            >
              {done ? "✓ Completed" : "Mark complete"}
            </button>
          ) : (
            <Link
              href="/account/sign-in"
              className="shrink-0 text-xs text-neutral-500 hover:text-brand-green-light hover:underline"
            >
              Sign in to track
            </Link>
          ))}
      </div>
      <div className="mt-3 space-y-3 text-sm text-neutral-300">{children}</div>
    </section>
  );
}
