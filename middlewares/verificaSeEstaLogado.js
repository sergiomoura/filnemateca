module.exports = (req, res, next) => {

    // Verificar se o usuário está logado
    if(req.session.usuario == undefined){
        
        // Se não estiver, direcionar para endereço /login
        res.redirect('/login');
    
    } else {

        // Se estiver, IR ADIANTE!
        next();
        
    }


}