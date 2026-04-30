import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SimplePage from './pages/SimplePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import useAuth from './hooks/useAuth';

export default function App() {
  const { isLoggedIn, userName } = useAuth();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/curso/:slug" element={<CourseDetailPage />} />
        
        <Route path="/smart-healthcare" element={<SimplePage title="Smart Healthcare" />} />
        <Route path="/casos-exito" element={<SimplePage title="Casos de éxito" />} />
        <Route path="/quienes-somos" element={<SimplePage title="Quiénes Somos" />} />
        <Route path="/recursos" element={<SimplePage title="Recursos" />} />
        <Route path="/certificaciones" element={<SimplePage title="Certificaciones" />} />
        <Route path="/mentoria" element={<SimplePage title="Mentoría" />} />
        <Route path="/contenidos" element={<SimplePage title="Contenidos" />} />
        <Route path="/contacto" element={<SimplePage title="Contacto" />} />
        <Route path="/aviso-legal" element={<SimplePage title="Aviso legal" />} />
        <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" replace />} />
        <Route path="/dashboard/perfil" element={isLoggedIn ? <SimplePage title={`Perfil de ${userName}`} /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
