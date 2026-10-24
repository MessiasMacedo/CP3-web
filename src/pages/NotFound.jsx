import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="state">
      <h1>404</h1>
      <p>Essa página não existe (ou mudou de endereço).</p>
      <Button to="/">Voltar para o início</Button>
    </section>
  )
}
