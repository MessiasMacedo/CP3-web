// Rótulo pequeno em maiúsculas + título grande, usado no topo das seções
export default function SectionTitle({ label, children, as: Tag = 'h2' }) {
  return (
    <header className="section-title">
      <p className="eyebrow">{label}</p>
      <Tag>{children}</Tag>
    </header>
  )
}
