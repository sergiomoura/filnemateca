// Importar a conexao com o BD
const { sequelize } = require('../database/models');

const PaginasController = {
    index: async (req, res) => {

        // Construindo string de consulta
        let sql = `
            SELECT
                filmes.id,
                filmes.cartaz,
                filmes.titulo,
                JSON_ARRAYAGG(generos.nome) AS generos,
                filmes.censura,
                filmes.trailer,
                filmes.sinopse
            FROM
                filmes
                JOIN filmes_generos ON filmes.id = filmes_generos.filme_id
                JOIN generos ON filmes_generos.genero_id = generos.id
            GROUP BY
                filmes.id,
                filmes.cartaz,
                filmes.titulo,
                filmes.censura,
                filmes.trailer,
                filmes.sinopse;
        `;
        
        // Realizando a consulta
        const filmes = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});

        // Enviando view
        return res.render('index', {filmes});
    },
    showFilme: async (req, res) => {

        // Capturando o id do filme desejado
        const id = Number(req.params.id);

        // Construindo string de consulta
        let sql = `
            SELECT
                filmes.id,
                filmes.cartaz,
                filmes.titulo,
                JSON_ARRAYAGG(generos.nome) AS generos,
                filmes.censura,
                filmes.trailer,
                filmes.sinopse
            FROM
                filmes
                JOIN filmes_generos ON filmes.id = filmes_generos.filme_id
                JOIN generos ON filmes_generos.genero_id = generos.id
            WHERE filmes.id = ${id}
            GROUP BY
                filmes.id,
                filmes.cartaz,
                filmes.titulo,
                filmes.censura,
                filmes.trailer,
                filmes.sinopse;
        `;
        
        // Realizando a consulta
        const filmes = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});

        // Enviando view
        return res.render("filme.ejs", {filme: filmes[0]});
        
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