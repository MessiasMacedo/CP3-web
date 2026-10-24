// Campo de formulário com rótulo e mensagem de erro, usado no contato e no login
export default function Field({ label, error, textarea, ...props }) {
  const Input = textarea ? 'textarea' : 'input'
  return (
    <label className="field">
      {label}
      <Input
        aria-invalid={!!error}
        rows={textarea ? 5 : undefined}
        {...props}
      />
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}
