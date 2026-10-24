import Button from '../components/Button'
import Card from '../components/Card'
import ProjectList from '../components/ProjectList'
import SectionTitle from '../components/SectionTitle'
import { useFeatured } from '../hooks/useFeatured'
import { useRepos } from '../hooks/useRepos'

const LEVA_STATS = [
  { value: '50+', label: 'usuários na plataforma' },
  { value: '15+', label: 'concessionárias e clientes parceiros' },
  { value: '5', label: 'áreas: vendas, peças, revisão, garantia e estoque' },
]

// Cada foto existe em 600 px e 1200 px (public/leva). O "sizes" diz ao navegador
// quanto espaço ela ocupa, e ele baixa só a versão necessária.
const LEVA_PHOTOS = [
  {
    name: 'moto',
    alt: 'Moto elétrica da LEVA estacionada na rua',
    w: 600,
    h: 1066,
    sizes: '(max-width: 640px) 50vw, 360px',
  },
  {
    name: 'oficina',
    alt: 'Motos da LEVA em elevadores na oficina',
    w: 600,
    h: 338,
    sizes: '(max-width: 640px) 50vw, 740px',
  },
  {
    name: 'roda',
    alt: 'Detalhe da roda traseira e do freio de uma scooter da LEVA',
    w: 600,
    h: 400,
    sizes: '(max-width: 640px) 50vw, 360px',
  },
  {
    name: 'vibe',
    alt: 'Scooter elétrica LEVA Vibe',
    w: 600,
    h: 338,
    sizes: '(max-width: 640px) 100vw, 360px',
  },
]

const LEVA_WORK = [
  {
    title: 'Back-end',
    text: 'APIs REST com Java e Spring Boot, autenticação JWT e autorização granular (RBAC) por papel e por concessionária.',
  },
  {
    title: 'Banco de dados',
    text: 'Modelagem e evolução do MySQL com Flyway, e correção de vulnerabilidades, bugs e problemas de concorrência, transações e integridade de dados em fluxos críticos.',
  },
  {
    title: 'Integrações',
    text: 'Serviços externos e meios de pagamento, como Stripe e Pix Itaú, usando APIs, OAuth 2.0 e mTLS.',
  },
  {
    title: 'Infraestrutura',
    text: 'AWS (EC2, RDS, S3, CloudFront, IAM e CloudWatch), Docker e Docker Compose, com ambientes de homologação e produção.',
  },
  {
    title: 'Processos digitais',
    text: 'Processos antes feitos pelo WhatsApp viraram fluxos organizados e rastreáveis, com telas em React, TypeScript e Mantine e dashboards da operação.',
  },
  {
    title: 'Engenharia reversa',
    text: 'Estudos de softwares chineses usados nas motos, para entender como funcionam por dentro e como se comunicam com o veículo.',
  },
  {
    title: 'Hardware da moto',
    text: 'Estudos dos componentes de hardware das motos, com documentação e digitalização de tudo o que é descoberto.',
  },
  {
    title: 'Resolução de problemas',
    text: 'Diagnóstico e correção de falhas tanto nos sistemas quanto nas próprias motos, a partir dos estudos e da documentação técnica.',
  },
]

const TIMELINE = [
  {
    year: '2024',
    title: 'Técnico em Informática',
    place: 'SENAC · abr. 2024 – dez. 2025',
  },
  {
    year: '2026',
    title: 'Engenharia de Software',
    place: 'FIAP · fev. 2026 – cursando',
  },
  {
    year: 'Hoje',
    title: 'Engenheiro de Software (Estágio)',
    place: 'LEVA Motors · desde fev. 2026',
  },
]

const STACK = [
  {
    group: 'Linguagens',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    group: 'Back-end e banco de dados',
    items: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'JWT',
      'MySQL',
      'Flyway',
    ],
  },
  {
    group: 'Cloud e ferramentas',
    items: [
      'AWS',
      'Docker',
      'Docker Compose',
      'Nginx',
      'Maven',
      'Git',
      'JUnit',
      'Mockito',
      'Testcontainers',
      'Swagger',
      'Postman',
    ],
  },
  {
    group: 'Arquitetura e segurança',
    items: [
      'OAuth 2.0',
      'mTLS',
      'MVC',
      'RBAC',
      'Webhooks',
      'Modelagem de dados',
    ],
  },
]

