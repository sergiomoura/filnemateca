// Importando o multer
const multer = require('multer');

// Criando um Storage
const storage = multer.diskStorage(
    {
        destination: (req, file, cb)=>{
            cb(null, __dirname + "/../public/img");
        },
        filename: (req, file, cb)=>{
            console.log(file);
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    }
)

// Criando o middleware do multer
const middleware = multer({storage}).single("cartaz");

// Exportando o middleware;
module.exports = middleware;