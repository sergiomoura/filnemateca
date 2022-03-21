// Importar a biblioteca express
const express = require("express");

// Importar o middlewares
const middlewareGuardaBusca = require("../middlewares/middlewareGuardaBusca");

// Criar o roterador com express.Router
const router = express.Router();

// Importar o FilmesController
const FilmesController = require('../controllers/FilmesController');

// Criação das rotas...
router.get('/', FilmesController.index);
router.get('/filmes/:id', FilmesController.buscaPorId);
router.get('/busca', middlewareGuardaBusca, FilmesController.buscaPorTrecho);
router.get('/buscaporid/:id',FilmesController.buscaPorId);
router.get('/generos/:genero',FilmesController.buscaPorGenero);

// Exportar o roteador!
module.exports = router;