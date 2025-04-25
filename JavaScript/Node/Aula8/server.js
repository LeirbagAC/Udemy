const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você enviou foi: <strong>${req.body.nome}<stron/>`);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
