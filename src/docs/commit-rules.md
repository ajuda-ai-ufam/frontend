## Commit

Nossos commits seguirão um padrão tanto para nos auxiliar na criação do nosso `release notes`, 
na investigação dos bugs e alinharmos com o que está sendo feito em outros projetos.

### Padrão

```
<tipo>[Obrigatório](<scopo>): <assunto>[Obrigatório]

<corpo>

<rodapé>
```

### Exemplo

```

feat(partner): Adiciona Pagina do parceiro
^-^ ^---^   ^-----------------------------^
|     |     |
|     |     +-> Sumário do que foi feito no presente do indicativo
|     |
|     +----> O escopo é relacionado ao que está sendo descrito Ex: chore(ci), refactor(usuário), refactor(partner)
|
+-------> Tipos: chore, docs, feat, fix, refactor, style, or test.

Cria página do parceiro de ecommerce. (Corpo da mensagem opcional) 

(Rodapé da mensagem opciona;)


Nossos tipos:

  build:    Atualiza os scripts de build da aplicação.
  chore:    Atualizando códigos de automação, tarefas em geral etc; não atualiza código de produção.
  ci:       Utilizando quando alteramos ou criamos o processo de integração contínua.
  docs:     Mudanças na documentação; não atualiza o código de produção.
  feat:     Uma nova feature para um usuário e não uma nova feature para um script; atualiza o código de produção.
  fix:      Um bug fix para o usuário e não para um fix em um script; atualiza o código de produção.
  perf:     Referente a performace do projeto.
  refactor: Refatoração de código de produção, ex:. mudança no nome de variáveis; atualiza o código de produção.
  revert:   Usado ao desfazer uma tarefa.
  style:    Rormatação, ponto e vírgula faltantes, etc; não atualiza código de produção.
  test:     Adicionar e refatorar tests; não atualiza código de produção.
```

### Referências

Algumas ferramentas auxiliam nesse processo, como:

* [Commitlint](https://github.com/conventional-changelog/commitlint)

Aqui um link do que é e de como funciona:

* [Conceitos da conversão de commit](https://conventional-changelog.github.io/commitlint/#/concepts-commit-conventions)
