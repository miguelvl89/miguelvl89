import { Navigate, useParams } from 'react-router-dom';
import { findCourseBySlug } from '../data/courses';
import useProgress from '../hooks/useProgress';

export default function CourseDetailPage() {
  const { slug = '' } = useParams();
  const course = findCourseBySlug(slug);
  const { completeLesson, progress } = useProgress();

  if (!course) return <Navigate to="/cursos" replace />;

  const tracked = progress.find((p) => p.courseId === course.id);
  const completed = tracked?.completedLessons ?? 0;

  return (
    <section className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 p-8">
        <img src={course.coverImage} alt={course.title} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative">
          <p className="text-sm text-cyan-300">{course.path.toUpperCase()} · {course.level.toUpperCase()}</p>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="mt-2">{course.description}</p>
          <p className="text-sm text-aritium-text/80">Instructor: {course.instructor} · Duración: {course.duration}</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/30 p-6">
        <h2 className="text-xl font-semibold">Clase en reproducción</h2>
        <div className="mt-3 flex h-56 items-center justify-center rounded bg-black/50">🎬 Player de video (placeholder)</div>
      </div>

      <div className="rounded-xl border border-white/10 bg-aritium-card p-6">
        <h2 className="text-xl font-semibold">Temario ({completed}/{course.lessons.length} completadas)</h2>
        <ul className="mt-3 space-y-2">
          {course.lessons.map((lesson, idx) => (
            <li key={lesson.id} className="flex items-center justify-between rounded bg-black/20 p-3">
              <span>{idx + 1}. {lesson.title}</span>
              <span className="text-sm text-aritium-text/80">{lesson.duration}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 rounded bg-cyan-400 px-4 py-2 font-semibold text-black" onClick={() => completeLesson(course.id)}>Marcar lección completada</button>
      </div>
    </section>
  );
}
