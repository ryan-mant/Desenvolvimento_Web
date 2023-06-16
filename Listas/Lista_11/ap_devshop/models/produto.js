const mongoose = require('mongoose');
const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    emEstoque: { type: Boolean, required: true },
    publicadoEm: { type: Date, required: true }
})
const Produto = mongoose.model('Produto', produtoSchema)
module.exports = Produto