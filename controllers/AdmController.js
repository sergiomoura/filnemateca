const AdmController = {
    showLogin:(req,res) => {
        res.render('login')
    },
    login:(req,res) => {
        res.send(req.body)
        /* res.redirect('/adm/filmes/create') */
    }
}

module.exports = AdmController