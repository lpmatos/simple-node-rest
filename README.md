<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<p align="center">“Sua única limitação é você mesmo”!</blockquote>

<p align="center">

  <a href="https://github.com/lpmatos/simple-node-rest">
    <img alt="Open Source" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest/graphs/contributors">
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/lpmatos/simple-node-rest">
  </a>
  
  <a href="https://github.com/lpmatos/simple-node-rest">
    <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/lpmatos/simple-node-rest">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest">
    <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/lpmatos/simple-node-rest">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest/stargazers">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/lpmatos/simple-node-rest?style=social">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest/commits/master">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/lpmatos/simple-node-rest">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest">
    <img alt="Repository Size" src="https://img.shields.io/github/repo-size/lpmatos/simple-node-rest">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest/issues">
    <img alt="Repository Issues" src="https://img.shields.io/github/issues/lpmatos/semana-simple-node-rest-10">
  </a>

  <a href="https://github.com/lpmatos/simple-node-rest/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/lpmatos/simple-node-rest">
  </a>
</p>

<p align="center">
  <a href="#built-with">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## ▶️ Getting Started

To use this repository you need to make a **git clone**:

```bash
git clone --depth 1 https://github.com/lpmatos/simple-node-rest.git -b master
```

Pull requests are welcome. If you'd like to support the work and buy me a ☕, I greatly appreciate it!

<a href="https://www.buymeacoffee.com/EatdMck" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 100px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

### Prerequisites

**Tools**
:---:
**NodeJS**
**NPM ou Yarn**
**VSCode**
**Docker**
**Docker-Compose**

### :rocket: Built with

Este maravilindo projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)

- Dev Tools
  - [Docker](https://docs.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)
  - [Nodemon](https://www.npmjs.com/package/nodemon)
  - [Sucrase](https://www.npmjs.com/package/sucrase)

- Main Libs
  - [Express](https://expressjs.com/pt-br/)
  - [Cors](https://www.npmjs.com/package/cors)
  - [Crypto](https://nodejs.org/api/crypto.html)

- Estilos
  - [Prettier](https://prettier.io/)
  - [Eslint](https://www.npmjs.com/package/eslint)

## :rocket: Description

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Routes

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemple

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## Environment variables

**Name**  |  **Description**
:---:  |  :---:
**NODE_PORT**  |  Node Port used by Express to listen all requests

## 🐋 Development with Docker

![Alt text](docs/images/DOCKER.png?raw=true "Docker")

Steps to build the Docker image.

### Build

```bash
docker image build -t <IMAGE_NAME> -f <PATH_DOCKERFILE> <PATH_CONTEXT_DOCKERFILE>
docker image build -t <IMAGE_NAME> . (This context)
```

### Run

Steps to run the container.

* **Linux** running:

```bash
docker container run -d -p <LOCAL_PORT:CONTAINER_PORT> <IMAGE_NAME> <COMMAND>
docker container run -it --rm --name <CONTAINER_NAME> -p <LOCAL_PORT:CONTAINER_PORT> <IMAGE_NAME> <COMMAND>
```

* **Windows** running:

```
winpty docker.exe container run -it --rm <IMAGE_NAME> <COMMAND>
```

### Exec

Steps to enter inside the container.

```bash
docker exec -it <CONTAINER_NAME> <COMMAND>
```

### Cleaning

Steps to clean your Docker environment.

```bash
docker system prune -af
```

*  Stop all containers.

```bash
docker stop $(docker ps -aq)
```

*  Remove all containers.

```bash
docker rm $(docker ps -aq)
```

*  Remove all images.

```bash
docker rmi $(docker images -a)
```

*  Remove all volumes.

```bash
docker volume prune -f
```

*  Remove all network.

```bash
docker network prune -f
```

For more information, access the [Docker](https://docs.docker.com/)

## 🐋 Development with Docker Compose

Steps to run this integration with docker-compose.

```bash
docker-compose up --build
```

Steps to down all services deployed by docker-compose.

```bash
docker-compose down
```

Down all services and delete all images.

```bash
docker-compose down --rmi all
```

## 🎒 How to contribute

1. Make a **Fork**.

2. Follow the project organization.

3. Add the file to the appropriate level folder - If the folder does not exist, create according to the standard.

4. Make the **Commit**.

5. Open a **Pull Request**.

6. Wait for your pull request to be accepted.. 🚀

Remember: There is no bad code, there are different views/versions of solving the same problem. 😊

## 🔔 Add to git and push

You must send the project to your GitHub after the modifications

```bash
git add -f .
git commit -m "Added - Fixing somethings"
git push origin master
```

## 📋 Versioning

- [CHANGELOG](CHANGELOG.md)

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## ☎️ Contacts

Hey!! If you like this project or if you find some bugs feel free to contact me in my channels:

* **Email**: luccapsm@gmail.com
* **Linkedin**: www.linkedin.com/in/lucca-pessoa-4abb71138/

[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/lucca.pessoa.9)
[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/lpmatos)

## ✨ Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/lpmatos"><img src="https://avatars2.githubusercontent.com/u/58797390?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Lucca Pessoa</b></sub></a><br /><a href="https://github.com/lpmatos/simple-node-rest/commits?author=lpmatos" title="Code">💻</a></a></td>
  <tr>
</table>

## 🐯 Autor

<table>
  <tr>
    <td align="center"><a href="https://github.com/lpmatos"><img src="https://avatars2.githubusercontent.com/u/58797390?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Lucca Pessoa</b></sub></a><br /><a href="https://github.com/lpmatos/simple-node-rest/commits?author=lpmatos" title="Code">💻</a> <a href="#lpmatos" title="Design">🎨</a></td>
  <tr>
</table>

## Project Status

* 🔛 In production

---

<p align="center">Feito com ❤️ by <strong>Lucca Pessoa :wave: </p>
