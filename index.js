// Importação da biblioteca Express
const express = require('express');

// Criando um servidor
const servidor = express();

// Criando as rotas do servidor
servidor.get('/', (req,res)=>{
    console.log("Alguém fez uma requisição....");
    res.send("Toma aí o que você me pediu...");
})

servidor.get('/filme', (req, res)=>{
    console.log("Rota /filme foi acessada");
    res.send("Filme: Miranha. Sinopse: Os cara piraram o cabeção...");
})



// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);