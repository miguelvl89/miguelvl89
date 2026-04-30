import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function LoginPage() {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    login(name.trim());
    navigate('/dashboard');
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-4 rounded-xl bg-aritium-section p-6">
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <input className="w-full rounded bg-white/10 p-2" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="w-full rounded bg-aritium-primary p-2">Entrar</button>
    </form>
  );
}
