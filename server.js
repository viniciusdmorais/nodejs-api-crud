const express = require('express');
const app = express();
app.use(express.json());

// Rota simples (teste)
app.get('/', (req, res) => {
    res.send('🚀 Minha primeira API está rodando!');
});

// Porta do servidor
app.listen(3000, () => {
    console.log('🔥 Servidor rodando em http://localhost:3000');
});


// "Banco de dados" fake
const clientes = [
    { id: 1, nome: "Viny", cidade: "Ribeirão Preto" },
    { id: 2, nome: "João", cidade: "São Paulo" },
    { id: 3, nome: "Maria", cidade: "Franca" }
];

// Rota para listar clientes
app.get('/clientes', (req, res) => {
    res.json(clientes);
});

// Rota para buscar cliente por ID
app.get('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    res.json(cliente);
});

// Rota para criar cliente
app.post('/clientes', (req, res) => {
    const novoCliente = req.body;

    novoCliente.id = clientes.length + 1;

    clientes.push(novoCliente);

    res.status(201).json(novoCliente);
});

// Rota para deletar cliente
app.delete('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = clientes.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    clientes.splice(index, 1);

    res.json({ mensagem: "Cliente removido com sucesso" });
});

// Rota para atualizar cliente
app.put('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dadosAtualizados = req.body;

    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    // Atualiza os dados
    cliente.nome = dadosAtualizados.nome;
    cliente.cidade = dadosAtualizados.cidade;

    res.json(cliente);
});