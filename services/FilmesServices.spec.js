const { test, expect } = require("@jest/globals");
const FilmesServices = require("./FilmesServices");

test(
    'Deve retornar todos os filmes do arquivo',
    () => {
        const filmes = FilmesServices.load();
        const filmesCarregados = require('../database/filmes.json');
        expect(filmes).toEqual(filmesCarregados);
    }
)