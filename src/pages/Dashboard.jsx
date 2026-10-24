import { useQuery, useQueryClient } from '@tanstack/react-query'
import Button from '../components/Button'
import Card from '../components/Card'
import ErrorState from '../components/ErrorState'
import Spinner from '../components/Spinner'
import { useFeatured } from '../hooks/useFeatured'
import { useRepos } from '../hooks/useRepos'
import { setFeatured } from '../services/featured'
import { fetchMessages, setAnswered } from '../services/messages'
import { signOut } from '../services/auth'
import { formatDate } from '../utils/formatDate'

export default function Dashboard() {
  const queryClient = useQueryClient()
  const messages = useQuery({ queryKey: ['messages'], queryFn: fetchMessages })
  const repos = useRepos()
  const featured = useFeatured()

  async function toggleAnswered(msg) {
    await setAnswered(msg.id, !msg.answered)
    queryClient.invalidateQueries({ queryKey: ['messages'] })
  }

  async function toggleFeatured(repoName, isFeatured) {
    await setFeatured(repoName, !isFeatured)
    queryClient.invalidateQueries({ queryKey: ['featured'] })
  }

  const projectsError = repos.error || featured.error

  return (
    <>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <Button variant="ghost" onClick={signOut}>
          Sair
        </Button>
      </div>

      <section>
        <h2>Mensagens</h2>
        {messages.isLoading && <Spinner />}
        {messages.error && (
          <ErrorState
            message={messages.error.message}
            onRetry={messages.refetch}
          />
        )}
        {messages.data?.length === 0 && (
          <p className="state">Nenhuma mensagem ainda.</p>
        )}
        <div className="list">
          {messages.data?.map((msg) => (
            <Card key={msg.id} className={msg.answered ? 'answered' : ''}>
              <strong>{msg.name}</strong> ({msg.email}) ·{' '}
              {formatDate(msg.created_at)}
              <p>{msg.message}</p>
              <label>
                <input
                  type="checkbox"
                  checked={msg.answered}
                  onChange={() => toggleAnswered(msg)}
                />{' '}
                Respondida
              </label>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2>Projetos em destaque</h2>
        {(repos.isLoading || featured.isLoading) && <Spinner />}
        {projectsError && <ErrorState message={projectsError.message} />}
        {repos.data?.length === 0 && (
          <p className="state">Nenhum repositório.</p>
        )}
        <div className="list">
          {repos.data?.map((repo) => {
            const isFeatured = featured.data?.includes(repo.name) ?? false
            return (
              <label key={repo.id} className="card">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={() => toggleFeatured(repo.name, isFeatured)}
                />{' '}
                {repo.name}
              </label>
            )
          })}
        </div>
      </section>
    </>
  )
}
