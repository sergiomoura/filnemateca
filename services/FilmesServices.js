const filmes = require('../database/filmes.json');

module.exports = {
    listartTodos:() =>  {
        return filmes;
    },
    carregarPeloId: (id) =>{
        let filme = filmes.find(f => f.id == id);
        if(filme === undefined){
            throw(`Filme inexistente`)
        }
        return filme;
    }
}