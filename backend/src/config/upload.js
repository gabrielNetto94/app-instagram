const multer = require('multer');
//formata os caminhos tanto para unix como para windows
const path =  require('path');


module.exports = {
    //método para salvar as imagens
    storage: new multer.diskStorage({
        //monta o caminho que será salvo o arquivo de fotos
        //parâmetro "__dirname" retorna o caminho onde o arquivo está, então volta 2 pastas a vai para a pasta uploads
        destination: path.resolve(__dirname, '..','..','uploads'),
        //parâmetros requisição, arquivo e callBack
        filename: function(req, file, cb){
            //1º param "null",
            //file.originalname deixa a imagem com o nome original dela
            cb(null,file.originalname)
        }
    })
};
