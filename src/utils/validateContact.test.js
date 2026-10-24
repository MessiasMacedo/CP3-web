import { MESSAGES, validateContact } from './validateContact'

const valid = {
  name: 'Ana',
  email: 'ana@email.com',
  message: 'Olá! Gostei muito do seu portfólio.',
}

describe('validateContact', () => {
  it('não retorna erros para um formulário válido', () => {
    expect(validateContact(valid)).toEqual({})
  })

  it('exige o nome', () => {
    expect(validateContact({ ...valid, name: '   ' })).toEqual({
      name: MESSAGES.name,
    })
  })

  it('rejeita e-mail inválido', () => {
    expect(validateContact({ ...valid, email: 'ana@' })).toEqual({
      email: MESSAGES.email,
    })
  })

  it('exige mensagem com no mínimo 20 caracteres', () => {
    expect(validateContact({ ...valid, message: 'curta' })).toEqual({
      message: MESSAGES.message,
    })
  })

  it('retorna todos os erros de uma vez', () => {
    const errors = validateContact({ name: '', email: '', message: '' })
    expect(Object.keys(errors)).toEqual(['name', 'email', 'message'])
  })
})
