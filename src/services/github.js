const USER = import.meta.env.VITE_GITHUB_USER

// Repositórios marcados com este tópico no GitHub (página do repositório >
// About > Topics) são os do portfólio. Assim nada é cadastrado à mão.
const PORTFOLIO_TOPIC = 'portfolio'

// Se algum repositório tem o tópico, mostra só esses; se nenhum tem, mostra
// todos (menos forks), para a página nunca ficar vazia sem motivo.
export function selectPortfolioRepos(repos) {
  const ownRepos = repos.filter((repo) => !repo.fork)
  const tagged = ownRepos.filter((repo) =>
    repo.topics?.includes(PORTFOLIO_TOPIC),
  )
  return tagged.length > 0 ? tagged : ownRepos
}

export async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?sort=updated&per_page=100`,
  )
  // Sem token, a API do GitHub permite 60 requisições por hora por IP
  if (res.status === 403 || res.status === 429) {
    throw new Error(
      'Limite de requisições do GitHub atingido. Tente novamente mais tarde.',
    )
  }
  if (!res.ok) throw new Error('Não foi possível carregar os projetos.')
  const repos = await res.json()
  return selectPortfolioRepos(repos)
}
