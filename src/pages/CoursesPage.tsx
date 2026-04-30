import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

export default function CoursesPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Biblioteca de cursos</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <article key={course.id} className="rounded-xl bg-aritium-card p-5">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="uppercase text-aritium-primary">{course.level}</span>
              <span>⭐ {course.rating}</span>
            </div>
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="mt-2 text-sm text-aritium-text/90">{course.description}</p>
            <p className="mt-2 text-xs text-aritium-text/70">Por {course.instructor} · {course.duration}</p>
            <Link className="mt-4 inline-block text-aritium-primary" to={`/curso/${course.slug}`}>Ver temario</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
