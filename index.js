// Importação da biblioteca Express
const express = require('express');
const path = require('path');
const middlewareGlobal = require('./middlewares/middlewareGlobal');

// Importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter');
const AdmRouter = require('./routers/AdmRouter');

// Criando um servidor
const servidor = express();

// Configuração do Template Engine
servidor.set('view engine','ejs');

// Configurando a pasta public como contenedora dos arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));

// Põe as informações do formulário no req.body
servidor.use(express.urlencoded({ extended: false }));

servidor.use(middlewareGlobal)

// Usando o FilmesRouter
servidor.use('/', FilmesRouter);
servidor.use('/', AdmRouter);


// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);