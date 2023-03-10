const admins = require('../database/administradores.json');

const AdmController = {
    showLogin:(req,res) => {
        const errorLogin = req.query.erro==1;

        res.render('login',{errorLogin})
    },
    login:(req,res) => {
        // res.send(req.body)
        /* res.redirect('/adm/filmes/create') */ 
        
        //Importar o json de adms 
        //Pegar infos do form com req.body
        const email = req.body.email;
        const senha = req.body.senha;
        //Filtrar o json de admns para comparar com o login
        //Verificar senha

        const adm = admins.find(p => p.email === email && p.senha === senha);

        if(adm === undefined){
            res.redirect('/adm/login?erro=1');
        }else{
            req.session.admLogado=true;
            req.session.adm=adm;

            res.redirect('/adm/filmes/create');
        }
        //Redirecionar para tela /adm/filmes/create
        
    }
}

module.exports = AdmController