//cSpell:ignore descricao, usuarios
const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nome: { type: String },
    idade: {type: Number}
    email: {type: String, required:false},        
},
{timestamps: true}
)

module.exports = mongoose.model('usuarios',UsuarioSchema)