import { getSupabase, SUPABASE_KEY, SUPABASE_URL } from './supabase'

// Retorna só os nomes dos repositórios em destaque, ex.: ['meu-app'].
// A leitura é pública, então usa um fetch direto na API REST do Supabase:
// assim a Home não precisa baixar o SDK (~55 KB), que fica para o dashboard.
export async function fetchFeatured() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/featured_projects?select=repo_name`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    },
  ).catch(() => null)
  if (!res?.ok) throw new Error('Não foi possível carregar os destaques.')
  const rows = await res.json()
  return rows.map((row) => row.repo_name)
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
