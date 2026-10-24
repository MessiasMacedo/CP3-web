import ErrorState from './ErrorState'
import ProjectCard, { ProjectCardSkeleton } from './ProjectCard'

// Trata os três estados de dados vindos da API: carregando, erro e lista vazia
export default function ProjectList({
  repos,
  isLoading,
  error,
  onRetry,
  emptyMessage,
}) {
  if (isLoading) {
    return (
      <div className="grid">
        {[1, 2, 3].map((n) => (
          <ProjectCardSkeleton key={n} />
        ))}
      </div>
    )
  }
  if (error) return <ErrorState message={error.message} onRetry={onRetry} />
  if (repos.length === 0) return <p className="state">{emptyMessage}</p>

  return (
    <div className="grid">
      {repos.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}
