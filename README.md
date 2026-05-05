# 🚀 API REST com Node.js, Express e SQLite (CRUD de Clientes)

API REST desenvolvida com Node.js e Express, implementando operações CRUD completas com persistência de dados utilizando SQLite.
O projeto simula um fluxo real de backend para gerenciamento de clientes.

---

## 📌 Funcionalidades

* ✔ Listar clientes
* ✔ Buscar cliente por ID
* ✔ Criar cliente
* ✔ Atualizar cliente
* ✔ Deletar cliente

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* SQLite (banco de dados local)
* Postman (para testes)

---

## ▶️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/viniciusdmorais/nodejs-api-crud.git
```

2. Acesse a pasta:

```bash
cd nodejs-api-crud
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o servidor:

```bash
node server.js
```

⚠️ Certifique-se de que a porta 3000 esteja disponível.

---

## 🗄️ Banco de dados

O projeto utiliza SQLite, criando automaticamente um arquivo local:

```bash
database.db
```

A tabela `clientes` é criada automaticamente na primeira execução com a seguinte estrutura:

* id (INTEGER, PK, AUTOINCREMENT)
* nome (TEXT)
* cidade (TEXT)

---

## 🌐 Endpoints disponíveis

| Método | Rota          | Descrição               |
| ------ | ------------- | ----------------------- |
| GET    | /clientes     | Lista todos os clientes |
| GET    | /clientes/:id | Busca cliente por ID    |
| POST   | /clientes     | Cria um novo cliente    |
| PUT    | /clientes/:id | Atualiza um cliente     |
| DELETE | /clientes/:id | Remove um cliente       |

---

## 📬 Exemplo de requisição (POST)

```http
POST http://localhost:3000/clientes
Content-Type: application/json

{
  "nome": "Carlos",
  "cidade": "Campinas"
}
```

## 📥 Exemplo de resposta

```json
{
  "id": 1,
  "nome": "Carlos",
  "cidade": "Campinas"
}
```

---

## 📬 Exemplo de requisição (GET)

```http
GET http://localhost:3000/clientes
```

## 📥 Exemplo de resposta

```json
[
  {
    "id": 1,
    "nome": "Carlos",
    "cidade": "Campinas"
  }
]
```

---

## 📚 Aprendizados

* Criação de APIs REST
* Manipulação de requisições HTTP
* Uso de JSON
* Estruturação de rotas
* Testes com Postman
* Persistência de dados com SQLite
* Operações CRUD com banco de dados

---

## 🚧 Melhorias futuras

* Integração com SQL Server / PostgreSQL
* Implementação de autenticação (JWT)
* Validação de dados
* Organização em camadas (routes, controllers, services)
* Deploy em ambiente cloud

---

👨‍💻 Projeto desenvolvido por **Vinícius**
