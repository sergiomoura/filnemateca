const filmes = require('../database/filmes.json');
const fs = require('fs');
const uniqid = require('uniqid')

const services = {
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
    },
    salvar: () => {
        fs.writeFileSync(`${__dirname}/../database/filmes.json`, JSON.stringify(filmes,null,4))
    },
    adicionar: filme => {
        filme.id = uniqid();
        filmes.push(filme);
        services.salvar();
    },
    removerPeloId: (id) =>{
        const pos = filmes.findIndex(f=>f.id == id);
        if(pos == -1){
            throw("Filme inexistente")
        }
        filmes.splice(pos,1);
        services.salvar();
    }
}

module.exports = services;