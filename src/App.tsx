import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SimplePage from './pages/SimplePage';

export default function App() {
  const isLoggedIn = false;

  return (
    <Routes>
      <Route element={<MainLayout isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<SimplePage title="Cursos" />} />
        <Route path="/curso/iot" element={<SimplePage title="Curso IoT" />} />
        <Route path="/curso/ia" element={<SimplePage title="Curso IA" />} />
        <Route path="/curso/datos" element={<SimplePage title="Curso Datos" />} />
        <Route path="/curso/master-iot" element={<SimplePage title="Máster IoT" />} />
        <Route path="/curso/master-ia" element={<SimplePage title="Máster IA" />} />
        <Route path="/certificaciones" element={<SimplePage title="Certificaciones" />} />
        <Route path="/mentoria" element={<SimplePage title="Mentoría" />} />
        <Route path="/contenidos" element={<SimplePage title="Contenidos" />} />
        <Route path="/contacto" element={<SimplePage title="Contacto" />} />
        <Route path="/aviso-legal" element={<SimplePage title="Aviso legal" />} />
        <Route path="/dashboard" element={isLoggedIn ? <SimplePage title="Dashboard" /> : <Navigate to="/login" replace />} />
        <Route path="/dashboard/perfil" element={isLoggedIn ? <SimplePage title="Perfil" /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<SimplePage title="Login" />} />
      </Route>
    </Routes>
  );
}
