import { useQuery } from '@tanstack/react-query'
import { fetchRepos } from '../services/github'

// O TanStack Query guarda o resultado em cache: navegar entre páginas
// reaproveita os dados em vez de chamar a API do GitHub de novo.
export function useRepos() {
  return useQuery({ queryKey: ['repos'], queryFn: fetchRepos })
}
