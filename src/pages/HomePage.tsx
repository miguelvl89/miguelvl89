import { Link } from 'react-router-dom';
import { featuredMasters, introCourses } from '../data/courses';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-aritium-section p-8">
        <h1 className="text-4xl font-bold">Aprende IoT e IA en Aritium Academy</h1>
        <p className="mt-3 text-aritium-text/90">Programas diseñados para crear perfiles técnicos con impacto real.</p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Cursos introductorios</h2>
        <div className="grid gap-4 md:grid-cols-3">{introCourses.map((c) => <Link key={c.path} className="rounded-xl bg-aritium-card p-4" to={c.path}>{c.title}</Link>)}</div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Másters destacados</h2>
        <div className="grid gap-4 md:grid-cols-2">{featuredMasters.map((m) => <Link key={m.path} className="rounded-xl bg-aritium-card p-4" to={m.path}>{m.title}</Link>)}</div>
      </section>
      <section className="rounded-xl bg-aritium-section p-6"><h3 className="text-xl font-semibold">Formación con futuro</h3></section>
      <section className="rounded-xl bg-aritium-card p-6"><h3 className="text-xl font-semibold">Testimonios</h3></section>
    </div>
  );
}
