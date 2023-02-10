const PaginasController = {
    index: (req, res) => {
        // 1 - carregar os filmes de filmes.json
        const filmes = require('../database/filmes.json');
        
        // 2 - passar os filmes para view
        res.render("index.ejs", {filmes});
    },
    showFilme: (req, res) => {
        res.render("filme.ejs");
    }
}

module.exports = PaginasController;