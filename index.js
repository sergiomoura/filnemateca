// Importação da biblioteca Express
const express = require('express');
const path = require('path');

// Importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter');

// Criando um servidor
const servidor = express();

// Configuração do Template Engine
servidor.set('view engine','ejs');

// Configurando a pasta public como contenedora dos arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));

// Usando o FilmesRouter
servidor.use('/', FilmesRouter);

// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);