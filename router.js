// Importando express
const express = require('express');
const PaginasController = require('./controllers/PaginasController');
const FilmesController = require('./controllers/FilmesController');
// Criando router
const router = express.Router();

router.get('/', PaginasController.index);
router.get('/filmes/create', FilmesController.create);
router.get('/filmes/:id', PaginasController.showFilme);
router.get('/busca', PaginasController.buscarFilmes);

// Rota para exibir um formulário de edição de um filme
// get '/adm/filmes/:id/edit' -> PaginasController.editFilme
router.get('/adm/filmes/:id/edit' , PaginasController.editFilme);
router.post('/adm/filmes/:id/update' , PaginasController.updateFilme);

// Exportando router
module.exports = router;