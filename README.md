<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<br />

<div align="center">

  <img src="https://img.shields.io/github/languages/top/imayagmb/games_loja?style=for-the-badge&label=typescript" />
  <img src="https://img.shields.io/github/repo-size/imayagmb/games_loja?style=for-the-badge&label=repo%20size" />
  <img src="https://img.shields.io/github/languages/count/imayagmb/games_loja?style=for-the-badge&label=languages" />

  <br/>

  <img src="https://img.shields.io/github/issues/imayagmb/games_loja?style=for-the-badge&label=issues" />
  <img src="https://img.shields.io/github/issues-pr/imayagmb/games_loja?style=for-the-badge&label=pull%20requests" />
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-green?style=for-the-badge" />
</div>

---

# 🎮 Games Loja API

API REST desenvolvida com **NestJS, TypeORM e MySQL** para gerenciamento de **produtos e categorias de jogos**.

O projeto permite realizar operações de **CRUD completo** para produtos e categorias, além de consultas específicas por **nome e preço**.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- TypeORM
- MySQL
- Class Validator
- Class Transformer

---

# ⚙️ Banco de Dados

Banco utilizado:

MySQL

Criação do banco:

```sql
CREATE DATABASE db_games_loja;
```

## ▶️ Executando o Projeto

### Instalar dependências

```bash
npm install
```
```bash
npm install @nestjs/typeorm typeorm mysql2
```

### Rodar o projeto
```bash
npm run start:dev
```

### Servidor disponível em:
```bash
http://localhost:3000/produtos
```

## 🔗 Principais Endpoints
### Categorias
```brash
GET /categorias
GET /categorias/:id
GET /categorias/nome/:nome
POST /categorias
PUT /categorias
DELETE /categorias/:id
```

### Pordutos
```brash
GET /produtos
GET /produtos/:id
GET /produtos/nome/:nome
GET /produtos/preco/maior/:valor
GET /produtos/preco/menor/:valor
POST /produtos
PUT /produtos
DELETE /produtos/:id
```

## Testes
### A API pode ser testada utilizando:
- Insomnia
- Postman
- Thunder Client
