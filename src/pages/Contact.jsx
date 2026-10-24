import { useState } from 'react'
import Button from '../components/Button'
import Field from '../components/Field'
import SectionTitle from '../components/SectionTitle'
import Spinner from '../components/Spinner'
import { sendMessage } from '../services/messages'
import { validateContact } from '../utils/validateContact'

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validateContact(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('sending')
    try {
      await sendMessage(form)
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="narrow">
      <SectionTitle label="Contato" as="h1">
        Vamos conversar.
      </SectionTitle>
      <form onSubmit={handleSubmit} noValidate>
        <Field
          label="Nome"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="E-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Field
          label="Mensagem"
          name="message"
          textarea
          value={form.message}
          onChange={handleChange}
          error={errors.message}
        />

        {/* Desabilitado durante o envio para evitar mensagens duplicadas */}
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? <Spinner label="Enviando" /> : 'Enviar'}
        </Button>

        {status === 'success' && (
          <p className="feedback success" role="status">
            Mensagem enviada! Respondo em breve.
          </p>
        )}
        {status === 'error' && (
          <p className="feedback error" role="alert">
            Não foi possível enviar. Tente novamente.
          </p>
        )}
      </form>
    </section>
  )
}
