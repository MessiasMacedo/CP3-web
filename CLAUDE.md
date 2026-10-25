# Instruções do projeto para a IA

Portfólio pessoal em React (Vite + JavaScript). Projetos vêm da API do GitHub;
mensagens de contato e projetos em destaque ficam no Supabase; e-mail via EmailJS.

## Comandos

- `npm run dev` — servidor local
- `npm run lint` — ESLint
- `npm test` — Vitest
- `npm run build` — build de produção

Rode `npm run lint` e `npm test` antes de considerar uma tarefa concluída.

## Arquitetura (pastas em `src/`)

- `pages/` — uma página por rota. Junta hooks + componentes, sem `fetch` direto.
- `components/` — componentes visuais reaproveitáveis (`Button`, `Card`, `Field`...).
  Não chamam APIs; recebem dados por props.
- `services/` — **único lugar** com chamadas de API (GitHub, Supabase, EmailJS).
- `hooks/` — hooks personalizados que ligam services ao React (TanStack Query, sessão, tema).
- `utils/` — funções puras (ex.: validação), fáceis de testar.

Regras:

- Antes de criar um componente, veja se `Button`, `Card`, `Field`, `ErrorState`,
  `Spinner` ou `ProjectList` já resolvem.
- Todo dado de API precisa mostrar carregando, erro e lista vazia.
- Dados do GitHub sempre via `useRepos()` (cache do TanStack Query). Nunca chamar a API do GitHub em outro lugar.
- Só aparecem repositórios com o tópico `portfolio` no GitHub. Não criar listas fixas de projetos no código.
- Ícones sempre do React Icons (`react-icons/fi`), com `aria-hidden="true"` quando forem decorativos.
- Imagens em `public/` no formato WebP, com `width`/`height` e `loading="lazy"` (exceto as do topo da página).
- Páginas pesadas ou só do dono (dashboard, login) são carregadas com `React.lazy`.
- Estilos em `src/index.css`, usando as variáveis de cor (`var(--accent)` etc.). Nada de cor fixa.
- Não adicionar bibliotecas novas sem justificar o motivo.

## Nomenclatura

- Componentes e páginas: `PascalCase.jsx` (ex.: `ProjectCard.jsx`)
- Hooks: `useAlgo.js` (ex.: `useRepos.js`)
- Services e utils: `camelCase.js` (ex.: `github.js`, `validateContact.js`)
- Testes ao lado do arquivo: `Nome.test.jsx` / `nome.test.js`
- Textos da interface em português.

## Commits (Conventional Commits)

Formato: `tipo: descrição curta em português, no imperativo`

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Exemplos: `feat: adiciona validação do formulário de contato`,
`fix: corrige redirecionamento do dashboard`.

O commitlint (hook `commit-msg` do Husky) rejeita mensagens fora do padrão, e o
lint-staged roda ESLint + Prettier no `pre-commit`. Nunca use `--no-verify`.

## Branches (GitHub Flow)

- `main` é sempre publicável; a Vercel faz deploy a cada push nela.
- Toda mudança nasce numa branch a partir da `main`: `feature/nome`, `fix/nome`, `docs/nome`, `chore/nome`.
- Integração na `main` por pull request. Nunca commitar direto na `main`.

## Segurança

- Nunca commitar `.env`. Variáveis novas vão no `.env.example` sem valor real.
