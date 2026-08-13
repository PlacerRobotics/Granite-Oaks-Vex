"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSafetyQuizPassed, SAFETY_QUIZ_EVENT } from "@/lib/safetyGate";

export default function SafetyGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"checking" | "locked" | "unlocked">("checking");

  useEffect(() => {
    const check = () => setStatus(isSafetyQuizPassed() ? "unlocked" : "locked");
    check();
    window.addEventListener(SAFETY_QUIZ_EVENT, check);
    window.addEventListener("storage", check);
    return () => {
      window.removeEventListener(SAFETY_QUIZ_EVENT, check);
      window.removeEventListener("storage", check);
    };
  }, []);

  if (status === "checking") {
    return <div className="h-64" aria-hidden="true" />;
  }

  if (status === "locked") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-gold/30 bg-brand-black px-6 py-16 text-center text-white">
        <span className="rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold-light">
          Locked
        </span>
        <h2 className="mt-4 max-w-md text-2xl font-extrabold tracking-tight">
          Pass the safety quiz to unlock this page
        </h2>
        <p className="mt-3 max-w-md text-sm text-neutral-300">
          Every guide on VEX Basics 101 &mdash; building, CAD, coding, judging, the glossary,
          the calculators, all of it &mdash; is gated behind a short electronics-care and
          lab-safety check. Score 70% or higher once and it stays unlocked on this device.
        </p>
        <Link
          href="/safety"
          className="mt-6 rounded-md bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
        >
          Take the safety quiz
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
