import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import Button from '../components/Button'
import Field from '../components/Field'
import Spinner from '../components/Spinner'
import { useSession } from '../hooks/useSession'
import { signIn } from '../services/auth'

export default function Login() {
  const { session } = useSession()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  if (session) return <Navigate to="/dashboard" replace />

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    setSending(true)
    try {
      await signIn(data.get('email'), data.get('password'))
      navigate('/dashboard')
    } catch {
      setError('E-mail ou senha incorretos.')
      setSending(false)
    }
  }

  return (
    <section className="narrow">
      <h1>Área do dono</h1>
      <form onSubmit={handleSubmit}>
        <Field label="E-mail" name="email" type="email" required />
        <Field label="Senha" name="password" type="password" required />
        <Button type="submit" disabled={sending}>
          {sending ? <Spinner label="Entrando" /> : 'Entrar'}
        </Button>
        {error && (
          <p className="feedback error" role="alert">
            {error}
          </p>
        )}
      </form>
    </section>
  )
}
