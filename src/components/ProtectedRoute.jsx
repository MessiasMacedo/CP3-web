import { Navigate } from 'react-router'
import { useSession } from '../hooks/useSession'
import Spinner from './Spinner'

// Só renderiza o conteúdo se houver usuário logado; senão manda para /login
export default function ProtectedRoute({ children }) {
  const { session, loading } = useSession()

  if (loading) return <Spinner />
  if (!session) return <Navigate to="/login" replace />
  return children
}
