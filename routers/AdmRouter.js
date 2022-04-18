// Importar o express
const express = require('express');
const AdmController = require('../controllers/AdmController');
const FilmesController = require('../controllers/FilmesController');
const verificaSeEstaLogado = require('../middlewares/verificaSeEstaLogado');
const uploadDeCartaz = require('../middlewares/uploadDeCartaz');

// Criando o roteador
const router = express.Router();

// Criando a rota
router.get('/login', AdmController.mostraLogin);
router.post('/login', AdmController.login);

router.get('/esqueci', AdmController.mostraEsqueci);
router.post('/esqueci', AdmController.lembrarSenha);

router.get('/admin', verificaSeEstaLogado, AdmController.mostraAdmin);
router.post('/addFilme', uploadDeCartaz, FilmesController.addFilme);

// Exportar o roteador
module.exports = router;