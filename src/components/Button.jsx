import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router'

// Mesmo visual para botões, links internos (to) e links externos (href).
// Links ganham a seta ↗ para indicar navegação.
export default function Button({
  to,
  variant = 'primary',
  children,
  ...props
}) {
  const className = `btn btn-${variant}`
  const content = (
    <>
      {children}
      <FiArrowUpRight aria-hidden="true" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {content}
      </Link>
    )
  }
  if (props.href) {
    return (
      <a className={className} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
