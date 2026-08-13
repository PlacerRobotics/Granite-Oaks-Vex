"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSafetyQuizPassed, SAFETY_QUIZ_EVENT } from "@/lib/safetyGate";

export type Module = {
  href: string;
  number: string;
  title: string;
  desc: string;
  tag: string;
  alwaysOpen?: boolean;
};

export default function ModuleGrid({ modules }: { modules: Module[] }) {
  const [passed, setPassed] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setPassed(isSafetyQuizPassed());
    check();
    window.addEventListener(SAFETY_QUIZ_EVENT, check);
    window.addEventListener("storage", check);
    return () => {
      window.removeEventListener(SAFETY_QUIZ_EVENT, check);
      window.removeEventListener("storage", check);
    };
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m) => {
        const locked = !m.alwaysOpen && passed === false;
        const badgeClass = locked
          ? "bg-neutral-900/10 text-neutral-500 dark:bg-white/10 dark:text-neutral-400"
          : m.alwaysOpen
            ? "bg-brand-gold/15 text-amber-700 dark:text-brand-gold-light"
            : "bg-brand-green/10 text-brand-green dark:text-brand-green-light";

        return (
          <Link
            key={m.href}
            href={m.href}
            className="group rounded-xl border border-black/10 p-5 transition-colors hover:border-brand-green/40 hover:bg-brand-green/5 dark:border-white/10 dark:hover:bg-brand-green/10"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-xs text-neutral-400">{m.number}</span>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${badgeClass}`}
              >
                {locked ? "Locked" : m.tag}
              </span>
            </div>
            <h3 className="mt-3 font-bold text-neutral-900 group-hover:text-brand-green dark:text-neutral-100 dark:group-hover:text-brand-green-light">
              {m.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{m.desc}</p>
          </Link>
        );
      })}
    </div>
  );
}
