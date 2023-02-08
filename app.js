// Importando express
const express = require('express');

// Criando app
const app = express();

// Configurando pasta de arquivos estáticos acessíveis
app.use(express.static('public'));

// Configurando ejs como template engine
app.set('view engine', 'ejs')

// Importando e configurando router
const router = require('./router');
app.use(router);

// Pondo app para ouvir em porta
app.listen(3000);
