// Importando express
const express = require('express');

// Criando app
const app = express();

// Importando e configurando router
const router = require('./router');
app.use(router);

// Pondo app para ouvir em porta
app.listen(3000);
