export const SAFETY_QUIZ_PASSED_KEY = "vex101_safety_quiz_passed";
export const SAFETY_QUIZ_SCORE_KEY = "vex101_safety_quiz_score";
export const SAFETY_QUIZ_EVENT = "vex101-safety-quiz-changed";

export const SAFETY_PASS_THRESHOLD = 0.7;

export function isSafetyQuizPassed(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(SAFETY_QUIZ_PASSED_KEY) === "true";
}

export function recordSafetyQuizResult(correct: number, total: number) {
  if (typeof window === "undefined") return;
  const pct = total > 0 ? correct / total : 0;
  const passed = pct >= SAFETY_PASS_THRESHOLD;
  window.localStorage.setItem(SAFETY_QUIZ_PASSED_KEY, passed ? "true" : "false");
  window.localStorage.setItem(SAFETY_QUIZ_SCORE_KEY, String(Math.round(pct * 100)));
  window.dispatchEvent(new Event(SAFETY_QUIZ_EVENT));
  return passed;
}

export function resetSafetyQuiz() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SAFETY_QUIZ_PASSED_KEY);
  window.localStorage.removeItem(SAFETY_QUIZ_SCORE_KEY);
  window.dispatchEvent(new Event(SAFETY_QUIZ_EVENT));
}

export const GATED_PATHS = [
  "/building",
  "/cad",
  "/coding",
  "/notebook",
  "/judging",
  "/strategy",
  "/community",
  "/glossary",
  "/tools",
  "/lookup",
];
