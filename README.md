# 🚀 API REST com Node.js e Express (CRUD de Clientes)

API REST desenvolvida com Node.js e Express, implementando operações CRUD completas e simulando um fluxo de backend para gerenciamento de dados de clientes.

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
  "id": 4,
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
    "nome": "Viny",
    "cidade": "Ribeirão Preto"
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

---

## 🚧 Melhorias futuras

* Integração com banco de dados (SQL Server / PostgreSQL)
* Implementação de autenticação (JWT)
* Validação de dados
* Deploy em ambiente cloud

---

👨‍💻 Projeto desenvolvido por **Vinícius**
