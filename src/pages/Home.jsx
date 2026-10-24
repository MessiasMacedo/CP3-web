import Button from '../components/Button'
import ProjectList from '../components/ProjectList'
import { useFeatured } from '../hooks/useFeatured'
import { useRepos } from '../hooks/useRepos'

export default function Home() {
  const repos = useRepos()
  const featured = useFeatured()

  const featuredRepos = (repos.data ?? []).filter((repo) =>
    (featured.data ?? []).includes(repo.name),
  )

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Desenvolvedor front-end</p>
        <h1>
          Olá, eu sou <span className="accent">Seu Nome</span>.
        </h1>
        <p>
          Estudante de Engenharia de Software. Construo interfaces simples,
          rápidas e acessíveis com React.
        </p>
        <div className="actions">
          <Button to="/projetos">Ver projetos</Button>
          <Button to="/contato" variant="ghost">
            Fale comigo
          </Button>
        </div>
      </section>

      <section>
        <h2>Projetos em destaque</h2>
        <ProjectList
          repos={featuredRepos}
          isLoading={repos.isLoading || featured.isLoading}
          error={repos.error || featured.error}
          onRetry={() => {
            repos.refetch()
            featured.refetch()
          }}
          emptyMessage="Nenhum projeto em destaque ainda."
        />
      </section>

      <section className="about">
        <img
          src="/foto.webp"
          alt="Foto de Seu Nome"
          width="160"
          height="160"
          loading="lazy"
        />
        <div>
          <h2>Sobre mim</h2>
          <p>
            Escreva aqui um parágrafo curto sobre você, o que estuda e o que
            gosta de construir.
          </p>
        </div>
      </section>
    </>
  )
}
