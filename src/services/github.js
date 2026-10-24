const USER = import.meta.env.VITE_GITHUB_USER

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
  return repos.filter((repo) => !repo.fork)
}
