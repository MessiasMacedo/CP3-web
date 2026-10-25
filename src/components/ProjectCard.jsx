import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router'
import { formatDate } from '../utils/formatDate'
import { formatRepoName } from '../utils/formatRepoName'
import Card from './Card'

export default function ProjectCard({ repo }) {
  return (
    <Card className="project-card">
      <h3>
        <Link to={`/projetos/${repo.name}`}>
          {formatRepoName(repo.name)}
          <FiArrowUpRight aria-hidden="true" className="accent" />
        </Link>
      </h3>
      <p>{repo.description || 'Sem descrição.'}</p>
      <footer>
        <span className="tag">{repo.language || 'N/A'}</span>
        <span>Atualizado em {formatDate(repo.updated_at)}</span>
      </footer>
    </Card>
  )
}

// Mesmo tamanho do card real, para não haver salto de layout
export function ProjectCardSkeleton() {
  return (
    <Card className="project-card" aria-hidden="true">
      <span className="skeleton" style={{ width: '60%', height: '1.4rem' }} />
      <span className="skeleton" />
      <span className="skeleton" style={{ width: '80%' }} />
    </Card>
  )
}
