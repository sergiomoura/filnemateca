// Importar o sequelize
const sequelize = require('sequelize');

// Importar as configurações da conexão
const config = require('../database/config.json').development;

// Criar uma conexão
const conexao = new sequelize(config);

// Realizar e imprimir uma consulta
async function teste(){

    // Definiu a string sql a ser executada
    let sql = 'SELECT * FROM generos';

    // Mandou o sequelize executar a consulta
    let resultado = await conexao.query(sql, {type: sequelize.QueryTypes.SELECT}); // RAW Query

    // Imprimir o resultado da consulta
    console.log(resultado);

}

teste();