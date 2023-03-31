const setandoVariaveisGlobais = (req, res, next) => {
    res.locals.userAdmin = req.session.adm.name;
    next();
}

module.exports = setandoVariaveisGlobais;