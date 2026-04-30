import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import useAuth from '../../hooks/useAuth';
import useProgress from '../../hooks/useProgress';

export default function DashboardPage() {
  const { userName } = useAuth();
  const { progress } = useProgress();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Tu progreso, {userName}</h1>
      <p className="text-aritium-text/80">Sigue tu ruta y completa lecciones para subir de nivel.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => {
          const tracked = progress.find((p) => p.courseId === course.id);
          const completed = tracked?.completedLessons ?? 0;
          const pct = Math.min(100, Math.round((completed / course.lessons.length) * 100));

          return (
            <article key={course.id} className="rounded-xl bg-aritium-card p-5">
              <h2 className="font-semibold">{course.title}</h2>
              <p className="text-sm">Lecciones completadas: {completed}/{course.lessons.length} ({pct}%)</p>
              <div className="mt-2 h-2 rounded bg-white/20"><div className="h-full rounded bg-aritium-primary" style={{ width: `${pct}%` }} /></div>
              <Link className="mt-3 inline-block text-sm text-aritium-primary" to={`/curso/${course.slug}`}>Continuar curso</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
