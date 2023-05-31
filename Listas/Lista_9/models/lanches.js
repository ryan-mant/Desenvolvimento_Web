const mongoose = require('mongoose')
const lanchesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    vegano: { type: Boolean, required: true },
    emEstoque: { type: Boolean, required: true },
    publicadoEm: { type: Date, required: true }
})
const Lanches = mongoose.model('Lanches', lanchesSchema)
module.exports = Lanches