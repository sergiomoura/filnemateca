const filmes = require('../database/filmes.json');

module.exports = {
    listartTodos:() =>  {
        return filmes;
    },

}