import { Link } from 'react-router-dom';
import { BRAND } from '../config/brand';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-aritium-section">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-2">
        <div>
          <img src={BRAND.logo} alt="Aritium logo" className="mb-2 h-8 object-contain" onError={(e) => ((e.currentTarget.style.display = 'none'))} />
          <h3 className="font-bold">{BRAND.name}</h3>
          <p className="text-sm text-aritium-text/80">Formación en IoT e IA para el futuro profesional.</p>
        </div>
        <div className="flex gap-4 md:justify-end">
          <Link to="/">Inicio</Link><Link to="/cursos">Cursos</Link><Link to="/contacto">Contacto</Link><Link to="/aviso-legal">Aviso legal</Link>
        </div>
      </div>
    </footer>
  );
}
