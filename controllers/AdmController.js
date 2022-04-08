module.exports = {
    
    mostraLogin: (req,res)=>{
        res.render('login.ejs',{erro:0})
    },

    login: (req, res) => {

        // 1 - Carregar o array de usuários
        const usuarios = require("../database/usuarios.json");

        // 2 - Capturar o email e a senha digitadas pelo visitante!
        // let dados = req.body;   // Veio por POST: pego dados em req.body
        // let dados = req.query;  // Veio por GET: pego dados em req.query
        // let dados = req.params; // Veio por Parâmetro de Rota: pego dados em req.query
        let emailDigitado = req.body.email;
        let senhaDigitada = req.body.senha;

        // 3 - Verificar se usuário é cadastrado!
        //     Procuro no array de usuários se existe
        //     algum com login e senha digitados
        let usuario = usuarios.find(
            u => {
                if(emailDigitado == u.email && senhaDigitada == u.senha){
                    return true;
                } else {
                    return false;
                }
            }
        );

        // 4 - Caso não exista, dar mensagem "Usuário inexistente!"
        // Caso exista o usuário com email senha dados, retornar OK!
        if(usuario == undefined) {
            // res.send("Usuário inexistente!");
            res.render('login.ejs', {erro:1});
        } else {

            // Escrevendo a session do usuário
            req.session.usuario = usuario;

            // Direcionar o usuário para a rota /admin
            res.redirect('/admin');
        }

    },

    mostraEsqueci: (req, res) => {
        res.render('esqueci.ejs');
    },

    lembrarSenha: (req,res) => {
        res.send(req.body);
    },

    mostraAdmin: (req, res) => {
        res.render('admin.ejs');
    }


    
}