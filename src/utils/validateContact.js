export const MESSAGES = {
  name: 'Informe seu nome.',
  email: 'E-mail inválido.',
  message: 'A mensagem precisa ter no mínimo 20 caracteres.',
}

// Recebe { name, email, message } e devolve um objeto só com os campos
// inválidos, ex.: { email: MESSAGES.email }. Objeto vazio = formulário válido.
// Formato simples algo@algo.algo; a prova real de que o e-mail existe é a resposta
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/
const MIN_MESSAGE_LENGTH = 20

export function validateContact({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = MESSAGES.name
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = MESSAGES.email
  // Espaços nas pontas não contam: 20 espaços não são uma mensagem
  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = MESSAGES.message
  }
  return errors
}
