import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import Spinner from './components/Spinner'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'

// Carregadas sob demanda: o visitante comum nunca baixa o código do dashboard
const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:name" element={<ProjectDetail />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
