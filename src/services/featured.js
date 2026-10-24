import { getSupabase } from './supabase'

// Retorna só os nomes dos repositórios em destaque, ex.: ['meu-app']
export async function fetchFeatured() {
  const supabase = await getSupabase()
  const { data, error } = await supabase
    .from('featured_projects')
    .select('repo_name')
  if (error) throw new Error('Não foi possível carregar os destaques.')
  return data.map((row) => row.repo_name)
}

export async function setFeatured(repoName, featured) {
  const supabase = await getSupabase()
  const { error } = featured
    ? await supabase.from('featured_projects').insert({ repo_name: repoName })
    : await supabase
        .from('featured_projects')
        .delete()
        .eq('repo_name', repoName)
  if (error) throw error
}
