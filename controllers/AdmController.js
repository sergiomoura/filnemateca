module.exports = {
    
    mostraLogin: (req,res)=>{
        res.render('login')
    },

    login: (req, res) => {

        // 1 - Carregar o array de usuários
        const usuarios = require("../database/usuarios.json");

        // 2 - Capturar o email e a senha digitadas pelo visitante!
        let dados = req.body;
        res.send(dados);


        // 3 - Verificar se usuário é cadastrado!
        //     Procuro no array de usuários se existe
        //     algum com login e senha digitados

        // 4 - Caso exista o usuário com email senha dados, retornar OK!
        //     Caso não exista, dar mensagem "Usuário inexistente!"

    }
    
}