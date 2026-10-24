# Portfólio

Site de portfólio pessoal em React. Os projetos são carregados automaticamente
da API do GitHub, o formulário de contato envia e-mail e salva a mensagem, e um
dashboard protegido por login permite responder mensagens e escolher os projetos
em destaque.

**Site:** https://SEU-PROJETO.vercel.app

## Tecnologias

| Para quê             | Escolha                                    |
| -------------------- | ------------------------------------------ |
| Base                 | React 19 + Vite + JavaScript               |
| Rotas                | React Router (+ `vercel.json` para SPA)    |
| Dados da API e cache | TanStack Query                             |
| Login e banco        | Supabase (Auth + Postgres com RLS)         |
| E-mail do contato    | EmailJS (API REST com `fetch`)             |
| Estilo               | CSS puro com variáveis (tema claro/escuro) |
| Testes               | Vitest + Testing Library                   |
| Padrão de código     | ESLint + Prettier + Husky + lint-staged    |
| Padrão de commits    | Conventional Commits + commitlint          |
| Deploy               | Vercel (deploy automático da `main`)       |

## Como rodar

```bash
npm install
cp .env.example .env   # preencha as variáveis
npm run dev
```

Outros comandos: `npm test`, `npm run lint`, `npm run build`.

### Configuração dos serviços

1. **Supabase:** crie um projeto, rode `supabase/schema.sql` no SQL Editor,
   crie seu usuário em _Authentication > Users_ e **desative novos cadastros**
   em _Authentication > Sign In / Providers_ (só o dono pode logar).
2. **EmailJS:** crie um serviço de e-mail e um template usando as variáveis
   `{{name}}`, `{{email}}` e `{{message}}`.
3. **Vercel:** importe o repositório do GitHub e cadastre as mesmas variáveis
   do `.env` em _Settings > Environment Variables_.

## Estrutura

```
src/
  pages/       uma página por rota
  components/  componentes visuais reaproveitáveis (Button, Card, Field...)
  services/    chamadas de API (GitHub, Supabase, EmailJS)
  hooks/       ligação entre services e React (useRepos, useSession, useTheme)
  utils/       funções puras (validação)
```

Fluxo de dados: `página → hook → service → API`. Componentes visuais só recebem props.

## Padrões

- **Nomes:** componentes em `PascalCase.jsx`, hooks começando com `use`,
  services/utils em `camelCase.js`, testes ao lado do arquivo (`*.test.js`).
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
  em português, ex.: `feat: adiciona validação do formulário de contato`.
  Verificado pelo commitlint no hook `commit-msg`.
- **Código:** ESLint + Prettier rodam automaticamente antes de cada commit (Husky + lint-staged).
- **Branches:** GitHub Flow. `main` sempre publicável; cada funcionalidade em
  `feature/nome`, integrada por pull request.

## Harness de IA

- `CLAUDE.md`: instruções do projeto (arquitetura, nomes, commits, branches)
- `.claude/skills/nova-feature`: passo a passo de branch → código → testes → PR
- `.claude/agents/revisor.md`: agente que revisa o diff contra os padrões
- `.mcp.json`: conexão somente leitura com o Supabase
