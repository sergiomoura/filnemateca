# Filnemateca

✔ Configure uma rota get para '/'. Faça que essa rota encaminhe a requisição para o controller PaginasController.index @done(23-02-10 10:35)
✔ Faça que o controller PaginasController renderize a view index.ejs (atualmente nomeada de index.html) @done(23-02-10 10:35)
✔ Configure uma rota get para /filmes/create e encaminhe essa requisição para FilmesController.create @done(23-02-10 10:35)
✔ Crie o controller FilmesController.create e faça com que esse controller retorne a view filme-create.ejs @done(23-02-10 10:35)
✔ Crie a view filme-create.ejs e faça com que ela seja exibida na tela ao visitar /filmes/create @done(23-02-10 10:35)
✔ get '/filmes/:id --> PaginasController.showFilme --> filme.ejs @done(23-02-10 10:46)
✔ Altere o controller PaginasController.index para que ele carregue envie todas os filmes para a view index.ejs. @done(23-02-10 11:28)
✔ Altere a view index.ejs para que ela exiba todos os filmes, não só "Encanto". @done(23-02-10 11:28)
✔ Altere a view index.ejs para que cada cada link aponte corretamente para o endereço /filmes/X @done(23-02-10 11:28)
☐ Altere o controller PaginasController.showFilme para que ele possa carregar os dados do filme requerido e passar esses dados para a view filme.ejs
☐ Altere a view filme.ejs para que ela mostra informações do filme escolhido
☐ Externalize a head para um arquivo head.ejs e utilize-o em todas as páginas
