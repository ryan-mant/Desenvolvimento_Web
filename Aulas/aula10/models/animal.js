const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome: {type: String, required: true},
    raca: {type: String, required: true},
    peso: {type: Number, required: true}
})
const animal = mongoose.model('Animais', animalSchema)

module.exports = animal