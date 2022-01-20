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

servidor.get('/filmes/:posicao', (req, res)=>{

    // Capturei a posição do filme desejado
    let posicao = req.params.posicao;

    // Carregar o array de filmes
    const filmes = require('./database/filmes.json');

    // Enviar para o cliente o filme da posicao desejada
    res.send(filmes[posicao])
})



// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);