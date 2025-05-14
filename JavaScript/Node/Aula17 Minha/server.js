require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING) //Feito assim para evitar upar a senha para o git
  .then(() => {
    app.emit('pronto')
    })
    .catch(e => console.log('Erro de conexão:', e));
 
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const csurf = require('csurf');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOption = session({
    secret: 'iweryhgb',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
      httpOnly: true
    }
  });
  

app.use(sessionOption);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
// app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(csurf());
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });    
});
