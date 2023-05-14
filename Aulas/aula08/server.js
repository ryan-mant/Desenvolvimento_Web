const express = require('express')
const app = express()
const port = 9000

app.use(express.json())

let dadosProdutos = []

app.get('/produtos', (req, res) => {
    return res.status(200).json(dadosProdutos)
})

app.post('/adicionar-produto', (req, res) => {
    let body = req.body
    console.log(body)

    dadosProdutos.push(body)

    return res.status(201).json('produto adicionado')
})

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`)
})