// Importando express
const express = require('express');
const PaginasController = require('./controllers/PaginasController');
const FilmesController = require('./controllers/FilmesController');
// Criando router
const router = express.Router();

router.get('/', PaginasController.index);
router.get('/filmes/create', FilmesController.create);
router.get('/filmes/:id', PaginasController.showFilme);

// Exportando router
module.exports = router;