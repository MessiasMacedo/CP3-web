import { Link } from 'react-router'

// Mesmo visual para botões, links internos (to) e links externos (href)
export default function Button({ to, variant = 'primary', ...props }) {
  const className = `btn btn-${variant}`
  if (to) return <Link to={to} className={className} {...props} />
  if (props.href) return <a className={className} {...props} />
  return <button className={className} {...props} />
}
