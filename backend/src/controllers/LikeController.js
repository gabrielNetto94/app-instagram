//lida com requisição do tipo Post
const Post = require('../models/Post');

module.exports = {

    //insert no banco
    async store(req, res) {

        //pesquisa por id no banco, e "req.params.id é o id que foi passado na url"
        const post = await Post.findById(req.params.id);

        //após retorna a consulta no banco, incremente +1 no like
        post.likes +=1;
        
        //toda vez que ocorrer um like, o backEnd envia um psot para o front para atualizar os likes 
        req.io.emit('like',post);

        // salva a alteração no banco
        await post.save();
        
        return res.json(post);
    }
};
