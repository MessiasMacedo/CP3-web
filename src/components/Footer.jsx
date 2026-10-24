import { FiGithub, FiMail } from 'react-icons/fi'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <p>Messias Macedo de Souza · Engenheiro de Software</p>
        <nav>
          <a
            href="https://github.com/MessiasMacedo"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <Link to="/contato">
            <FiMail aria-hidden="true" /> Contato
          </Link>
        </nav>
      </div>
      <p className="footer-wordmark" aria-hidden="true">
        MESSIAS
      </p>
    </footer>
  )
}
