const mongoose = require('mongoose');
const funcionarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cargo: { type: String, required: true },
    funcional: { type: Number, required: true },
    admitidoEm: { type: Date, required: true }
})
const Funcionario = mongoose.model('Funcionario', funcionarioSchema)
module.exports = Funcionario