const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controlers/PostControler');

const routes = new express.Router();
const upload = multer(uploadConfig);

//intercepta requisições na raiz  ex: http://localhost/"alguma coisa"
routes.post('/posts',upload.single('image'),PostController.store); 


//exporta as rotas para serem acessíveis
module.exports = routes;