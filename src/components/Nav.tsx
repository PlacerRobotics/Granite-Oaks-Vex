"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/nav";
import { GATED_PATHS, isSafetyQuizPassed, SAFETY_QUIZ_EVENT } from "@/lib/safetyGate";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/client";

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
  const [signedIn, setSignedIn] = useState(false);

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

  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => setSignedIn(!!data.user));

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session?.user);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-black text-brand-gold">
            V
          </span>
          <span>
            VEX Basics <span className="text-brand-green-light">101</span>
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
                    : "text-neutral-300 hover:bg-white/10"
                }`}
              >
                {item.label}
                {locked && <LockIcon />}
              </Link>
            );
          })}
          <Link
            href={signedIn ? "/account" : "/account/sign-in"}
            className={`ml-1 flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
              pathname.startsWith("/account") || pathname === "/team"
                ? "border-brand-gold bg-brand-gold/15 text-brand-gold-light"
                : "border-white/20 text-neutral-300 hover:bg-white/10"
            }`}
          >
            {signedIn ? "Account" : "Sign In"}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 lg:hidden">
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
                    : "text-neutral-300 hover:bg-white/10"
                }`}
              >
                {item.label}
                {locked && <LockIcon />}
              </Link>
            );
          })}
          <Link
            href={signedIn ? "/account" : "/account/sign-in"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-white/10"
          >
            {signedIn ? "Account" : "Sign In"}
          </Link>
        </nav>
      )}
    </header>
  );
}
