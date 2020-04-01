# Estudos sobre ESLint, Prettier e outros

## ESLint x Prettier

Com essa dupla podemos facilmente ganhar muito em termos de produtividade e padronização de estilo de código.

O ESLint e o Prettier são ferramentas que se complementam com o intuito de agregar maior qualidade ao código.

### ESLint

Esse é o Linter mais famoso do mundo de JavaScript e tudo indica que será do TypeScript também.

Ele faz a análise estática do teu código de modo a identificar quebras de estilização e erros que poderiam levar sua
aplicação a uma falha em tempo de execução.

Por exemplo, ates mesmo de executarmos nosso código, o ESLint pode nos alertar que estamos utilizando uma variável
que nunca foi declarada, que estamos tentando sobrescrever o valor de uma constante ou até mesmo que estamos tentando
utilizar um método inválido no contexto do objeto.

### Prettier

Está é uma ferramenta voltada a formatação e estilização do código. O Prettier é o formatador que todos precisávamos,
ele cuida de manter a consistência estética do nosso código.

### Propósitos diferentes que se completam

O ESLint e o Prettier se complementam de modo a enriquecer a qualidade do código

### Resumindo

O ESLint deve cuidar de fatores ligados a sintaxe e recomendações de uso, tais como, aplicar funções de retorno em getters, proibir condições duplicadas em cadeias if-else-if... Já no Prettier, centralize tudo que for ligado a estética, como padrão das aspas (simples ou dupla), final de linha com ou sem ponto-e-virgula e assim por diante.

## Módulos

## Express

Micro-framework simples e flexível.

## Cors

É uma especificação que define meios para que um recurso do servidor seja acessado remotamente via web/rede; Resumidamente, o cors permite que nossa aplicação seja acessada de um endereço externo.

## Dotenv

É um módulo de dependência zero, responsável por carregar variáveis de ambiente de um arquivo .env em process.env.*.

## ESLint

Utilizado para análise de código estático e identificação de padrões problemáticos presentes no código.

```bash
yarn eslint --fix --ext .js src/
```


## Sucrase

Responsável por fazer a transpilação do código, ou seja, traduzir as especificações mais recentes da linguagem, que ainda não são nativamente suportadas pelo Node.js para um padrão que o mesmo já suporte. Essa ferramenta é altamente recomendada para ambiente de desenvolvimento devido a sua abordagem de transpilação, porém, não é adequada para um ambiente de produção.

## Nodemon

Monitora o diretório e realiza restart automático do server sempre que um arquivo for alterado.

## Prettier

Formata o código de modo a manter um padrão estético, os plugins eslint-config-prettier e eslint-plugin-prettier cuidam de fazer a integração entre o ESLint e o Prettier (assunto já abordado no inicio deste post), de modo a promover correções automáticas no código sempre que o ESLint apontar uma erro, obviamente você pode incluir regras personalizadas ou ignorar as predefinidas que não te atenderem.
