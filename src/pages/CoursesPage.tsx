import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import SectionTitle from '../components/ui/SectionTitle';

export default function CoursesPage() {
  return (
    <section>
      <SectionTitle title="Biblioteca de cursos" subtitle="Contenido práctico y actualizado para perfiles tech." />
      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <article key={course.id} className="overflow-hidden rounded-2xl border border-white/10 bg-aritium-card">
            <img src={course.coverImage} alt={course.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="uppercase text-cyan-300">{course.level}</span>
                <span>⭐ {course.rating}</span>
              </div>
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="mt-2 text-sm text-aritium-text/90">{course.description}</p>
              <p className="mt-2 text-xs text-aritium-text/70">Por {course.instructor} · {course.duration}</p>
              <Link className="mt-4 inline-block text-cyan-300" to={`/curso/${course.slug}`}>Ver temario</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
