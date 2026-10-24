import { getSupabase } from './supabase'

export async function signIn(email, password) {
  const supabase = await getSupabase()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

export async function signOut() {
  const supabase = await getSupabase()
  await supabase.auth.signOut()
}

// Chama callback(session) agora e a cada login/logout.
// Retorna uma função que cancela a inscrição.
export function onSessionChange(callback) {
  let subscription
  let cancelled = false
  getSupabase().then((supabase) => {
    if (cancelled) return
    subscription = supabase.auth.onAuthStateChange((_event, session) =>
      callback(session),
    ).data.subscription
  })
  return () => {
    cancelled = true
    subscription?.unsubscribe()
  }
}
