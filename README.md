# Portfólio · Messias Macedo

Portfólio de Messias Macedo, engenheiro de software com foco em back-end (Java e Spring Boot), feito em React. Os projetos são carregados automaticamente
da API do GitHub, o formulário de contato envia e-mail e salva a mensagem, e um
dashboard protegido por login permite responder mensagens e escolher os projetos
em destaque.

**Site:** https://cp-3-web-indol.vercel.app

## Acesso para avaliação

Projeto feito para o CP3 (FIAP). Para ver o dashboard do dono, entre em
[/login](https://cp-3-web-indol.vercel.app/login) com o usuário de teste:

| E-mail                        | Senha      |
| ----------------------------- | ---------- |
| `professor@cp3portfolio.test` | `senhaCP3` |

No dashboard dá para ler as mensagens do formulário de contato, marcá-las como
respondidas e escolher os projetos em destaque na home.

## Tecnologias

| Para quê             | Escolha                                    |
| -------------------- | ------------------------------------------ |
| Base                 | React 19 + Vite + JavaScript               |
| Rotas                | React Router (+ `vercel.json` para SPA)    |
| Dados da API e cache | TanStack Query                             |
| Login e banco        | Supabase (Auth + Postgres com RLS)         |
| E-mail do contato    | EmailJS (API REST com `fetch`)             |
| Estilo               | CSS puro com variáveis (tema claro/escuro) |
| Ícones e fonte       | React Icons + Archivo (auto-hospedada)     |
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

0. **GitHub:** se algum repositório tiver o tópico `portfolio` (página do
   repositório > engrenagem ao lado de _About_ > _Topics_), só os marcados
   aparecem no site; se nenhum tiver, aparecem todos, menos os forks.
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

Ferramenta: Claude Code com o modelo Claude Opus 5.5.

No repositório:

- `CLAUDE.md`: instruções do projeto (arquitetura, nomes, commits, branches)
- `.mcp.json`: conexão somente leitura com o Supabase

Mantidos só na máquina local (a pasta `.claude` fica fora do repositório):

- `.claude/skills/nova-feature`: passo a passo de branch → código → testes → PR
- `.claude/agents/revisor.md`: agente que revisa o diff contra os padrões

Os padrões são garantidos por automação, e não só pelas instruções: Husky +
lint-staged (ESLint e Prettier) e commitlint rodam antes de cada commit, e os
testes do Vitest cobrem a validação do formulário e o bloqueio do dashboard.
