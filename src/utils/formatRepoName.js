// "Projeto_ECommerce-TCC-curso" -> "Projeto ECommerce TCC curso"
export function formatRepoName(name) {
  return name.replace(/[-_]+/g, ' ')
}
