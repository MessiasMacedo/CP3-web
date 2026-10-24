-- Rode este arquivo no Supabase: SQL Editor > New query > Run

create table messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  answered boolean not null default false,
  created_at timestamptz not null default now()
);

create table featured_projects (
  repo_name text primary key
);

-- Row Level Security: o banco decide quem pode o quê, não o front-end
alter table messages enable row level security;
alter table featured_projects enable row level security;

-- Visitantes só podem ENVIAR mensagens; só o dono logado lê e atualiza
create policy "visitante envia" on messages
  for insert to anon with check (true);
create policy "dono lê" on messages
  for select to authenticated using (true);
create policy "dono atualiza" on messages
  for update to authenticated using (true);

-- Todos veem os destaques; só o dono logado altera
create policy "todos leem" on featured_projects
  for select using (true);
create policy "dono adiciona" on featured_projects
  for insert to authenticated with check (true);
create policy "dono remove" on featured_projects
  for delete to authenticated using (true);

-- Destaques iniciais (o nome tem que ser igual ao do repositório no GitHub).
-- Depois, os destaques são trocados pelo dashboard.
insert into featured_projects (repo_name) values
  ('Projeto_ECommerce-TCC-curso'),
  ('gerenciador-de-tarefas');
