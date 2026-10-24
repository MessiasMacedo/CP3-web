import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { useSession } from '../hooks/useSession'
import ProtectedRoute from './ProtectedRoute'

// Substitui o hook real: o teste não depende do Supabase
vi.mock('../hooks/useSession', () => ({ useSession: vi.fn() }))

function renderDashboardRoute() {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/login" element={<p>Página de login</p>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <p>Conteúdo do dashboard</p>
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>,
  )
}

describe('ProtectedRoute', () => {
  it('redireciona para /login quando não há usuário logado', () => {
    useSession.mockReturnValue({ session: null, loading: false })
    renderDashboardRoute()

    expect(screen.getByText('Página de login')).toBeInTheDocument()
    expect(screen.queryByText('Conteúdo do dashboard')).not.toBeInTheDocument()
  })

  it('mostra o dashboard quando o usuário está logado', () => {
    useSession.mockReturnValue({ session: { user: {} }, loading: false })
    renderDashboardRoute()

    expect(screen.getByText('Conteúdo do dashboard')).toBeInTheDocument()
  })
})
