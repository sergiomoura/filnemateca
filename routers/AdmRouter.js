// Importar o express
const express = require('express');
const AdmController = require('../controllers/AdmController');

// Criando o roteador
const router = express.Router();

// Criando a rota
router.get('/login', AdmController.login);
router.post('/login', (req,res)=>{res.send('olá!')});

// Exportar o roteador
module.exports = router;