// O SDK do Supabase é grande: é importado sob demanda para ficar fora do
// pacote inicial. Guardamos a Promise para criar um único cliente.
let clientPromise

export function getSupabase() {
  clientPromise ??= import('@supabase/supabase-js').then(({ createClient }) =>
    createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY,
    ),
  )
  return clientPromise
}
