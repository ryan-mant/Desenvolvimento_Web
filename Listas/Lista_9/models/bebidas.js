const mongoose = require('mongoose')
const bebidasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    fabricante: { type: String, required: true },
    emEstoque: { type: Boolean, required: true },
    publicadoEm: { type: Date, required: true }
})
const Bebidas = mongoose.model('Bebidas', bebidasSchema)
module.exports = Bebidas