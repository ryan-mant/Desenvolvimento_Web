const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8060
const connectionString = 'mongodb+srv://admin:admin123@appdatabase.2k2xz62.mongodb.net/'
const Bebidas = require('./models/bebidas')
const Lanches = require('./models/lanches')
app.use(express.json())

app.get('/listar-bebidas', async (req, res) => {
    try {
        const bebidas = await Bebidas.find()
        return res.status(200).json(bebidas)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/cadastrar-bebida', async (req, res) => {
    let  { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body
    let bebida = {
        nome,
        descricao,
        fabricante,
        emEstoque,
        publicadoEm
    }
    try {
        await Bebidas.create(bebida)
        return res.status(201).json({ message: 'Bebida adicionada com sucesso' })
    }
    catch (error) {
        return res.status(500).json({message: error.message})
    }
})

app.get('/listar-lanches', async (req, res) => {
    try {
        const lanches = await Lanches.find()
        return res.status(200).json(lanches)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/cadastrar-lanche', async (req, res) => {
    let  { nome, descricao, vegano, emEstoque, publicadoEm } = req.body
    let lanche = {
        nome,
        descricao,
        vegano,
        emEstoque,
        publicadoEm
    }
    try {
        await Lanches.create(lanche)
        return res.status(201).json({ message: 'Lanche adicionado com sucesso' })
    }
    catch (error) {
        return res.status(500).json({message: error.message})
    }
})


mongoose.connect(connectionString, {
    dbName: "DevsBar"
}).then(() => {
    console.log("Conectado ao MongoDB")
    console.log(`Servidor rodando em http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})