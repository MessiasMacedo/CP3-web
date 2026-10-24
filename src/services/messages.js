import { getSupabase } from './supabase'

export async function sendMessage({ name, email, message }) {
  const supabase = await getSupabase()
  // 1. Salva no banco (aparece no dashboard)
  const { error } = await supabase
    .from('messages')
    .insert({ name, email, message })
  if (error) throw error

  // 2. Envia o e-mail para o dono do site pela API REST do EmailJS
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: { name, email, message },
    }),
  })
  if (!res.ok) throw new Error('Falha ao enviar o e-mail.')
}

export async function fetchMessages() {
  const supabase = await getSupabase()
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw new Error('Não foi possível carregar as mensagens.')
  return data
}

export async function setAnswered(id, answered) {
  const supabase = await getSupabase()
  const { error } = await supabase
    .from('messages')
    .update({ answered })
    .eq('id', id)
  if (error) throw error
}
