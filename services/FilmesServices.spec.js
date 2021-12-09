const { test, expect } = require("@jest/globals");
const FilmesServices = require("./FilmesServices");
const fs = require('fs');
const path = require("path");
const PATH_FILMES = `${__dirname}/../database/filmes.json`;
const PATH_BACKUP = `${__dirname}/../database/filmes.bk.json`;

function backupFilmes(){
    // Fazendo backUp do arquivo de filmes
    fs.copyFileSync(
        path.resolve(PATH_FILMES),
        path.resolve(PATH_BACKUP)
    );
}

function restoreFilmes(){
    // restaurando e removendo o backup;
    fs.unlinkSync(path.resolve(`${__dirname}/../database/filmes.json`));
    fs.renameSync(
        path.resolve(PATH_BACKUP),
        path.resolve(PATH_FILMES)
    )
}

test('Iniciando Testes:', () => { });

if (FilmesServices.listarTodos) {
    test(
        'Deve retornar todos os filmes do arquivo',
        () => {
            const filmes = FilmesServices.listarTodos();
            const filmesCarregados = require('../database/filmes.json');
            expect(filmes).toEqual(filmesCarregados);
        }
    )
}

if (FilmesServices.carregarPeloId) {
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
            expect(() => { FilmesServices.carregarPeloId(0) }).toThrow('Filme inexistente')
        }
    )
}

if (FilmesServices.buscar) {
    test(
        'Deveria encontrar os filmes Eternos e Chernobyl',
        () => {
            const filmesEsperados = [
                {
                    id: 'dc5d2c07440cf374',
                    cartaz: 'dc5d2c07440cf374.jpg',
                    titulo: 'Eternos',
                    generos: ['Ação', 'Aventura', 'Ficção'],
                    censura: 12,
                    trailer: 'https://youtu.be/tjO-qmj_vs0',
                    sinopse: 'A história épica, que abrange milhares de anos, apresenta um grupo de heróis imortais forçados a sair das sombras para se reunir contra os inimigos mais antigos da humanidade, os Deviantes.'
                },
                {
                    id: 'e370c65bfc4c585c',
                    cartaz: 'e370c65bfc4c585c.jpg',
                    titulo: 'Chernobyl: O Filme - Os Segredos do Desastre',
                    generos: ['Drama'],
                    censura: 14,
                    trailer: 'https://youtu.be/o2YGWLQELhE',
                    sinopse: 'O filme conta sobre a história de três profissionais que lutaram para evitar um problema ainda maior do que o causado na explosão da usina nuclear de Chernobyl, na Ucrânia Soviética em 1986.'
                }
            ];
            const filmes = FilmesServices.buscar('ern');
            expect(filmes).toEqual(filmesEsperados);
        }
    )

    test(
        'Deveria retornar um array vazio, por que não encontrou nenhum filme.',
        () => {
            expect(FilmesServices.buscar("asiads")).toEqual([])
        }
    )
}

if(FilmesServices.salvar) {
    test(
        'Deve salvar o array filmes no arquivo database/filmes.json',
        () => {
            // Fazendo backup de arquivo de filmes
            backupFilmes();

            // Carregando o conteúdo  de antes
            let contaudoAntes = require('../database/filmes.json');

            // Carregando as estatísticas de antes
            let statsAntes = fs.statSync(path.resolve(PATH_FILMES));

            // Executando o salvamento
            FilmesServices.salvar();

            // Carregando o conteúdo depois
            let conteudoDepois = require('../database/filmes.json');

            // Carregando estatísticas depois
            let statsDepois = fs.statSync(path.resolve(PATH_FILMES));
            
            // Esperasse que o conteúdo do arquivo não tenha sido alterado.
            expect(contaudoAntes).toEqual(conteudoDepois)

            // Esperasse que a data de modificação do arquivo tenha mudado
            expect(statsAntes.mtime.getTime()).not.toEqual(statsDepois.mtime.getTime())
            
            // Restaurando backup
            restoreFilmes();           
        }
    );
}

if(FilmesServices.adicionar) {
    test(
        'Deve adicionar um filme ao final do array de filmes',
        () => {
            backupFilmes();
            FilmesServices.adicionar({});
            let filmes = require(PATH_FILMES);
            let filmeAdicionado = filmes.pop();
            delete filmeAdicionado.id;
            expect(filmeAdicionado).toEqual({});
            restoreFilmes();
        }
    )

    test(
        'O id do filme adicionado deve ter uma sequência aleatória de 18 caracteres',
        () => {
            backupFilmes();
            FilmesServices.adicionar({});
            let filmes = require(PATH_FILMES);
            let filmeAdicionado = filmes.pop();
            expect(filmeAdicionado.id).toMatch(/^.{18}$/);
            restoreFilmes();
        }
    )
}

if(FilmesServices.removerPeloId){
    test(
        'Deve remover o filme e04c5908fcdff44d da lista',
        () => {
            backupFilmes();
            const idParaRemover = "e04c5908fcdff44d";
            let temFilmeAntes = require(PATH_FILMES).find(f=>f.id == idParaRemover) != undefined;
            FilmesServices.removerPeloId(idParaRemover);
            let temFilmeDepois = require(PATH_FILMES).find(f=>f.id == idParaRemover) != undefined;

            expect(temFilmeAntes).toEqual(true);
            expect(temFilmeDepois).toEqual(false);

            restoreFilmes();
        }
    );

    test(
        'Deve emitir o erro "Filme inexistente"',
        () => {
            expect(
                () => {FilmesServices.removerPeloId(0)}
            ).toThrow('Filme inexistente')
        }
    )

}