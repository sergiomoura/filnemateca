// Importando express
const express = require('express');

// Importar session
const session = require('express-session');

// Criando app
const app = express();

// Configurando pasta de arquivos estáticos acessíveis
app.use(express.static('public'));

// Processando informações do formulário e pondo no req.body
app.use(express.urlencoded({ extended: false }));

// Configurando ejs como template engine
app.set('view engine', 'ejs')

// Middleware
app.use(session({secret: 'SEGREDO',
resave: false,
saveUninitialized: false}))

// Importando e configurando router
const router = require('./router');
app.use(router);

// Pondo app para ouvir em porta
app.listen(3000);
