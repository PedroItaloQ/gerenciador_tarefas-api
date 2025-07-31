# Gerenciador de Tarefas – Backend

Este é o backend de um sistema de gerenciamento de projetos e tarefas desenvolvido com **NestJS**, **TypeORM** e **MySQL**. Ele permite autenticação de usuários com JWT, criação de projetos e o gerenciamento de tarefas vinculadas a cada projeto.

---

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** – Framework backend com TypeScript
- **[TypeORM](https://typeorm.io/)** – ORM para interação com banco de dados
- **[MySQL](https://www.mysql.com/)** – Banco de dados relacional
- **[JWT](https://jwt.io/)** – Autenticação com JSON Web Token
- **[Passport.js](http://www.passportjs.org/)** – Middleware de autenticação
- **[Class Validator](https://github.com/typestack/class-validator)** – Validação de dados DTO

---

## Estrutura de Diretórios

src/
├── auth/ # Módulo de autenticação
├── user/ # Módulo de usuários
├── project/ # Módulo de projetos
├── task/ # Módulo de tarefas
├── main.ts # Ponto de entrada da aplicação
└── app.module.ts # Módulo principal

## Como Rodar o Projeto

  ##Para instalar dependencias:
    **npm i**

  ##Para rodar o projeto
    **npm run start:dev**

## É importante configurar uma .env, irei a seguir enviar um exemplo de env: 

  DB_HOST=
  DB_PORT=
  DB_USERNAME=
  DB_PASSWORD=
  DB_NAME=task_manager
  JWT_SECRET=eMZ8qN5!s@FvP9x$Lp3rT2qCv7wBkA0

  **Utilizei mysql no desenvolvimento**

## Coleção do postman para teste: 

   https://pedroitalo-7996130.postman.co/workspace/Pedro-Italo's-Workspace~fb2561a5-d528-4474-84c9-3c7a250d62ef/collection/44412092-c25f7b30-52d0-4400-ade2-ac63efbfb587?action=share&source=copy-link&creator=44412092
