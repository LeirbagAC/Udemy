const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homerController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController');

function meuMiddleware(req, res, next) {
    console.log();
    console.log('Passei no meu middleware.');
    console.log();
    next(); 
}

//Rotas Home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas contato
route.get('/contato', contatoController.paginaInicial);

//Rota Sobre
route.get('/sobre', sobreController.paginaInicial);


module.exports = route;