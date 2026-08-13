"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/nav";
import { GATED_PATHS, isSafetyQuizPassed, SAFETY_QUIZ_EVENT } from "@/lib/safetyGate";

function LockIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-3 w-3"
      aria-label="Locked"
    >
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [passed, setPassed] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-black text-brand-gold">
            V
          </span>
          <span>
            VEX Basics <span className="text-brand-green dark:text-brand-green-light">101</span>
          </span>
        </Link>

        <nav className="hidden flex-wrap items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            const locked = !passed && GATED_PATHS.includes(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-green text-white"
                    : "text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
                {locked && <LockIcon />}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-black/10 px-3 py-2 text-sm font-medium lg:hidden dark:border-white/20"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 px-4 py-3 lg:hidden dark:border-white/10">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            const locked = !passed && GATED_PATHS.includes(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-brand-green text-white"
                    : "text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
                {locked && <LockIcon />}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
