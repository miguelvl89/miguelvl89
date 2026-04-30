export type CourseLevel = 'intro' | 'master';

export type Lesson = {
  id: string;
  title: string;
  duration: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: CourseLevel;
  duration: string;
  modules: string[];
  tags: string[];
  instructor: string;
  rating: number;
  students: number;
  lessons: Lesson[];
  path: 'iot' | 'ia' | 'datos';
};

export type UserProgress = {
  courseId: string;
  completedLessons: number;
};
