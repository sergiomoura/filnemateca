const filmes = require('../database/filmes.json');

module.exports = {
    listarTodos:() =>  {
        return filmes;
    },
    carregarPeloId: (id) =>{
        let filme = filmes.find(f => f.id == id);
        if(filme === undefined){
            throw(`Filme inexistente`)
        }
        return filme;
    },
    buscar: (trecho) => {
        let encontrados = filmes.filter(
            f => f.titulo.toUpperCase().includes(trecho.toUpperCase())
        )
        return encontrados;
    }
}