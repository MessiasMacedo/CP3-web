import ProjectList from '../components/ProjectList'
import { useRepos } from '../hooks/useRepos'

export default function Projects() {
  const { data, isLoading, error, refetch } = useRepos()

  return (
    <section>
      <h1>Projetos</h1>
      <ProjectList
        repos={data ?? []}
        isLoading={isLoading}
        error={error}
        onRetry={refetch}
        emptyMessage="Nenhum repositório público encontrado."
      />
    </section>
  )
}
