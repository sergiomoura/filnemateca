// Importar biblioteca de mexer com arquivos.
const fs = require('fs');

module.exports = (req, res, next) => {

    // Capturar o trecho buscado...
    let trechoBuscado = req.query.busca + "\n";

    // Salvar o trecho buscado no final de um arquivo
    fs.writeFileSync("./trechosBuscados.txt", trechoBuscado,{flag:'a+'});

    // Passando a requisição à diante.
    next()
}