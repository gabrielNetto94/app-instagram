const multer = require('multer');
const path =  require('path');

module.exports = {
    storage: new multer.diskStorage({
        //monta o caminho que será salvo o arquivo de fotos
        destination: path.resolve(__dirname, '..','..','uploads'),
    })
};
