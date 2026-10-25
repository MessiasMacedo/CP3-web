import { selectPortfolioRepos } from './github'

const repo = (name, topics = [], fork = false) => ({ name, topics, fork })

describe('selectPortfolioRepos', () => {
  it('mostra só os repositórios com o tópico portfolio', () => {
    const repos = [repo('tcc', ['portfolio']), repo('aula-web')]
    expect(selectPortfolioRepos(repos).map((r) => r.name)).toEqual(['tcc'])
  })

  it('mostra todos (menos forks) quando nenhum tem o tópico', () => {
    const repos = [repo('tcc'), repo('aula-web'), repo('copia', [], true)]
    expect(selectPortfolioRepos(repos).map((r) => r.name)).toEqual([
      'tcc',
      'aula-web',
    ])
  })
})
