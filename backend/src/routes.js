const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

//instancia a classe LikeController para usar o PostController para usar o método PostController.store na tora de armazenar a requisição de dados e fotos
const PostController = require('./controllers/PostControler');
//instancia a classe LikeController para usar o LikeController.store na rota do Like
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

//ROTA PARA INSERIR IMAGEM E BUSCAR OS DADOS SALVOS
    //intercepta requisições na raiz  e chama o PostController.store para armazenar esta requisição
    routes.post('/posts',upload.single('image'),PostController.store); 
    //retorna os posts da aplicação
    routes.get('/posts',PostController.index); 

//ROTA PARA DAR LIKE NAS FOTOS
    //o ":" no id indica que ela recebe um  parâmetro, que é o id do post 
    routes.post('/posts/:id/like', LikeController.store);

//exporta as rotas para serem acessíveis
module.exports = routes;