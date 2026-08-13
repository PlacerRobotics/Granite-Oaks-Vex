"use client";

import { useState } from "react";
import Link from "next/link";
import { SAFETY_QUIZ } from "@/data/safetyQuiz";
import { recordSafetyQuizResult, resetSafetyQuiz, SAFETY_PASS_THRESHOLD } from "@/lib/safetyGate";

type Answers = Record<number, number>;

export default function SafetyQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<{ correct: number; total: number; passed: boolean } | null>(
    null
  );

  const allAnswered = Object.keys(answers).length === SAFETY_QUIZ.length;

  function selectAnswer(qIndex: number, optIndex: number) {
    if (result) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!allAnswered) return;

    let correct = 0;
    SAFETY_QUIZ.forEach((q, i) => {
      if (answers[i] === q.correctIndex) correct += 1;
    });

    const passed = !!recordSafetyQuizResult(correct, SAFETY_QUIZ.length);
    setResult({ correct, total: SAFETY_QUIZ.length, passed });
  }

  function retake() {
    resetSafetyQuiz();
    setAnswers({});
    setResult(null);
  }

  if (result) {
    const pct = Math.round((result.correct / result.total) * 100);
    return (
      <div
        className={`rounded-2xl border p-8 text-center ${
          result.passed
            ? "border-brand-green/40 bg-brand-green/10"
            : "border-amber-500/40 bg-amber-500/10"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Quiz result
        </p>
        <p className="mt-2 text-4xl font-extrabold">
          {result.correct}/{result.total}{" "}
          <span className="text-lg font-semibold text-neutral-400">({pct}%)</span>
        </p>

        {result.passed ? (
          <>
            <p className="mt-3 font-semibold text-brand-green-light">
              Passed &mdash; the rest of VEX Basics 101 is now unlocked on this device.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-md bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              Go explore the site
            </Link>
          </>
        ) : (
          <>
            <p className="mt-3 font-semibold text-amber-400">
              You need {Math.ceil(result.total * SAFETY_PASS_THRESHOLD)}/{result.total} (70%)
              to unlock the site. Review the guide above and try again.
            </p>
            <button
              onClick={retake}
              className="mt-6 rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Retake the quiz
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      {SAFETY_QUIZ.map((q, qIndex) => (
        <fieldset
          key={qIndex}
          className="rounded-xl border border-white/10 bg-white/5 p-5"
        >
          <legend className="px-1 text-sm font-semibold">
            {qIndex + 1}. {q.question}
          </legend>
          <div className="mt-3 grid gap-2">
            {q.options.map((opt, optIndex) => {
              const selected = answers[qIndex] === optIndex;
              return (
                <label
                  key={optIndex}
                  className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors ${
                    selected
                      ? "border-brand-green bg-brand-green/10"
                      : "border-white/10 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${qIndex}`}
                    checked={selected}
                    onChange={() => selectAnswer(qIndex, optIndex)}
                    className="accent-[#1a7a42]"
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      <button
        type="submit"
        disabled={!allAnswered}
        className="w-full rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {allAnswered
          ? "Submit quiz"
          : `Answer all questions (${Object.keys(answers).length}/${SAFETY_QUIZ.length})`}
      </button>
    </form>
  );
}