export default function Home() {
  const repos = useRepos()
  const featured = useFeatured()

  const featuredRepos = (repos.data ?? []).filter((repo) =>
    (featured.data ?? []).includes(repo.name),
  )

  return (
    <>
      <section className="hero">
        <div className="hero-intro">
          {/* Foto no topo: sem loading="lazy", porque aparece de cara */}
          <img
            className="avatar"
            src="/foto.webp"
            alt="Foto de Messias Macedo"
            width="96"
            height="96"
          />
          <p className="eyebrow">Engenheiro de Software · LEVA Motors</p>
        </div>
        <h1 className="display">
          Messias
          <br />
          Macedo
        </h1>
        <div className="hero-footer">
          <p className="lead">
            Desenvolvedor back-end com foco em <strong>Java</strong> e{' '}
            <strong>Spring Boot</strong>. Estudante de Engenharia de Software na
            FIAP.
          </p>
          <div className="actions">
            <Button to="/projetos">Ver projetos</Button>
            <Button to="/contato" variant="ghost">
              Fale comigo
            </Button>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle label="Onde trabalho">LEVA Motors.</SectionTitle>
        <div className="leva-intro">
          <p className="lead">
            Sou responsável, de forma independente, por grande parte do ciclo de
            vida da <strong>plataforma interna de gestão</strong> da LEVA: do
            levantamento de requisitos e da arquitetura até o desenvolvimento, a
            infraestrutura, a implantação e a manutenção.
          </p>
          <div className="stats">
            {LEVA_STATS.map((stat) => (
              <div key={stat.value}>
                <span className="big-number">{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery">
          {LEVA_PHOTOS.map((photo) => (
            <img
              key={photo.name}
              src={`/leva/${photo.name}-600.webp`}
              srcSet={`/leva/${photo.name}-600.webp 600w, /leva/${photo.name}-1200.webp 1200w`}
              sizes={photo.sizes}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <ol className="work-list">
          {LEVA_WORK.map((item, i) => (
            <li key={item.title}>
              <span className="index">[0{i + 1}]</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <SectionTitle label="Projetos">Em destaque.</SectionTitle>
        <ProjectList
          repos={featuredRepos}
          isLoading={repos.isLoading || featured.isLoading}
          error={repos.error || featured.error}
          onRetry={() => {
            repos.refetch()
            featured.refetch()
          }}
          emptyMessage="Nenhum projeto em destaque ainda."
        />
        <div className="actions">
          <Button to="/projetos" variant="ghost">
            Todos os projetos
          </Button>
        </div>
      </section>

      <section className="about">
        <SectionTitle label="Sobre mim">
          Entender o problema antes do código.
        </SectionTitle>
        <div>
          <p>
            Sou estudante de Engenharia de Software na FIAP, com formação
            técnica em Informática pelo SENAC. Trabalho principalmente com
            back-end em Java e Spring Boot, além de bancos de dados, APIs, cloud
            e infraestrutura, e tenho experiência com sistemas em produção: da
            definição da solução até a implantação e a manutenção.
          </p>
          <p>
            Meu objetivo agora é me especializar em <strong>Java</strong> e
            arquitetura de sistemas back-end.
          </p>
        </div>
      </section>

      <section>
        <SectionTitle label="Trajetória">Formação e experiência.</SectionTitle>
        <div className="grid">
          {TIMELINE.map((item) => (
            <Card key={item.year} className="timeline-card">
              <span className="big-number">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle label="Stack">Ferramentas do dia a dia.</SectionTitle>
        <div className="stack">
          {STACK.map(({ group, items }) => (
            <div key={group}>
              <h3>{group}</h3>
              <ul className="chips">
                {items.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
