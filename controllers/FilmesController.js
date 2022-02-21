const FilmesController = {
    index: (req,res)=>{
        
        // Carregar todos os filmes
        const filmes = require("../database/filmes.json");

        // Renderizar a view index.ejs (ainda não existe) passando os filmes para ela
        res.render('index.ejs', {filmes});
    },
    listarFilmes: (req,res) => {
        // Importando os filmes
        const filmes = require('../database/filmes.json');

        // Enviar os filmes para o cliente
        res.send(filmes);

    },
    buscaPorPosicao: (req, res) => {
        // Capturei a posição do filme desejado
        let posicao = req.params.posicao;

        // Carregar o array de filmes
        const filmes = require('../database/filmes.json');

        // Enviar para o cliente a view com o filme
        // da posicao desejada
        let filme = filmes[posicao];
        res.render('filme.ejs',{filme})

        // Enviando filme para o cliente
        // res.send(filmes[posicao]);
    },
    buscaPorTrecho: (req, res) => {
    
        // 1: Salvar o trecho buscado na variável 'trecho';
        let trecho = req.params.trecho;
        
        // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'
        const filmes = require("../database/filmes.json");
    
        // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);
    
        // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
        res.send(resultadoDaBusca);
    },
    buscaPorId: (req, res) => {},
    buscaPorGenero: (req, res) => {}
}

module.exports = FilmesController;