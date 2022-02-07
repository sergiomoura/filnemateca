// Importação da biblioteca Express
const express = require('express');

// Importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter');

// Criando um servidor
const servidor = express();

// Usando o FilmesRouter
servidor.use('/', FilmesRouter);

// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);