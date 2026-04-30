import { Link } from 'react-router-dom';
import { courses, learningPaths } from '../data/courses';
import SectionTitle from '../components/ui/SectionTitle';
import { BRAND } from '../config/brand';

export default function HomePage() {
  const featured = courses.slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0d1424] p-8">
        <img src={BRAND.heroImage} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative">
          <p className="text-sm uppercase text-cyan-300">Aritium Academy</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">Formación tecnológica con estética moderna y enfoque profesional</h1>
          <p className="mt-3 max-w-2xl text-aritium-text/90">Aprende IoT, IA y Datos con rutas guiadas, lecciones prácticas y seguimiento continuo.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/cursos" className="rounded bg-cyan-400 px-4 py-2 font-semibold text-black">Explorar cursos</Link>
            <Link to="/login" className="rounded border border-white/30 px-4 py-2">Comenzar ahora</Link>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="Rutas de aprendizaje" subtitle="Especialízate con itinerarios orientados al mercado." />
        <div className="grid gap-4 md:grid-cols-3">
          {learningPaths.map((path) => (
            <article key={path.id} className="overflow-hidden rounded-2xl border border-white/10 bg-aritium-card">
              <img src={path.image} alt={path.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{path.title}</h3>
                <p className="text-sm text-aritium-text/90">{path.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Cursos destacados" subtitle="Empieza por los más populares de la comunidad." />
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((course) => (
            <article key={course.id} className="overflow-hidden rounded-2xl border border-white/10 bg-aritium-card">
              <img src={course.coverImage} alt={course.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm text-cyan-300">★ {course.rating} · {course.students} estudiantes</p>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-aritium-text/90">{course.description}</p>
                <Link className="mt-3 inline-block text-cyan-300" to={`/curso/${course.slug}`}>Ver curso</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
