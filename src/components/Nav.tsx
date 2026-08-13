"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/nav";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-white">
            V
          </span>
          <span>
            VEX Basics <span className="text-red-600">101</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-red-600 text-white"
                    : "text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
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
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-red-600 text-white"
                    : "text-neutral-700 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
