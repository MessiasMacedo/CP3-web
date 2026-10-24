import Button from './Button'

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="state" role="alert">
      <p>Ops! {message || 'Algo deu errado ao carregar os dados.'}</p>
      {onRetry && (
        <Button variant="ghost" onClick={onRetry}>
          Tentar de novo
        </Button>
      )}
    </div>
  )
}
