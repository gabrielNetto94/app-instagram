const Post = require('../models/Post');

module.exports = {
    //consulta no banco
    //req = requisição , res=response ou resposta
    async index(req, res){

    },

    //insert no banco
    async store(req, res) {
        //recebe a requisição e printa o corpo da requisição, no caso os dados
        console.log(req.body);

        //está retornando um ok 
        return res.json({ok:true});
    }
};
