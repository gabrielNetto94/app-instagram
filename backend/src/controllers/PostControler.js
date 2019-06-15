const Post = require('../models/Post');
//biblioteca para redimensionar imagens
const sharp = require('sharp');
//biblioteca de caminhos nativa do node
const path = require('path');
const fs = require('fs');

module.exports = {
    //consulta no banco
    //req = requisição , res=response ou resposta
    async index(req, res){
        //funciona como um "select * " do SQL, para usar "WHERE", usa os parâmetros do método find(), e ordenedo por data de criação decrescente o sinal de "-" antes do createdAt
        const posts = await Post.find().sort('-createdAt');

        //retorna um json passando o posts que foi criado acima, tipo um resultSet do SQL
        return res.json(posts);
    },

    //insert no banco
    async store(req, res) {
        //recebe a requisição e printa o corpo da requisição, no caso os dados
        //pega as informações do req.bodey e atribui aos campos da tabela 
        const {author, place, description, hashtags } = req.body;
        //pega o req.file a atribui a imagem
        const {filename:image} = req.file;
        
        //splita a variável image por '.', 
        const [name] = image.split('.');
        //concatena nome original do arquivo + '.jpg'
        const fileName = name+'.jpg';

        //redimensiona a imagem antes de salvar no banco
        await sharp(req.file.path)//método assíncrono utiliza-se o "await"
            .resize(500)//redimensiona a imagem
            .jpeg({quality: 70})//seta uma quilidade 70% para não deixar muito pesada e formato de arquivo
            .toFile( //salva ela em outra pasta "resized"
                path.resolve(req.file.destination, 'resized',fileName) //aponta para o caminho
            )
    
        //deleta a imagem original, deixando a apenas ela redimensionada na pasta resized
        fs.unlinkSync(req.file.path);

        //cria um post de retorno, "await" serve para esperar esta execução finalizar
        const  post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,//quando salvar no banco, já salva com o nome 'fileName'
        });

        //toda vez que ocorrer uma nova postagem, o backEnd envia um post para o front, para atualizar as postagens
        req.io.emit('post',post);

        //retorna o post que foi criado com a requisição Post.create
        return res.json({post});
    }
};
