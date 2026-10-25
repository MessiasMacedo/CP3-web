import ProjectList from '../components/ProjectList'
import SectionTitle from '../components/SectionTitle'
import { useRepos } from '../hooks/useRepos'

export default function Projects() {
  const { data, isLoading, error, refetch } = useRepos()

  return (
    <section>
      <SectionTitle label="Direto do GitHub" as="h1">
        Projetos.
      </SectionTitle>
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
