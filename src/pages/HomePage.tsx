import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { BRAND } from '../config/brand';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative min-h-[560px] overflow-hidden">
        <img src={BRAND.heroImage} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#05275c]/45" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-8 py-16 md:grid-cols-2 md:py-24">
          <div className="hidden md:block">
            <div className="mt-10 h-80 w-80 border-[18px] border-white/90" />
          </div>
          <div className="self-center text-white">
            <h1 className="text-5xl font-bold uppercase leading-tight text-[#d9ff00] md:text-7xl">El corazón de Aritium Academy</h1>
            <p className="mt-4 text-2xl font-medium">Formación en Artificial Intelligence of Things para profesionales.</p>
            <Link to="/cursos" className="mt-8 inline-block rounded bg-[#3b35ff] px-6 py-3 font-semibold">Ver programas</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-semibold text-slate-900">Aritium Platform</h2>
        <p className="mt-3 max-w-4xl text-lg text-slate-600">Nuestra academia materializa el concepto AIoT para crear talento capaz de construir productos inteligentes.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <article key={course.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <img src={course.coverImage} alt={course.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
                <p className="mt-2 text-slate-600">{course.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
