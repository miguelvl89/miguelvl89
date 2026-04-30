import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/cursos', label: 'Cursos' },
    { to: '/certificaciones', label: 'Certificaciones' },
    { to: '/mentoria', label: 'Mentoría' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-aritium-dark/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-aritium-primary">Aritium Academy</Link>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>☰</button>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          <Link className="text-aritium-primary" to={isLoggedIn ? '/dashboard' : '/login'}>{isLoggedIn ? 'Dashboard' : 'Login'}</Link>
          {isLoggedIn && <button className="text-sm" onClick={logout}>Salir</button>}
        </div>
      </nav>
      {open && (
        <div className="grid gap-2 px-4 pb-4 md:hidden">
          {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          <Link className="text-aritium-primary" to={isLoggedIn ? '/dashboard' : '/login'}>{isLoggedIn ? 'Dashboard' : 'Login'}</Link>
        </div>
      )}
    </header>
  );
}
