import { FiMoon, FiSun } from 'react-icons/fi'
import { NavLink } from 'react-router'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <NavLink to="/" className="logo" aria-label="Início">
        MM<span className="accent">.</span>
      </NavLink>
      <nav>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          {theme === 'dark' ? (
            <FiSun aria-hidden="true" />
          ) : (
            <FiMoon aria-hidden="true" />
          )}
        </button>
      </nav>
    </header>
  )
}
