const { test, expect } = require("@jest/globals");
const FilmesServices = require("./FilmesServices");

test(
    'Deve retornar todos os filmes do arquivo',
    () => {
        const filmes = FilmesServices.listartTodos();
        const filmesCarregados = require('../database/filmes.json');
        expect(filmes).toEqual(filmesCarregados);
    }
)

test(
    'Deve retornar o filme "Imperdoável"',
    () => {

        const filmeEsperado = {
            "id": "2f68f17f05742ada",
            "cartaz": "2f68f17f05742ada.jpg",
            "titulo": "Imperdoável",
            "generos": [
                "Drama",
                "Suspense"
            ],
            "censura": 14,
            "trailer": "https://youtu.be/ObM4FGVt-uY",
            "sinopse": "Após cumprir pena de prisão por um crime violento, Ruth Slater volta ao convívio na sociedade, que se recusa a perdoar seu passado. Discriminada no lugar que já chamou de lar, sua única esperança agora é encontrar a irmã, que ela havia sido forçada a deixar para trás."
        }

        const filme = FilmesServices.carregarPeloId("2f68f17f05742ada");
        expect(filme).toEqual(filmeEsperado);

    }
)

test(
    'Deve emitir um erro de "Filme inexistente"',
    () => {
        expect(()=>{FilmesServices.carregarPeloId(0)}).toThrow('Filme inexistente')
    }
)