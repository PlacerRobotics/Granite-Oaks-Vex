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
          ? "bg-white/10 text-neutral-300"
          : m.alwaysOpen
            ? "bg-brand-gold/15 text-brand-gold-light"
            : "bg-brand-green/15 text-brand-green-light";

        return (
          <Link
            key={m.href}
            href={m.href}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-brand-green/50 hover:bg-brand-green/10"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-xs text-neutral-500">{m.number}</span>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${badgeClass}`}
              >
                {locked ? "Locked" : m.tag}
              </span>
            </div>
            <h3 className="mt-3 font-bold text-neutral-100 group-hover:text-brand-green-light">
              {m.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-300">{m.desc}</p>
          </Link>
        );
      })}
    </div>
  );
}
