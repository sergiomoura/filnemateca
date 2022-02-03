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

// Criar uma rota que responda à requisição 'http://localhost:3000/busca/????'
servidor.get('/busca/:trecho', (req, res)=>{
    
    // 1: Salvar o trecho buscado na variável 'trecho';
    let trecho = req.params.trecho;
    
    // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'
    const filmes = require("./database/filmes.json");

    // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo
    let filtradora = filme => {
        return filme.titulo.includes(trecho);
    }
    let resultadoDaBusca = filmes.filter(filtradora);

    // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
    res.send(resultadoDaBusca);
})

servidor.get('/buscaporid/:id',(req,res)=>{});

servidor.get('/generos/:genero',(req,res)=>{});




// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);