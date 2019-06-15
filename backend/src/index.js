const express = require('express');
const mongoose = require('mongoose');
//path é importado para trabalhar com os caminhos no nodejs
const path = require('path');
//permite que o front acessa o backEnd
const cors = require('cors');

const app = express();

//tonna a aplicação acessível via http
const server = require('http').Server(app);
//torna a aplicação acessível via webScoket
const io =require('socket.io')(server);

//conecta com banco de dados 
mongoose.connect('mongodb+srv://admin:admin@cluster0-8vdl1.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

//torna o "io" variável global para o PostControler e o LikeController acessarem para atualizar simultaneamente quando houver like ou uma nova postagem
app.use((req,  res, next) => {
    req.io = io;

    next();
});

//permite que toda aplicação(front ou mobile) acesse o backend
app.use(cors());

//quanto a requisição for para files, ele acessa o caminho das fotos
app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));

//aponta para o arquivo de rotas
app.use(require('./routes'));

app.get('/',(req, res) =>{
    return res.send('Hello '+req.query.name);
});

//escuta na posta 3333
server.listen(3333);

