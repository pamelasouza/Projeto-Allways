const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Capitulo = new Schema({
    name: {
        type: String,
        required: true, 
        minlength: 2,
        maxlength: 80,
    }
});

module.exports = mongoose.model('Capitulo', Capitulo);