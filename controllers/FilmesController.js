const FilmesController = {
    index: (req,res)=>{
        
        // Carregar todos os filmes
        const filmes = require("../database/filmes.json");

        // Renderizar a view index.ejs (ainda não existe) passando os filmes para ela
        res.render('index.ejs', {filmes: filmes});
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
        let trecho = req.query.busca;
        
        // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'
        const filmes = require("../database/filmes.json");
    
        // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);
    
        // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
        res.render('index.ejs',{filmes: resultadoDaBusca});
    },
    buscaPorId: (req, res) => {

        // 1: Capturar o id do filme
        let id = req.params.id;

        // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'
        const filmes = require("../database/filmes.json");

        // 3: Definir a função filtradora 
        let filtradora = filme => {
            if(filme.id == id){
                return true;
            } else {
                return false;
            }
        }

        // 4: Encontrar o filme que tem o id desejado
        const filme = filmes.find(filtradora);

        // 5: Retornando a view de filme para o cliente
        res.render('filme.ejs',{filme})

    },
    buscaPorGenero: (req, res) => {}
}

module.exports = FilmesController;