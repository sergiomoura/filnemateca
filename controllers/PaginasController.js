const PaginasController = {
    index: (req, res) => {
        // 1 - carregar os filmes de filmes.json
        const filmes = require('../database/filmes.json');
        
        // 2 - passar os filmes para view
        res.render("index.ejs", {filmes});
    },
    showFilme: (req, res) => {
        // 1 - Capturar o id do filme desejado
        const id = req.params.id;

        // 2 - Capturar O filme desejado
        const filmes = require('../database/filmes.json');
        const filme = filmes.find(f => f.id == id);

        // 3 - Renderizar a view filme.ejs, passando para ela o filme encontrado
        res.render("filme.ejs", {filme});
    }
}

module.exports = PaginasController;