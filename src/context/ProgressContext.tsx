import { createContext, useMemo, useState } from 'react';
import type { UserProgress } from '../types';

type ProgressContextValue = {
  progress: UserProgress[];
  completeLesson: (courseId: string) => void;
};

export const ProgressContext = createContext<ProgressContextValue | null>(null);

const initialProgress: UserProgress[] = [
  { courseId: 'iot-101', completedLessons: 1 },
  { courseId: 'ia-101', completedLessons: 2 }
];

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress[]>(initialProgress);

  const value = useMemo(
    () => ({
      progress,
      completeLesson: (courseId: string) => {
        setProgress((prev) => {
          const existing = prev.find((p) => p.courseId === courseId);
          if (!existing) return [...prev, { courseId, completedLessons: 1 }];
          return prev.map((p) => (p.courseId === courseId ? { ...p, completedLessons: p.completedLessons + 1 } : p));
        });
      }
    }),
    [progress]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
