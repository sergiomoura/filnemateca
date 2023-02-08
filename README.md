# Filnemateca

☐ Configure uma rota get para '/'. Faça que essa rota encaminhe a requisição para o controller PaginasController.index
☐ Faça que o controller PaginasController renderize a view index.ejs (atualmente nomeada de index.html)
☐ Crie uma rota get para '/filmes/:id' que irá encaminhar a requisição para o controller PaginasController.showFilme
☐ Faça com que o controller retorne a view filme.ejs (atualmente nomeada filme.js)
☐ Altere o controller PaginasController.index para que ele carregue envie todas os filmes para a view index.ejs.
☐ Altere a view index.ejs para que ela exiba todos os filmes, não só "Encanto".
☐ Altere a view index.ejs para que cada cada link aponte corretamente para o endereço /filmes/X
☐ Altere o controller PaginasController.showFilme para que ele possa carregar os dados do filme requerido e passar esses dados para a view filme.ejs
☐ Altere a view filme.ejs para que ela mostra informações do filme escolhido
☐ Externalize a head para um arquivo head.ejs e utilize-o em todas as páginas
