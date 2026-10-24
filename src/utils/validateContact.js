export const MESSAGES = {
  name: 'Informe seu nome.',
  email: 'E-mail inválido.',
  message: 'A mensagem precisa ter no mínimo 20 caracteres.',
}

// Recebe { name, email, message } e devolve um objeto só com os campos
// inválidos, ex.: { email: MESSAGES.email }. Objeto vazio = formulário válido.
// eslint-disable-next-line no-unused-vars -- remova esta linha ao implementar
export function validateContact({ name, email, message }) {
  const errors = {}
  // TODO: preencher as três regras de validação
  return errors
}
