import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { BRAND } from '../config/brand';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const links = [
    { to: '/smart-healthcare', label: 'Smart Healthcare' },
    { to: '/', label: 'Plataforma' },
    { to: '/casos-exito', label: 'Casos de éxito' },
    { to: '/quienes-somos', label: 'Quiénes Somos' },
    { to: '/recursos', label: 'Recursos' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={BRAND.logo} alt="Aritium" className="h-9 object-contain" />
        </Link>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>☰</button>
        <div className="hidden items-center gap-6 text-[15px] font-medium text-slate-700 md:flex">
          {links.map((l) => <Link key={l.to} to={l.to} className={location.pathname===l.to ? 'text-[#3b35ff]' : ''}>{l.label}</Link>)}
          <Link to={isLoggedIn ? '/dashboard' : '/login'}>{isLoggedIn ? 'Dashboard' : 'English'}</Link>
          {isLoggedIn && <button onClick={logout}>Salir</button>}
        </div>
      </nav>
      {open && <div className="grid gap-2 px-4 pb-4 md:hidden">{links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}</div>}
    </header>
  );
}
