"use client";

import { createContext, useContext } from "react";

export type ProgressContextValue = {
  userId: string | null;
  courseSlug: string;
  completed: Set<string>;
  toggle: (moduleNumber: string) => void;
};

export const ProgressContext = createContext<ProgressContextValue | null>(null);

export function useModuleProgress() {
  return useContext(ProgressContext);
}
