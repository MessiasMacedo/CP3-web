import { useParams } from 'react-router'
import Button from '../components/Button'
import Card from '../components/Card'
import ErrorState from '../components/ErrorState'
import { ProjectCardSkeleton } from '../components/ProjectCard'
import { useRepos } from '../hooks/useRepos'
import { formatDate } from '../utils/formatDate'
import { formatRepoName } from '../utils/formatRepoName'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { name } = useParams()
  // Reaproveita a lista em cache: abrir um projeto não gera nova requisição
  const { data, isLoading, error, refetch } = useRepos()

  if (isLoading) return <ProjectCardSkeleton />
  if (error) return <ErrorState message={error.message} onRetry={refetch} />

  const repo = data.find((r) => r.name === name)
  if (!repo) return <NotFound />

  return (
    <section>
      <h1>{formatRepoName(repo.name)}</h1>
      <Card>
        <p>{repo.description || 'Sem descrição.'}</p>
        <ul className="details">
          <li>Linguagem: {repo.language || 'N/A'}</li>
          <li>Estrelas: {repo.stargazers_count}</li>
          <li>Criado em: {formatDate(repo.created_at)}</li>
          <li>Atualizado em: {formatDate(repo.updated_at)}</li>
        </ul>
        <div className="actions">
          <Button href={repo.html_url} target="_blank" rel="noreferrer">
            Ver no GitHub
          </Button>
          {repo.homepage && (
            <Button
              variant="ghost"
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
            >
              Ver online
            </Button>
          )}
        </div>
      </Card>
    </section>
  )
}
