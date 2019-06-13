const Post = require('../models/Post');

module.exports = {
    async index(req, res){

    },

    //cadastrar manualmente no banco
    async store(req, res) {
        console.log(req.body);
        return res.json({ok:true});
    }
};