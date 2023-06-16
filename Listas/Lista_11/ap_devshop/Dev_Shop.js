const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 9000;
const connectionString = 'mongodb+srv://admin:admin123@appdatabase.2k2xz62.mongodb.net/';
const Funcionario = require('./models/funcionario');
const Produto = require('./models/produto');
app.use(express.json());


app.post('/cadastrar-funcionario', async (req, res) => {
    let { nome, cargo, funcional, admitidoEm} = req.body
    let funcionario = {
        nome,
        cargo,
        funcional,
        admitidoEm
    }
    try{
        await Funcionario.create(funcionario)
        return res.status(201).json({message: `Funcionario ${nome} adicionado com sucesso`})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})
app.get('/listar-produtos', async (req, res) => {
    try {
        const produtos = await Produto.find()
        return res.status(200).json(produtos)
    }catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/cadastrar-produto', async (req, res)=> {
    let { nome, descricao, valor, emEstoque, publicadoEm } = req.body
    let produto = {
        nome,
        descricao,
        valor,
        emEstoque,
        publicadoEm
    }
    try{
        await Produto.create(produto)
        return res.status(201).json({message: `Produto ${nome} adicionado com sucesso`})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

mongoose.connect(connectionString, {
    dbName: "DevShop"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error)=>{
    console.log(error)
})