import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Props = { isLoggedIn: boolean };

export default function MainLayout({ isLoggedIn }: Props) {
  return (
    <div className="min-h-screen bg-aritium-dark text-aritium-text">
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
