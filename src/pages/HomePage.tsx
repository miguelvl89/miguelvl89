import { Link } from 'react-router-dom';
import { courses, learningPaths } from '../data/courses';

export default function HomePage() {
  const featured = courses.slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="rounded-2xl bg-gradient-to-r from-aritium-section to-aritium-card p-8">
        <p className="text-sm uppercase text-aritium-primary">Plataforma de formación</p>
        <h1 className="mt-2 text-4xl font-bold">Aprende IoT e IA como en una academia tipo Platzi</h1>
        <p className="mt-3 max-w-2xl text-aritium-text/90">Rutas de aprendizaje, clases por lección, progreso en tiempo real y comunidad técnica.</p>
        <div className="mt-6 flex gap-3">
          <Link to="/cursos" className="rounded bg-aritium-primary px-4 py-2">Explorar cursos</Link>
          <Link to="/login" className="rounded border border-white/20 px-4 py-2">Comenzar ahora</Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Rutas de aprendizaje</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {learningPaths.map((path) => (
            <article key={path.id} className="rounded-xl bg-aritium-card p-5">
              <h3 className="text-lg font-semibold">{path.title}</h3>
              <p className="text-sm text-aritium-text/90">{path.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Cursos destacados</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((course) => (
            <article key={course.id} className="rounded-xl bg-aritium-card p-5">
              <p className="text-sm text-aritium-primary">★ {course.rating} · {course.students} estudiantes</p>
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-aritium-text/90">{course.description}</p>
              <Link className="mt-3 inline-block text-aritium-primary" to={`/curso/${course.slug}`}>Ver curso</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
