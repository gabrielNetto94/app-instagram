const mongoose = require('mongoose');

// tabela do banco
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {//seta o objeto likes para Number e iniciar com 0
        type: Number,
        default: 0,
    }

},  {

    timestamps: true,
});

//exporta a tabela para ser usada
module.exports = mongoose.model('Post', PostSchema);