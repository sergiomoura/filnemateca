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
    },
    editFilme: (req, res)=>{

        // 1 - Capturar o id do filme
        const id=req.params.id;

        // 2 - Carregar O filme (na variável filme)
        const filmes = require('../database/filmes.json');
        const filme = filmes.find(f => f.id == id);

        // 3 - Renderizar a view filme-edit.ejs
        //     passando o filme a ser editado
        res.render('filme-edit.ejs', {filme});
    },
    updateFilme: (req, res)=>{

        // 1 - Capturar o id do filme

        // 2 - Capturar o Filme

        // 3 - Capurar as informações digitadas nos campos (req.body)

        // 4 - Atualizar o filme
        //     filme.titulo = req.body.titulo

        // 5 - Salvar o array de filmes no filmes.json
        //      fs.writeFileSync
    },
    buscarFilmes: (req, res)=>{
        // 1 - Capturar o trecho que o usuário digitou
        // experimentem console.log(req.query)
        let trecho = req.query.busca;
        let censura = req.query.censura;

        // 2 - Importar o array de filmes
        const filmes = require('../database/filmes.json');

        // 3 - Filtrar os filmes que satisfaçam a busca
        let filtradora = filme => {
            let tituloOk = filme.titulo.toLowerCase().includes(trecho.toLowerCase());
            let censuraOk = filme.censura <= censura;
            return tituloOk && censuraOk;
        }

        let filmesFiltrados = filmes.filter(filtradora);

        // 4 - Mandar esse array de filmes selecionados para a view
        res.render("index.ejs", {filmes: filmesFiltrados});
    }
}

module.exports = PaginasController;