const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homerController');
const contatoController = require('./controllers/contatoController');
const sobreController = require('./controllers/sobreController');

//Rotas Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas contato
route.get('/contato', contatoController.paginaInicial);

//Rota Sobre
route.get('/sobre', sobreController.paginaInicial);


module.exports = route;