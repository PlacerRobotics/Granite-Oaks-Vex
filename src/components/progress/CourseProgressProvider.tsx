"use client";

import { useCallback, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ProgressContext } from "./ProgressContext";

export default function CourseProgressProvider({
  courseSlug,
  initialUserId,
  initialCompleted,
  children,
}: {
  courseSlug: string;
  initialUserId: string | null;
  initialCompleted: string[];
  children: React.ReactNode;
}) {
  const [completed, setCompleted] = useState<Set<string>>(new Set(initialCompleted));

  const toggle = useCallback(
    (moduleNumber: string) => {
      if (!initialUserId) return;
      const supabase = createClient();
      const isDone = completed.has(moduleNumber);

      setCompleted((prev) => {
        const next = new Set(prev);
        if (isDone) next.delete(moduleNumber);
        else next.add(moduleNumber);
        return next;
      });

      if (isDone) {
        supabase
          .from("module_progress")
          .delete()
          .eq("user_id", initialUserId)
          .eq("course_slug", courseSlug)
          .eq("module_number", moduleNumber)
          .then();
      } else {
        supabase
          .from("module_progress")
          .insert({ user_id: initialUserId, course_slug: courseSlug, module_number: moduleNumber })
          .then();
      }
    },
    [completed, courseSlug, initialUserId]
  );

  const value = useMemo(
    () => ({ userId: initialUserId, courseSlug, completed, toggle }),
    [initialUserId, courseSlug, completed, toggle]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
