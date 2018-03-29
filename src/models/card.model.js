const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
    capitulo: {
        type: String,
        required: true, 
        minlength: 2,
        maxlength: 80,
    },
    categoria: {
        type: String,
        required: true, 
        minlength: 2,
        maxlength: 80,
    },
    assunto: {
        type: String,
        required: true, 
        minlength: 2,
        maxlength: 80,
    },
    descricao: {
        type: String,
        required: true, 
        minlength: 7,
        maxlength: 1500,
    },
    data_inclusao: {
        type: Date,
        required: true, 
        minlength: 2,
        maxlength: 80,
    },
});

module.exports = mongoose.model('Card', Card);