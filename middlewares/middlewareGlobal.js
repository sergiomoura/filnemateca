module.exports = (req, res, next) => {
    let data = new Date();
    let hora = data.getHours();

    if(hora<8 || hora >= 20){
        res.send("Já tá tarde... vá pra casa");
    } else {

        console.log("A requisição está indo...");
        
        next();

        res.end();

    }
}