import { NavLink } from 'react-router'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        SN.
      </NavLink>
      <nav>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  )
}
