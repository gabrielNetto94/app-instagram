const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-8vdl1.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

//aponta para o arquivo de rotas
app.use(require('./routes'));

//escuta na posta 3333
app.listen(3333);